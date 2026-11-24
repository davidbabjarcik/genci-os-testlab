// =======================
// STORAGE (Electron → JSON súbory, inak localStorage)
// =======================
const store = window.api || {
  loadJSON: async (file) => {
    try { return JSON.parse(localStorage.getItem('genci:' + file)); } catch { return null; }
  },
  saveJSON: async (file, data) => {
    try { localStorage.setItem('genci:' + file, JSON.stringify(data)); return true; } catch { return false; }
  }
};

// =======================
// STATE
// =======================
const allQuestions = [...(window.QUESTIONS || []), ...(window.COPYMASTER || []), ...(window.UNIX1 || []), ...(window.IPCPRAX || [])];
const byId = new Map(allQuestions.map(q => [q.id, q]));

let history = [];
let wrongIds = [];
let favoriteIds = [];
let settings = { theme: 'dark', ignoreDiacritics: true };

let testQuestions = [];
let current = 0;
let score = 0;
let answered = false;
let remainingTime = 0;
let timerInterval;
let currentTest = null;
let lastTest = null;

const LONG_ANSWER = 40;          // dlhšie odpovede sa nepíšu, ale odkrývajú
const SECONDS_PER_QUESTION = 45;

// =======================
// HELPERS
// =======================
const $ = (id) => document.getElementById(id);

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Vlastné okná namiesto alert()/confirm(): systémové okná v Electrone na Windows
// po zatvorení „zamknú“ písanie do textových polí.
function toast(msg) {
  const el = $('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toast.t);
  toast.t = setTimeout(() => el.classList.remove('show'), 2500);
}

function askConfirm(msg) {
  return new Promise(resolve => {
    const modal = $('modal');
    $('modalText').textContent = msg;
    modal.classList.add('show');
    const done = (val) => {
      modal.classList.remove('show');
      $('modalYes').onclick = $('modalNo').onclick = null;
      document.removeEventListener('keydown', onKey);
      resolve(val);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') done(false);
      if (e.key === 'Enter') { e.preventDefault(); done(true); }
    };
    $('modalYes').onclick = () => done(true);
    $('modalNo').onclick = () => done(false);
    document.addEventListener('keydown', onKey);
    $('modalYes').focus();
  });
}

function focusAnswer() {
  const input = $('answerInput');
  if (input && !input.disabled && $('typeBox').style.display !== 'none') input.focus();
}

function stripDiacritics(s) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '');
}

function isLong(q) {
  return q.answer.length > LONG_ANSWER;
}

function acceptedAnswers(q) {
  return [q.answer, ...(q.alt || [])];
}

// =======================
// KONTROLA ODPOVEDE
// =======================
function normalize(s, keepCase = false) {
  let t = String(s).trim();
  if (!keepCase) t = t.toLowerCase();
  if (settings.ignoreDiacritics) t = stripDiacritics(t);
  t = t.replace(/[„“"']/g, '')         // úvodzovky
       .replace(/\s*\(\s*\)/g, '')      // open() / open ( ) → open
       .replace(/\s*([|,;=<>!])\s*/g, '$1') // medzery okolo operátorov
       .replace(/[.]+$/, '')            // bodka na konci
       .replace(/\s+/g, ' ')
       .trim();
  return t;
}

function tokensKey(s, keepCase) {
  return normalize(s, keepCase).split(' ').sort().join(' ');
}

function isCorrect(q, input) {
  const cs = !!q.caseSensitive; // copymaster: -d ≠ -D, -s ≠ -S
  const given = normalize(input, cs);
  if (!given) return false;
  return acceptedAnswers(q).some(a =>
    normalize(a, cs) === given || tokensKey(a, cs) === tokensKey(input, cs) // poradie slov nevadí
  );
}

// =======================
// PRETESTY / VÝBER OTÁZOK
// =======================
function allPretests() {
  const set = new Set();
  allQuestions.forEach(q => (q.pretests || []).forEach(p => set.add(p)));
  return [...set].sort((a, b) => a.localeCompare(b, 'sk', { numeric: true }));
}

// Praktické úlohy: výpočty a ukážky kódu (lseek, read/write fragmenty, chmod, umask, výpis ls…)
function isPractical(q) {
  if (isAI(q)) return false;
  const t = q.q;
  return /Znaky:|\$ls|fragment|umask\(\d|chmod\(["“”']|'(read|write|lseek)\(|súboru je \d+ bajtov|práva na hodnotu [-d][-rwx]{9}|Potrebujete zrealizovať program/.test(t);
}

const inPretest = (q) => (q.pretests || []).length > 0;
// 1. zápočet (6. týždeň) pokrýva len pretesty T1–T4
const ZAPOCET_PRETESTS = ['T1', 'T2', 'T3', 'T4'];
const inZapocet = (q) => (q.pretests || []).some(p => ZAPOCET_PRETESTS.includes(p.split(' ')[0]));
// 2. zápočet: IPC – pretesty T5–T8 (rúry a signály, zdieľaná pamäť, semafory, sokety) + zadanie Unix1
const ZAPOCET2_PRETESTS = ['T5', 'T6', 'T7', 'T8'];
const inZapocet2 = (q) => (q.pretests || []).some(p => ZAPOCET2_PRETESTS.includes(p.split(' ')[0]));
const isCopymaster = (q) => q.topic === 'copymaster';
const isUnix1 = (q) => q.topic === 'unix1';
const isIpcPrax = (q) => q.topic === 'ipc-prax';
// 🤖 AI generované (Claude) – nie sú z pretestov ani z gencisearch
function isAI(q) { return isCopymaster(q) || isUnix1(q) || isIpcPrax(q); }

// =======================
// VÝBER OTÁZOK – filtre Rozsah / Typ / Zdroj
// =======================
// kategórie otázky: pretesty, v ktorých bola; inak téma, ku ktorej ju zaradila AI (aiCat)
function catsOf(q) {
  const c = (q.pretests || []).map(p => p.split(' ')[0]);
  return c.length ? c : (q.aiCat ? [q.aiCat] : []);
}

// zdroj: pre = z pretestu, out = gencisearch mimo pretestov (🤖 zaradené), ai = 🤖 vytvorené AI
const sourceOf = (q) => inPretest(q) ? 'pre' : (isAI(q) ? 'ai' : 'out');
const isPrax = (q) => isPractical(q) || q.kind === 'code' || q.kind === 'prax';

const SCOPES = [
  { id: 'all', label: 'Všetko', test: () => true },
  { id: 'z1', label: '🎓 Zápočet 1 · T1–T4', hint: 'pretesty 2.–5. týždeň, zápočet bol v 6. týždni; + 🤖 copymaster', test: q => catsOf(q).some(c => ZAPOCET_PRETESTS.includes(c)) || isCopymaster(q) },
  { id: 'z2', label: '🎓 Zápočet 2 · T5–T8', hint: 'IPC: rúry a signály, zdieľaná pamäť, semafory, sokety; + 🤖 zadanie Unix1', test: q => catsOf(q).some(c => ZAPOCET2_PRETESTS.includes(c)) || isUnix1(q) },
];
const AI_SCOPES = [
  { id: 'cm', label: '🤖 Copymaster', hint: 'AI otázky k zadaniu copymaster (zápočet 1)', test: isCopymaster, ai: true },
  { id: 'u1', label: '🤖 Unix1', hint: 'AI otázky k zadaniu Unix1 (zápočet 2)', test: isUnix1, ai: true },
];
const TYPES = [
  { id: 'all', label: 'Všetky', test: () => true },
  { id: 'prax', label: '🧮 Len praktické', test: isPrax },
  { id: 'teo', label: '📖 Len teória', test: q => !isPrax(q) },
];
const SOURCES = [
  { id: 'pre', label: '📝 Z pretestov' },
  { id: 'out', label: '📚 Mimo pretestov', hint: 'z gencisearch, neboli v žiadnom preteste – k téme ich zaradila 🤖 AI' },
  { id: 'ai', label: '🤖 Vytvorené AI', hint: 'copymaster, Unix1 a praktické IPC úlohy – neoficiálne' },
];

function pretestScopes() {
  return allPretests().map(p => {
    const code = p.split(' ')[0];
    const week = (p.match(/v (\d+)\. týždni/) || [])[1];
    return { id: code, label: code, hint: p + (week ? '' : ''), test: q => catsOf(q).includes(code) };
  });
}

function allScopes() { return [...SCOPES, ...pretestScopes(), ...AI_SCOPES]; }

function poolFilter() {
  const f = settings.filter || {};
  const scopes = allScopes();
  return {
    scope: scopes.find(s => s.id === f.scope) || SCOPES[1],
    type: TYPES.find(t => t.id === f.type) || TYPES[0],
    src: Array.isArray(f.src) && f.src.length ? f.src : ['pre', 'out', 'ai'],
  };
}

function filterPool(scope, type, src) {
  return allQuestions.filter(q => scope.test(q) && type.test(q) && (scope.ai || src.includes(sourceOf(q))));
}

function currentPool() {
  const f = poolFilter();
  return filterPool(f.scope, f.type, f.src);
}

function describePool() {
  const f = poolFilter();
  const parts = [f.scope.label];
  if (f.type.id !== 'all') parts.push(f.type.id === 'prax' ? 'praktické' : 'teória');
  if (!f.scope.ai && f.src.length < 3) parts.push(f.src.map(s => ({ pre: 'z pretestov', out: 'mimo pretestov', ai: 'AI' })[s]).join(' + '));
  return parts.join(' · ');
}

function chip(group, item, active, count, onclick) {
  return `<button type="button" class="chip${active ? ' active' : ''}${item.ai ? ' chip-ai' : ''}" title="${esc(item.hint || '')}" onclick="${onclick}">${esc(item.label)}${count != null ? ` <span class="chip-n">${count}</span>` : ''}</button>`;
}

function buildPoolSelect() {
  const f = poolFilter();
  const cnt = (scope) => filterPool(scope, f.type, f.src).length;
  $('scopeChips').innerHTML =
    `<div class="chips">${SCOPES.map(s => chip('scope', s, s.id === f.scope.id, cnt(s), `setFilter('scope','${s.id}')`)).join('')}</div>` +
    `<div class="chips chips-small">${pretestScopes().map(s => chip('scope', s, s.id === f.scope.id, cnt(s), `setFilter('scope','${s.id}')`)).join('')}` +
    `${AI_SCOPES.map(s => chip('scope', s, s.id === f.scope.id, cnt(s), `setFilter('scope','${s.id}')`)).join('')}</div>`;
  $('typeChips').innerHTML = TYPES.map(t => chip('type', t, t.id === f.type.id, filterPool(f.scope, t, f.src).length, `setFilter('type','${t.id}')`)).join('');
  $('srcChips').innerHTML = SOURCES.map(s => {
    const n = filterPool(f.scope, f.type, [s.id]).length;
    return chip('src', s, f.src.includes(s.id), n, `toggleSource('${s.id}')`);
  }).join('');
  $('srcRow').classList.toggle('disabled', !!f.scope.ai);
  if (settings.count) $('countSelect').value = settings.count;
}

function setFilter(key, value) {
  const f = poolFilter();
  settings.filter = { scope: f.scope.id, type: f.type.id, src: f.src, [key]: value };
  onPoolChange();
}

function toggleSource(id) {
  const src = poolFilter().src;
  const next = src.includes(id) ? src.filter(s => s !== id) : [...src, id];
  if (!next.length) return toast('Aspoň jeden zdroj musí ostať zapnutý');
  settings.filter = { scope: poolFilter().scope.id, type: poolFilter().type.id, src: next };
  onPoolChange();
}

function onPoolChange() {
  settings.count = $('countSelect').value;
  store.saveJSON('settings.json', settings);
  buildPoolSelect();
  const pool = currentPool();
  const f = poolFilter();
  const ai = pool.filter(isAI).length;
  const out = pool.filter(q => sourceOf(q) === 'out').length;
  const notes = [];
  if (ai) notes.push(`🤖 ${ai === pool.length ? 'všetky sú' : ai} vytvorené AI (neoficiálne)`);
  if (out) notes.push(`📚 ${out} mimo pretestov – k téme ich zaradila AI`);
  $('poolInfo').innerText = `V tomto výbere je ${pool.length} otázok${notes.length ? ' · ' + notes.join(' · ') : ''}.` +
    (f.scope.hint ? ` · ${f.scope.hint}` : '');
}

function tagsHtml(q) {
  const tags = (q.pretests || []).map(p => `<span class="tag">${esc(p)}</span>`);
  if (isCopymaster(q)) tags.push('<span class="tag tag-ai" title="Otázku vytvorila AI (Claude) podľa textu zadania copymaster – nie je z pretestu ani z gencisearch">🤖 AI generovaná · Copymaster – neoficiálna</span>');
  if (isUnix1(q)) tags.push('<span class="tag tag-ai" title="Otázku vytvorila AI (Claude) podľa textu zadania Unix1 – nie je z pretestu ani z gencisearch">🤖 AI generovaná · Zadanie Unix1 (IPC) – neoficiálna</span>');
  if (isIpcPrax(q)) tags.push(`<span class="tag tag-ai" title="Praktickú úlohu vytvorila AI (Claude) – nebola v preteste ani v gencisearch">🤖 AI generovaná · praktická úloha k ${esc(q.aiCat)} – neoficiálna</span>`);
  if (sourceOf(q) === 'out') tags.push(q.aiCat
    ? `<span class="tag tag-out" title="Otázka je z gencisearch, ale nebola v žiadnom preteste. K téme ju zaradila AI podľa najpodobnejšej otázky z pretestov.">📚 nebola v preteste · 🤖 podľa AI patrí k ${esc(q.aiCat)}</span>`
    : '<span class="tag tag-out">📚 nebola v preteste</span>');
  return tags.join('');
}

// =======================
// SCREEN
// =======================
function showScreen(name) {
  document.querySelectorAll('[data-screen]').forEach(s => s.style.display = 'none');
  const screen = document.querySelector(`[data-screen="${name}"]`);
  if (screen) screen.style.display = 'block';
  window.scrollTo(0, 0);
}

function goHome() {
  updateCounts();
  renderHistory();
  showScreen('home');
}

function updateCounts() {
  $('qCount').innerText = allQuestions.length;
  $('wrongCount').innerText = wrongIds.length;
  $('favCount').innerText = favoriteIds.length;
}

// =======================
// LOAD
// =======================
async function init() {
  const [h, w, f, s] = await Promise.all([
    store.loadJSON('history.json'),
    store.loadJSON('wrong.json'),
    store.loadJSON('favorites.json'),
    store.loadJSON('settings.json')
  ]);
  history = h || [];
  wrongIds = (w || []).filter(id => byId.has(id));
  favoriteIds = (f || []).filter(id => byId.has(id));
  settings = Object.assign(settings, s || {});

  document.body.classList.toggle('dark', settings.theme === 'dark');
  $('ignoreDiacritics').checked = settings.ignoreDiacritics;

  buildPoolSelect();
  onPoolChange();
  goHome();
  showVersion();
}

async function showVersion() {
  let v = 'web verzia';
  try {
    if (window.api && window.api.getVersion) v = 'v' + (await window.api.getVersion());
  } catch { /* staršia verzia bez getVersion */ }
  document.querySelectorAll('.app-version').forEach(el => el.textContent = v);
}

// =======================
// THEME & SETTINGS
// =======================
function toggleTheme() {
  document.body.classList.toggle('dark');
  settings.theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  store.saveJSON('settings.json', settings);
}

function saveCheckSettings() {
  settings.ignoreDiacritics = $('ignoreDiacritics').checked;
  store.saveJSON('settings.json', settings);
}

// =======================
// WRONG / FAVORITES
// =======================
function addWrong(id) {
  if (!wrongIds.includes(id)) wrongIds.push(id);
  store.saveJSON('wrong.json', wrongIds);
}

function removeWrongId(id) {
  wrongIds = wrongIds.filter(x => x !== id);
  store.saveJSON('wrong.json', wrongIds);
}

function toggleFavorite(id) {
  favoriteIds = favoriteIds.includes(id) ? favoriteIds.filter(x => x !== id) : [...favoriteIds, id];
  store.saveJSON('favorites.json', favoriteIds);
}

function toggleFavoriteCurrent() {
  const q = testQuestions[current];
  toggleFavorite(q.id);
  $('favBtn').innerText = favoriteIds.includes(q.id) ? '⭐' : '☆';
}

// =======================
// START TEST
// =======================
function startTest() {
  const pool = currentPool();
  if (!pool.length) return toast('V tomto výbere nie sú žiadne otázky');
  const count = $('countSelect').value;
  const n = count === 'all' ? pool.length : Math.min(Number(count), pool.length);
  testQuestions = shuffle(pool).slice(0, n);
  const label = describePool();
  initTest(label);
}

function startWrongTest() {
  if (!wrongIds.length) return toast('Žiadne zlé otázky 👍');
  testQuestions = shuffle(wrongIds.map(id => byId.get(id)));
  initTest('Zlé otázky');
}

function startFavoritesTest() {
  if (!favoriteIds.length) return toast('Nemáš žiadne obľúbené otázky ⭐');
  testQuestions = shuffle(favoriteIds.map(id => byId.get(id)));
  initTest('Obľúbené');
}

function initTest(type) {
  current = 0;
  score = 0;
  remainingTime = testQuestions.length * SECONDS_PER_QUESTION;

  currentTest = {
    id: Date.now(),
    type,
    start: new Date().toLocaleString('sk-SK'),
    answers: [],
    score: 0,
    total: testQuestions.length,
    percent: 0
  };

  showScreen('test');
  startTimer();
  showQuestion();
}

// =======================
// TIMER
// =======================
function renderTimer() {
  const m = Math.floor(remainingTime / 60);
  const s = String(remainingTime % 60).padStart(2, '0');
  $('timer').innerText = `Čas: ${m}:${s}`;
  $('timer').classList.toggle('low', remainingTime <= 60);
}

function startTimer() {
  clearInterval(timerInterval);
  renderTimer();
  timerInterval = setInterval(() => {
    remainingTime--;
    renderTimer();
    if (remainingTime <= 0) endTest();
  }, 1000);
}

// =======================
// QUESTION FLOW
// =======================
function showQuestion() {
  answered = false;
  const q = testQuestions[current];

  $('question').innerHTML = `${current + 1}. ${esc(q.q)}`;
  $('question').classList.toggle('mono', /\n[ \t]/.test(q.q)); // ukážka kódu/súboru → pevná šírka písma
  $('questionTags').innerHTML = tagsHtml(q);
  $('favBtn').innerText = favoriteIds.includes(q.id) ? '⭐' : '☆';
  $('progress').innerText = `Otázka ${current + 1}/${testQuestions.length}`;
  $('liveScore').innerText = `Správne: ${score}`;
  $('feedback').innerHTML = '';
  $('feedback').className = 'feedback';

  const long = isLong(q);
  $('typeBox').style.display = long ? 'none' : 'flex';
  $('flashBox').style.display = long ? 'block' : 'none';

  const input = $('answerInput');
  input.value = '';
  input.disabled = false;
  if (!long) input.focus();
}

function record(q, given, ok, mode) {
  currentTest.answers.push({ id: q.id, question: q.q, correct: q.answer, given, ok, mode });
  if (ok) {
    score++;
    removeWrongId(q.id);
  } else {
    addWrong(q.id);
  }
  $('liveScore').innerText = `Správne: ${score}`;
}

function submitTyped(e) {
  e.preventDefault();
  if (answered) return nextQuestion(); // druhý Enter = ďalšia otázka

  const q = testQuestions[current];
  const given = $('answerInput').value;
  if (!given.trim()) return;

  answered = true;
  $('answerInput').disabled = true;
  const ok = isCorrect(q, given);
  record(q, given, ok, 'typed');

  if (ok) {
    showFeedback('correct', `✔ Správne! <span class="muted">Odpoveď: <code>${esc(q.answer)}</code></span>`);
  } else {
    showFeedback('wrong', `✘ Nesprávne. Správna odpoveď: <code>${esc(q.answer)}</code>
      ${q.alt && q.alt.length ? `<span class="muted"> (alebo ${q.alt.map(a => `<code>${esc(a)}</code>`).join(', ')})</span>` : ''}
      <br><button class="small-btn" onclick="overrideCorrect()">Mal som pravdu ✔</button>`);
  }
  $('nextBtn').focus();
}

// Pri preklepe / inej formulácii si odpoveď môžeš uznať
function overrideCorrect() {
  const last = currentTest.answers[currentTest.answers.length - 1];
  if (!last || last.ok) return;
  last.ok = true;
  last.overridden = true;
  score++;
  removeWrongId(last.id);
  $('liveScore').innerText = `Správne: ${score}`;
  showFeedback('correct', `✔ Uznané ako správne. <span class="muted">Odpoveď: <code>${esc(last.correct)}</code></span>`);
}

function revealFlash() {
  const q = testQuestions[current];
  $('flashBox').style.display = 'none';
  showFeedback('neutral', `<div class="flash-answer">${esc(q.answer)}</div>
    <div class="action-row">
      <button class="btn-secondary" onclick="gradeFlash(true)">Vedel som ✔</button>
      <button class="btn-danger" onclick="gradeFlash(false)">Nevedel som ✘</button>
    </div>`);
}

function gradeFlash(ok) {
  if (answered) return;
  answered = true;
  const q = testQuestions[current];
  record(q, ok ? '(vedel som)' : '(nevedel som)', ok, 'flash');
  nextQuestion();
}

function showFeedback(kind, html) {
  const fb = $('feedback');
  fb.className = `feedback ${kind}`;
  fb.innerHTML = html;
}

function nextQuestion() {
  if (!answered) {
    toast('Najprv odpovedz alebo preskoč');
    return focusAnswer();
  }
  current++;
  current < testQuestions.length ? showQuestion() : endTest();
}

function skipQuestion() {
  if (!answered) {
    const q = testQuestions[current];
    currentTest.answers.push({ id: q.id, question: q.q, correct: q.answer, given: '', ok: false, mode: 'skipped' });
  }
  answered = true;
  nextQuestion();
}

// =======================
// END TEST
// =======================
function endTest() {
  clearInterval(timerInterval);

  currentTest.score = score;
  currentTest.percent = currentTest.total ? Math.round((score / currentTest.total) * 100) : 0;

  history.push(currentTest);
  store.saveJSON('history.json', history);
  lastTest = currentTest;

  const pct = currentTest.percent;
  $('resultScore').innerHTML = `<span class="${pct >= 50 ? 'ok' : 'bad'}">${score}/${currentTest.total} (${pct} %)</span>`;
  showScreen('result');
}

function confirmEndTest() {
  askConfirm('Naozaj chceš ukončiť test?').then(ok => ok ? endTest() : focusAnswer());
}

// =======================
// HISTORY
// =======================
function renderHistory() {
  const ul = $('historyList');
  ul.innerHTML = history.length ? '' : '<li class="muted">Zatiaľ žiadne testy</li>';

  history.slice().reverse().forEach(test => {
    const li = document.createElement('li');
    li.className = 'history-item';

    const info = document.createElement('span');
    info.className = 'history-info ' + (test.percent >= 50 ? 'ok' : 'bad');
    info.innerText = `${test.start} – ${test.score}/${test.total} (${test.percent} %) [${test.type}]`;

    const viewBtn = document.createElement('button');
    viewBtn.className = 'btn-secondary small-btn';
    viewBtn.innerText = 'Pozrieť';
    viewBtn.onclick = () => openReview(test);

    const delBtn = document.createElement('button');
    delBtn.className = 'btn-danger small-btn';
    delBtn.innerText = 'Zmazať';
    delBtn.onclick = () => deleteTest(test.id);

    li.append(info, viewBtn, delBtn);
    ul.appendChild(li);
  });
}

async function deleteTest(id) {
  if (!(await askConfirm('Naozaj chceš zmazať tento test?'))) return;
  history = history.filter(t => t.id !== id);
  store.saveJSON('history.json', history);
  renderHistory();
}

async function clearHistory() {
  if (!(await askConfirm('Naozaj chceš zmazať CELÚ históriu?'))) return;
  history = [];
  store.saveJSON('history.json', []);
  renderHistory();
}

// =======================
// REVIEW
// =======================
function openReview(test) {
  const box = $('reviewContent');
  box.innerHTML = `<p class="muted">${esc(test.start)} · ${esc(test.type)} · ${test.score}/${test.total} (${test.percent} %)</p>`;

  test.answers.forEach((a, i) => {
    const div = document.createElement('div');
    div.className = `card review-card ${a.ok ? 'review-correct' : 'review-wrong'}`;
    const given = a.mode === 'skipped' ? '<em>preskočené</em>' : esc(a.given);
    div.innerHTML = `
      <strong>${i + 1}. ${esc(a.question)}</strong>
      <div class="review-answer ${a.ok ? 'correct' : 'wrong'}">Tvoja odpoveď: ${given}${a.overridden ? ' <span class="muted">(uznané)</span>' : ''}</div>
      ${a.ok && a.mode !== 'flash' && !a.overridden ? '' : `<div class="review-answer correct">Správne: ${esc(a.correct)}</div>`}
    `;
    box.appendChild(div);
  });

  showScreen('review');
}

// =======================
// LISTS (search / wrong / favorites)
// =======================
function questionCard(q, extraClass, buttons) {
  return `
    <div class="card review-card ${extraClass}">
      <div class="question-row">
        <strong>${esc(q.q)}</strong>
        <button class="fav-btn" onclick="toggleFavorite(${q.id}); this.innerText = favoriteIds.includes(${q.id}) ? '⭐' : '☆'">${favoriteIds.includes(q.id) ? '⭐' : '☆'}</button>
      </div>
      <div class="tags">${tagsHtml(q)}</div>
      <div class="review-answer correct">${esc(q.answer)}${q.alt && q.alt.length ? ` <span class="muted">/ ${q.alt.map(esc).join(' / ')}</span>` : ''}</div>
      ${buttons || ''}
    </div>`;
}

function showSearch() {
  showScreen('search');
  renderSearch();
  $('searchInput').focus();
}

function renderSearch() {
  const raw = $('searchInput').value.trim();
  const needle = stripDiacritics(raw.toLowerCase());
  const pool = currentPool();
  const hits = needle
    ? pool.filter(q => stripDiacritics((q.q + ' ' + q.answer + ' ' + (q.alt || []).join(' ')).toLowerCase()).includes(needle))
    : pool;
  const shown = hits.slice(0, 100);
  $('searchInfo').innerText = `${hits.length} výsledkov${hits.length > shown.length ? ' (zobrazených prvých 100)' : ''} · výber: ${describePool()}`;
  $('searchResults').innerHTML = shown.map(q => questionCard(q, '')).join('');
}

function showWrong() {
  $('wrongList').innerHTML = wrongIds.length
    ? wrongIds.map(id => questionCard(byId.get(id), 'review-wrong',
        `<button class="btn-danger small-btn" onclick="removeWrong(${id})">Odstrániť zo zlých</button>`)).join('')
    : '<p class="muted">Nemáš žiadne zlé otázky 👍</p>';
  showScreen('wrong');
}

function showFavorites() {
  $('favoritesList').innerHTML = favoriteIds.length
    ? favoriteIds.map(id => questionCard(byId.get(id), 'review-correct',
        `<button class="btn-danger small-btn" onclick="removeFavorite(${id})">Odstrániť z obľúbených</button>`)).join('')
    : '<p class="muted">Nemáš žiadne obľúbené otázky ⭐</p>';
  showScreen('favorites');
}

function removeWrong(id) {
  removeWrongId(id);
  showWrong();
}

function removeFavorite(id) {
  favoriteIds = favoriteIds.filter(x => x !== id);
  store.saveJSON('favorites.json', favoriteIds);
  showFavorites();
}

init();
