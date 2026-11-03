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
const allQuestions = [...(window.QUESTIONS || []), ...(window.COPYMASTER || [])];
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
  if (q.topic === 'copymaster') return false;
  const t = q.q;
  return /Znaky:|\$ls|fragment|umask\(\d|chmod\(["“”']|'(read|write|lseek)\(|súboru je \d+ bajtov|práva na hodnotu [-d][-rwx]{9}|Potrebujete zrealizovať program/.test(t);
}

const inPretest = (q) => (q.pretests || []).length > 0;
// 1. zápočet (6. týždeň) pokrýva len pretesty T1–T4
const ZAPOCET_PRETESTS = ['T1', 'T2', 'T3', 'T4'];
const inZapocet = (q) => (q.pretests || []).some(p => ZAPOCET_PRETESTS.includes(p.split(' ')[0]));
const isCopymaster = (q) => q.topic === 'copymaster';

function buildPoolSelect() {
  const sel = $('poolSelect');
  const pretests = allPretests();
  let html = `<option value="all">Všetky otázky (${allQuestions.length})</option>`;
  if (pretests.length) {
    const n = allQuestions.filter(inPretest).length;
    const nz = allQuestions.filter(inZapocet).length;
    const np = allQuestions.filter(q => inZapocet(q) && isPractical(q)).length;
    const ncm = allQuestions.filter(isCopymaster).length;
    const ncmCode = allQuestions.filter(q => isCopymaster(q) && q.kind === 'code').length;
    html += `<optgroup label="🎓 Zápočet (bol v 6. týždni) – pretesty T1–T4">`;
    html += `<option value="any">Zápočet – všetko z pretestov T1–T4 (${nz})</option>`;
    html += `<option value="practical">Zápočet – praktické úlohy T1–T4 + copymaster (${np + ncm})</option>`;
    html += `<option value="practical-only">Zápočet – len praktické úlohy T1–T4 (${np})</option>`;
    html += `</optgroup><optgroup label="📄 Copymaster (zadanie 1)">`;
    html += `<option value="cm">Copymaster – všetko (${ncm})</option>`;
    html += `<option value="cm-code">Copymaster – fragment kódu → prepínač (${ncmCode})</option>`;
    html += `</optgroup><optgroup label="Pretesty">`;
    html += `<option value="all-pretests">Všetky pretesty ${pretests.length > 1 ? pretests[0].split(' ')[0] + '–' + pretests[pretests.length - 1].split(' ')[0] : ''} (${n})</option>`;
    pretests.forEach(p => {
      const c = allQuestions.filter(q => (q.pretests || []).includes(p)).length;
      html += `<option value="p:${esc(p)}">${esc(p)} (${c})</option>`;
    });
    html += `</optgroup>`;
    const allPrac = allQuestions.filter(isPractical).length;
    html += `<option value="practical-all">Tréning – všetky praktické varianty, aj mimo pretestov (${allPrac})</option>`;
    const none = allQuestions.filter(q => !inPretest(q) && !isCopymaster(q)).length;
    html += `<option value="none">Neboli v žiadnom preteste (${none})</option>`;
  }
  sel.innerHTML = html;
  if (settings.pool && [...sel.options].some(o => o.value === settings.pool)) sel.value = settings.pool;
  if (settings.count) $('countSelect').value = settings.count;
}

function currentPool() {
  const v = $('poolSelect').value;
  if (v === 'any') return allQuestions.filter(inZapocet);
  if (v === 'all-pretests') return allQuestions.filter(inPretest);
  if (v === 'practical') return allQuestions.filter(q => (inZapocet(q) && isPractical(q)) || isCopymaster(q));
  if (v === 'practical-all') return allQuestions.filter(isPractical);
  if (v === 'none') return allQuestions.filter(q => !inPretest(q) && !isCopymaster(q));
  if (v === 'cm') return allQuestions.filter(isCopymaster);
  if (v === 'cm-code') return allQuestions.filter(q => isCopymaster(q) && q.kind === 'code');
  if (v === 'practical-only') return allQuestions.filter(q => inZapocet(q) && isPractical(q));
  if (v.startsWith('p:')) {
    const p = v.slice(2);
    return allQuestions.filter(q => (q.pretests || []).includes(p));
  }
  return allQuestions;
}

function onPoolChange() {
  settings.pool = $('poolSelect').value;
  settings.count = $('countSelect').value;
  store.saveJSON('settings.json', settings);
  const pool = currentPool();
  const pretests = allPretests();
  $('poolInfo').innerText = pretests.length
    ? `V tomto výbere je ${pool.length} otázok. · T1–T4 = pretesty pred cvičením v 2.–5. týždni · zápočet bol v 6. týždni (z T1–T4) · T5 = zdieľaná pamäť (7. týždeň)`
    : 'Zatiaľ nie sú označené žiadne pretesty – test ide zo všetkých otázok.';
}

function tagsHtml(q) {
  const tags = (q.pretests || []).map(p => `<span class="tag">${esc(p)}</span>`);
  if (isCopymaster(q)) tags.push('<span class="tag tag-cm">Copymaster · vlastná otázka podľa zadania</span>');
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
  const label = $('poolSelect').selectedOptions[0].text.replace(/\s*\(\d+\)$/, '');
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
  $('searchInfo').innerText = `${hits.length} výsledkov${hits.length > shown.length ? ' (zobrazených prvých 100)' : ''} · výber: ${$('poolSelect').selectedOptions[0].text}`;
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
