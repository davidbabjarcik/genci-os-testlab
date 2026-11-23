// =======================
// UČENIE – ťahák k zápočtu (T1–T4) a interaktívne nástroje
// =======================

// Ťahák: témy zápočtu. "test" = presne to, čo chceli pretesty (ak sa líši od manuálu).
const LEARN_TOPICS = [
  {
    id: 'subory', title: '📄 Práca so súbormi – open, read, write, lseek, close', pretest: 'T1', also: ['T2'],
    practice: /\b(open|read|write|lseek|close)\(\)|SEEK_|O_RDONLY|O_WRONLY|O_RDWR|O_CREAT|O_EXCL|O_TRUNC|O_APPEND/,
    intro: 'Každá služba vracia <b>-1 pri chybe</b> a kód chyby uloží do globálnej premennej <code>errno</code>. Prvý parameter read/write/lseek (deskriptor súboru) získame službou <code>open()</code>.',
    items: [
      {
        name: 'open()', sig: 'int open(const char *pathname, int flags);\nint open(const char *pathname, int flags, mode_t mode);',
        about: 'otvorenie súboru alebo zariadenia',
        params: [
          ['pathname', '<code>const char *</code> – meno súboru, <b>reťazcová</b> konštanta'],
          ['flags', '<code>int</code> – príznaky, kombinujú sa znakom <code>|</code>'],
          ['mode', 'prístupové práva nového súboru (napr. <code>0644</code>), tiež sa dajú kombinovať <code>|</code>'],
        ],
        ret: ['<code>&gt;=0</code> – deskriptor súboru', '<code>-1</code> – chyba (errno)'],
        notes: [
          'Počet parametrov: <b>min 2, max 3</b>. Typ návratovej hodnoty <code>int</code>.',
          'Povinný je práve jeden z: <code>O_RDONLY</code> (iba čítanie), <code>O_WRONLY</code> (iba zápis), <code>O_RDWR</code> (zápis aj čítanie).',
          '<code>O_CREAT</code> vytvoriť ak neexistuje · <code>O_EXCL</code> chyba ak už existuje · <code>O_TRUNC</code> skrátiť na 0 bajtov · <code>O_APPEND</code> doplnenie pri každom zápise (zapisuje sa na koniec).',
          'Nový súbor, ktorý nesmie prepísať existujúci: <code>O_WRONLY|O_CREAT|O_EXCL</code> (na teste bez medzier).',
          'Výsledné práva nového súboru = <code>mode &amp; ~umask</code> (pozri nástroj umask).',
        ],
      },
      {
        name: 'read()', sig: 'ssize_t read(int fd, void *buf, size_t count);',
        about: 'čítanie dát z deskriptora súboru (obsah súboru sprístupníme v programe)',
        params: [
          ['fd', '<code>int</code> – deskriptor súboru (Sofia: „deskriptor súboru“), získame cez <code>open()</code>'],
          ['buf', '<code>void *</code> – Sofia: „buffer“'],
          ['count', '<code>size_t</code> – počet prenesených slabík (bajtov)'],
        ],
        ret: ['<code>&gt;0</code> – počet načítaných bajtov', '<code>=0</code> – koniec súboru (EOF)', '<code>-1</code> – chyba'],
        notes: [
          'Pretest T1 uznal ako typ návratovej hodnoty <code>int</code> (dnešný manuál: <code>ssize_t</code>).',
          'Pri úspechu <code>&gt;=0</code>. Posunie súborový kurzor o počet prečítaných bajtov.',
          '<code>EBADF</code> = <b>neplatný</b> deskriptor súboru.',
          '<code>read(0,buff,3)</code> vráti <b>3</b>, ak prenesie všetky požadované bajty (0 = štandardný vstup).',
        ],
      },
      {
        name: 'write()', sig: 'ssize_t write(int fd, const void *buf, size_t count);',
        about: 'zápis dát z programu do súboru',
        params: [
          ['fd', '<code>int</code> – manuál: „file descriptor“, Sofia: <code>fd</code>'],
          ['buf', 'manuál: „buffer“, Sofia: <code>const char *</code>'],
          ['count', '<code>size_t</code> – počet prenesených slabík'],
        ],
        ret: ['<code>&gt;0</code> – počet zapísaných bajtov', '<code>=0</code> – nič nezapísané, ale bez chyby', '<code>-1</code> – chyba'],
        notes: [
          'Minimálny počet parametrov 3. Typ návratovej hodnoty <code>ssize_t</code>.',
          '<code>EFAULT</code> = buffer je <b>mimo</b> dostupný adresný priestor.',
          '<code>write(2,buff,6)</code> vráti <b>6</b> (2 = štandardný chybový výstup).',
          'Zápis <b>prepisuje</b> znaky od pozície kurzora (nevkladá). S <code>O_APPEND</code> vždy na koniec.',
        ],
      },
      {
        name: 'lseek()', sig: 'off_t lseek(int fd, off_t offset, int whence);',
        about: 'posun súborového kurzora',
        params: [
          ['fd', '<code>int</code> – manuál: „file descriptor“, premenná <code>fd</code>'],
          ['offset', '<code>off_t</code> – Sofia: „offset“ (posun)'],
          ['whence', '<code>int</code> – pozícia, voči ktorej sa posúva: <code>SEEK_SET</code> začiatok · <code>SEEK_CUR</code> aktuálna pozícia · <code>SEEK_END</code> koniec súboru'],
        ],
        ret: ['<code>&gt;=0</code> – ukazovateľ aktuálnej pozície v súbore (nová pozícia od začiatku)', '<code>-1</code> – chyba (napr. výsledná pozícia by bola záporná)'],
        notes: [
          'Za koniec súboru sa posunúť <b>dá</b> (napr. veľkosť 100, <code>lseek(fd,2L,SEEK_END)</code> → <b>102</b>).',
          'Pred začiatok nie: <code>lseek(fd,-2L,SEEK_SET)</code> → <b>-1</b>.',
          '<code>EBADF</code> = <b>neotvorený</b> deskriptor súboru. <code>long</code> má na 32-bit systéme 32 bitov.',
          '<code>lseek(fd,0,SEEK_END)</code> vráti veľkosť súboru – to isté zistíme cez <code>stat()</code> (<code>st_size</code>).',
        ],
      },
      {
        name: 'close()', sig: 'int close(int fd);',
        about: 'zatvorenie deskriptora súboru',
        params: [['fd', 'deskriptor súboru']],
        ret: ['<code>0</code> – úspech', '<code>-1</code> – chyba'],
        notes: [],
      },
    ],
  },
  {
    id: 'subory2', title: '🔗 Súbory II – dup, stat, link, unlink, truncate', pretest: 'T2',
    practice: /\b(dup2?|stat|lstat|fstat|link|unlink|truncate|ftruncate)\(\)|st_[a-z]+|i-node|struct stat/,
    intro: 'i-node uchováva všetky atribúty súboru <b>okrem mena</b>. Meno je len odkaz (link) z adresára na i-node.',
    items: [
      {
        name: 'dup(), dup2()', sig: 'int dup(int oldfd);\nint dup2(int oldfd, int newfd);',
        about: 'duplikovanie deskriptora súboru',
        params: [['oldfd', 'deskriptor, ktorý duplikujeme'], ['newfd', '(dup2) číslo, ktoré má nový deskriptor dostať']],
        ret: ['<code>&gt;=0</code> – nový deskriptor', '<code>-1</code> – chyba'],
        notes: ['Duplikát zdieľa s originálom súborový kurzor.'],
      },
      {
        name: 'stat(), lstat(), fstat()', sig: 'int stat(const char *pathname, struct stat *statbuf);\nint fstat(int fd, struct stat *statbuf);\nint lstat(const char *pathname, struct stat *statbuf);',
        about: 'získanie informácií o súbore (atribúty z i-nodu)',
        params: [['pathname / fd', 'súbor podľa mena / podľa deskriptora (lstat: o samotnom symbolickom linku)'], ['statbuf', 'premenná typu <code>struct stat</code>']],
        ret: ['<code>0</code> – úspech („vracia nulu“)', '<code>-1</code> – chyba'],
        notes: [
          '<code>st_ino</code> číslo i-nodu · <code>st_mode</code> typ a práva · <code>st_nlink</code> počet mien (hard linkov) · <code>st_uid</code> ID vlastníka · <code>st_gid</code> ID skupiny · <code>st_size</code> veľkosť · <code>st_mtime</code> čas poslednej modifikácie',
        ],
      },
      {
        name: 'link(), unlink()', sig: 'int link(const char *oldpath, const char *newpath);\nint unlink(const char *pathname);',
        about: 'link: vytvorenie <b>nového</b> mena súboru · unlink: zmazanie <b>alternatívneho</b> mena',
        params: [['oldpath', 'existujúci súbor'], ['newpath', 'nové (alternatívne) meno']],
        ret: ['<code>0</code> – úspech („vracia nulu“)', '<code>-1</code> – chyba'],
        notes: [
          '<code>link()</code> zvýši <code>st_nlink</code> o <b>1</b>.',
          '<code>unlink()</code> fyzicky zmaže súbor, keď <code>st_nlink</code> bolo <b>1</b> (posledné meno).',
          'Súbory s rovnakým číslom i-nodu vo výpise <code>ls -i</code> sú ten istý súbor.',
        ],
      },
      {
        name: 'truncate(), ftruncate()', sig: 'int truncate(const char *path, off_t length);\nint ftruncate(int fd, off_t length);',
        about: 'nastavenie novej <b>dĺžky</b> súboru',
        params: [['path / fd', 'súbor'], ['length', 'nová dĺžka v bajtoch']],
        ret: ['<code>0</code> – úspech', '<code>-1</code> – chyba'],
        notes: [],
      },
    ],
  },
  {
    id: 'adresare', title: '📁 Adresáre – mkdir, rmdir, opendir, readdir', pretest: 'T2',
    practice: /\b(mkdir|rmdir|opendir|readdir|closedir)\(\)|dirent|d_name|d_ino|d_type|adresár/,
    intro: 'Adresár je špeciálny súbor. Prechádza sa ním ako prúdom záznamov <code>struct dirent</code>.',
    items: [
      {
        name: 'mkdir(), rmdir()', sig: 'int mkdir(const char *pathname, mode_t mode);\nint rmdir(const char *pathname);',
        about: 'mkdir: vytvorenie <b>adresára</b> · rmdir: <b>zmazanie</b> prázdneho adresára',
        params: [['pathname', 'meno adresára'], ['mode', 'prístupové práva']],
        ret: ['<code>0</code> – úspech', '<code>-1</code> – chyba'],
        notes: [],
      },
      {
        name: 'opendir()', sig: 'DIR *opendir(const char *name);',
        about: 'vráti ukazovateľ na <b>adresárový prúd</b> (typ <code>DIR</code>)',
        params: [['name', 'meno adresára']],
        ret: ['ukazovateľ <code>DIR *</code>', '<code>NULL</code> – chyba'],
        notes: ['Jeho výsledok je argument pre <code>readdir()</code>.'],
      },
      {
        name: 'readdir()', sig: 'struct dirent *readdir(DIR *dirp);',
        about: 'vráti ukazovateľ na <b>štruktúru dirent</b> – ďalší záznam adresára',
        params: [['dirp', 'adresárový prúd z <code>opendir()</code>']],
        ret: ['<code>struct dirent *</code>', '<code>NULL</code> – koniec adresára alebo chyba'],
        notes: ['<code>d_name</code> meno súboru · <code>d_ino</code> číslo i-nodu · <code>d_type</code> typ (adresár <code>DT_DIR</code>, obyčajný súbor <code>DT_REG</code>)'],
      },
    ],
  },
  {
    id: 'prava', title: '🔐 Práva – umask, chmod, chown', pretest: 'T3',
    practice: /\b(umask|chmod|chown)\(|práv|ls –lin|ls -lin|rwx/i,
    intro: 'Práva sú 9 bitov <code>rwx rwx rwx</code> = vlastník, skupina, ostatní. Osmičkovo: r=4, w=2, x=1. Konštanta v C začína nulou: <code>0644</code>.',
    items: [
      {
        name: 'umask()', sig: 'mode_t umask(mode_t mask);',
        about: 'nastavenie <b>masky práv</b> súboru',
        params: [['mask', 'bity, ktoré sa pri vytváraní súboru <b>odoberú</b>']],
        ret: ['<b>predchádzajúca hodnota</b> masky (vždy uspeje, <code>&gt;=0</code>)'],
        notes: ['Parametre: min 1, max 1. Typ návratovej hodnoty <code>mode_t</code>.', '<code>umask(006); open("abc",O_RDWR|O_CREAT,0774);</code> → <b>0770</b>'],
      },
      {
        name: 'chmod()', sig: 'int chmod(const char *pathname, mode_t mode);',
        about: 'zmena/nastavenie <b>prístupových práv</b> súboru',
        params: [['pathname', 'súbor'], ['mode', 'nové práva, napr. <code>0463</code>']],
        ret: ['<code>=0</code> – úspech („vracia nulu“)', '<code>-1</code> – chyba (errno)'],
        notes: ['Parametre: min 2, max 2. <code>chmod("file",0463)</code> → <b>-r--rw--wx</b>. umask sa na chmod <b>neuplatňuje</b>.'],
      },
      {
        name: 'chown()', sig: 'int chown(const char *pathname, uid_t owner, gid_t group);',
        about: 'zmena/nastavenie <b>vlastníka</b> súboru',
        params: [['pathname', 'súbor'], ['owner', 'ID vlastníka'], ['group', 'ID skupiny']],
        ret: ['<code>=0</code> – úspech', '<code>-1</code> – chyba (errno)'],
        notes: ['Parametre: min 3, max 3.'],
      },
    ],
  },
  {
    id: 'terminal', title: '⌨️ Zariadenia a terminál – tty, stty, ioctl', pretest: 'T3',
    practice: /tty|stty|ioctl|tcgetattr|tcsetattr|termios|zariaden|ovládač/i,
    intro: 'OS komunikuje s hardvérom cez <b>ovládače zariadení</b>. Zariadenia sú <b>znakové</b> (sekvenčná postupnosť bajtov) a <b>blokové</b> (bloky stanovenej veľkosti).',
    items: [
      {
        name: 'Príkazy', sig: 'tty          # meno špeciálneho súboru tohto terminálu\nstty         # zobrazí/nastaví parametre terminálu\nstty -echo   # vypne zobrazovanie znakov\nstty echo    # zapne zobrazovanie znakov',
        about: 'generický (riadiaci) terminál procesu je <code>/dev/tty</code>',
        params: [], ret: [], notes: [],
      },
      {
        name: 'ioctl(), tcgetattr(), tcsetattr()', sig: 'int ioctl(int fd, unsigned long request, ...);\nint tcgetattr(int fd, struct termios *termios_p);\nint tcsetattr(int fd, int optional_actions, const struct termios *termios_p);',
        about: '<code>ioctl()</code> – rozhranie pre riadenie periférnych zariadení. <code>tcgetattr()</code> zjednodušuje zisťovanie, <code>tcsetattr()</code> nastavovanie atribútov terminálu.',
        params: [],
        ret: ['<code>0</code> – úspech', '<code>-1</code> – chyba'],
        notes: ['Dátová štruktúra k téme: <code>termios</code>. Služby k téme: <code>ioctl tcgetattr tcsetattr</code>.'],
      },
    ],
  },
  {
    id: 'procesy', title: '⚙️ Procesy – main, fork, execve, wait, exit', pretest: 'T4',
    practice: /\b(fork|execve|wait|waitpid|getpid|getppid|exit|main)\(\)|proces/,
    intro: 'Typ návratovej hodnoty <code>fork, wait, waitpid, getpid, getppid</code> je <code>pid_t</code>; <code>main</code> a <code>execve</code> vracajú <code>int</code>.',
    items: [
      {
        name: 'main()', sig: 'int main(int argc, char *argv[], char *envp[]);',
        about: 'začiatok vykonávania C programu – riadenie mu odovzdá <code>execve()</code>',
        params: [['argc, argv, envp', 'počet argumentov, argumenty, prostredie']],
        ret: [], notes: ['Počet parametrov: <b>min 0, max 3</b>.'],
      },
      {
        name: 'fork()', sig: 'pid_t fork(void);',
        about: 'vytvorenie <b>dcérskeho procesu</b>',
        params: [], ret: ['<code>0</code> – v potomkovi', '<code>&gt;0</code> – v rodičovi (PID potomka)', '<code>-1</code> – chyba'],
        notes: ['Počet parametrov <b>0</b>.'],
      },
      {
        name: 'execve()', sig: 'int execve(const char *pathname, char *const argv[], char *const envp[]);',
        about: '<b>spustenie</b> programu (nahradí program v aktuálnom procese)',
        params: [['pathname, argv, envp', '3 parametre']],
        ret: ['pri úspechu sa <b>nevracia</b> – návratová hodnota „žiadnu“', '<code>-1</code> – chyba'],
        notes: [],
      },
      {
        name: 'wait(), waitpid()', sig: 'pid_t wait(int *wstatus);\npid_t waitpid(pid_t pid, int *wstatus, int options);',
        about: '<b>pozastavenie</b> vykonávania rodičovského procesu, kým potomok neskončí',
        params: [['wait', '1 parameter'], ['waitpid', '3 parametre']],
        ret: ['ID <b>ukončeného</b> potomka', '<code>-1</code> – chyba'],
        notes: [],
      },
      {
        name: 'getpid(), getppid(), exit()', sig: 'pid_t getpid(void);\npid_t getppid(void);\nvoid exit(int status);',
        about: 'getpid: zistenie ID <b>procesu</b> · getppid: ID <b>rodiča</b> · exit: <b>ukončenie</b> procesu',
        params: [], ret: ['getpid/getppid: 0 parametrov, vždy uspejú', 'exit: nevracia <b>žiadnu</b> hodnotu'],
        notes: [],
      },
    ],
  },
];

// =======================
// RENDER
// =======================
function showLearn(tab) {
  renderLearnSheet();
  learnTab(tab || 'sheet');
  showScreen('learn');
  permFromOctal();
  umaskCalc();
  lseekCalc();
  lsDecode();
  if (!$('simCode').value) simExample('rw');
}

function learnTab(tab) {
  document.querySelectorAll('.learn-tabs button').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('.learn-pane').forEach(p => p.style.display = p.dataset.pane === tab ? 'block' : 'none');
}

function renderLearnSheet() {
  const box = $('learnSheet');
  if (box.dataset.ready) return;
  box.dataset.ready = '1';
  box.innerHTML = LEARN_TOPICS.map(t => `
    <details class="card learn-topic">
      <summary><span>${t.title}</span><span class="tag">${t.pretest}</span></summary>
      <p class="learn-intro">${t.intro}</p>
      ${t.items.map(it => `
        <div class="learn-item">
          <h4>${it.name}</h4>
          <pre class="learn-sig">${esc(it.sig)}</pre>
          <p>${it.about}</p>
          ${it.params.length ? `<table class="learn-table">${it.params.map(([n, d]) => `<tr><td><code>${n}</code></td><td>${d}</td></tr>`).join('')}</table>` : ''}
          ${it.ret.length ? `<p class="learn-ret"><b>Návratová hodnota:</b> ${it.ret.join(' · ')}</p>` : ''}
          ${it.notes.length ? `<ul>${it.notes.map(n => `<li>${n}</li>`).join('')}</ul>` : ''}
        </div>`).join('')}
      <button class="btn-primary learn-practice" onclick="practiceTopic('${t.id}')">🎯 Precvičiť túto tému (${practicePool(t).length} otázok)</button>
    </details>`).join('');
}

function practicePool(t) {
  return allQuestions.filter(q => inZapocet(q) && q.pretests.some(p => [t.pretest, ...(t.also || [])].includes(p.split(' ')[0])) && t.practice.test(q.q));
}

function practiceTopic(id) {
  const t = LEARN_TOPICS.find(x => x.id === id);
  const pool = practicePool(t);
  if (!pool.length) return toast('K tejto téme nie sú otázky');
  testQuestions = shuffle(pool);
  initTest('Učenie – ' + t.title.replace(/^\S+\s/, ''));
}

// =======================
// NÁSTROJ: práva rwx <-> osmičkovo
// =======================
const PERM_LETTERS = 'rwxrwxrwx';

function octalToRwx(oct) {
  const n = parseInt(oct, 8);
  return [...PERM_LETTERS].map((c, i) => (n >> (8 - i)) & 1 ? c : '-').join('');
}

function rwxToOctal(rwx) {
  const bits = [...rwx].map((c, i) => c !== '-' && c.toLowerCase() === PERM_LETTERS[i] ? 1 : 0);
  return '0' + [0, 3, 6].map(i => bits[i] * 4 + bits[i + 1] * 2 + bits[i + 2]).join('');
}

function permExplain(oct) {
  const d = oct.replace(/^0/, '').padStart(3, '0');
  return ['vlastník', 'skupina', 'ostatní'].map((who, i) => {
    const v = Number(d[i]);
    const parts = [v & 4 ? 'r=4' : '', v & 2 ? 'w=2' : '', v & 1 ? 'x=1' : ''].filter(Boolean);
    return `<b>${who}</b> ${d[i]} = ${parts.join(' + ') || 'nič'}`;
  }).join(' · ');
}

function permRender(oct) {
  const rwx = octalToRwx(oct);
  $('permOctal').value = oct;
  $('permRwx').value = '-' + rwx;
  document.querySelectorAll('#permGrid input').forEach((cb, i) => cb.checked = rwx[i] !== '-');
  $('permOut').innerHTML = `<code>chmod("file", ${oct})</code> → <b>-${rwx}</b><br>${permExplain(oct)}`;
}

function permFromOctal() {
  const v = $('permOctal').value.trim();
  if (!/^0?[0-7]{3}$/.test(v)) { $('permOut').innerHTML = '<span class="bad">Zadaj 3 osmičkové číslice, napr. 0463</span>'; return; }
  permRender('0' + v.replace(/^0(?=\d{3})/, ''));
}

function permFromRwx() {
  let v = $('permRwx').value.trim();
  if (v.length === 10) v = v.slice(1);
  if (!/^[-r][-w][-x][-r][-w][-x][-r][-w][-x]$/.test(v)) { $('permOut').innerHTML = '<span class="bad">Zadaj 9 znakov rwx, napr. -r----x-wx</span>'; return; }
  permRender(rwxToOctal(v));
}

function permFromGrid() {
  const rwx = [...document.querySelectorAll('#permGrid input')].map((cb, i) => cb.checked ? PERM_LETTERS[i] : '-').join('');
  permRender(rwxToOctal(rwx));
}

// =======================
// NÁSTROJ: umask + open/mkdir
// =======================
function umaskCalc() {
  const u = $('umaskVal').value.trim(), m = $('umaskMode').value.trim();
  if (!/^0?[0-7]{1,3}$/.test(u) || !/^0?[0-7]{3}$/.test(m)) { $('umaskOut').innerHTML = '<span class="bad">Zadaj osmičkové čísla, napr. umask 006 a práva 0774</span>'; return; }
  const un = parseInt(u, 8), mn = parseInt(m, 8), res = mn & ~un & 0o777;
  const o = (n) => '0' + n.toString(8).padStart(3, '0');
  $('umaskOut').innerHTML = `
    <table class="learn-table mono-table">
      <tr><td>práva v open()</td><td>${o(mn)}</td><td>-${octalToRwx(o(mn))}</td></tr>
      <tr><td>umask (odober)</td><td>${o(un)}</td><td>-${octalToRwx(o(un))}</td></tr>
      <tr><td><b>výsledok</b> = mode &amp; ~umask</td><td><b>${o(res)}</b></td><td><b>-${octalToRwx(o(res))}</b></td></tr>
    </table>
    <p class="muted">Bit ostane, len ak je v <code>mode</code> a <b>nie je</b> v masku. Platí pre <code>open(…, O_CREAT, mode)</code> a <code>mkdir()</code>, nie pre <code>chmod()</code>.</p>`;
}

// =======================
// NÁSTROJ: lseek kalkulačka
// =======================
function lseekCalc() {
  const size = Number($('lsSize').value), pos = Number($('lsPos').value);
  const off = Number(String($('lsOff').value).replace(/L$/i, ''));
  const wh = $('lsWhence').value;
  if ([size, pos, off].some(Number.isNaN)) { $('lsOut').innerHTML = '<span class="bad">Zadaj čísla</span>'; return; }
  const base = wh === 'SEEK_SET' ? 0 : wh === 'SEEK_CUR' ? pos : size;
  const res = base + off;
  const call = `lseek(fd,${off}L,${wh})`;
  $('lsOut').innerHTML = res < 0
    ? `<code>${call}</code> → <b class="bad">-1</b><br>${base} + (${off}) = ${res} &lt; 0 – pred začiatok súboru sa posunúť nedá, kurzor ostáva na ${pos}.`
    : `<code>${call}</code> → <b class="ok">${res}</b><br>základ ${wh} = ${base}, posun ${off} → nová pozícia ${res}${res > size ? ' (za koncom súboru – je to dovolené)' : ''}.`;
}

// =======================
// NÁSTROJ: simulátor súboru (open / read / write / lseek)
// =======================
const SIM_EXAMPLES = {
  rw: { content: 'ojoqasmjtg', cursor: '', code: 'char buffer[80]="KFRDGPSJBC";\nfd=open("qwe.txt",O_RDWR);\nlseek(fd,5,SEEK_SET);\nread(fd,buffer,1);\nlseek(fd,5,SEEK_SET);\nwrite(fd,buffer,3);' },
  append: { content: 'ovmeojkwel', cursor: '', code: 'char buffer[80]="GXCQQ";\nfd=open("qwe.txt",O_WRONLY|O_APPEND);\ni=write(fd,buffer,4);' },
  offset: { content: 'qijqfdfryu', cursor: '3', code: 'char buffer[80]="PKUJHKETKK";\ni=write(fd,&buffer[5],2);' },
  read: { content: 'pnywpxsvmiaaoqldhwbnlwlcwr', cursor: '21', code: 'fd=open("qwe.txt",O_RDONLY);\ni=read(fd,buffer,3);\nprintf("%d",i);' },
};

function simExample(key) {
  const ex = SIM_EXAMPLES[key];
  $('simContent').value = ex.content;
  $('simCursor').value = ex.cursor;
  $('simCode').value = ex.code;
  simRun();
}

function fileView(content, pos) {
  const chars = [...content].map(c => c === '\0' ? '·' : c);
  const len = Math.max(chars.length, pos + 1);
  const tens = [], ones = [], caret = [];
  for (let i = 0; i < len; i++) {
    tens.push(Math.floor(i / 10) % 10);
    ones.push(i % 10);
    caret.push(i === pos ? '^' : ' ');
  }
  return `Znaky:      ${chars.join('')}\nPozícia:    ${tens.join('')}\n            ${ones.join('')}\nKurzor:     ${caret.join('').trimEnd()}`;
}

function simRun() {
  let content = $('simContent').value;
  const cursorGiven = $('simCursor').value.trim() !== '';
  let pos = cursorGiven ? Number($('simCursor').value) : 0;
  let buffer = [];
  let append = false;
  const vars = {};
  const out = [`<pre class="sim-state">Začiatok\n${esc(fileView(content, pos))}</pre>`];

  const bufStr = () => buffer.slice(0, 20).map(c => c ?? '·').join('');
  const bufArg = (a) => { const m = a.match(/&\s*\w+\s*\[\s*(\d+)\s*\]/); return m ? Number(m[1]) : 0; };

  for (const raw of $('simCode').value.split('\n')) {
    const line = raw.trim().replace(/;$/, '');
    if (!line || /^(\.\.\.|\/\/|int |#)/.test(line)) continue;
    let m, ret = null, note = '';
    const assign = line.match(/^(\w+)\s*=\s*(?=\w+\s*\()/);
    const call = assign ? line.slice(assign[0].length) : line;

    if ((m = line.match(/char\s+\w+\s*\[\s*\d*\s*\]\s*=\s*"([^"]*)"/))) {
      buffer = [...m[1]];
      out.push(`<div class="sim-step"><code>${esc(line)}</code> → buffer = "${esc(m[1])}"</div>`);
      continue;
    } else if ((m = call.match(/^open\s*\((.*)\)$/))) {
      if (/O_TRUNC/.test(m[1])) { content = ''; note = 'O_TRUNC – súbor skrátený na 0 bajtov. '; }
      append = /O_APPEND/.test(m[1]);
      if (!cursorGiven) pos = 0;
      ret = 3;
      note += 'Vráti deskriptor súboru (napr. 3). ' + (append ? 'O_APPEND – každý write zapisuje na koniec súboru.' : (cursorGiven ? 'Kurzor je zadaný v mieste vykonania služieb – nemením ho.' : 'Kurzor na začiatku (0).'));
    } else if ((m = call.match(/^read\s*\(\s*[^,]+,\s*([^,]+),\s*(\d+)\s*\)$/))) {
      const at = bufArg(m[1]), n = Number(m[2]);
      const got = [...content].slice(pos, pos + n);
      got.forEach((c, i) => buffer[at + i] = c);
      ret = got.length;
      note = ret === 0 ? 'Kurzor je na konci súboru – EOF, vráti 0.' : `Prečítané „${esc(got.join(''))}“ do buffer[${at}…]${ret < n ? ` – len ${ret} z ${n}, ďalej je koniec súboru` : ''}.`;
      pos += ret;
    } else if ((m = call.match(/^write\s*\(\s*[^,]+,\s*([^,]+),\s*(\d+)\s*\)$/))) {
      const at = bufArg(m[1]), n = Number(m[2]);
      const data = buffer.slice(at, at + n).map(c => c ?? '\0');
      while (data.length < n) data.push('\0');
      if (append) pos = [...content].length;
      const arr = [...content];
      while (arr.length < pos) arr.push('\0');
      data.forEach((c, i) => arr[pos + i] = c);
      content = arr.join('');
      ret = n;
      note = `Zapísané „${esc(data.join('').replace(/\0/g, '·'))}“ od pozície ${pos} (prepisuje, nevkladá).`;
      pos += n;
    } else if ((m = call.match(/^lseek\s*\(\s*[^,]+,\s*(-?\d+)L?\s*,\s*(SEEK_SET|SEEK_CUR|SEEK_END)\s*\)$/))) {
      const off = Number(m[1]);
      const base = m[2] === 'SEEK_SET' ? 0 : m[2] === 'SEEK_CUR' ? pos : [...content].length;
      if (base + off < 0) { ret = -1; note = 'Pozícia by bola záporná – chyba, kurzor sa nemení.'; }
      else { pos = base + off; ret = pos; note = `${m[2]} (${base}) + ${off}.`; }
    } else if ((m = line.match(/^printf\s*\(\s*"[^"]*"\s*,\s*(\w+)\s*\)$/))) {
      out.push(`<div class="sim-step"><code>${esc(line)}</code> → vytlačí <b>${vars[m[1]] ?? '?'}</b></div>`);
      continue;
    } else {
      out.push(`<div class="sim-step muted"><code>${esc(line)}</code> – tomuto riadku nerozumiem, preskakujem</div>`);
      continue;
    }
    if (assign) vars[assign[1]] = ret;
    out.push(`<div class="sim-step"><code>${esc(line)}</code> → vráti <b>${ret}</b>. ${note}</div>
      <pre class="sim-state">${esc(fileView(content, pos))}\nbuffer:     ${esc(bufStr())}</pre>`);
  }
  out.push(`<p class="sim-result">Obsah súboru na konci: <b>${esc(content.replace(/\0/g, '·'))}</b></p>`);
  $('simOut').innerHTML = out.join('');
}

// =======================
// NÁSTROJ: rozklad výpisu ls -lin
// =======================
function lsDecode() {
  const lines = $('lsInput').value.split('\n').map(l => l.trim()).filter(Boolean);
  const rows = [];
  for (const l of lines) {
    const p = l.split(/\s+/);
    if (p.length < 9 || !/^\d+$/.test(p[0])) continue;
    rows.push({ ino: p[0], mode: p[1], nlink: p[2], uid: p[3], gid: p[4], size: p[5], time: p[6] + ' ' + p[7], name: p.slice(8).join(' ') });
  }
  if (!rows.length) { $('lsDecodeOut').innerHTML = '<span class="bad">Vlož riadky výpisu, napr. 162 -rw-r--r-- 4 63 28 30 2011-02-26 06:35 sss</span>'; return; }
  const same = {};
  rows.forEach(r => (same[r.ino] = same[r.ino] || []).push(r.name));
  const groups = Object.entries(same).filter(([, n]) => n.length > 1);
  $('lsDecodeOut').innerHTML = `
    <div class="table-scroll"><table class="learn-table mono-table">
      <tr><th>st_ino / d_ino</th><th>st_mode</th><th>st_nlink</th><th>st_uid</th><th>st_gid</th><th>st_size</th><th>st_mtime</th><th>d_name</th></tr>
      ${rows.map(r => `<tr><td>${esc(r.ino)}</td><td>${esc(r.mode)}</td><td>${esc(r.nlink)}</td><td>${esc(r.uid)}</td><td>${esc(r.gid)}</td><td>${esc(r.size)}</td><td>${esc(r.time)}</td><td>${esc(r.name)}</td></tr>`).join('')}
    </table></div>
    <p>${groups.length ? 'Rovnaký i-node = ten istý súbor (hard linky): ' + groups.map(([i, n]) => `<b>${n.map(esc).join(', ')}</b> (i-node ${esc(i)})`).join(' · ') : 'Žiadne dva súbory nemajú rovnaký i-node – nie sú identické.'}</p>
    <p class="muted">Poradie stĺpcov <code>ls -lin</code>: i-node, typ+práva, počet mien (hard linkov), UID, GID, veľkosť, dátum a čas modifikácie, meno.</p>`;
}
