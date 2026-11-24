// Otázky k zadaniu Unix1 (IPC: rúry, signály, zdieľaná pamäť, semafory, sokety).
// 🤖 AI GENEROVANÉ otázky (vytvoril Claude podľa textu zadania) – nie sú z gencisearch ani z pretestov, nie sú oficiálne.
// Fragmenty kódu sú ilustračné (typické riešenie daného procesu), nie oficiálne riešenie.
// Tok slova podľa popisu procesov: p1.txt/p2.txt → P1/P2 → R1 → Pr → R2 → T → SM1 (S1) → S → SM2 (S2) → D → TCP Serv1 → UDP Serv2 → serv2.txt
//
// kind: "code" = fragment kódu → proces, "spec" = otázka zo zadania, "ipc" = použitie služieb jadra v zadaní

(function () {
  const ASK = 'Zadanie Unix1: ktorému procesu (programu) patrí tento fragment kódu? (P1, P2, T, D, Serv2 alebo Zadanie)\n\n';

  const PROC = {
    P1: ['proc_p1'], P2: ['proc_p2'], T: ['proc_t'], D: ['proc_d'],
    Serv2: ['proc_serv2', 'serv 2'], Zadanie: ['zadanie.cpp', 'hlavny program', 'hlavný program'],
  };

  const code = (proc, fragment) => ({ kind: 'code', q: ASK + fragment, answer: proc, alt: PROC[proc] });
  const spec = (q, answer, alt = [], extra = {}) => ({ kind: 'spec', q, answer, alt, ...extra });
  const ipc = (q, answer, alt = [], extra = {}) => ({ kind: 'ipc', q, answer, alt, ...extra });

  const list = [
    // ===== ZO ZADANIA – PROCESY A SÚBORY =====
    spec('Zadanie Unix1: koľko programov treba vypracovať (bez súboru makefile)? (číslom)', '6'),
    spec('Zadanie Unix1: ktoré tri procesy budú pri kontrole dodané (netreba ich písať)? (názvy oddelené medzerou, v poradí Pr, …)', 'Pr S Serv1', ['pr, s, serv1']),
    spec('Zadanie Unix1: uveďte názov zdrojového súboru procesu T.', 'proc_t.cpp'),
    spec('Zadanie Unix1: uveďte názov spustiteľného programu procesu Serv2.', 'proc_serv2'),
    spec('Zadanie Unix1: uveďte názov zdrojového súboru hlavného programu.', 'zadanie.cpp'),
    spec('Zadanie Unix1: uveďte názov výstupného súboru s výslednými slovami.', 'serv2.txt'),
    spec('Zadanie Unix1: uveďte názvy vstupných súborov (oddelené medzerou).', 'p1.txt p2.txt', ['p1.txt, p2.txt']),
    spec('Zadanie Unix1: akú maximálnu dĺžku (v znakoch) môže mať slovo počas putovania medzi procesmi? (číslom)', '150'),
    spec('Zadanie Unix1: koľko parametrov má hlavný program zadanie? (číslom)', '2'),
    spec('Zadanie Unix1: čo sú parametre hlavného programu zadanie? (dve slová)', 'čísla portov', ['porty', 'cisla portov', 'čísla portov pre servery']),
    spec('Zadanie Unix1: ktorý server prijíma TCP pakety?', 'Serv1', ['proc_serv1']),
    spec('Zadanie Unix1: ktorý server je UDP server a zapisuje výsledné slová do súboru?', 'Serv2', ['proc_serv2']),
    spec('Zadanie Unix1: na akej IP adrese majú bežať TCP aj UDP server? (pozor, nie "localhost")', '127.0.0.1'),
    spec('Zadanie Unix1: ktorý proces vyhradí všetky zdroje pre medziprocesovú komunikáciu a spustí všetky procesy?', 'Zadanie', ['zadanie.cpp', 'hlavny program']),
    spec('Zadanie Unix1: ako majú byť podľa zadania realizované všetky procesy? (dve slová)', 'samostatné programy', ['samostatne programy', 'ako samostatné programy']),
    spec('Doplňte podľa zadania Unix1: "Proces Pr k slovu prijatému z rúry R1 pridá svoju ... ." (jedno slovo)', 'značku', ['znacku', 'značka']),
    spec('Zadanie Unix1: koľko argumentov dostáva proces S pri spúšťaní? (číslom)', '4'),
    spec('Zadanie Unix1: koľko argumentov dostáva proces Pr pri spúšťaní? (číslom)', '4'),
    spec('Zadanie Unix1: ktorý koniec rúry R1 dostáva proces Pr ako argument? (čítací / zapisovací)', 'čítací', ['citaci', 'na čítanie', 'citaci koniec', 'čítací koniec']),
    spec('Zadanie Unix1: ktorý koniec rúry R2 dostáva proces Pr ako argument? (čítací / zapisovací)', 'zapisovací', ['zapisovaci', 'na zápis', 'zapisovaci koniec', 'zapisovací koniec']),
    spec('Zadanie Unix1: do ktorej rúry zapisujú procesy P1 a P2 slová?', 'R1'),
    spec('Zadanie Unix1: do ktorej rúry zapisuje proces Pr slovo so svojou značkou?', 'R2'),
    spec('Zadanie Unix1: z ktorej zdieľanej pamäte prijme proces S slovo?', 'SM1'),
    spec('Zadanie Unix1: do ktorej zdieľanej pamäte zapíše proces S slovo so svojou značkou?', 'SM2'),
    spec('Zadanie Unix1: ktorý proces zapisuje do zdieľanej pamäte SM1?', 'T', ['proc_t']),
    spec('Zadanie Unix1: ktorý proces číta zo zdieľanej pamäte SM2?', 'D', ['proc_d']),
    spec('Zadanie Unix1: ktorým signálom oznamujú procesy Pr, S a Serv1 hlavnému procesu, že sú pripravené?', 'SIGUSR1'),
    spec('Zadanie Unix1: aký signál pošle proces Pr procesu P1, aby zapísal slovo zo súboru p1.txt?', 'SIGUSR1'),
    spec('Doplňte podľa zadania Unix1: "Nachádzate sa v paralelnom prostredí … dbajte na synchronizáciu a vyhnete sa problémom ... procesov." (jedno slovo)', 'predbiehania', ['predbiehanie']),

    // ===== SEMAFORY S1 / S2 =====
    spec('Zadanie Unix1: koľko semafórov obsahuje sada S1? (číslom)', '2'),
    spec('Zadanie Unix1: podľa ktorého semafóra sa riadi proces T? (v tvare S1[i])', 'S1[0]'),
    spec('Zadanie Unix1: podľa ktorého semafóra sa riadi proces S pri čítaní zo SM1? (v tvare S1[i])', 'S1[1]'),
    spec('Zadanie Unix1: podľa ktorého semafóra sa riadi proces D? (v tvare S2[i])', 'S2[1]'),
    spec('Zadanie Unix1: podľa ktorého semafóra sa riadi proces S pri zápise do SM2? (v tvare S2[i])', 'S2[0]'),
    spec('Zadanie Unix1: akú farbu (význam) má hodnota semafóra 0?', 'červená', ['cervena', 'stoj', 'čakaj']),
    spec('Zadanie Unix1: akú farbu (význam) má hodnota semafóra 1?', 'zelená', ['zelena', 'môžeš', 'mozes']),
    spec('Zadanie Unix1: na akú hodnotu treba inicializovať semafor S1[0]? (číslom)', '1'),
    spec('Zadanie Unix1: na akú hodnotu treba inicializovať semafor S1[1]? (číslom)', '0'),
    spec('Zadanie Unix1: nastavený semafor S1[1] (hodnota 1) znamená, že proces S môže zo SM1 údaje … (jedno slovo)', 'čítať', ['citat']),
    spec('Zadanie Unix1: nastavený semafor S1[0] (hodnota 1) znamená, že proces T môže do SM1 … (jedno slovo)', 'zapisovať', ['zapisovat', 'zapisať']),
    spec('Zadanie Unix1: proces T zapísal slovo do SM1. Na akú hodnotu zmení svoj semafor S1[0]? (číslom)', '0'),
    spec('Zadanie Unix1: proces T zapísal slovo do SM1. Na akú hodnotu zmení semafor S1[1] procesu S? (číslom)', '1'),

    // ===== MAKEFILE A ODOVZDANIE =====
    spec('Zadanie Unix1: ktorou utilitou sa podľa súboru makefile skompilujú všetky programy?', 'make'),
    spec('Zadanie Unix1: v makefile v časti ...A... pre program proc_p1 uveďte potrebný zdrojový súbor.', 'proc_p1.cpp'),
    spec('Zadanie Unix1: uveďte kompilačný príkaz z časti ...B... makefile pre program proc_p1 (podľa vzoru pre zadanie).', 'g++ proc_p1.cpp -o proc_p1', ['g++ -o proc_p1 proc_p1.cpp']),
    spec('Zadanie Unix1: v akom formáte sa odporúča zbaliť odovzdávané súbory? (prípona)', 'tar.gz', ['.tar.gz', '*.tar.gz', 'targz']),
    spec('Zadanie Unix1: ktorý súbor sa vyhodnotí po skončení behu celej sústavy procesov?', 'serv2.txt'),

    // ===== POUŽITIE SLUŽIEB JADRA V ZADANÍ =====
    ipc('Zadanie Unix1: ktorou službou jadra vytvorí hlavný program rúry R1 a R2?', 'pipe'),
    ipc('Zadanie Unix1: ktorý prvok poľa z volania pipe(filedes) je čítací koniec rúry R1, ktorý dostane proces Pr?', 'filedes[0]', ['[0]', '0', 'fd[0]']),
    ipc('Zadanie Unix1: ktorý prvok poľa z volania pipe(filedes) je zapisovací koniec rúry R2, ktorý dostane proces Pr?', 'filedes[1]', ['[1]', '1', 'fd[1]']),
    ipc('Zadanie Unix1: ktorou službou jadra vytvorí hlavný program nový proces pre každý program?', 'fork'),
    ipc('Zadanie Unix1: ktorou službou jadra spustí potomok samostatný program (napr. proc_pr)?', 'execve', ['exec', 'execl', 'execv']),
    ipc('Zadanie Unix1: návratová hodnota ktorej služby jadra v rodičovi je PID procesu P1, ktorý potom hlavný program odovzdá procesu Pr?', 'fork'),
    ipc('Zadanie Unix1: prečo môže proces Pr po execve() používať deskriptory rúr, ktoré dostal ako číselné argumenty?',
      'Deskriptory rúr vytvorené v hlavnom programe potomok po fork() zdedí a po execve() ostávajú otvorené – stačí poznať ich čísla.'),
    ipc('Zadanie Unix1: ktorou službou jadra zaregistruje proces P1 obsluhu signálu SIGUSR1?', 'signal', ['sigaction']),
    ipc('Zadanie Unix1: ktorou službou jadra pošle proces Pr signál procesu P1?', 'kill'),
    ipc('Zadanie Unix1: ktorou službou jadra zistí proces (priamy potomok), aké PID má hlavný proces Zadanie, aby mu poslal SIGUSR1?', 'getppid'),
    ipc('Zadanie Unix1: ktorou službou jadra môže hlavný program pozastaviť svoje vykonávanie, kým nepríde signál (napr. SIGUSR1 „som pripravený“)?', 'pause', ['sigsuspend']),
    ipc('Zadanie Unix1: ktorou službou jadra vytvorí hlavný program zdieľanú pamäť SM1?', 'shmget'),
    ipc('Zadanie Unix1: koľko bajtov potrebuje zdieľaná pamäť na slovo maximálnej dĺžky zo zadania vrátane ukončovacieho znaku \'\\0\'? (číslom)', '151'),
    ipc('Zadanie Unix1: ktorou službou jadra pripojí proces T zdieľanú pamäť SM1 do svojho adresného priestoru?', 'shmat'),
    ipc('Zadanie Unix1: akú hodnotu dá proces T parametru shmaddr služby shmat(), aby adresu pripojenia vybral systém?', 'NULL', ['0']),
    ipc('Zadanie Unix1: ktorou službou jadra odpojí proces D zdieľanú pamäť SM2 po skončení práce?', 'shmdt'),
    ipc('Zadanie Unix1: akou symbolickou konštantou zruší hlavný program zdieľanú pamäť na konci (cez shmctl)?', 'IPC_RMID'),
    ipc('Zadanie Unix1: ktorou službou jadra vytvorí hlavný program sadu semafórov S1?', 'semget'),
    ipc('Zadanie Unix1: akú hodnotu dá hlavný program parametru nsems služby semget() pri vytváraní S1? (číslom)', '2'),
    ipc('Zadanie Unix1: ktorou službou jadra inicializuje hlavný program semafory S1[0]=1 a S1[1]=0?', 'semctl'),
    ipc('Zadanie Unix1: aký príkaz (cmd) služby semctl() použijete na inicializáciu jedného semafóra?', 'SETVAL'),
    ipc('Zadanie Unix1: akú hodnotu sem_num v struct sembuf použije proces S, keď čaká na svoj semafor S1[1]? (číslom)', '1'),
    ipc('Zadanie Unix1: akú hodnotu sem_op použije proces T, keď čaká na zelenú na S1[0] a zároveň si ju zmení na červenú? (číslom)', '-1'),
    ipc('Zadanie Unix1: akú hodnotu sem_op použije proces T, keď po zápise do SM1 nastaví zelenú procesu S na S1[1]? (číslom)', '1', ['+1']),
    ipc('Zadanie Unix1: ktorá teoretická semafórová operácia (P/V) zodpovedá čakaniu procesu T na zelenú na S1[0]?', 'P'),
    ipc('Zadanie Unix1: ktorá teoretická semafórová operácia (P/V) zodpovedá tomu, že T po zápise pustí proces S (S1[1] z 0 na 1)?', 'V'),
    ipc('Zadanie Unix1: akú hodnotu má parameter type služby socket() v UDP serveri Serv2?', 'SOCK_DGRAM'),
    ipc('Zadanie Unix1: akú hodnotu má parameter type služby socket(), ktorým proces D posiela slová TCP serveru Serv1?', 'SOCK_STREAM'),
    ipc('Zadanie Unix1: akú hodnotu má prvý parameter služby socket() pre servery Serv1 a Serv2 (IPv4)?', 'PF_INET', ['AF_INET']),
    ipc('Označme si služby jadra: 1.accept() 2.bind() 3.connect() 4.listen() 5.socket(). Ktoré služby a v akom poradí potrebuje UDP server Serv2 pred príjmom slov? (číslice bez medzier)', '52'),
    ipc('Označme si služby jadra: 1.accept() 2.bind() 3.connect() 4.listen() 5.socket(). Ktoré služby a v akom poradí potrebuje TCP server Serv1? (číslice bez medzier)', '5241'),
    ipc('Označme si služby jadra: 1.accept() 2.bind() 3.connect() 4.listen() 5.socket(). Ktoré služby a v akom poradí potrebuje proces D ako TCP klient servera Serv1? (číslice bez medzier)', '53'),
    ipc('Zadanie Unix1: ktorou službou jadra prijme UDP server Serv2 slovo?', 'recvfrom', ['recv', 'read']),
    ipc('Zadanie Unix1: ktorou službou jadra pošle Serv1 slovo ďalej na UDP server Serv2?', 'sendto'),
    ipc('Zadanie Unix1: ktorou službou jadra pošle proces D slovo TCP serveru Serv1 (doručovanie s potvrdzovaním)?', 'write', ['send']),
    ipc('Zadanie Unix1: do ktorej zložky struct sockaddr_in nastavíme adresu 127.0.0.1?', 'sin_addr'),
    ipc('Zadanie Unix1: do ktorej zložky struct sockaddr_in nastavíme číslo portu?', 'sin_port'),
    ipc('Zadanie Unix1: ktorou funkciou prevedieme číslo portu do sieťového poradia bajtov pred uložením do sin_port?', 'htons'),
    ipc('Zadanie Unix1: ktorou funkciou prevedieme reťazec "127.0.0.1" na adresu pre sin_addr? (jedna z nich)', 'inet_addr', ['inet_aton', 'inet_pton']),
    ipc('Zadanie Unix1: ktorou funkciou prevedieme argument s číslom portu (reťazec z argv) na číslo?', 'atoi', ['strtol']),

    // ===== FRAGMENT KÓDU → PROCES =====
    code('Serv2',
`  int s = socket(PF_INET, SOCK_DGRAM, 0);
  addr.sin_port = htons(atoi(argv[1]));
  bind(s, (struct sockaddr *)&addr, sizeof(addr));
  FILE *f = fopen("serv2.txt", "w");
  while ((n = recvfrom(s, slovo, 151, 0, NULL, NULL)) > 0)
      fprintf(f, "%s\\n", slovo);`),

    code('D',
`  struct sembuf cakaj = {1, -1, 0}, pusti = {0, 1, 0};
  semop(s2, &cakaj, 1);            // čakám na zelenú na S2[1]
  strcpy(slovo, sm2);
  semop(s2, &pusti, 1);            // procesu S dám zelenú na S2[0]
  connect(sock, (struct sockaddr *)&serv1, sizeof(serv1));
  write(sock, slovo, strlen(slovo) + 1);`),

    code('T',
`  read(r2, slovo, 151);             // slovo od procesu Pr
  struct sembuf cakaj = {0, -1, 0}, pusti = {1, 1, 0};
  semop(s1, &cakaj, 1);            // čakám na zelenú na S1[0]
  strcpy(sm1, slovo);
  semop(s1, &pusti, 1);            // procesu S dám zelenú na S1[1]`),

    code('P1',
`  void obsluha(int sig) {
      fscanf(subor, "%150s", slovo);
      write(r1, slovo, strlen(slovo) + 1);
  }
  ...
  subor = fopen("p1.txt", "r");
  signal(SIGUSR1, obsluha);
  while (1) pause();`),

    code('Zadanie',
`  pipe(r1); pipe(r2);
  int sm1 = shmget(IPC_PRIVATE, 151, IPC_CREAT | 0666);
  int s1 = semget(IPC_PRIVATE, 2, IPC_CREAT | 0666);
  semctl(s1, 0, SETVAL, 1);
  semctl(s1, 1, SETVAL, 0);
  if ((p1 = fork()) == 0)
      execl("./proc_p1", "proc_p1", r1w, NULL);`),

    code('Zadanie',
`  signal(SIGUSR1, pripraveny);      // Pr, S, Serv1 hlásia pripravenosť
  if ((pr = fork()) == 0)
      execl("./proc_pr", "proc_pr", pid_p1, pid_p2, r1r, r2w, NULL);
  pause();                          // čakám na SIGUSR1 od Pr
  ...
  shmctl(sm1, IPC_RMID, NULL);
  semctl(s1, 0, IPC_RMID);`),

    // ===== FRAGMENT KÓDU – DOPLŇ =====
    ipc(`Zadanie Unix1: akú hodnotu doplníte za X, aby proces T čakal na zelenú na svojom semafore S1[0]? (číslom)

  struct sembuf op = {0, X, 0};
  semop(s1, &op, 1);`, '-1'),

    ipc(`Zadanie Unix1: akú hodnotu doplníte za X pri inicializácii semafóra S1[1] procesu S? (číslom)

  semctl(s1, 1, SETVAL, X);`, '0'),

    ipc(`Zadanie Unix1: akú symbolickú konštantu doplníte za X, aby Serv2 bol UDP server?

  int s = socket(PF_INET, X, 0);`, 'SOCK_DGRAM'),

    ipc(`Zadanie Unix1: akú službu doplníte za X? (proces Pr posiela signál procesu P1)

  X(pid_p1, SIGUSR1);`, 'kill'),
  ];

  window.UNIX1 = list.map((q, i) => ({
    id: 20001 + i,
    topic: 'unix1',
    pretests: [],
    alt: [],
    ...q
  }));
})();
