// =======================
// BLESKOVKY – učenie na týždenné testy: kartičky, rýchla bleskovka, ťahák k týždňu
// 🤖 Ťaháky vytvorila AI (Claude) podľa odpovedí z pretestov.
// =======================

// Ťaháky k týždňom T5–T8 (T1–T4 sú v LEARN_TOPICS v learn.js)
const WEEK_TOPICS = [
  {
    id: 'rury', title: '🚰 Rúry a signály', pretest: 'T5',
    intro: 'Rúry aj signály patria do kategórie <code>ipc</code>. Rúra používa prístupovú disciplínu <code>FIFO</code> a dáta dočasne uchováva v <b>pamäti</b>.',
    items: [
      {
        name: 'pipe()', sig: 'int pipe(int filedes[2]);',
        about: 'vytvorí <b>nepomenovanú</b> rúru',
        params: [['filedes[0]', 'koniec na čítanie – ako <code>O_RDONLY</code>'], ['filedes[1]', 'koniec na zápis – ako <code>O_WRONLY</code>']],
        ret: ['<code>=0</code> – úspech', '<code>-1</code> – chyba'],
        notes: ['Typ návratovej hodnoty <code>int</code>; každá vrátená položka (deskriptor) je tiež <code>int</code>.', 'Pomenovanú rúru vytvoríme cez <code>mkfifo</code> (prípadne <code>mknod</code>).'],
      },
      {
        name: 'signal()', sig: 'sighandler_t signal(int signum, sighandler_t handler);',
        about: 'zaregistruje <b>obslužný program</b> prerušenia (signálu)',
        params: [['signum', 'číslo signálu'], ['handler', 'funkcia, alebo <code>SIG_IGN</code> (ignorovať) / <code>SIG_DFL</code> (predvolené)']],
        ret: ['predchádzajúci obslužný program – <b>funkcia</b>', '<code>SIG_ERR</code> – chyba'],
        notes: ['Počet parametrov <b>2</b>. Typ návratovej hodnoty <code>sighandler_t</code>.'],
      },
      {
        name: 'kill()', sig: 'int kill(pid_t pid, int sig);',
        about: 'pošle signál procesu',
        params: [['pid', 'komu'], ['sig', 'aký signál']],
        ret: ['<code>=0</code> – úspech', '<code>-1</code> – chyba'],
        notes: ['Počet parametrov <b>2</b>.'],
      },
      {
        name: 'man 7 signal', sig: 'Term  ukončiť proces      Ign   ignorovať\nCore  ukončiť + core dump  Stop  zastaviť   Cont  pokračovať',
        about: 'kategórie predvoleného správania (píšu sa presne takto)',
        params: [], ret: [],
        notes: ['<code>SIGKILL</code> = <b>9</b> · <code>SIGSTOP</code> zastavenie procesu · <code>SIGFPE</code> chyba výpočtu v pohyblivej rádovej čiarke', 'Signály pre používateľa: <code>SIGUSR1</code>, <code>SIGUSR2</code> – predvolene <b>ukončenie</b> procesu.'],
      },
    ],
  },
  {
    id: 'shm', title: '🧠 Zdieľaná pamäť', pretest: 'T6',
    intro: 'Kategória <code>ipc</code>. Postup: <code>shmget</code> (vytvoriť) → <code>shmat</code> (pripojiť) → práca s pamäťou → <code>shmdt</code> (odpojiť) → <code>shmctl</code> (zrušiť).',
    items: [
      {
        name: 'shmget()', sig: 'int shmget(key_t key, size_t size, int shmflg);',
        about: 'vytvorí segment zdieľanej pamäte (alebo nájde existujúci)',
        params: [['key', 'identifikácia segmentu (jednoznačnosť: funkcia <code>ftok</code>)'], ['size', 'veľkosť'], ['shmflg', '<code>IPC_CREAT</code> vytvoriť · <code>IPC_EXCL</code> zabrániť konfliktu · najnižších <b>9</b> bitov = práva']],
        ret: ['<b>identifikátor</b> zdieľanej pamäte', '<code>-1</code> – chyba'],
        notes: ['Právo <code>x</code> nie je pre zdieľanú pamäť podporované.', 'Hlavičky: <code>sys/ipc.h</code>, <code>sys/shm.h</code>.'],
      },
      {
        name: 'shmat()', sig: 'void *shmat(int shmid, const void *shmaddr, int shmflg);',
        about: 'pripojí segment do logického adresného priestoru',
        params: [['shmid', 'z <code>shmget()</code>'], ['shmaddr', '<code>NULL</code> = adresu vyberie systém']],
        ret: ['<b>adresu</b> pripojenej pamäte', '<code>(void *) -1</code> – chyba'],
        notes: ['Po <code>fork()</code> potomok segmenty <b>zdedí</b>; po <code>execve()</code> budú <b>odpojené</b>.'],
      },
      {
        name: 'shmdt()', sig: 'int shmdt(const void *shmaddr);',
        about: 'odpojí segment – identifikujeme ho pomocou jeho <b>adresy</b> (z <code>shmat()</code>)',
        params: [], ret: ['<code>0</code> – úspech', '<code>-1</code> – chyba'], notes: [],
      },
      {
        name: 'shmctl()', sig: 'int shmctl(int shmid, int cmd, struct shmid_ds *buf);',
        about: 'zrušenie segmentu, zistenie a nastavenie jeho parametrov',
        params: [['cmd', '<code>IPC_STAT</code> zistiť · <code>IPC_SET</code> nastaviť · <code>IPC_RMID</code> zrušiť']],
        ret: ['<code>0</code> – úspech', '<code>-1</code> – chyba'],
        notes: ['Počet pripojení: <code>shmid_ds.shm_nattch</code> · prístupové práva: <code>ipc_perm.mode</code>'],
      },
    ],
  },
  {
    id: 'sem', title: '🚦 Semafory', pretest: 'T7',
    intro: 'Koncept zaviedol <b>Dijkstra</b>. Semafór je celé číslo, ktoré nesmie <b>klesnúť</b> pod nulu. Operácie: <b>inkrement</b> / <b>dekrement</b>, teoreticky <b>V</b> / <b>P</b>. Kategória <code>ipc</code>.',
    items: [
      {
        name: 'semget()', sig: 'int semget(key_t key, int nsems, int semflg);',
        about: 'vytvorí sadu semafórov (pool)',
        params: [['key', 'identifikácia sady; <code>IPC_PRIVATE</code> = nová neverejná sada (len pre rodiča/potomka)'], ['nsems', '<b>počet</b> semafórov v sade'], ['semflg', 'nová sada: <code>IPC_CREAT|IPC_EXCL</code>; <b>najnižších 9</b> bitov = práva']],
        ret: ['<b>identifikátor</b> sady semafórov', '<code>-1</code> – chyba'],
        notes: ['Meniť hodnoty semafórov oprávňuje právo <code>w</code>.', 'Pre procesy, ktoré nie sú rodič/potomok, key <b>nesmie</b> byť <code>IPC_PRIVATE</code>; jednoznačnosť zabezpečí <code>ftok</code>.'],
      },
      {
        name: 'semctl()', sig: 'int semctl(int semid, int semnum, int cmd, ...);',
        about: 'riadiace operácie nad sadou – aj <b>inicializácia</b> semafórov pred <code>semop()</code>',
        params: [['semid', 'sada (z <code>semget()</code>)'], ['semnum', 'konkrétny semafór'], ['cmd', '<code>IPC_RMID</code> zmazať sadu · <code>SETVAL</code> inicializovať · <code>GETVAL</code> zistiť hodnotu']],
        ret: ['pri <code>GETVAL</code> vráti <b>hodnotu</b> semafóra', '<code>-1</code> – chyba'],
        notes: [],
      },
      {
        name: 'semop()', sig: 'int semop(int semid, struct sembuf *sops, size_t nsops);',
        about: 'vykoná semafórové operácie – celá množina sa vykoná <b>atomicky</b>',
        params: [['semid', 'z <code>semget()</code>'], ['sops', '<b>pole</b> prvkov <code>struct sembuf</code> – každý špecifikuje semafórovú <b>operáciu</b>'], ['nsops', 'počet operácií']],
        ret: ['<code>0</code> – úspech', '<code>-1</code> – chyba'],
        notes: ['Operácia je v zložke <code>sem_op</code>: <b>V</b> = <code>&gt;0</code>, <b>P</b> = <code>&lt;0</code>.'],
      },
    ],
  },
  {
    id: 'sock', title: '🌐 Sokety', pretest: 'T8',
    intro: 'Koncový komunikačný bod = soket. <b>TCP</b> = s potvrdzovaním (<code>SOCK_STREAM</code>), <b>UDP</b> = bez potvrdzovania (<code>SOCK_DGRAM</code>).',
    items: [
      {
        name: 'Poradie volaní', sig: 'server (TCP): socket → bind → listen → accept   = 5241\nklient (TCP): socket → connect                  = 53\n(1 accept, 2 bind, 3 connect, 4 listen, 5 socket)',
        about: 'prvý parameter <code>bind</code>, <code>listen</code> aj <code>accept</code> získame službou <code>socket()</code>',
        params: [], ret: [], notes: [],
      },
      {
        name: 'socket()', sig: 'int socket(int domain, int type, int protocol);',
        about: 'vytvorí koncový komunikačný bod',
        params: [['domain', '<code>PF_INET</code> – IPv4'], ['type', '<code>SOCK_STREAM</code> s potvrdzovaním · <code>SOCK_DGRAM</code> bez potvrdzovania · <code>SOCK_RAW</code> priamy prístup k sieťovému protokolu']],
        ret: ['deskriptor soketu', '<code>-1</code> – chyba'], notes: [],
      },
      {
        name: 'bind()', sig: 'int bind(int sockfd, const struct sockaddr *addr, socklen_t addrlen);',
        about: 'priradí soketu <b>adresu</b> – argument <code>addr</code>',
        params: [['sin_addr', 'IP adresa (man 7 ip)'], ['sin_port', 'port']],
        ret: ['<code>0</code> – úspech', '<code>-1</code> – chyba'], notes: [],
      },
      {
        name: 'listen(), accept(), connect()', sig: 'int listen(int sockfd, int backlog);\nint accept(int sockfd, struct sockaddr *addr, socklen_t *addrlen);\nint connect(int sockfd, const struct sockaddr *addr, socklen_t addrlen);',
        about: '<code>listen</code> „spasívni“ soket, aby čakal na spojenia · <code>accept</code> uspí proces do príchodu požiadavky a vráti adresu protistrany · <code>connect</code> – klient nadviaže spojenie',
        params: [['backlog', 'počet požiadaviek, ktoré jadro zaznamená počas obsluhy aktuálnej']],
        ret: [], notes: [],
      },
      {
        name: 'Prenos dát', sig: 'TCP (s potvrdzovaním):  write() / read()\nUDP (bez potvrdzovania): sendto() / recvfrom()',
        about: 'pri UDP vráti adresu protistrany <code>recvfrom()</code>',
        params: [], ret: [], notes: [],
      },
    ],
  },
];

// =======================
// ZOZNAM TÝŽDŇOV
// =======================
function weekOf(p) {
  const m = p.match(/v (\d+)\. týždni/);
  return m ? Number(m[1]) : null;
}

function pretestCode(p) { return p.split(' ')[0]; }

function pretestByCode(code) { return allPretests().find(p => pretestCode(p) === code); }

function pretestQuestions(code) {
  const p = pretestByCode(code);
  return allQuestions.filter(q => (q.pretests || []).includes(p));
}

function knownSet() { return settings.known || (settings.known = {}); }

function topicFor(code) {
  return [...LEARN_TOPICS, ...WEEK_TOPICS].filter(t => t.pretest === code);
}

function renderBlesk() {
  const known = knownSet();
  $('bleskList').innerHTML = allPretests().map(p => {
    const code = pretestCode(p), qs = pretestQuestions(code);
    const k = qs.filter(q => known[q.id]).length;
    const week = weekOf(p);
    const sheets = topicFor(code);
    // názov témy: z ťaháku (napr. „Práca so súbormi“), inak z názvu pretestu
    const name = sheets.length
      ? sheets.map(t => t.title.replace(/^\S+\s/, '').split(' – ')[0]).join(', ')
      : p.replace(/^T\d+\s*–\s*/, '').replace(/\s*–?\s*príprava na cvičenie v \d+\. týždni/i, '');
    return `
      <div class="card blesk-card">
        <div class="blesk-head">
          <span class="blesk-week">${week ? week + '. týždeň' : ''}</span>
          <strong>${esc(code)} – ${esc(name)}</strong>
          <span class="muted">${qs.length} otázok · vieš ${k}/${qs.length}</span>
        </div>
        <div class="blesk-bar"><span style="width:${qs.length ? Math.round(k / qs.length * 100) : 0}%"></span></div>
        <div class="action-row blesk-actions">
          <button class="btn-primary" onclick="cardsStart('${code}', false)">📖 Kartičky (všetky)</button>
          <button class="btn-secondary" onclick="cardsStart('${code}', true)" ${k === qs.length ? 'disabled' : ''}>🔁 Len tie, čo ešte nevieš (${qs.length - k})</button>
          <button class="btn-accent" onclick="bleskTest('${code}')">⚡ Bleskovka – 10 otázok</button>
        </div>
        ${sheets.length ? `<details class="blesk-sheet"><summary>📋 Ťahák k týždňu</summary>${sheets.map(sheetHtml).join('')}</details>` : ''}
      </div>`;
  }).join('');
}

// spoločné vykreslenie ťaháka (rovnaký vzhľad ako v learn.js)
function sheetHtml(t) {
  return `<div class="blesk-topic"><h4>${t.title}</h4><p class="learn-intro">${t.intro}</p>
    ${t.items.map(it => `
      <div class="learn-item">
        <h4>${it.name}</h4>
        <pre class="learn-sig">${esc(it.sig)}</pre>
        <p>${it.about}</p>
        ${it.params.length ? `<table class="learn-table">${it.params.map(([n, d]) => `<tr><td><code>${n}</code></td><td>${d}</td></tr>`).join('')}</table>` : ''}
        ${it.ret.length ? `<p class="learn-ret"><b>Návratová hodnota:</b> ${it.ret.join(' · ')}</p>` : ''}
        ${it.notes.length ? `<ul>${it.notes.map(n => `<li>${n}</li>`).join('')}</ul>` : ''}
      </div>`).join('')}</div>`;
}

function bleskTest(code) {
  const qs = pretestQuestions(code);
  if (!qs.length) return toast('K tomuto testu nie sú otázky');
  testQuestions = shuffle(qs).slice(0, 10);
  initTest('⚡ Bleskovka – ' + code);
}

// =======================
// KARTIČKY
// =======================
let cards = { code: '', queue: [], done: 0, knew: 0, again: 0, total: 0, revealed: false };

function cardsStart(code, onlyUnknown) {
  const known = knownSet();
  let qs = pretestQuestions(code);
  if (onlyUnknown) qs = qs.filter(q => !known[q.id]);
  if (!qs.length) return toast('Všetky kartičky už vieš 🎉');
  cards = { code, onlyUnknown, queue: shuffle(qs), done: 0, knew: 0, again: 0, total: qs.length, retried: new Set(), revealed: false };
  showScreen('cards');
  cardsShow();
}

function cardsShow() {
  const q = cards.queue[0];
  $('cardsTitle').innerText = `📖 Kartičky – ${cards.code}`;
  if (!q) return cardsFinish();
  cards.revealed = false;
  $('cardsProgress').innerText = `Zostáva ${cards.queue.length} · vedel si ${cards.knew} z ${cards.total}`;
  $('cardsQuestion').textContent = q.q;
  $('cardsQuestion').classList.toggle('mono', /\n[ \t]/.test(q.q));
  $('cardsTags').innerHTML = tagsHtml(q) + (cards.retried.has(q.id) ? '<span class="tag">🔁 opakovanie</span>' : '');
  $('cardsAnswer').style.display = 'none';
  $('cardsReveal').style.display = 'block';
  $('cardsGrade').style.display = 'none';
  $('cardsDone').style.display = 'none';
  $('cardsBox').style.display = 'block';
}

function cardsReveal() {
  const q = cards.queue[0];
  if (!q || cards.revealed) return;
  cards.revealed = true;
  $('cardsAnswer').innerHTML = `<div class="flash-answer"><b>${esc(q.answer)}</b>${q.alt && q.alt.length ? ` <span class="muted">/ ${q.alt.map(esc).join(' / ')}</span>` : ''}</div>`;
  $('cardsAnswer').style.display = 'block';
  $('cardsReveal').style.display = 'none';
  $('cardsGrade').style.display = 'flex';
}

function cardsGrade(ok) {
  const q = cards.queue.shift();
  if (!q) return;
  const known = knownSet();
  if (ok) {
    known[q.id] = 1;
    // vedel hneď → zmizne zo zlých otázok; ak to bolo až na opakovanie, ostane tam na neskôr
    if (!cards.retried.has(q.id)) { cards.knew++; removeWrongId(q.id); }
  } else {
    delete known[q.id];
    addWrong(q.id);
    cards.again++;
    cards.retried.add(q.id);
    // nevedel → príde znova o pár kartičiek neskôr
    cards.queue.splice(Math.min(3, cards.queue.length), 0, q);
  }
  store.saveJSON('settings.json', settings);
  cardsShow();
}

function cardsFinish() {
  $('cardsBox').style.display = 'none';
  $('cardsDone').style.display = 'block';
  $('cardsProgress').innerText = '';
  $('cardsSummary').innerHTML = `Hotovo! Na prvý raz si vedel <b>${cards.knew} z ${cards.total}</b>.` +
    (cards.again ? ` Kartičky, ktoré si nevedel, sú aj v <b>❌ Zlé otázky</b>.` : ' 🎉');
}

function cardsBack() {
  showLearn('blesk');
}

// klávesy pre kartičky: medzera = ukáž, 1/← = nevedel, 2/→ = vedel
document.addEventListener('keydown', (e) => {
  const screen = document.querySelector('[data-screen="cards"]');
  if (!screen || screen.style.display === 'none' || $('cardsBox').style.display === 'none') return;
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (!cards.revealed && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); cardsReveal(); }
  else if (cards.revealed && (e.key === '2' || e.key === 'ArrowRight')) cardsGrade(true);
  else if (cards.revealed && (e.key === '1' || e.key === 'ArrowLeft')) cardsGrade(false);
});
