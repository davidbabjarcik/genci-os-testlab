// Otázky ku Zadaniu 1 – COPYMASTER (verzia 2024.01).
// VLASTNÉ otázky zostavené podľa textu zadania – nie sú z gencisearch ani z pretestov.
// Fragmenty kódu sú ilustračné (typické riešenie daného prepínača), nie oficiálne riešenie.
//
// kind: "code" = fragment kódu → prepínač, "spec" = otázka zo zadania
// caseSensitive: pri prepínačoch záleží na veľkosti písmen (-d ≠ -D, -s ≠ -S)

(function () {
  const ASK = 'Ku ktorému prepínaču programu copymaster patrí tento fragment kódu? (krátka voľba, napr. -c; bez prepínača = B)\n\n';

  // krátka voľba → dlhá voľba
  const LONG = {
    f: 'fast', s: 'slow', c: 'create', o: 'overwrite', a: 'append', l: 'lseek', D: 'directory',
    d: 'delete', m: 'chmod', i: 'inode', u: 'umask', K: 'link', t: 'truncate', S: 'sparse'
  };

  const sw = (letter) => letter === 'B'
    ? { answer: 'B', alt: ['bez prepínača', 'bez prepinaca'], caseSensitive: true }
    : { answer: '-' + letter, alt: [letter, '--' + LONG[letter]], caseSensitive: true };

  const code = (letter, fragment) => ({ kind: 'code', q: ASK + fragment, ...sw(letter) });
  const spec = (q, answer, alt = [], extra = {}) => ({ kind: 'spec', q, answer, alt, ...extra });
  const specSw = (q, letter) => ({ kind: 'spec', q, ...sw(letter) });

  const list = [
    // ===== FRAGMENT KÓDU → PREPÍNAČ =====
    code('B',
`  fstat(in, &st);
  out = open(outfile, O_WRONLY | O_CREAT | O_TRUNC, st.st_mode);
  while ((n = read(in, buf, sizeof(buf))) > 0)
      write(out, buf, n);`),

    code('f',
`  fstat(in, &st);
  char *buf = malloc(st.st_size);
  read(in, buf, st.st_size);
  write(out, buf, st.st_size);`),

    code('s',
`  char c;
  while (read(in, &c, 1) == 1)
      write(out, &c, 1);`),

    code('c',
`  mode_t mode = strtol(optarg, NULL, 8);
  out = open(outfile, O_WRONLY | O_CREAT | O_EXCL, mode);
  if (out == -1 && errno == EEXIST)
      chyba(..., "SUBOR EXISTUJE", 23);`),

    code('c',
`  if (stat(outfile, &st) == 0)        // outfile už existuje
      return 23;
  out = open(outfile, O_WRONLY | O_CREAT, mode);`),

    code('o',
`  out = open(outfile, O_WRONLY | O_TRUNC);    // bez O_CREAT
  if (out == -1 && errno == ENOENT)
      chyba(..., "SUBOR NEEXISTUJE", 24);`),

    code('o',
`  out = open(outfile, O_WRONLY);   // súbor musí existovať, i-node ostane
  ftruncate(out, 0);
  while ((n = read(in, buf, sizeof(buf))) > 0)
      write(out, buf, n);`),

    code('a',
`  out = open(outfile, O_WRONLY | O_APPEND);
  while ((n = read(in, buf, sizeof(buf))) > 0)
      write(out, buf, n);`),

    code('l',
`  sscanf(optarg, "%c,%ld,%ld,%ld", &x, &pos1, &pos2, &num);
  lseek(in, pos1, SEEK_SET);
  lseek(out, pos2, x == 'b' ? SEEK_SET : x == 'e' ? SEEK_END : SEEK_CUR);
  n = read(in, buf, num);
  write(out, buf, n);`),

    code('l',
`  if (lseek(in, pos1, SEEK_SET) == -1)
      chyba(..., "CHYBA POZICIE infile", 33);
  if (lseek(out, pos2, whence) == -1)
      chyba(..., "CHYBA POZICIE outfile", 33);`),

    code('D',
`  DIR *dir = opendir(infile);
  struct dirent *e;
  while ((e = readdir(dir)) != NULL) {
      stat(e->d_name, &st);
      fprintf(f, "%s %ld %d %d %ld %02d-%02d-%04d %s\\n", prava,
              st.st_nlink, st.st_uid, st.st_gid, st.st_size,
              tm->tm_mday, tm->tm_mon + 1, tm->tm_year + 1900, e->d_name);
  }`),

    code('D',
`  prava[0] = S_ISDIR(st.st_mode) ? 'd' : '-';
  prava[1] = (st.st_mode & S_IRUSR) ? 'r' : '-';
  prava[2] = (st.st_mode & S_IWUSR) ? 'w' : '-';
  prava[3] = (st.st_mode & S_IXUSR) ? 'x' : '-';
  ...`),

    code('d',
`  // ... kopírovanie prebehlo úspešne
  if (S_ISREG(st_in.st_mode) && unlink(infile) == -1)
      chyba(..., "SUBOR NEBOL ZMAZANY", 26);`),

    code('m',
`  // ... po skopírovaní dát
  mode_t m = strtol(optarg, NULL, 8);
  if (m > 0777)
      chyba(..., "ZLE PRAVA", 34);
  chmod(outfile, m);`),

    code('m',
`  while ((n = read(in, buf, sizeof(buf))) > 0)
      write(out, buf, n);
  fchmod(out, strtol(optarg, NULL, 8));`),

    code('i',
`  stat(infile, &st);
  if (!S_ISREG(st.st_mode))
      chyba(..., "ZLY TYP VSTUPNEHO SUBORU", 27);
  if (st.st_ino != number)
      chyba(..., "ZLY INODE", 27);`),

    code('u',
`  mode_t mask = umask(0);     // zistenie aktuálnej masky
  mask &= ~S_IWUSR;           // "u+w" – právo w vlastníka zachovať
  mask |= S_IXOTH;            // "o-x" – právo x ostatným odobrať
  umask(mask);`),

    code('K',
`  if (link(infile, outfile) == -1) {
      if (errno == EEXIST) chyba(..., "VYSTUPNY SUBOR UZ EXISTUJE", 30);
      if (errno == ENOENT) chyba(..., "VSTUPNY SUBOR NEEXISTUJE", 30);
  }`),

    code('t',
`  // ... po úspešnom skopírovaní
  long size = atol(optarg);
  if (size < 0)
      chyba(..., "ZAPORNA VELKOST", 31);
  truncate(infile, size);`),

    code('S',
`  fstat(in, &st);
  char *blk = malloc(st.st_blksize);
  while ((n = read(in, blk, st.st_blksize)) > 0) {
      if (same_nuly(blk, n))
          lseek(out, n, SEEK_CUR);     // diera – nič nezapisujem
      else
          write(out, blk, n);
  }
  ftruncate(out, st.st_size);`),

    // ===== FRAGMENT KÓDU – DOPLŇ =====
    spec(`Aký návratový kód doplníte do exit() v tomto fragmente programu copymaster? (číslom)

  if ((opt.fast && opt.slow) || (opt.create && opt.overwrite)) {
      fprintf(stderr, "KONFLIKT PREPINACOV\\n");
      exit(...);
  }`, '42'),

    spec(`Fragment programu copymaster vypisuje chybu takto:

  fprintf(stderr, "%c:%d:%s:%s\\n", kod, errno, strerror(errno), sprava);

Aký znak sa dosadí do premennej kod pri kopírovaní bez prepínača?`, 'B', [], { caseSensitive: true }),

    spec(`Ktoré prepínače programu copymaster vyžadujú argument, ak optstring pre getopt() je:

  "fsc:oal:Ddm:i:u:Kt:S"

(uveďte písmená bez pomlčiek, v poradí, oddelené jednou medzerou)`, 'c l m i u t', [], { caseSensitive: true }),

    // ===== OPIS → PREPÍNAČ =====
    specSw('Ktorý prepínač programu copymaster skopíruje infile do outfile jedine vtedy, ak outfile ešte neexistuje (práva podľa argumentu, napr. 0777)?', 'c'),
    specSw('Ktorý prepínač programu copymaster prepíše obsah outfile jedine vtedy, ak outfile už existuje (i-node a práva outfile ostanú pôvodné)?', 'o'),
    specSw('Ktorý prepínač programu copymaster pri každom zápise pridáva obsah infile na koniec existujúceho súboru outfile?', 'a'),
    specSw('Ktorý prepínač programu copymaster realizuje rýchle kopírovanie (minimum volaní read() a write())?', 'f'),
    specSw('Ktorý prepínač programu copymaster realizuje pomalé kopírovanie (maximum volaní read() a write())?', 's'),
    specSw('Ktorý prepínač programu copymaster skopíruje num bajtov infile od pozície pos1 do outfile na pozíciu určenú znakom x a hodnotou pos2?', 'l'),
    specSw('Ktorý prepínač programu copymaster vypíše obsah adresára infile do súboru outfile vo formáte podobnom ls -l?', 'D'),
    specSw('Ktorý prepínač programu copymaster po úspešnom skopírovaní zmaže súbor infile (iba ak je to obyčajný súbor)?', 'd'),
    specSw('Ktorý prepínač programu copymaster po skopírovaní dát nastaví prístupové práva súboru outfile na zadanú osmičkovú hodnotu?', 'm'),
    specSw('Ktorý prepínač programu copymaster skopíruje súbor iba vtedy, ak číslo i-nodu infile je rovné zadanému číslu?', 'i'),
    specSw('Ktorý prepínač programu copymaster pred kopírovaním nastaví masku pre vytváranie súborov (napr. u+w,o-x)?', 'u'),
    specSw('Ktorý prepínač programu copymaster vytvorí outfile ako alternatívne meno (hardlink) súboru infile?', 'K'),
    specSw('Ktorý prepínač programu copymaster po úspešnom skopírovaní nastaví dĺžku súboru infile na zadanú veľkosť v bajtoch?', 't'),
    specSw('Ktorý prepínač programu copymaster vytvorí outfile ako riedky súbor (sparse file)?', 'S'),

    // ===== CHYBOVÁ SPRÁVA → PREPÍNAČ =====
    specSw('Pri ktorom prepínači programu copymaster sa vypisuje správa „ZLY INODE“?', 'i'),
    specSw('Pri ktorom prepínači programu copymaster sa vypisuje správa „ZLA MASKA“?', 'u'),
    specSw('Pri ktorom prepínači programu copymaster sa vypisuje správa „ZAPORNA VELKOST“?', 't'),
    specSw('Pri ktorom prepínači programu copymaster sa vypisuje správa „SUBOR NEBOL ZMAZANY“?', 'd'),
    specSw('Pri ktorom prepínači programu copymaster sa vypisuje správa „RIEDKY SUBOR NEVYTVORENY“?', 'S'),
    specSw('Pri ktorom prepínači programu copymaster sa vypisuje správa „VSTUPNY SUBOR NIE JE ADRESAR“?', 'D'),
    specSw('Pri ktorom prepínači programu copymaster sa vypisuje správa „VYSTUPNY SUBOR UZ EXISTUJE“?', 'K'),
    specSw('Pri ktorom prepínači programu copymaster sa vypisuje správa „CHYBA POZICIE outfile“?', 'l'),
    specSw('Pri ktorom prepínači programu copymaster sa vypisuje správa „SUBOR EXISTUJE“?', 'c'),
    spec('Pri ktorých dvoch prepínačoch programu copymaster sa vypisuje správa „ZLE PRAVA“? (písmená bez pomlčiek oddelené medzerou)', 'c m', ['-c -m'], { caseSensitive: true }),

    // ===== NÁVRATOVÉ KÓDY =====
    spec('Aký návratový kód vráti copymaster, ak sa nepodarí kopírovanie bez prepínača?', '21'),
    spec('Aký návratový kód vráti copymaster, ak sa nepodarí kopírovanie s prepínačom -a (--append)?', '22'),
    spec('Aký návratový kód vráti copymaster, ak sa nepodarí kopírovanie s prepínačom -c (--create)?', '23'),
    spec('Aký návratový kód vráti copymaster, ak sa nepodarí kopírovanie s prepínačom -o (--overwrite)?', '24'),
    spec('Aký návratový kód vráti copymaster, ak sa nepodarí zmazanie súboru pri prepínači -d (--delete)?', '26'),
    spec('Aký návratový kód vráti copymaster, ak sa nepodarí kopírovanie s prepínačom -i (--inode)?', '27'),
    spec('Aký návratový kód vráti copymaster, ak sa nepodarí výpis adresára s prepínačom -D (--directory)?', '28'),
    spec('Aký návratový kód vráti copymaster, ak sa nepodarí vytvoriť alternatívne meno s prepínačom -K (--link)?', '30'),
    spec('Aký návratový kód vráti copymaster, ak sa nepodarí zmeniť veľkosť súboru s prepínačom -t (--truncate)?', '31'),
    spec('Aký návratový kód vráti copymaster, ak sa nepodarí kopírovanie s prepínačom -u (--umask)?', '32'),
    spec('Aký návratový kód vráti copymaster, ak sa nepodarí kopírovanie s prepínačom -l (--lseek)?', '33'),
    spec('Aký návratový kód vráti copymaster, ak sa nepodarí zmena práv s prepínačom -m (--chmod)?', '34'),
    spec('Aký návratový kód vráti copymaster, ak pri prepínači -S (--sparse) vytvorený súbor nie je riedky?', '41'),
    spec('Aký návratový kód vráti copymaster pri konflikte prepínačov?', '42'),
    spec('Aký návratový kód vráti copymaster pri korektnom vykonaní programu?', '0'),
    specSw('Ktorý prepínač programu copymaster pri neúspechu vracia návratový kód 27?', 'i'),
    specSw('Ktorý prepínač programu copymaster pri neúspechu vracia návratový kód 33?', 'l'),
    specSw('Ktorý prepínač programu copymaster pri neúspechu vracia návratový kód 30?', 'K'),
    specSw('Ktorý prepínač programu copymaster pri neúspechu vracia návratový kód 28?', 'D'),

    // ===== OSTATNÉ ZO ZADANIA =====
    spec('Uveďte formát výpisu chyby programu copymaster na štandardný chybový výstup (názvy položiek oddelené dvojbodkou, bez medzier).', 'KOD:ERRNO:STD_ERR_STRING:APP_ERR_STRING', [], { caseSensitive: false }),
    spec('Akú správu vypíše copymaster na stderr pri nepovolenej kombinácii prepínačov?', 'KONFLIKT PREPINACOV'),
    spec('Uveďte jednu dvojicu konfliktných prepínačov programu copymaster uvedenú v zadaní (dve krátke voľby oddelené medzerou, napr. -x -y).', '-f -s', ['-c -o', 'f s', 'c o'], { caseSensitive: true }),
    specSw('Ktorý prepínač programu copymaster sa nekombinuje so žiadnym iným prepínačom?', 'S'),
    specSw('Pri ktorom prepínači programu copymaster sa majú použiť knižničné funkcie (man3) a nie služby jadra?', 'D'),
    spec('Ktorou utilitou sa podľa zadania zostavuje program copymaster?', 'make'),
    spec('Ktorou funkciou sa podľa zadania odporúča spracovať parametre (prepínače) programu copymaster?', 'getopt()', ['getopt']),
    spec('Ktorú funkciu (man 3) je zakázané použiť na realizáciu funkcionalít programu copymaster?', 'system()', ['system']),
    spec('Ktorú zložku záznamu struct stat použijete pri prepínači -S na zistenie veľkosti alokačného bloku?', 'st_blksize'),
    spec('Čo znamená hodnota x = b v argumente prepínača -l x,pos1,pos2,num programu copymaster? (pozícia vzhľadom na …)', 'začiatok súboru', ['zaciatok', 'začiatok']),
    spec('Čo znamená hodnota x = e v argumente prepínača -l x,pos1,pos2,num programu copymaster? (pozícia vzhľadom na …)', 'koniec súboru', ['koniec']),
    spec('Čo znamená hodnota x = c v argumente prepínača -l x,pos1,pos2,num programu copymaster? (pozícia vzhľadom na …)', 'aktuálna pozícia', ['aktuálnu pozíciu', 'aktualna pozicia v subore']),
    spec('Uveďte syntax spúšťania programu copymaster podľa zadania.', 'copymaster [options] infile outfile'),
    spec('V ktorom týždni sa priebežne kontrolujú prepínače B (bez prepínača), s, f, c, o, a? (číslom)', '2'),
    spec('V ktorom týždni sa priebežne kontrolujú prepínače l, d, m? (číslom)', '3'),
    spec('V ktorom týždni sa priebežne kontrolujú prepínače i, K, t? (číslom)', '4'),
    spec('V ktorom týždni sa priebežne kontrolujú prepínače D, u? (číslom)', '5')
  ];

  window.COPYMASTER = list.map((q, i) => ({
    id: 10001 + i,
    topic: 'copymaster',
    pretests: [],
    alt: [],
    ...q
  }));
})();
