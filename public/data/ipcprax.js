// Praktické úlohy k IPC (zápočet 2): rúry a signály (T5), zdieľaná pamäť (T6), semafory (T7), sokety (T8).
// 🤖 AI GENEROVANÉ otázky (vytvoril Claude) – neboli v pretestoch ani v gencisearch, nie sú oficiálne.
// aiCat = k akému pretestu (téme) podľa AI patria. Predpoklad: Linux, služby sa vykonajú úspešne, ak nie je uvedené inak.

(function () {
  const BLOK = ['zablokuje sa', 'zablokuje', 'blokuje', 'proces sa zablokuje', 'čaká', 'caka', 'proces čaká'];
  const q = (aiCat, text, answer, alt = []) => ({ aiCat, kind: 'prax', q: text, answer, alt });

  const list = [
    // ===== T5 – RÚRY =====
    q('T5', `Proces má otvorené iba deskriptory 0, 1, 2. Aké hodnoty budú v poli fd po vykonaní fragmentu? (fd[0] a fd[1] oddelené medzerou)

  int fd[2];
  pipe(fd);`, '3 4', ['3,4']),

    q('T5', `Akú hodnotu vypíše fragment? (číslom)

  int fd[2], n;
  char buf[20];
  pipe(fd);
  write(fd[1], "abcdef", 6);
  n = read(fd[0], buf, 4);
  printf("%d", n);`, '4'),

    q('T5', `Aký reťazec vypíše fragment?

  int fd[2], n;
  char buf[20];
  pipe(fd);
  write(fd[1], "abcdef", 6);
  n = read(fd[0], buf, 4);
  buf[n] = '\\0';
  printf("%s", buf);`, 'abcd'),

    q('T5', `Akú hodnotu vráti druhé volanie read()? (číslom)

  int fd[2];
  char buf[20];
  pipe(fd);
  write(fd[1], "abcdef", 6);
  read(fd[0], buf, 4);
  read(fd[0], buf, 10);    // <- toto`, '2'),

    q('T5', `Akú hodnotu vráti druhé volanie read()? Proces je jediný, kto má rúru otvorenú. (číslom)

  int fd[2];
  char buf[20];
  pipe(fd);
  write(fd[1], "abc", 3);
  close(fd[1]);
  read(fd[0], buf, 3);
  read(fd[0], buf, 3);     // <- toto`, '0'),

    q('T5', `Čo sa stane pri volaní read()? Rúra je prázdna a zapisovací koniec fd[1] je stále otvorený. (dve slová)

  int fd[2];
  char buf[20];
  pipe(fd);
  read(fd[0], buf, 5);`, 'zablokuje sa', BLOK),

    q('T5', `Proces zapisuje do rúry, ktorej čítací koniec už nikto nemá otvorený. Aký signál dostane? (symbolická konštanta)

  close(fd[0]);
  write(fd[1], "abc", 3);`, 'SIGPIPE'),

    // ===== T5 – FORK A SIGNÁLY =====
    q('T5', `Koľkokrát sa vypíše písmeno A? (číslom)

  fork();
  fork();
  printf("A\\n");`, '4'),

    q('T5', `Koľkokrát sa vypíše písmeno A? (číslom)

  fork();
  fork();
  fork();
  printf("A\\n");`, '8'),

    q('T5', `Akú hodnotu vypíše potomok? (číslom)

  pid_t pid = fork();
  if (pid == 0)
      printf("%d", pid);`, '0'),

    q('T5', `Akú hodnotu vypíše rodič? (číslom)

  int x = 5;
  if (fork() == 0) {
      x++;
      exit(0);
  }
  wait(NULL);
  printf("%d", x);`, '5'),

    q('T5', `Čo vypíše program? (ak nič, napíšte "nič")

  signal(SIGUSR1, SIG_IGN);
  kill(getpid(), SIGUSR1);
  printf("OK");`, 'OK'),

    q('T5', `Akú hodnotu vypíše program? (číslom)

  int c = 0;
  void obsluha(int sig) { c++; }
  ...
  signal(SIGUSR1, obsluha);
  kill(getpid(), SIGUSR1);
  kill(getpid(), SIGUSR1);
  printf("%d", c);`, '2'),

    q('T5', `Čo vypíše program? Pre SIGUSR1 nie je zaregistrovaný obslužný program. (ak nič, napíšte "nič")

  kill(getpid(), SIGUSR1);
  printf("X");`, 'nič', ['nic', 'nic sa nevypise', 'nič sa nevypíše']),

    q('T5', `Akú hodnotu vráti volanie signal()? (symbolická konštanta)

  signal(SIGKILL, SIG_IGN);`, 'SIG_ERR'),

    q('T5', 'Ktoré dva signály nemožno zachytiť ani ignorovať? (oddelené medzerou)', 'SIGKILL SIGSTOP', ['SIGSTOP SIGKILL']),

    // ===== T6 – ZDIEĽANÁ PAMÄŤ =====
    q('T6', `Akú hodnotu vypíše rodič? p ukazuje do zdieľanej pamäte (pripojenej pred fork). (číslom)

  int id = shmget(IPC_PRIVATE, sizeof(int), IPC_CREAT | 0600);
  int *p = shmat(id, NULL, 0);
  *p = 1;
  if (fork() == 0) {
      *p = 5;
      exit(0);
  }
  wait(NULL);
  printf("%d", *p);`, '5'),

    q('T6', `Aký reťazec vypíše druhý proces? Oba procesy používajú ten istý identifikátor id.

  // proces 1
  char *p = shmat(id, NULL, 0);
  strcpy(p, "ahoj");

  // proces 2 (spustený neskôr)
  char *q = shmat(id, NULL, 0);
  printf("%s", q);`, 'ahoj'),

    q('T6', `Akú hodnotu bude mať shm_nattch po vykonaní fragmentu? Segment bol práve vytvorený a nikto iný ho nepripojil. (číslom)

  char *a = shmat(id, NULL, 0);
  char *b = shmat(id, NULL, 0);
  shmdt(a);`, '1'),

    q('T6', `Akú hodnotu bude mať shm_nattch po vykonaní fork()? Segment bol pred fork() pripojený iba v rodičovi. (číslom)

  char *p = shmat(id, NULL, 0);
  fork();`, '2'),

    q('T6', 'Segment zdieľanej pamäte je ešte pripojený, keď niekto zavolá shmctl(id, IPC_RMID, NULL). Kedy sa segment skutočne zruší? (po poslednom …)', 'po poslednom odpojení', ['po poslednom odpojeni', 'po odpojení posledného procesu', 'ked shm_nattch bude 0', 'odpojení', 'odpojeni']),

    q('T6', `Akú hodnotu vypíše program? (číslom)

  int *p = shmat(id, NULL, 0);     // segment obsahuje 10
  int x = *p;
  *p = 20;
  printf("%d", x);`, '10'),

    // ===== T7 – SEMAFORY =====
    q('T7', 'Semafor má hodnotu 2. Postupne sa vykonajú operácie sem_op = -1, sem_op = -1, sem_op = +3. Aká je výsledná hodnota semafóra? (číslom)', '3'),
    q('T7', 'Semafor má hodnotu 3. Proces vykoná operáciu sem_op = -2. Aká je výsledná hodnota semafóra? (číslom)', '1'),
    q('T7', 'Semafor má hodnotu 0. Proces vykoná operáciu sem_op = -1 (bez IPC_NOWAIT). Čo sa stane s procesom? (dve slová)', 'zablokuje sa', BLOK),
    q('T7', 'Semafor má hodnotu 1. Proces vykoná operáciu sem_op = -2 (bez IPC_NOWAIT). Čo sa stane s procesom? (dve slová)', 'zablokuje sa', BLOK),
    q('T7', 'Semafor má hodnotu 2. Proces vykoná operáciu sem_op = 0. Čo sa stane? (proces čaká, kým hodnota nebude …; číslom)', '0'),
    q('T7', `Semafor 0 má hodnotu 0, semafor 1 má hodnotu 0. Vykoná sa operácia na semafore 1? (áno / nie)

  struct sembuf op[2] = { {0, -1, 0}, {1, +1, 0} };
  semop(id, op, 2);`, 'nie', ['nie, proces sa zablokuje']),
    q('T7', 'Na akú hodnotu inicializujeme semafor, ktorý chráni kritickú oblasť (vzájomné vylúčenie – mutex)? (číslom)', '1'),
    q('T7', `Akú hodnotu vráti posledné volanie semctl()? (číslom)

  semctl(id, 0, SETVAL, 4);
  struct sembuf op = {0, -1, 0};
  semop(id, &op, 1);
  semctl(id, 0, GETVAL);    // <- toto`, '3'),
    q('T7', `Akú hodnotu vráti posledné volanie semctl()? (číslom)

  semctl(id, 1, SETVAL, 0);
  struct sembuf v = {1, +1, 0};
  semop(id, &v, 1);
  semop(id, &v, 1);
  semctl(id, 1, GETVAL);    // <- toto`, '2'),

    // ===== T8 – SOKETY =====
    q('T8', `Ktorá služba chýba v tomto TCP serveri?

  s = socket(PF_INET, SOCK_STREAM, 0);
  bind(s, (struct sockaddr *)&addr, sizeof(addr));
  c = accept(s, NULL, NULL);
  read(c, buf, 100);`, 'listen'),

    q('T8', `Ktorá služba chýba v tomto TCP klientovi?

  s = socket(PF_INET, SOCK_STREAM, 0);
  addr.sin_port = htons(5000);
  write(s, "ahoj", 5);`, 'connect'),

    q('T8', `Akú hodnotu vráti recvfrom() na serveri? (číslom)

  // klient (UDP)
  sendto(s, "ahoj", 5, 0, (struct sockaddr *)&srv, sizeof(srv));

  // server (UDP)
  n = recvfrom(s, buf, 100, 0, NULL, NULL);`, '5'),

    q('T8', `Klient poslal jeden UDP datagram s 10 bajtmi. Akú hodnotu vráti recvfrom() na serveri? (číslom)

  n = recvfrom(s, buf, 4, 0, NULL, NULL);`, '4'),

    q('T8', 'Akú hodnotu vráti connect() TCP klienta, ak na danom porte nikto nepočúva (žiadny server)? (číslom)', '-1'),

    q('T8', 'Akú číselnú hodnotu (v desiatkovej sústave) vráti htons(80) na počítači s architektúrou x86 (little endian)?', '20480'),

    q('T8', `Proces má otvorené iba deskriptory 0, 1, 2. socket() vrátil 3. Aký deskriptor vráti prvé úspešné accept()? (číslom)

  s = socket(PF_INET, SOCK_STREAM, 0);
  bind(s, ...);
  listen(s, 5);
  c = accept(s, NULL, NULL);`, '4'),

    q('T8', `Ktorú službu použijeme v UDP serveri namiesto accept() na prijatie dát aj s adresou odosielateľa?`, 'recvfrom'),
  ];

  window.IPCPRAX = list.map((x, i) => ({
    id: 30001 + i,
    topic: 'ipc-prax',
    pretests: [],
    ...x
  }));
})();
