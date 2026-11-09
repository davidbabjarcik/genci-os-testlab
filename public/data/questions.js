// Otázky z https://gencisearch.surge.sh/ + doplnené z pretestov
// pretests: zoznam pretestov, v ktorých sa otázka objavila
window.QUESTIONS = [
  {
    "id": 1,
    "q": "Zmysel života",
    "answer": "linux",
    "alt": [],
    "pretests": []
  },
  {
    "id": 2,
    "q": "Uveďte maximálny počet parametrov služby open(). (viď man 2 open() Počet vyjadrite číslom)",
    "answer": "3",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 3,
    "q": "Doplňte vetu: \"Služba open() slúži na .... súboru alebo zariadenia\". (viď služba open() sekcia NAME; jedným slovom)",
    "answer": "otvorenie",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 4,
    "q": "Uveďte minimálny počet parametrov služby open(). (viď manuálová stránka . Počet vyjadrite číslom)",
    "answer": "2",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 5,
    "q": "Uveďte typ návratovej hodnoty služby open() (podľa man 2 open())",
    "answer": "int",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 6,
    "q": "Akú hodnotu vráti služba open() po svojom úspešnom vykonaní? (viď sekcia RETURN VALUE služby open(); hodnotu špecifikujte niektorou z relácií <, >, <=, >=, =, != a číslom bez medzier!). Pozn. - špecifikujte ako \"interval\", do ktorého tieto hodnoty patria.",
    "answer": ">=0",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 7,
    "q": "Akú hodnotu vráti služba open() po svojom neúspešnom vykonaní? (viď sekcia RETURN VALUE manulálovej stránky man 2 open(); hodnotu špecifikujte celým číslom bez typovej konverzie!)",
    "answer": "-1",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 8,
    "q": "Uveďte názov globálnej premennej, v ktorej jadro (kernel) vráti kód chyby po neúspešnom vykonaní služby open() ? (viď sekcia RETURN VALUE manuálovej stránky )",
    "answer": "errno",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 9,
    "q": "Uveďte význam (sémantiku) návratovej hodnoty služby open() v prípade úspešného volania (viď sekcia RETURN VALUE manulálovej stránky man 2 open()",
    "answer": "deskriptor súboru",
    "alt": [
      "nový deskriptor súboru",
      "file descriptor"
    ],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 10,
    "q": "Služba open() vracia celé číslo. Uveďte význam tohto čísla v prípade, že číslo je záporné. (viď Sofia - opis služby open() KROK1, (jedným slovom)",
    "answer": "chyba",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 11,
    "q": "Uveďte celú TYPOVÚ špecifikáciu prvého parametra služby open(), podľa manuálovej stránky Pozn. Bez názvu premennej.",
    "answer": "const char",
    "alt": [
      "const char *"
    ],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 12,
    "q": "Doplňte tvrdenie: „Ako prvý parameter služby open() musíme uviesť ... konštantu“. Vyberte z (celočíselnu, znakovú, reálnu (float), reťazcovú, pole, záznam (štruktúru)).",
    "answer": "reťazcovú",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 13,
    "q": "Uveďte typ druhého parametra služby open() podľa manuálovej stránky Pozn. Bez názvu premennej.",
    "answer": "int",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 14,
    "q": "Uveďte hodnoty príznakov druhého parametra služby open(), z ktorých aspoň jedna musí byť použitá pri volaní služby. Hodnoty príznakov uveďte v poradí, ako sú uvedené v manuálových stránkach služby open(), oddelené práve jednou medzerou! Symbolické konštanty, nie čísla!",
    "answer": "O_RDONLY O_WRONLY O_RDWR",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 15,
    "q": "Hodnota príznaku O_RDONLY zabezpečí, že súbor bude otvorený/sprítupnený … na …. (Uveďte presne dve slová oddelené práve jednou medzerou)",
    "answer": "iba čítanie",
    "alt": [
      "len čítanie"
    ],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 16,
    "q": "Hodnota príznaku O_WRONLY zabezpečí, že súbor bude otvorený/sprístupnený … na …. (Uveďte presne dve chýbajúce slová, oddelené práve jednou medzerou!)",
    "answer": "iba zápis",
    "alt": [
      "len zápis"
    ],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 17,
    "q": "Hodnota príznaku O_RDWR zabezpečí, že súbor bude otvorený/sprístupnený na ... a ... . (Uveďte presne dve slová oddelené medzerou)",
    "answer": "zápis čítanie",
    "alt": [
      "čítanie zápis"
    ],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 18,
    "q": "Doplňte charakteristiku príznaku služby open() podľa interného materiálu kurzu (Sofia - KROK 3 opisu služby open() ): \"O_RDONLY - Otvoriť súbor ...\"",
    "answer": "len pre čítanie",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 19,
    "q": "Doplňte charakteristiku príznaku služby open() podľa interného materiálu kurzu (Sofia - KROK 3 opisu služby open() ): \"O_WRONLY - Otvoriť súbor ...\"",
    "answer": "len pre zápis",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 20,
    "q": "Doplňte charakteristiku príznaku služby open() podľa interného materiálu kurzu (Sofia - KROK 3 opisu služby open() ): \"O_RDWR - Otvoriť súbor ...\"",
    "answer": "pre zápis aj čítanie",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 21,
    "q": "Špecifikujte hodnotu druhého parametra služby open(), pre otvorenie súboru v režime \"Otvoriť súbor len pre čítanie\" (Sofia - KROK 3 opisu služby open() )",
    "answer": "O_RDONLY",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 22,
    "q": "Špecifikujte hodnotu druhého parametra služby open(), pre otvorenie súboru v režime \"Otvoriť súbor len pre zápis\" (Sofia - KROK 3 opisu služby open() )",
    "answer": "O_WRONLY",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 23,
    "q": "Špecifikujte hodnotu druhého parametra služby open(), pre otvorenie súboru v režime \"Otvoriť súbor pre zápis aj čítanie\" (Sofia - KROK 3 opisu služby open() )",
    "answer": "O_RDWR",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 24,
    "q": "Špecifikujte hodnotu druhého parametra služby open(), pre otvorenie súboru v režime \"Doplnenie pre každý zápis\" (Sofia - KROK 3 opisu služby open() )",
    "answer": "O_APPEND",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 25,
    "q": "Špecifikujte hodnotu druhého parametra služby open(), pre otvorenie súboru v režime \"Vytvoriť súbor ak neexistuje\" (Sofia - KROK 3 opisu služby open() )",
    "answer": "O_CREAT",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 26,
    "q": "Špecifikujte hodnotu druhého parametra služby open(), pre otvorenie súboru v režime \"Skrátiť veľkosť súboru na 0 bajtov\" (Sofia - KROK 3 opisu služby open() )",
    "answer": "O_TRUNC",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 27,
    "q": "Špecifikujte hodnotu druhého parametra služby open(), pre otvorenie súboru v režime \"Chyba, ak súbor už existuje\" (Sofia - KROK 3 opisu služby open() )",
    "answer": "O_EXCL",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 28,
    "q": "Pre zabezpečenie vytvorenia neexistujúceho súboru musíme k povinnému príznaku druhého parametra služby open() pridať príznak(y) [príznaky oddeľte práve jednou medzerou]",
    "answer": "O_CREAT",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 29,
    "q": "Aby sme zabránili prepísaniu existujúceho súboru, k povinnému príznaku druhého parametra služby open() musíme pridať príznak(y) [príznaky oddeľte práve jednou medzerou]",
    "answer": "O_EXCL",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 30,
    "q": "Aký znak používame na skombinovanie viacerých príznakov v druhom parametri služby open()? [viď napr. interné materiály kurzu (Sofia) – KROK 6, 2. program]",
    "answer": "|",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 31,
    "q": "Čo určuje tretí parameter služby open()? (Sofia - KROK 3 opisu služby open() )",
    "answer": "prístupové práva",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 32,
    "q": "Aký znak používame na skombinovanie viacerých príznakov v treťom parametri služby open()? [viď napr. interné materiály kurzu (Sofia) – KROK 6, 2. program]",
    "answer": "|",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 33,
    "q": "Doplňte vetu: \"Služba read() slúži na .... dát z deskriptora súboru\".",
    "answer": "čítanie",
    "alt": [
      "načítanie"
    ],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 34,
    "q": "Doplňte vetu: \"Obsah súboru sprístupnime v programe službou ... .\"",
    "answer": "read",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 35,
    "q": "Uveďte typ návratovej hodnoty služby read() (podľa man 2 read())",
    "answer": "int",
    "alt": [
      "ssize_t"
    ],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 36,
    "q": "Akú hodnotu vráti služba read() po svojom úspešnom vykonaní? (viď sekcia RETURN VALUE manulálovej stránky man 2 read() ; hodnotu špecifikujte niektorou z relácií <, >, <=, >=, =, != a číslom bez medzier!)",
    "answer": ">=0",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 37,
    "q": "Akú hodnotu vráti služba read() po svojom neúspešnom vykonaní? (viď sekcia RETURN VALUE manulálovej stránky man 2 read() ; hodnotu špecifikujte celým číslom bez typovej konverzie!)",
    "answer": "-1",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 38,
    "q": "Uveďte názov globálnej premennej, v ktorej jadro (kernel) vráti kód chyby po neúspešnom vykonaní služby read() ? (viď sekcia RETURN VALUE manulálovej stránky man 2 read()",
    "answer": "errno",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 39,
    "q": "Služba read() vracia celé číslo. Uveďte význam tohto čísla v prípade, že číslo je kladné. (viď Sofia - opis služby read() KROK1, (tri slová)",
    "answer": "počet načítaných bajtov",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 40,
    "q": "Služba read() vracia celé číslo. Uveďte význam tohto čísla v prípade, že číslo je záporné. (viď Sofia - opis služby read() KROK1, (jedným slovom)",
    "answer": "chyba",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 41,
    "q": "Akú zápornú hodnotu môže nadobudnúť návratová hodnota služby read() ? (špecifikujte číslom!)",
    "answer": "-1",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 42,
    "q": "Akú návratovú hodnotu vráti služba read(), ak sa jej nepodarí prečítať dáta zo súboru z dôvodu chyby? (špecifikujte číslom!)",
    "answer": "-1",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 43,
    "q": "Akú návratovú hodnotu vráti služba read(), ak sa jej nepodarí prečítať dáta zo súboru z dôvodu, že všetky dáta už boli prečítané (EOF)? (špecifikujte relačným operátorom [<, >, <=, >=, =, !=] a číslom bez medzier!)",
    "answer": "=0",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 44,
    "q": "Akú návratovú hodnotu vráti služba read(), ak sa jej podarí prečítať dáta zo súboru? (špecifikujte relačným operátorom [<, >, <=, >=, =, !=] a číslom bez medzier!)",
    "answer": ">0",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 45,
    "q": "Doplňte vetu: 'Chyba EBADF pre službu read() znamená, že bol použitý ... deskriptor súboru'. (Doplňte jedno slovo viď služba read() sekcia ERRORS) Pozn. Najprv si zmysluplne preložte vetu z manuálu a potom doplňte chýbajúce slovo.",
    "answer": "neplatný",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 46,
    "q": "Ako nazýva prvý parameter služby read() interný materiál kurzu (Sofia - KROK 2 opisu služby read() )?",
    "answer": "deskriptor súboru",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 47,
    "q": "Uveďte celú typovú špecifikáciu prvého parametra služby read(), presne podľa manuálovej stránky man 2 read",
    "answer": "int",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 48,
    "q": "Akou službou získame hodnotu prvého parametra služby read()? (poznámka 1 pod čiarou v internom materáli kurzu - Sofia)",
    "answer": "open",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 49,
    "q": "Doplňte vetu: \"Služba read() prečíta obsah súboru špecifikovaného prostredníctvom prvého parametra, ktorý nazývame .... . \" (dve slová)",
    "answer": "deskriptor súboru",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 50,
    "q": "Ako nazýva druhý parameter služby read() interný materiál kurzu (Sofia)? (viď KROK 2 opisu služby read)",
    "answer": "buffer",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 51,
    "q": "Uveďte typ druhého parametra služby read() presne podľa manuálovej stránky man 2 read",
    "answer": "void *",
    "alt": [
      "void *buf"
    ],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 52,
    "q": "Čo určuje tretí parameter služby read()? (Sofia - KROK 2 opisu služby read(); TRI slová na základe charakteristiky tretieho parametra v KROK 2 opisu služby open() )",
    "answer": "počet prenesených slabík",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 53,
    "q": "Uveďte typ tretieho parametra služby read(), presne podľa manuálovej stránky man 2 read",
    "answer": "size_t",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 54,
    "q": "Doplňte vetu: \"Dáta z programu prenesieme do súboru službou ... .\"",
    "answer": "write",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 55,
    "q": "Uveďte minimálny počet parametrov služby write(). (viď manuálová stránka . Počet vyjadrite číslom)",
    "answer": "3",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 56,
    "q": "Uveďte typ návratovej hodnoty služby write() (podľa man 2 write())",
    "answer": "ssize_t",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 57,
    "q": "Akú hodnotu vráti služba write() po svojom úspešnom vykonaní? (viď sekcia RETURN VALUE manulálovej stránky ; hodnotu špecifikujte niektorou z relácií <, >, <=, >=, =, != a číslom bez medzier!). Pozn. - špecifikujte ako \"interval\", do ktorého tieto hodnoty patria.",
    "answer": ">=0",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 58,
    "q": "Akú hodnotu vráti služba write() po svojom neúspešnom vykonaní? (viď sekcia RETURN VALUE manuálovej stránky ; hodnotu špecifikujte celým číslom bez typovej konverzie!)",
    "answer": "-1",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 59,
    "q": "Služba write() vracia celé číslo. Uveďte význam tohto čísla v prípade, že číslo je záporné. (viď Sofia - opis služby write() KROK1, (jedným slovom)",
    "answer": "chyba",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 60,
    "q": "Akú návratovú hodnotu vráti služba write() (viď. manuálová stránka), ak sa jej nepodarí zapísať dáta do súboru z dôvodu chyby? (špecifikujte číslom!)",
    "answer": "-1",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 61,
    "q": "Akú návratovú hodnotu vráti služba write(), ak sa jej nepodarí zapísať žiadne dáta do súboru, ale nedošlo k chybe? (špecifikujte relačným operátorom [<, >, <=, >=, =, !=] a číslom bez medzier!)",
    "answer": "=0",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 62,
    "q": "Akú návratovú hodnotu vráti služba write(), ak sa jej podarí zapísať dáta do súboru? (špecifikujte relačným operátorom [<, >, <=, >=, =, !=] a číslom bez medzier!)",
    "answer": ">0",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 63,
    "q": "Doplňte vetu: 'Chyba EFAULT pre službu write() znamená, že vyrovnávacia pamäť je ... dostupný adresný priestor .' (viď manuálová stránka sekcia ERRORS)",
    "answer": "mimo",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 64,
    "q": "Ako nazýva prvý parameter služby write() manuálová stránka man 2 write?",
    "answer": "file descriptor",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 65,
    "q": "Ako špecifikuje prvý parameter služby write() interný materiál kurzu (Sofia)? (viď KROK 2 opisu služby write)",
    "answer": "fd",
    "alt": [
      "deskriptor súboru"
    ],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 66,
    "q": "Akou službou získame hodnotu prvého parametra služby write()? (poznámka 1 pod čiarou v internom materáli kurzu - Sofia)",
    "answer": "open",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 67,
    "q": "Doplňte vetu: \"Služba write() zapíše dáta do súboru špecifikovaného prostredníctvom prvého parametra, ktorý nazývame .... . \" (dve slová)",
    "answer": "deskriptor súboru",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 68,
    "q": "Ako sa nazýva druhý parameter služby write() manuálová stránka? (NIE názov premennej)",
    "answer": "buffer",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 69,
    "q": "Uveďte typ druhého parametra služby write() podľa interného materiálu kurzu (Sofia)? (viď KROK 1 opisu služby write() )",
    "answer": "const char *",
    "alt": [
      "const char *buf"
    ],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 70,
    "q": "Čo určuje tretí parameter služby write()? (Sofia - KROK 2 opisu služby write(); TRI slová na základe charakteristiky tretieho parametra opisu služby open() v KROK 2; bez slovesa). Pozn. - ak píšete s diakritikou, tak dôsledne - vo všetkých slovách",
    "answer": "počet prenesených slabík",
    "alt": [
      "počet zapísaných bajtov"
    ],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 71,
    "q": "Uveďte typ tretieho parametra služby write(), presne podľa manuálovej stránky .",
    "answer": "size_t",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 72,
    "q": "Doplňte vetu ohľadom tretieho argumentu služby write(): \"Tretí argument udáva ..., ktoré budú prenesené. \" (podľa Sofia - KROK 2 služby write() )",
    "answer": "počet slabík",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 73,
    "q": "Uveďte význam (sémantiku) návratovej hodnoty služby lseek() ? (viď sekcia POSTUP opisu služby lseek() v Sofii. Pozn. - Odpoveď je dlhšia, skutočne nazrite do \"Sofie\".)",
    "answer": "ukazovateľ aktuálnej pozície v súbore",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 74,
    "q": "Služba lseek() vracia celé číslo. Uveďte význam tohto čísla v prípade, že číslo je kladné. (viď Sofia - opis služby lseek() sekcia POSTUP, (prvé tri slová)",
    "answer": "ukazovateľ aktuálnej pozície",
    "alt": [
      "nový offset"
    ],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 75,
    "q": "Čo indikuje záporná návratová hodnota služby lseek()? (jedným slovom)",
    "answer": "chybu",
    "alt": [
      "chyba"
    ],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 76,
    "q": "Akú návratovú hodnotu vráti služba lseek(), ak sa jej nepodarí posunúť súborový kurzor? (špecifikujte číslom!)",
    "answer": "-1",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 77,
    "q": "Doplňte vetu: 'Chyba EBADF pre službu lseek() znamená, že bol použitý ... deskriptor súboru'. (viď man 2 lseek(); sekcia ERRORS)",
    "answer": "neotvorený",
    "alt": [
      "neplatný"
    ],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 78,
    "q": "Ako je pomenovaný prvý parameter služby lseek() v \"man 2 lseek!? (sekcia DESCRIPTION; uveďte presný anglický názov podľa)",
    "answer": "file descriptor",
    "alt": [
      "fildes"
    ],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 79,
    "q": "Uveďte celú typovú špecifikáciu prvého parametra služby lseek(), presne podľa manuálovej stránky man 2 lseek",
    "answer": "int",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 80,
    "q": "Aký je názov premennej jazyka C, podľa manuálovej stránky, v ktorej je zadaný deskriptor súboru v prípade služby lseek()? (viď signatúra v manuálovej stránke)",
    "answer": "fd",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 81,
    "q": "Akou službou získame hodnotu prvého parametra služby lseek()?",
    "answer": "open",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 82,
    "q": "Doplňte vetu: \"Služba lseek() posunie súborový kurzor súboru špecifikovaného prostredníctvom prvého parametra služby. Prvý parameter služby lseek() nazývame .... . \" (dve slová)",
    "answer": "deskriptor súboru",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 83,
    "q": "Ako nazýva druhý parameter služby lseek() interný materiál kurzu (Sofia)? (viď KROK 1 opisu služby lseek; NIE názov premennej)",
    "answer": "offset",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 84,
    "q": "Uveďte typ druhého parametra služby lseek() presne podľa manuálovej stránky man 2 lseek",
    "answer": "off_t",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 85,
    "q": "Koľko bitov má premenná jazyka C typu long? (na 32-bitových systémoch)",
    "answer": "32",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 86,
    "q": "Uveďte typ tretieho parametra služby lseek(), presne podľa manuálovej stránky man 2 lseek",
    "answer": "int",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 87,
    "q": "Doplňte vetu ohľadom tretieho argumentu služby lseek(): \"Tretí argument služby lseek() udáva ... v súbore, voči ktorej bude vykonaný posun súborového kurzora.\" (na základe opisu služby lseek() v internom materiáli kurzu - Sofia)",
    "answer": "pozíciu",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 88,
    "q": "Uveďte názov symbolickej konštanty pre tretí parameter služby lseek(), ktorou sa posun súborového kurzora vykoná voči \"pozícii kurzora s hodnotou začiatku súboru\" (Sofia - služba lseek(), KROK 2)",
    "answer": "SEEK_SET",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 89,
    "q": "Uveďte názov symbolickej konštanty pre tretí parameter služby lseek(), ktorou sa posun súborového kurzora vykoná voči \"aktuálnej pozícii kurzoru v súbore\" (Sofia - služba lseek(), KROK 2)",
    "answer": "SEEK_CUR",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 90,
    "q": "Uveďte názov symbolickej konštanty pre tretí parameter služby lseek(), ktorou sa posun súborového kurzora vykoná voči pozícii konca súboru.",
    "answer": "SEEK_END",
    "alt": [],
    "pretests": [
      "T1 – Príprava na cvičenie v 2. týždni"
    ]
  },
  {
    "id": 91,
    "q": "Krátko a výstižne opíšte účel služby open()",
    "answer": "Služba open() otvorí súbor uvedený v parametri path pre čítanie alebo zápis, podľa toho, ako je to špecifikované argumentom flags a ako návratovú hodnotu vráti deskriptor pre otvorený súbor.",
    "alt": [],
    "pretests": []
  },
  {
    "id": 92,
    "q": "Krátko a výstižne opíšte účel služby read()",
    "answer": "Každé volanie služby read() vráti počet bytov, ktoré boli skutočne systémom prenesené. Ak je počet prenesených bajtov nižší, ako je zadaná (požadovaná) hodnota uvedená vo volaní služby, je to znamenie konca súboru.",
    "alt": [],
    "pretests": []
  },
  {
    "id": 93,
    "q": "Krátko a výstižne opíšte účel služby write()",
    "answer": "write () zapisuje, aby sa spočítal počet bajtov z vyrovnávacej pamäte poukázanej do súboru, na ktorý odkazuje deskriptor súboru fd",
    "alt": [],
    "pretests": []
  },
  {
    "id": 94,
    "q": "Krátko a výstižne opíšte účel služby close()",
    "answer": "close () zatvorí deskriptor súboru, takže už neodkazuje na žiadny súbor a môže sa znovu použiť. Odstránia sa všetky zámky záznamov, ktoré sa nachádzajú v súbore, ku ktorému boli priradené, a ktoré sú vlastnené procesom (bez ohľadu na deskriptor súboru, ktorý sa použil na získanie zámku).",
    "alt": [],
    "pretests": []
  },
  {
    "id": 95,
    "q": "Krátko a výstižne opíšte účel služby lseek()",
    "answer": "Služba lseek() nastaví pozíciu v súbore (určený deskriptorom súboru „fd\"), na miesto určené posunutím „offset\", vzhľadom na pozíciu určenú argumentom „origin\".",
    "alt": [],
    "pretests": []
  },
  {
    "id": 96,
    "q": "Krátko a výstižne opíšte účel parametra príznakov (flags) služby open().",
    "answer": ".....",
    "alt": [],
    "pretests": []
  },
  {
    "id": 97,
    "q": "Krátko a výstižne opíšte pojem \"deskriptor súboru\".",
    "answer": "deskriptor súboru , to je číslo identifikujúce konkrétny súbor, do ktorého môžeme presmerovať výstup (ale aj z ktorého môžeme presmerovať vstup)",
    "alt": [],
    "pretests": []
  },
  {
    "id": 98,
    "q": "Krátko a výstižne opíšte účel tretieho parametra služby write()",
    "answer": "Tretí argument udáva počet slabík, ktoré budú prenesené.",
    "alt": [],
    "pretests": []
  },
  {
    "id": 99,
    "q": "Krátko a výstižne opíšte pojem \"ukazovateľ aktuálnej pozície (súborový kurzor)\".",
    "answer": "Funkcia fseek () nastavuje pozíciu v dátovom toku určenom argumentom toku. V pomere k zavedenej pozícii sa údaje prečítajú a zapíšu.Počiatočný bod polohy, ktorá sa má nastaviť, je určený argumentom whence, ktorý môže nadobúdať hodnoty: SEEK_SET - offset sa počíta od začiatku súboru SEEK_CUR - offset sa počíta z aktuálnej polohy SEEK_END - posun sa meria od konca súboruOdsadenie je špecifikované argumentom odsadenia, pričom kladná hodnota argumentu znamená odsadenie doprava od polohy určenej odtiaľ, záporná hodnota je odsadenie doľava.Pre binárne dátové toky je ofset počet bajtov.",
    "alt": [],
    "pretests": []
  },
  {
    "id": 100,
    "q": "Hodnotu ktorej zložky i-nodu reprezentovanú záznamom (štruktúrou) \"struct stat\" ovplyvní úspešné vykonanie služby link()?",
    "answer": "st_nlink",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 101,
    "q": "Ktorou službou získame relevantnú hodnotu prvého parametra služby read()?",
    "answer": "open",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 102,
    "q": "Ktorou službou získame relevantnú hodnotu prvého parametra služby write()?",
    "answer": "open",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 103,
    "q": "Ktorou službou získame relevantnú hodnotu prvého parametra služby lseek()?",
    "answer": "open",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 104,
    "q": "Ktorým parametrom služby read() určujeme počet načítaných bajtov? (uveďte číslom)",
    "answer": "3",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 105,
    "q": "Uveďte názov služby, ktorá pri prenose dát vždy posunie súborový kurzor",
    "answer": "read",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 106,
    "q": "Ktorou funkciou získame relevantnú hodnotu prvého parametra služby readdir()?",
    "answer": "opendir",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 107,
    "q": "Doplňte názov záznamu (štruktúry), v ktorom nájdeme aktuálne meno súboru pri spracovávaní adresárových záznamov",
    "answer": "dirent",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 108,
    "q": "Uveďte názov služby jadra, ktorou môžeme získať hodnotu ekvivalentnú návratovej hodnote volania jadra lseek(fd,0,SEEK_END). Hodnota musí byť ekvivalentná nielen číselne, ale aj svojou sémantikou (významom).\nPozn. službu môžme zavolať iba raz, bez ohľadu na veľkosť súboru.",
    "answer": "stat",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 109,
    "q": "Uveďte príznak, resp. kombináciu príznakov (korektný syntaktický zápis v jazyku C bez akýchkoľvek medzier), ktoré musíme použiť, ak chceme, pri sprístupňovaní súboru programu pre čítanie a/alebo zápis, zabezpečiť úspešnosť systémového volania, bez ohľadu na existenciu, či neexistenciu súboru.",
    "answer": "O_CREAT",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 110,
    "q": "Uveďte príznak, resp. kombináciu príznakov (korektný syntaktický zápis v jazyku C bez akýchkoľvek medzier), ktoré musíme použiť, ak chceme, pri sprístupňovaní súboru v programe pre čítanie a zápis, zabrániť prepísaniu existujúceho súboru.",
    "answer": "O_CREAT | O_EXCL",
    "alt": [],
    "pretests": []
  },
  {
    "id": 111,
    "q": "Uveďte príznak, resp. kombináciu príznakov (korektný synaktický zápis v jazyku C bez akýchkoľvek medzier), ktoré musíme použiť, ak chceme, pri sprístupňovaní súboru v programe pre čítanie a zápis, zabrániť prepísaniu obsahu existujúceho súboru",
    "answer": "O_APPEND",
    "alt": [],
    "pretests": []
  },
  {
    "id": 112,
    "q": "Uveďte (číslom) návratovú hodnotu, ktorú vráti systémové volanie 'read(0,buff,11)' po svojom úspešnom vykonaní a prenesení požadovaného počtu bajtov.",
    "answer": "11",
    "alt": [],
    "pretests": []
  },
  {
    "id": 113,
    "q": "Uveďte (číslom) návratovú hodnotu, ktorú vráti systémové volanie 'write(2,buff,11)' po svojom úspešnom vykonaní.",
    "answer": "11",
    "alt": [],
    "pretests": []
  },
  {
    "id": 114,
    "q": "Veľkosť súboru je 62 bajtov. Aktuálna pozícia súborového kurzora je 17, fd má hodnotu 5. Uveďte (číslom) návratovú hodnotu, ktorú vráti systémové volanie 'lseek(fd,55L,SEEK_SET)' po svojom úspešnom vykonaní.",
    "answer": "55",
    "alt": [],
    "pretests": []
  },
  {
    "id": 115,
    "q": "Veľkosť súboru je 87 bajtov. Aktuálna pozícia súborového kurzora je 22, fd má hodnotu 5. Uveďte (číslom) návratovú hodnotu, ktorú vráti systémové volanie 'lseek(fd,-6L,SEEK_CUR)' po svojom úspešnom vykonaní.",
    "answer": "16",
    "alt": [],
    "pretests": []
  },
  {
    "id": 116,
    "q": "Veľkosť (!!!) súboru je 100 bajtov. Aktuálna pozícia súborového kurzora je 25, fd má hodnotu 5. Uveďte (číslom) návratovú hodnotu, ktorú vráti systémové volanie 'lseek(fd,2L,SEEK_END)' po svojom úspešnom vykonaní.",
    "answer": "102",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 117,
    "q": "Veľkosť (!!!) súboru je 123 bajtov. Aktuálna pozícia súborového kurzora je 25, fd má hodnotu 5. Uveďte (číslom) návratovú hodnotu, ktorú vráti systémové volanie 'lseek(fd,-3L,SEEK_SET)' po svojom vykonaní.",
    "answer": "-1",
    "alt": [],
    "pretests": []
  },
  {
    "id": 118,
    "q": "Veľkosť (!!!) súboru je 52 bajtov. Aktuálna pozícia súborového kurzora je 28, fd má hodnotu 5. Uveďte (číslom) návratovú hodnotu, ktorú vráti systémové volanie 'lseek(fd,-10L,SEEK_SET)' po svojom vykonaní.",
    "answer": "-1",
    "alt": [],
    "pretests": []
  },
  {
    "id": 119,
    "q": "Majme súbor qwe.txt, ktorého aktuálny stav v mieste vykonania služby read() je definovaný takto: Znaky: anrcnmouhwyjpmbwpjdbkoupie Pozicia: 00000000001111111111222222 01234567890123456789012345 Ukazovatel: ...................^  a fragmnet kodu: //--------- zaciatok fragmnetu int fd,i; char buffer[80]; ... fd=open(\"qwe.txt\",O_RDONLY); ... i=read(fd,buffer,6); printf(\"%d\",i); ... //--------- koniec fragmnetu  Špecifikujte postupnosť znakov, ktoré do vyrovnávacej pamäte \"buffer\" umiestni fragment kódu v jazyku C uvedený vyššie. Predpokladáme, že sa obe služby vykonajú korektne. (Reťazec špecifikujte presne aj so zohľadnením malých a veľkých písmen.)",
    "answer": "bkoupi",
    "alt": [],
    "pretests": []
  },
  {
    "id": 120,
    "q": "Majme súbor qwe.txt, aktuálny stav ktorého (obsah a súborový kurzor) je v mieste vykonania služby read() definovaný takto: Znaky: pnywpxsvmiaaoqldhwbnlwlcwr Pozicia: 00000000001111111111222222 01234567890123456789012345 Ukazovatel: .....................^  a fragmnet kodu: //--------- zaciatok fragmentu int fd,i; char buffer[80]; ... fd=open(\"qwe.txt\",O_RDONLY); ... i=read(fd,buffer,3); printf(\"%d\",i); ... //--------- koniec fragmentu Špecifikujte akú hodnotu premennej i vytlačí fragment kódu v jazyku C. Predpokladáme, že sa obe služby vykonajú korektne.",
    "answer": "3",
    "alt": [],
    "pretests": []
  },
  {
    "id": 121,
    "q": "Majme súbor qwe.txt, ktorého aktuálny stav v mieste vykonania služby read() je definovaný takto: Znaky: ghpyngsjbettperycucoafopbr Pozicia: 00000000001111111111222222 01234567890123456789012345 Ukazovatel: .....................^  a fragmnet kodu: //--------- zaciatok fragmnetu int fd,i; char buffer[80]; ... fd=open(\"qwe.txt\",O_RDONLY); ... i=read(fd,buffer,7); printf(\"%d\",i); ... //--------- koniec fragmnetu  Špecifikujte postupnosť znakov, ktoré do vyrovnávacej pamäte \"buffer\" umiestni fragment kódu v jazyku C uvedený vyššie. Predpokladáme, že sa obe služby vykonajú korektne. (Reťazec špecifikujte presne aj so zohľadnením malých a veľkých písmen.)",
    "answer": "fopbr",
    "alt": [],
    "pretests": []
  },
  {
    "id": 122,
    "q": "Majme súbor qwe.txt, aktuálny stav ktorého (obsah a súborový kurzor) je v mieste vykonania služby read() definovaný takto: Znaky: pnywpxsvmiaaoqldhwbnlwlcwr Pozicia: 00000000001111111111222222 01234567890123456789012345 Ukazovatel: ........................^  a fragmnet kodu: //--------- zaciatok fragmentu int fd,i; char buffer[80]; ... fd=open(\"qwe.txt\",O_RDONLY); ... i=read(fd,buffer,5); printf(\"%d\",i); ... //--------- koniec fragmentu Špecifikujte akú hodnotu premennej i vytlačí fragment kódu v jazyku C. Predpokladáme, že sa obe služby vykonajú korektne.",
    "answer": "2",
    "alt": [],
    "pretests": []
  },
  {
    "id": 123,
    "q": "Majme súbor qwe.txt, aktuálny stav ktorého (obsah a súborový kurzor) je v mieste vykonania služby write() definovaný takto: Znaky: qijqfdfryu Pozicia: 0123456789 Ukazovatel: ___^   a fragmnet kodu: //--------- zaciatok fragmnetu int fd,i; char buffer[80]=\"PKUJHKETKK\"; ... i=write(fd,&buffer[5],2); ... //--------- koniec fragmnetu Špecifikujte vo forme reťazca obsah súboru qwe.txt po vykonaní uvedeného fragmentu kódu v jazyku C. (Reťazec špecifikujte presne aj so zohľadnením malých a veľkých písmen.)",
    "answer": "qijKEdfryu",
    "alt": [],
    "pretests": []
  },
  {
    "id": 124,
    "q": "Majme súbor qwe.txt, aktuálny stav ktorého (obsah a súborový kurzor) je definovaný takto: Znaky: ovmeojkwel Pozicia: 0123456789 a fragmnet kodu: //--------- zaciatok fragmnetu int fd,i; char buffer[80]=\"GXCQQ\"; ... fd=open(\"qwe.txt\",O_WRONLY|O_APPEND); i=write(fd,buffer,4); ... //--------- koniec fragmnetu Špecifikujte vo forme reťazca obsah súboru qwe.txt po vykonaní uvedeného fragmentu kódu v jazyku C.Pozn.1.Reťazec špecifikujte presne aj so zohľadnením malých a veľkých písmen.2.Nezabudnite zohľadniť príznaky (flags) služby open().3.Predpokladáme, že všetky služby sa vykonajú korektne.",
    "answer": "ovmeojkwelGXCQ",
    "alt": [],
    "pretests": []
  },
  {
    "id": 125,
    "q": "Majme súbor qwe.txt, aktuálny stav ktorého pred volanim sluzby open() je definovaný takto:\n Znaky:           ojoqasmjtg\n Pozicia:         0123456789\n Ukazovatel:\n\n a fragmnet kodu:\n        //--------- zaciatok fragmnetu\n        int fd,i;\n        char buffer[80]= \"KFRDGPSJBC\";\n        ...\n        fd=open(\"qwe.txt\",O_RDWR);\n        lseek(fd,5,SEEK_SET)\n        read(fd,buffer,1);\n        lseek(fd,5,SEEK_SET)\n        write(fd,buffer,3);\n       ...\n        //--------- koniec fragmnetu\n\nŠpecifikujte obsah súboru po vykonaní fragmentu kodu v programe v jazyku C, za predpokladu, ze sa všetky služby vykonajú korektne.",
    "answer": "ojoqasFRtg",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 126,
    "q": "Potrebujete zrealizovať program, ktorý realizuje nasledujúcu činnosť:\nprekopíruje obsah súboru zadaného na štandardnom vstupe do súboru zadaného na príkazovom riadku (teda v jednom prípade využije presmerovanie vstupu) Vyberte minimálny súbor služieb jadra operačného systému UNIX/Linux, ktoré musíte použiť pre napísanie takéhoto programu.\n\nMožnosti:\na.      open()\nb.      read()\nc.      write()\nd.      lseek()\ne.      stat()\nf.      link()\ng.      umask()\nh.      ftruncate()\ni.      chmod()\nj.      chown()\nk.      opendir()\nl.      readdir()\nOdpoveď špecifikujte ako postupnosť písmen, ktorými sú služby označené v zozname služieb, v abecednom poradí v sekcii možnosti. (t.j. napr. ak chcete uviesť služby link(), read() a chown() zadáte bfj).",
    "answer": "abc",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 127,
    "q": "Doplňte vetu: \"Služby dup() a dup2() slúžia na .... deskriptora súboru\" (jedno slovo).",
    "answer": "duplikovanie",
    "alt": [
      "duplikáciu"
    ],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 128,
    "q": "Doplňte vetu: \"Služby stat(), lstat() a fstat() využívame na ... ... o súbore\". (viď Sofia, napr. služba fstat(), KROK 1)",
    "answer": "získanie informácií",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 129,
    "q": "Doplňte vetu: \"Služba link() slúži na vytvorenie ... mena súboru\" (viď man 2 link).",
    "answer": "nového",
    "alt": [
      "ďalšieho"
    ],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 130,
    "q": "Doplňte vetu: \"Služba unlink() slúži na zmazanie .... mena súboru\". (viď man 2 unlink)",
    "answer": "alternatívneho",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 131,
    "q": "Doplňte vetu: \"Služba truncate() slúži na nastavenie novej .... súboru\". (viď man 2 truncate)",
    "answer": "dĺžky",
    "alt": [
      "veľkosti"
    ],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 132,
    "q": "Doplňte vetu: \"Duplikovanie deskriptora súboru vykonáme službou ... .\"",
    "answer": "dup",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 133,
    "q": "Akú hodnotu vráti služba dup() po svojom úspešnom vykonaní? (Hodnotu špecifikujte niektorou z relácií <, >, <=, >=, =, != a číslom, bez medzier!)",
    "answer": ">=0",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 134,
    "q": "Doplňte vetu: \"Informácie o atribútoch súboru získame službou ... .\"",
    "answer": "stat",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 135,
    "q": "Doplňte vetu: \"Alternatívne meno súboru nastavíme službou ... .\"",
    "answer": "link",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 136,
    "q": "Doplňte vetu: \"Alternatívne meno súboru zrušíme službou ... .\"",
    "answer": "unlink",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 137,
    "q": "Doplňte vetu: \"Novú dĺžku/veľkosť súboru nastavíme službou ... .\"",
    "answer": "truncate",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 138,
    "q": "Uveďte význam (sémantiku) návratovej hodnoty služieb dup() a dup2()? (viď sekcia RETURN VALUE manulálovej stránky man 2 dup().\nPozn. Dve, prípadne tri slová, bez slovesa a po slovensky.",
    "answer": "nový deskriptor",
    "alt": [
      "nový deskriptor súboru"
    ],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 139,
    "q": "Uveďte význam (sémantiku) návratovej hodnoty služieb stat(), lstat() a fstat(), po úspešnom vykonaní služby? (viď sekcia RETURN VALUE manulálovej stránky man 2 stat() )",
    "answer": "vracia nulu",
    "alt": [
      "0"
    ],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 140,
    "q": "Uveďte význam (sémantiku) návratovej hodnoty služieb link() a unlink(), po úspešnom vykonaní služby? (viď sekcia RETURN VALUE manulálovej stránky man 2 link() )",
    "answer": "vracia nulu",
    "alt": [
      "vrachia nulu",
      "0"
    ],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 141,
    "q": "V premennej akého typu vráti funkcia stat() informáciu o súbore? Uveďte iba typ premennej, nie premennú samotnú!Odpoveď uveďte podľa syntaxe jazyka C.",
    "answer": "struct stat",
    "alt": [],
    "pretests": []
  },
  {
    "id": 142,
    "q": "V akej zložke/prvku záznamu (štruktúry) \"struc stat\" vráti služba stat() ID vlastníka súboru?",
    "answer": "st_uid",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 143,
    "q": "V akej zložke/prvku záznamu (štruktúry) \"struc stat\" vráti služba stat() veľkosť súboru?",
    "answer": "st_size",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 144,
    "q": "V akej zložke/prvku záznamu (štruktúry) \"struc stat\" vráti služba stat() čas poslednej modifikácie súboru?",
    "answer": "st_mtime",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 145,
    "q": "V akej zložke/prvku záznamu (štruktúry) \"struc stat\" vráti služba stat() počet alternatívnych mien súboru?",
    "answer": "st_nlink",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 146,
    "q": "Akú hodnotu musí mať premenná udávajúca počet alternatívnych mien súboru (tzv. hard links), aby pri volani služby unlink() došlo k fyzickému zmazaniu súboru z disku? (hodnotu uveďte číslom)",
    "answer": "1",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 147,
    "q": "O akú hodnotu sa zvýši hodnota premennej reprezentovaná položkou st_nlink záznamu (štruktúry) \"struct stat\" v korešpondujúcom i-node súboru, pri vytvorení nového alternatívneho mena súboru službou link()? Hodnotu uveďte čislom!",
    "answer": "1",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 148,
    "q": "Doplňte vetu: \"Služba mkdir() slúži na vytvorenie špeciálneho súboru, nazývaného ... .\"",
    "answer": "adresár",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 149,
    "q": "Doplňte vetu: \"Služba rmdir() slúži na ... prázdneho adresára (priečinku, zložky).\"",
    "answer": "zmazanie",
    "alt": [
      "odstránenie"
    ],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 150,
    "q": "Doplňte vetu: \"Funkcia opendir() vráti ukazovateľ/smerník na ..., typovo označovaný DIR.\" (dve slová)",
    "answer": "adresárový prúd",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 151,
    "q": "Doplňte vetu: \"Funckia readdir() vráti ukazovateľ/smerník na ... .\"",
    "answer": "štruktúru dirent",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 152,
    "q": "Doplňte vetu: \"Na vytvorenie nového adresára (priečinku) slúži služba ... .\"",
    "answer": "mkdir",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 153,
    "q": "Doplňte vetu: \"Prázdny adresár (priečinok) zmažeme/zrušíme službou ... .\"",
    "answer": "rmdir",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 154,
    "q": "Doplňte vetu: \"Ukazovateľ na adresárový prúd získame funkciou ... \"",
    "answer": "opendir",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 155,
    "q": "Uveďte úplný typ návratovej hodnoty funkcie opendir().",
    "answer": "DIR",
    "alt": [
      "DIR *"
    ],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 156,
    "q": "Doplňte vetu: \"Relevantnú hodnotu ukazovateľa (smerník) na štruktúru dirent získame funkciou ... \"",
    "answer": "readdir",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 157,
    "q": "Uveďte úplný typ návratovej hodnoty funkcie readdir().",
    "answer": "struct dirent",
    "alt": [
      "struct dirent *"
    ],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 158,
    "q": "Doplňte vetu: \"Hodnotu argumentu pre službu readdir() získame službou ... .\"",
    "answer": "opendir",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 159,
    "q": "Akú hodnotu vráti funkcia opendir() v prípade chyby? (viď sekcia RETURN VALUE)",
    "answer": "NULL",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 160,
    "q": "Akú hodnotu vráti funkcia readdir() v prípade chyby? (viď sekcia RETURN VALUE)",
    "answer": "NULL",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 161,
    "q": "V akom prvku/zložke záznamu (štruktúry) \"dirent\" zistíme meno súboru (uveďte názov premennej).",
    "answer": "d_name",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 162,
    "q": "V akom prvku/zložke záznamu (štruktúry) \"dirent\" zistíme číslo i-nodu (uveďte názov premennej).",
    "answer": "d_ino",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 163,
    "q": "V akom prvku/zložke záznamu (štruktúry) \"dirent\" zistíme, že súbor je adresárom/priečinkom? (Uveďte názov premennej.)",
    "answer": "d_type",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 164,
    "q": "V akom prvku/zložke záznamu (štruktúry) \"dirent\" zistíme, že pracujeme so záznamom o obyčajnom súbore? (Uveďte názov premennej.)",
    "answer": "d_type",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 165,
    "q": "Ako sa nazýva štruktúra, ktorá v natívnom súborovom systéme OS UNIX/Linux uchováva všetky atribúty súboru (okrem mena).",
    "answer": "i-node",
    "alt": [
      "inode"
    ],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 166,
    "q": "Krátko a výstižne opíšte účel služby truncate(). (Nebojte sa používať rozvité vety, odpoveď bude vyhodnotená vyučujúcim)",
    "answer": "truncate() - slúži na zmenšenie alebo rozšírenie veľkosti súboru na zadanú veľkosť.",
    "alt": [],
    "pretests": []
  },
  {
    "id": 167,
    "q": "Krátko a výstižne opíšte účel služby link(). (Nebojte sa používať rozvité vety, odpoveď bude vyhodnotená vyučujúcim)",
    "answer": "link() - vytvorte nový názov súboru (vytvorí nový odkaz na existujúci súbor).",
    "alt": [],
    "pretests": []
  },
  {
    "id": 168,
    "q": "Krátko a výstižne opíšte pojem \"alternatívne meno súboru\" (hard link). (Nebojte sa používať rozvité vety, odpoveď bude vyhodnotená vyučujúcim)",
    "answer": "......",
    "alt": [],
    "pretests": []
  },
  {
    "id": 169,
    "q": "Krátko a výstižne opíšte účel služieb opendir() a readdir(). (Nebojte sa používať rozvité vety, odpoveď bude vyhodnotená vyučujúcim)",
    "answer": "readdir() - slúži na čítanie adresára.Funkcia readdir () vráti ukazovateľ na štruktúru adresára predstavujúcu ďalšiu položku adresára v adresárovom prúde, na ktorú odkazuje adresár dirp. Vráti NULL po dosiahnutí konca toku adresárov alebo v prípade, že sa vyskytla chyba. opendir() - slúži na otvoránie adresára.",
    "alt": [],
    "pretests": []
  },
  {
    "id": 170,
    "q": "Krátko a výstižne opíšte účel záznamu (štruktúry) \"dirent\". (Nebojte sa používať rozvité vety, odpoveď bude vyhodnotená vyučujúcim)",
    "answer": "Položka adresára je vrátená ako ukazovateľ na štruktúru dirent. Štruktúra dirent obsahuje informácie o súbore, ktoré sú uložené v adresári.",
    "alt": [],
    "pretests": []
  },
  {
    "id": 171,
    "q": "Uveďte argumenty, načo a prečo je potrebná služba close(). (Nestačí povedať, že na uzavretie súboru resp. kanálu!)",
    "answer": "služba close() zavrie deskriptor súboru, ktorý potom neodkazuje na žiadny súbor a môže byť znovu použitý. Všetky zámky umiestnené v príslušnom súbore sa uvoľnia (bez ohľadu na to, či sa tento popisovač súboru použil na nastavenie zámku).Ak je fd poslednou kópiou akéhokoľvek deskriptora súboru, zdroje s ním spojené sú uvoľnené; ak bol deskriptor posledným odkazom na súbor odstránený pomocou unlink(2), súbor sa natrvalo odstráni.",
    "alt": [],
    "pretests": []
  },
  {
    "id": 172,
    "q": "Služba open() je určená, okrem iného, aj na vytváranie súborov. Ako/odkiaľ/'na základe čoho' bude vytváranému súboru priradený vlastník a skupina?",
    "answer": "......",
    "alt": [],
    "pretests": []
  },
  {
    "id": 173,
    "q": "Vyjadrite aké práva nastavíme súboru „file\" službouchmod(\"file\",0636)Nastavené práva vyjadrite vo forme rwxrwxrwx uvedením písmen r,w,x tam, kde je právo pridelené a znakom \"-\" (minus), kde právo udelené nie je. Nezabudnite na úvodné mínus, indikujúce, že ide o obyčajný súbor.",
    "answer": "-rw--wxrw-",
    "alt": [],
    "pretests": []
  },
  {
    "id": 174,
    "q": "Požadujeme pre súbor „file\" nastaviť prístupové práva na hodnotu -r---w-rwx. Uveďte hodnotu osmičkovej konštanty, ktorú použijeme pri volaní služby chmod(). Konštantu zapíšte v tvare korektnej osmičkovej konštanty jazyka C.",
    "answer": "0427",
    "alt": [],
    "pretests": []
  },
  {
    "id": 175,
    "q": "Po zadaní príkazu$ls -linsme dostali nasledujúci výstup: 100 -rw-r--r-- X usr1 group 38 2011-02-26 06:35 ghq 102 -rw-r--r-- X usr1 group 38 2011-02-26 06:35 pvj 103 -rw-r--r-- X usr1 group 38 2011-02-26 06:35 oji 101 -rw-r--r-- X usr1 group 38 2011-02-26 06:35 rui 100 -rw-r--r-- X usr1 group 38 2011-02-26 06:35 kil 100 -rw-r--r-- X usr1 group 38 2011-02-26 06:35 fvhUveďte, ktorý z vyššie uvedených súborov je zaručene identický so súborompvjUveďte práve jeden aj vtedy, ak ich je viac (vtedy - hociktorý z nich). Ak žiaden, uveďte \"žiadny\" alebo \"ziadny\" (bez úvodzoviek). Súbor pvj sa nepočíta. Hodnota tretej položky výpisu bola skrytá - znak X.",
    "answer": "ziadny",
    "alt": [],
    "pretests": []
  },
  {
    "id": 176,
    "q": "Po zadaní príkazu$ls -linsme dostali nasledujúci výstup:141 -rw-r--r-- 2 59 70 46 2011-02-26 06:35 hhhUrčte hodnotu premennejx.d_name,po úspešnom volaní službyreaddir(&x),vzťahujúcom sa na horeuvedený súbor.",
    "answer": "hhh",
    "alt": [],
    "pretests": []
  },
  {
    "id": 177,
    "q": "Po zadaní príkazu$ls -linsme dostali nasledujúci výstup:128 -rw-r--r-- 6 37 13 66 2011-02-26 06:35 bbbUrčte hodnotu premennejx.st_gid,po úspešnom volaní službystat(\"bbb\",&x)pre horeuvedený súbor.",
    "answer": "13",
    "alt": [],
    "pretests": []
  },
  {
    "id": 178,
    "q": "Po zadaní príkazu$ls -linsme dostali nasledujúci výstup:183 -rw-r--r-- 5 15 39 59 2011-02-26 06:35 nnnUrčte hodnotu premennejx.st_ino,po úspešnom volaní službystat(\"nnn\",&x)pre horeuvedený súbor.",
    "answer": "183",
    "alt": [],
    "pretests": []
  },
  {
    "id": 179,
    "q": "Po zadaní príkazu$ls -linsme dostali nasledujúci výstup:146 -rw-r--r-- 1 64 37 62 2011-02-26 06:35 mmmUrčte hodnotu premennejx.st_nlink,po úspešnom volaní službystat(\"mmm\",&x)pre horeuvedený súbor.",
    "answer": "1",
    "alt": [],
    "pretests": []
  },
  {
    "id": 180,
    "q": "Po zadaní príkazu$ls -linsme dostali nasledujúci výstup:172 -rw-r--r-- 4 75 80 31 2011-02-26 06:35 cccUrčte hodnotu premennejx.st_size,po úspešnom volaní službystat(\"ccc\",&x)pre horeuvedený súbor.",
    "answer": "31",
    "alt": [],
    "pretests": []
  },
  {
    "id": 181,
    "q": "Po zadaní príkazu$ls -linsme dostali nasledujúci výstup:160 -rw-r--r-- 8 45 74 59 2011-02-26 06:35 rrrUrčte hodnotu premennejx.st_uid,po úspešnom volaní službystat(\"rrr\",&x)pre horeuvedený súbor.",
    "answer": "45",
    "alt": [],
    "pretests": []
  },
  {
    "id": 182,
    "q": "Doplňte vetu: \"Služba umask() slúži na nastavenie .... ... súboru\". (viď Sofia, služba umask(), POSTUP; dve slová)",
    "answer": "masky práv",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 183,
    "q": "Doplňte vetu: \"Masku práv súboru nastavíme službou ... .\"",
    "answer": "umask",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 184,
    "q": "Uveďte maximálny počet parametrov služby umask(). (viď man 2 umask. Počet vyjadrite číslom)",
    "answer": "1",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 185,
    "q": "Uveďte minimálny počet parametrov služby umask(). (viď man 2 umask. Počet vyjadrite číslom)",
    "answer": "1",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 186,
    "q": "Uveďte typ návratovej hodnoty služby umask() (podľa man 2 umask.)",
    "answer": "mode_t",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 187,
    "q": "Akú hodnotu vráti služba umask() po svojom úspešnom vykonaní? hodnotu špecifikujte niektorou z relácií <, >, <=, >=, =, != a číslom bez medzier!)",
    "answer": ">=0",
    "alt": [],
    "pretests": []
  },
  {
    "id": 188,
    "q": "Uveďte význam (sémantiku) návratovej hodnoty služby umask() ? (viď sekcia RETURN VALUE manulálovej stránky man 2 umask()\nPozn. - bez slovesa; po slovensky; v prvom páde (nominatív)",
    "answer": "predchádzajúca hodnota",
    "alt": [
      "predchádzajúca maska"
    ],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 189,
    "q": "Doplňte vetu: \"Služba chmod() slúži na zmenu/nastavenie .... ... súboru\". doplňte dve slová)",
    "answer": "pristupovych prav",
    "alt": [],
    "pretests": []
  },
  {
    "id": 190,
    "q": "Doplňte vetu: \"Prístupové práva súboru nastavíme/zmeníme službou ... .\"",
    "answer": "chmod",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 191,
    "q": "Uveďte maximálny počet parametrov služby chmod(). (viď man 2 chmod. Počet vyjadrite číslom v desiatkovej sústave)",
    "answer": "2",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 192,
    "q": "Uveďte minimálny počet parametrov služby chmod(). (viď man 2 chmod. Počet vyjadrite číslom v desiatkovej sústave)",
    "answer": "2",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 193,
    "q": "Uveďte typ návratovej hodnoty služby chmod() (podľa man 2 chmod.)",
    "answer": "int",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 194,
    "q": "Akú hodnotu vráti služba chmod() po svojom úspešnom vykonaní? (viď sekcia RETURN VALUE manulálovej stránky man 2 chmod; hodnotu špecifikujte niektorou z relácií <, >, <=, >=, =, != a číslom bez medzier!)",
    "answer": "=0",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 195,
    "q": "Akú hodnotu vráti služba chmod() po svojom neúspešnom vykonaní? hodnotu špecifikujte celým číslom bez typovej konverzie!)",
    "answer": "-1",
    "alt": [],
    "pretests": []
  },
  {
    "id": 196,
    "q": "Uveďte názov globálnej premennej, v ktorej jadro (kernel) vráti kód chyby po neúspešnom vykonaní služby chmod ? (viď sekcia RETURN VALUE manulálovej stránky man 2 chmod",
    "answer": "errno",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 197,
    "q": "Uveďte význam (sémantiku) návratovej hodnoty služby chmod() pri úspešnom vykonaní služby (viď sekcia RETURN VALUE manulálovej stránky man 2 chmod)",
    "answer": "vracia nulu",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 198,
    "q": "Doplňte vetu: \"Služba chown() slúži na zmenu/nastavenie .... súboru\". doplňte jedno slovo)",
    "answer": "vlastnika",
    "alt": [],
    "pretests": []
  },
  {
    "id": 199,
    "q": "Doplňte vetu: \"Vlastníka súboru zmeníme/nastavíme službou ... .\"",
    "answer": "chown",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 200,
    "q": "Uveďte maximálny počet parametrov služby chown(). (viď man 2 chown. Počet vyjadrite číslom)",
    "answer": "3",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 201,
    "q": "Uveďte minimálny počet parametrov služby chown(). (viď man 2 chown. Počet vyjadrite číslom)",
    "answer": "3",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 202,
    "q": "Uveďte typ návratovej hodnoty služby chown() (podľa man 2 chown).",
    "answer": "int",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 203,
    "q": "Akú hodnotu vráti služba chown() po svojom úspešnom vykonaní? hodnotu špecifikujte niektorou z relácií <, >, <=, >=, =, != a číslom bez medzier!)",
    "answer": "=0",
    "alt": [],
    "pretests": []
  },
  {
    "id": 204,
    "q": "Akú hodnotu vráti služba chown() po svojom neúspešnom vykonaní? hodnotu špecifikujte celým číslom bez typovej konverzie!)",
    "answer": "-1",
    "alt": [],
    "pretests": []
  },
  {
    "id": 205,
    "q": "Uveďte názov globálnej premennej, v ktorej jadro (kernel) vráti kód chyby po neúspešnom vykonaní služby chown ? (viď sekcia RETURN VALUE manulálovej stránky man 2 chown",
    "answer": "errno",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 206,
    "q": "Uveďte význam (sémantiku) návratovej hodnoty služby chown pri úspešnom vykonaní služby (viď sekcia RETURN VALUE manulálovej stránky man 2 chown).",
    "answer": "vracia nulu",
    "alt": [
      "vrachia nulu"
    ],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 207,
    "q": "te zoznam služieb relevatných k téme \"ovládanie zariadení\".Služby uveďte v poradí, v akom sú uvedené v dokumente, oddelené práve jednou medzerou",
    "answer": "ioctl() tcgetattr() tcsetattr()",
    "alt": [],
    "pretests": []
  },
  {
    "id": 208,
    "q": "Uveďte zoznam dátových štruktúr relevatných k téme \"ovládanie zariadení\". (Podľa Sofie, Téma: Ovládanie zariadení, terminálová disciplína, str. 2. Dátové štruktúry uveďte v poradí, v akom sú uvedené v dokumente, oddelené práve jednou medzerou).",
    "answer": "termios",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 209,
    "q": "Doplňte vetu: \"Operačný systém UNIX/Linux, podobne ako väčšina oper. systémov, komunikuje s technickým vybavením počítača pomocou programových komponentov zvaných ... ... (Viď Sofia, dve slová).",
    "answer": "ovládače zariadení",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 210,
    "q": "Doplňte vetu: \"Zariadenie, do ktorého OS zapisuje dáta ako sekvenčnú postupnosť bajtov, nazývame zariadením ... (viď Sofia; pozor na správny pád doplňovaného slova).",
    "answer": "znakovým",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 211,
    "q": "Doplňte vetu: \"Zariadenie, do ktorého OS zapisuje dáta v blokoch stanovenej veľkosti, nazývame zariadením ... (viď Sofia).",
    "answer": "blokovým",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 212,
    "q": "Uveďte úplné meno súboru (úplná cesta a názov súboru), ktorý reprezentuje zariadenie - genericky terminál (aktuálny terminál, riadiaci terminál procesu)",
    "answer": "/dev/tty",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 213,
    "q": "Ktorým príkazom OS UNIX/Linux získame meno špeciálneho súboru, ktorý reprezentuje klávesnicu/monitor? (nie generický terminál)",
    "answer": "tty",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 214,
    "q": "Uveďte príkaz, ktorým vypneme zobrazovanie znakov na obrazovku (jednotlivé časti príkazu oddeľte vždy práve jednou medzerou)",
    "answer": "stty -echo",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 215,
    "q": "Uveďte príkaz, ktorým zapneme zobrazovanie znakov na obrazovku (jednotlivé časti príkazu oddeľte vždy práve jednou medzerou)",
    "answer": "stty echo",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 216,
    "q": "Uveďte príkaz, ktorým sa zobrazujú resp. nastavujú parametre terminálu",
    "answer": "stty",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 217,
    "q": "Uveďte názov služby, ktorá poskytuje rozhranie pre riadenie periférnych zariadení",
    "answer": "ioctl()",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 218,
    "q": "Uveďte názov funkcie, ktorá zjednodušuje zisťovanie atribútov terminálu oproti službe ioctl()",
    "answer": "tcgetattr",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 219,
    "q": "Uveďte názov funkcie, ktorá zjednodušuje nastavovanie atribútov terminálu oproti službe ioctl()",
    "answer": "tcsetattr",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 220,
    "q": "Krátko a výstižne opíšte účel služby umask().",
    "answer": "Pomocou služby umask() (maska práv) môžeme počas behu programu ešte ovplyvniť práva vytváraného súboru. Maska špecifikuje, ktoré práva budú z hodnoty parametra mode odobrané.Maska práv je väčšinou nastavovaná raz - pri prihlásení - konfiguračným súborom shell-u a zvyčajne už nie je menená. Spravidla je nastavená na hodnotu 022 (odobratie práva zápisu do súboru pre skupinu a ostatných). Ak chceme nastaviť špecifickú masku práv, môžeme tak urobiť pred spustením programu príkazom umask alebo v programe službou umask().",
    "alt": [],
    "pretests": []
  },
  {
    "id": 221,
    "q": "Krátko a výstižne opíšte účel služby umask(). (Nebojte sa používať rozvité vety, odpoveď bude vyhodnotená vyučujúcim)",
    "answer": "...",
    "alt": [],
    "pretests": []
  },
  {
    "id": 222,
    "q": "Krátko a výstižne opíšte účel služby chmod().",
    "answer": "Pomocou tejto služby môžeme meniť prístupové práva k súboru. Z bezpečnostných dôvodov len užívateľ root alebo vlastník súborov môže meniť práva súboru.",
    "alt": [],
    "pretests": []
  },
  {
    "id": 223,
    "q": "Krátko a výstižne opíšte účel ovládačov zariadení. (Nebojte sa používať rozvité vety, odpoveď bude vyhodnotená vyučujúcim)",
    "answer": "Ovládač zariadenia (drajver, driver) je počitačový program, ktorý umožňuje komunikáciu operačného systému s hardvérovým zariadením.",
    "alt": [],
    "pretests": []
  },
  {
    "id": 224,
    "q": "Uveďte aké prístupové práva bude mať súbor „abc\" po vykonaní fragmentu programu  . . . umask(003); open(\"abc\",O_RDWR|O_CREAT,0770); . . . Predpokladáme, že súbor „abc\" neexistoval.",
    "answer": "0770",
    "alt": [],
    "pretests": []
  },
  {
    "id": 225,
    "q": "Aký je najmenší počet argumentov (parametrov) funkcie main() - začiatok vykonávania C programu?\n(Odpoveď zadajte číslom)",
    "answer": "0",
    "alt": [],
    "pretests": [
      "T4 – Príprava na cvičenie v 5. týždni"
    ]
  },
  {
    "id": 226,
    "q": "Aký je maximálny počet argumentov (parametrov) funkcie main() - začiatok vykonávania C programu?",
    "answer": "3",
    "alt": [],
    "pretests": [
      "T4 – Príprava na cvičenie v 5. týždni"
    ]
  },
  {
    "id": 227,
    "q": "Uveďte počet argumentov (parametrov) služby execve()?",
    "answer": "3",
    "alt": [],
    "pretests": [
      "T4 – Príprava na cvičenie v 5. týždni"
    ]
  },
  {
    "id": 228,
    "q": "Uveďte počet argumentov (parametrov) služby fork(). (Číslom)",
    "answer": "0",
    "alt": [],
    "pretests": [
      "T4 – Príprava na cvičenie v 5. týždni"
    ]
  },
  {
    "id": 229,
    "q": "Uveďte počet argumentov (parametrov) služby wait()?",
    "answer": "1",
    "alt": [],
    "pretests": [
      "T4 – Príprava na cvičenie v 5. týždni"
    ]
  },
  {
    "id": 230,
    "q": "Uveďte počet argumentov (parametrov) služby waitpid()?",
    "answer": "3",
    "alt": [],
    "pretests": [
      "T4 – Príprava na cvičenie v 5. týždni"
    ]
  },
  {
    "id": 231,
    "q": "Uveďte počet argumentov (parametrov) služby getpid()?",
    "answer": "0",
    "alt": [],
    "pretests": [
      "T4 – Príprava na cvičenie v 5. týždni"
    ]
  },
  {
    "id": 232,
    "q": "Uveďte počet argumentov (parametrov) služby getppid()?",
    "answer": "0",
    "alt": [],
    "pretests": [
      "T4 – Príprava na cvičenie v 5. týždni"
    ]
  },
  {
    "id": 233,
    "q": "Uveďte typ návratovej hodnoty funkcie main()?",
    "answer": "int",
    "alt": [],
    "pretests": [
      "T4 – Príprava na cvičenie v 5. týždni"
    ]
  },
  {
    "id": 234,
    "q": "Uveďte typ návratovej hodnoty služby execve()?",
    "answer": "int",
    "alt": [],
    "pretests": [
      "T4 – Príprava na cvičenie v 5. týždni"
    ]
  },
  {
    "id": 235,
    "q": "Uveďte typ návratovej hodnoty služby fork()?",
    "answer": "pid_t",
    "alt": [
      "int"
    ],
    "pretests": [
      "T4 – Príprava na cvičenie v 5. týždni"
    ]
  },
  {
    "id": 236,
    "q": "Uveďte typ návratovej hodnoty služby wait()?",
    "answer": "pid_t",
    "alt": [
      "int"
    ],
    "pretests": [
      "T4 – Príprava na cvičenie v 5. týždni"
    ]
  },
  {
    "id": 237,
    "q": "Uveďte typ návratovej hodnoty služby waitpid()?",
    "answer": "pid_t",
    "alt": [
      "int"
    ],
    "pretests": [
      "T4 – Príprava na cvičenie v 5. týždni"
    ]
  },
  {
    "id": 238,
    "q": "Uveďte typ návratovej hodnoty služby getpid()?",
    "answer": "pid_t",
    "alt": [
      "int"
    ],
    "pretests": [
      "T4 – Príprava na cvičenie v 5. týždni"
    ]
  },
  {
    "id": 239,
    "q": "Uveďte typ návratovej hodnoty služby getppid()?",
    "answer": "pid_t",
    "alt": [
      "int"
    ],
    "pretests": [
      "T4 – Príprava na cvičenie v 5. týždni"
    ]
  },
  {
    "id": 240,
    "q": "Akú návratovú hodnotu vracia funkcia exit() po svojom úspešnom vykonaní do programu, ktorý ju 'aktivoval'/vyvolal? (Jedno slovo)",
    "answer": "žiadnu",
    "alt": [],
    "pretests": [
      "T4 – Príprava na cvičenie v 5. týždni"
    ]
  },
  {
    "id": 241,
    "q": "Akú návratovú hodnotu vracia funkcia execve() po svojom úspešnom vykonaní do programu, ktorý ju 'aktivoval'/vyvolal? (Jedno slovo)",
    "answer": "žiadnu",
    "alt": [],
    "pretests": [
      "T4 – Príprava na cvičenie v 5. týždni"
    ]
  },
  {
    "id": 242,
    "q": "Doplňte tvrdenie: Služba execve() slúži na ... programu. (Sofia alebo man 2 execve)",
    "answer": "spustenie",
    "alt": [],
    "pretests": [
      "T4 – Príprava na cvičenie v 5. týždni"
    ]
  },
  {
    "id": 243,
    "q": "Doplňte tvrdenie: Služba fork() slúži na vytvorenie ... ... . (dve slová - Sofia alebo man 2 fork)",
    "answer": "dcérskeho procesu",
    "alt": [],
    "pretests": [
      "T4 – Príprava na cvičenie v 5. týždni"
    ]
  },
  {
    "id": 244,
    "q": "Doplňte tvrdenie: Služba wait() slúži na ... vykonávania rodičovského procesu . (Sofia alebo man 2 wait)",
    "answer": "pozastavenie",
    "alt": [],
    "pretests": [
      "T4 – Príprava na cvičenie v 5. týždni"
    ]
  },
  {
    "id": 245,
    "q": "Doplňte tvrdenie: Služba waitpid() slúži na ... vykonávania rodičovského procesu . (Sofia alebo man 2 waitpid)",
    "answer": "pozastavenie",
    "alt": [],
    "pretests": [
      "T4 – Príprava na cvičenie v 5. týždni"
    ]
  },
  {
    "id": 246,
    "q": "Doplňte tvrdenie: Služba getpid() slúži na zistenie ID ... . (Sofia alebo man 2 getpid)",
    "answer": "procesu",
    "alt": [],
    "pretests": [
      "T4 – Príprava na cvičenie v 5. týždni"
    ]
  },
  {
    "id": 247,
    "q": "Doplňte tvrdenie: Služba getppid() slúži na zistenie ID ... procesu. (Sofia alebo man 2 getpid)",
    "answer": "rodiča",
    "alt": [],
    "pretests": [
      "T4 – Príprava na cvičenie v 5. týždni"
    ]
  },
  {
    "id": 248,
    "q": "Doplňte tvrdenie: Služba/funkcia exit() slúži na ... procesu. (Sofia alebo man 2 exit)",
    "answer": "ukončenie",
    "alt": [],
    "pretests": [
      "T4 – Príprava na cvičenie v 5. týždni"
    ]
  },
  {
    "id": 249,
    "q": "Uveďte názov funkcie, ktorej služba execve() \"odovzdá riadenie\" v spustenom programe napísanom v jazuky C (man 2 execve, sekcia DESCRIPTION)",
    "answer": "main",
    "alt": [],
    "pretests": [
      "T4 – Príprava na cvičenie v 5. týždni"
    ]
  },
  {
    "id": 250,
    "q": "Doplňte tvrdenie: Služba wait() vráti ID procesu .... potomka. (man 2 wait, sekcia RETURN VALUE)",
    "answer": "ukončeného",
    "alt": [],
    "pretests": [
      "T4 – Príprava na cvičenie v 5. týždni"
    ]
  },
  {
    "id": 251,
    "q": "Krátko a výstižne opíšte účel služby execve(). (Nebojte sa používať rozvité vety, odpoveď bude vyhodnotená vyučujúcim)",
    "answer": "služba jadra execve() môže priradiť nový program novovytvorenému procesu (ale nielen jemu).jej prvým parametrom je názov spustiteľného programu, ktorý má proces vykonávať. Ďalším parametrom má byť pole argumentov, ktoré chceme danému spúšťanému programu odovzdať. Posledný parameter určuje vlastnosti prostredia (environment) spúšťaného programu.",
    "alt": [],
    "pretests": []
  },
  {
    "id": 252,
    "q": "Krátko a výstižne opíšte účel služby fork(). (Nebojte sa používať rozvité vety, odpoveď bude vyhodnotená vyučujúcim)",
    "answer": "služba fork() pri vytváraní procesov vytvorí (takmer) identický proces - klon (to, ktoré vlastnosti zdedí potomok od rodiča, si Sofia pozrie v študijnej literatúre.).",
    "alt": [],
    "pretests": []
  },
  {
    "id": 253,
    "q": "Krátko a výstižne opíšte účel služby wait(). (Nebojte sa používať rozvité vety, odpoveď bude vyhodnotená vyučujúcim)",
    "answer": "službu jadra wait() používame aby zistiť, čí potomok procesu už skončil a s akým návratovým kódom.",
    "alt": [],
    "pretests": []
  },
  {
    "id": 254,
    "q": "Krátko a výstižne opíšte účel služby chown().",
    "answer": "zmení používateľa/skupinu.",
    "alt": [],
    "pretests": []
  },
  {
    "id": 255,
    "q": "Uveďte názov služby jadra, ktorou môžeme získať hodnotu ekvivalentnú návratovej hodnote volania jadra lseek(fd,0,SEEK_END). Hodnota musí byť ekvivalentná nielen číselne, ale aj svojou sémantikou (významom). Pozn. službu môžme zavolať iba raz, bez ohľadu na veľkosť súboru.",
    "answer": "stat",
    "alt": [],
    "pretests": []
  },
  {
    "id": 256,
    "q": "Uveďte príznak, resp. kombináciu príznakov (korektný syntaktický zápis v jazyku C bez akýchkoľvek medzier), ktoré musíme použiť, ak chceme, pri sprístupňovaní súboru v programe pre čítanie a/alebo zápis, zabrániť prepísaniu existujúceho súboru.",
    "answer": "O_CREAT|O_EXCL",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 257,
    "q": "Uveďte príznak, resp. kombináciu príznakov (korektný synaktický zápis v jazyku C bez akýchkoľvek medzier), ktoré musíme použiť, ak chceme, pri sprístupňovaní súboru v programe pre čítanie a/alebo zápis, zabrániť prepísaniu obsahu existujúceho súboru",
    "answer": "O_APPEND",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 258,
    "q": "Uveďte (číslom) návratovú hodnotu, ktorú vráti systémové volanie 'read(0,buff,3)' po svojom úspešnom vykonaní a prenesení požadovaného počtu bajtov.",
    "answer": "3",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 259,
    "q": "Uveďte (číslom) návratovú hodnotu, ktorú vráti systémové volanie 'write(2,buff,8)'  po svojom úspešnom vykonaní.",
    "answer": "8",
    "alt": [],
    "pretests": []
  },
  {
    "id": 260,
    "q": "Veľkosť súboru je 82 bajtov. Aktuálna pozícia súborového kurzora je 41, fd má hodnotu 5. Uveďte (číslom) návratovú hodnotu, ktorú vráti systémové volanie 'lseek(fd,21L,SEEK_SET)'  po svojom úspešnom vykonaní.",
    "answer": "21",
    "alt": [],
    "pretests": []
  },
  {
    "id": 261,
    "q": "Veľkosť súboru je 91 bajtov. Aktuálna pozícia súborového kurzora je 29, fd má hodnotu 5. Uveďte (číslom) návratovú hodnotu, ktorú vráti systémové volanie 'lseek(fd,0L,SEEK_CUR)'  po svojom úspešnom vykonaní.",
    "answer": "29",
    "alt": [],
    "pretests": []
  },
  {
    "id": 262,
    "q": "Veľkosť (!!!) súboru je 100 bajtov. Aktuálna pozícia súborového kurzora je 21, fd má hodnotu 5. Uveďte (číslom) návratovú hodnotu, ktorú vráti systémové volanie 'lseek(fd,9L,SEEK_END)'  po svojom úspešnom vykonaní.",
    "answer": "109",
    "alt": [],
    "pretests": []
  },
  {
    "id": 263,
    "q": "Veľkosť (!!!) súboru je 80 bajtov. Aktuálna pozícia súborového kurzora je 25, fd má hodnotu 5. Uveďte (číslom) návratovú hodnotu, ktorú vráti systémové volanie 'lseek(fd,-7L,SEEK_SET)' po svojom vykonaní.",
    "answer": "-1",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 264,
    "q": "Veľkosť (!!!) súboru je 83 bajtov. Aktuálna pozícia súborového kurzora je 20, fd má hodnotu 5. Uveďte (číslom) návratovú hodnotu, ktorú vráti systémové volanie 'lseek(fd,-11L,SEEK_SET)'  po svojom vykonaní.",
    "answer": "-1",
    "alt": [],
    "pretests": []
  },
  {
    "id": 265,
    "q": "Majme súbor qwe.txt, ktorého aktuálny stav v mieste vykonania služby read() je definovaný takto:       Znaky:        anrcnmouhwyjpmbwpjdbkoupie  Pozicia:      00000000001111111111222222                01234567890123456789012345  Ukazovatel:   ...................^    a fragmnet kodu:  t//--------- zaciatok fragmnetu  tint fd,i;  tchar buffer[80];  t...  tfd=open(\"qwe.txt\",O_RDONLY);  t...  ti=read(fd,buffer,6);  tprintf(\"%d\",i);  t...  t//--------- koniec fragmnetu       Špecifikujte postupnosť znakov, ktoré do vyrovnávacej pamäte \"buffer\" umiestni   fragment kódu v jazyku C uvedený vyššie. Predpokladáme, že sa obe služby vykonajú   korektne. (Reťazec špecifikujte presne aj so zohľadnením malých a veľkých písmen.)",
    "answer": "bkoupi",
    "alt": [],
    "pretests": []
  },
  {
    "id": 266,
    "q": "Majme súbor qwe.txt, ktorého aktuálny stav v mieste vykonania služby read() je   definovaný takto:       Znaky:        ghpyngsjbettperycucoafopbr  Pozicia:      00000000001111111111222222                01234567890123456789012345  Ukazovatel:   .....................^    a fragmnet kodu:  t//--------- zaciatok fragmnetu  tint fd,i;  tchar buffer[80];  t...  tfd=open(\"qwe.txt\",O_RDONLY);  t...  ti=read(fd,buffer,7);  tprintf(\"%d\",i);  t...  t//--------- koniec fragmnetu       Špecifikujte postupnosť znakov, ktoré do vyrovnávacej pamäte \"buffer\" umiestni   fragment kódu v jazyku C uvedený vyššie. Predpokladáme, že sa obe služby vykonajú   korektne. (Reťazec špecifikujte presne aj so zohľadnením malých a veľkých písmen.)",
    "answer": "fopbr",
    "alt": [],
    "pretests": []
  },
  {
    "id": 267,
    "q": "Majme súbor qwe.txt, aktuálny stav ktorého (obsah a súborový kurzor) je  <u>v mieste vykonania služby write()</u> definovaný takto:   Znaky:         qijqfdfryu Pozicia:       0123456789 Ukazovatel:    ___^       a fragmnet kodu:        //--------- zaciatok fragmnetu        int fd,i;        char buffer[80]=\"PKUJHKETKK\";        ...        i=write(fd,&buffer[5],2);         ...        //--------- koniec fragmnetu   Špecifikujte vo forme reťazca obsah súboru qwe.txt po vykonaní uvedeného fragmentu  kódu v jazyku C.  (Reťazec špecifikujte presne aj so zohľadnením malých a veľkých písmen.)",
    "answer": "qijKEdfryu",
    "alt": [],
    "pretests": []
  },
  {
    "id": 268,
    "q": "Majme súbor qwe.txt, aktuálny stav ktorého (obsah a súborový kurzor) je  definovaný takto:   Znaky:         ovmeojkwel Pozicia:       0123456789   a fragmnet kodu:         //--------- zaciatok fragmnetu       int fd,i;       char buffer[80]=\"GXCQQ\";       ...       fd=open(\"qwe.txt\",O_WRONLY|O_APPEND);       i=write(fd,buffer,4);         ...       //--------- koniec fragmnetu   Špecifikujte vo forme reťazca obsah súboru qwe.txt po vykonaní uvedeného fragmentu  kódu v jazyku C.<p> Pozn.  1.Reťazec špecifikujte presne aj so zohľadnením malých a veľkých písmen.   2.Nezabudnite zohľadniť príznaky (flags) služby open().  3.Predpokladáme, že všetky služby sa vykonajú korektne. </p>",
    "answer": "ovmeojkwelGXCQ",
    "alt": [],
    "pretests": []
  },
  {
    "id": 269,
    "q": "Majme súbor qwe.txt, aktuálny stav ktorého pred volanim sluzby open()  je definovaný takto:    Znaky:    t  ojoqasmjtg Pozicia:t  0123456789 Ukazovatel:                  a fragmnet kodu: t//--------- zaciatok fragmnetu tint fd,i; tchar buffer[80]= \"KFRDGPSJBC\"; t... tfd=open(\"qwe.txt\",O_RDWR); tlseek(fd,5,SEEK_SET) tread(fd,buffer,1); tlseek(fd,5,SEEK_SET) twrite(fd,buffer,3);       ... t//--------- koniec fragmnetu    Špecifikujte obsah súboru po vykonaní fragmentu kodu v programe v jazyku C,  za predpokladu, ze sa všetky služby vykonajú korektne.",
    "answer": "ojoqasFRtg",
    "alt": [],
    "pretests": []
  },
  {
    "id": 270,
    "q": "Potrebujete zrealizovať program, ktorý realizuje nasledujúcu činnosť:<p>prekopíruje obsah súboru <u>zadaného na štandardnom vstupe</u> do súboru <u>zadaného na príkazovom riadku</u> (teda v jednom prípade využije presmerovanie vstupu)Vyberte <u>minimálny</u> súbor služieb jadra operačného systému UNIX/Linux, ktoré musíte použiť pre napísanie takéhoto programu. </p> Možnosti:a.topen()b.tread()c.twrite()d.tlseek()e.tstat()f.tlink()g.tumask()h.tftruncate()i.tchmod()j.tchown()k.topendir()l.treaddir() Odpoveď špecifikujte ako postupnosť písmen, ktorými sú služby označené v zozname služieb, v abecednom poradí v sekcii možnosti. (t.j. napr. ak chcete uviesť služby link(), read() a chown() zadáte bfj).",
    "answer": "abc",
    "alt": [],
    "pretests": []
  },
  {
    "id": 271,
    "q": "Doplňte vetu: \"Služby stat(), lstat() a fstat() využívame na ... ... o súbore\". (viď Sofia, napr. služba fstat(), KROK 1)",
    "answer": "získanie informácií",
    "alt": [],
    "pretests": []
  },
  {
    "id": 272,
    "q": "Doplňte vetu: \"Služba link() slúži na vytvorenie ... mena súboru\" (viď man 2 link).",
    "answer": "nového",
    "alt": [],
    "pretests": []
  },
  {
    "id": 273,
    "q": "Doplňte vetu: \"Služba unlink() slúži na zmazanie .... mena súboru\". (viď man 2 unlink)",
    "answer": "alternatívneho",
    "alt": [],
    "pretests": []
  },
  {
    "id": 274,
    "q": "Doplňte vetu: \"Služba truncate() slúži na nastavenie novej .... súboru\". (viď man 2 truncate)",
    "answer": "dĺžky",
    "alt": [],
    "pretests": []
  },
  {
    "id": 275,
    "q": "Akú hodnotu vráti služba dup() po svojom úspešnom vykonaní? (Hodnotu špecifikujte niektorou z relácií <, >, <=, >=, =, != a číslom, bez medzier!)",
    "answer": ">=0",
    "alt": [],
    "pretests": []
  },
  {
    "id": 276,
    "q": "Doplňte vetu: \"Nový odkaz vo forme mena súboru na už existujúci súbor vytvoríme službou ... .\"",
    "answer": "link",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 277,
    "q": "Uveďte význam (sémantiku) návratovej hodnoty služieb dup() a dup2()? (viď sekcia RETURN VALUE manulálovej stránky man 2 dup(). Pozn. Dve, prípadne tri slová, bez slovesa a po slovensky.",
    "answer": "nový deskriptor",
    "alt": [],
    "pretests": []
  },
  {
    "id": 278,
    "q": "Uveďte význam (sémantiku) návratovej hodnoty služieb stat(), lstat() a fstat(), po úspešnom vykonaní služby? (viď sekcia RETURN VALUE manulálovej stránky man 2 stat() )",
    "answer": "vracia nulu",
    "alt": [],
    "pretests": []
  },
  {
    "id": 279,
    "q": "Uveďte význam (sémantiku) návratovej hodnoty služieb link()  a unlink(), po úspešnom vykonaní služby? (viď sekcia RETURN VALUE manulálovej stránky man 2 link() )",
    "answer": "vracia nulu",
    "alt": [],
    "pretests": []
  },
  {
    "id": 280,
    "q": "V premennej akého typu vráti funkcia stat() informáciu o súbore? Uveďte iba typ premennej, nie premennú samotnú!\nOdpoveď uveďte podľa syntaxe jazyka C.",
    "answer": "struct stat",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 281,
    "q": "Akú hodnotu vráti funkcia opendir() v prípade chyby? (viď sekcia RETURN VALUE)",
    "answer": "NULL",
    "alt": [],
    "pretests": []
  },
  {
    "id": 282,
    "q": "Akú hodnotu vráti funkcia readdir() v prípade chyby? (viď sekcia RETURN VALUE)",
    "answer": "NULL",
    "alt": [],
    "pretests": []
  },
  {
    "id": 283,
    "q": "Vyjadrite aké práva nastavíme súboru „file“ službou  chmod(“file”,0422)  Nastavené práva vyjadrite vo forme  rwxrwxrwx uvedením písmen r,w,x tam, kde je právo pridelené a znakom “-“ (minus), kde právo udelené nie je. Nezabudnite na úvodné mínus, indikujúce, že ide o obyčajný súbor.",
    "answer": "-r---w--w-",
    "alt": [],
    "pretests": []
  },
  {
    "id": 284,
    "q": "Požadujeme pre súbor „file“ nastaviť prístupové práva na hodnotu -r-xrw-rw-. Uveďte hodnotu osmičkovej konštanty, ktorú použijeme pri volaní služby chmod(). Konštantu zapíšte v tvare korektnej osmičkovej konštanty jazyka C.",
    "answer": "0566",
    "alt": [],
    "pretests": []
  },
  {
    "id": 285,
    "q": "Po zadaní príkazu  $ls –lin  sme dostali nasledujúci výstup:  100 -rw-r--r-- X usr1 group 38 2011-02-26 06:35 hia  102 -rw-r--r-- X usr1 group 38 2011-02-26 06:35 ghq  100 -rw-r--r-- X usr1 group 38 2011-02-26 06:35 mes  103 -rw-r--r-- X usr1 group 38 2011-02-26 06:35 tsl  101 -rw-r--r-- X usr1 group 38 2011-02-26 06:35 zgz  103 -rw-r--r-- X usr1 group 38 2011-02-26 06:35 ytn    Uveďte, ktorý z vyššie uvedených súborov je zaručene identický so súborom  mes Uveďte práve jeden aj vtedy, ak ich je viac (vtedy - hociktorý z nich). Ak žiaden, uveďte “žiadny” alebo “ziadny” (bez úvodzoviek). Súbor mes sa nepočíta. Hodnota tretej položky výpisu bola skrytá – znak X.",
    "answer": "hia",
    "alt": [],
    "pretests": []
  },
  {
    "id": 286,
    "q": "Po zadaní príkazu  $ls –lin  sme dostali nasledujúci výstup: 145 -rw-r--r-- 2 54 19 58 2011-02-26 06:35 ooo    Určte hodnotu premennej  x.d_name,  po úspešnom volaní služby  readdir(&x),  vzťahujúcom sa na horeuvedený súbor.",
    "answer": "ooo",
    "alt": [],
    "pretests": []
  },
  {
    "id": 287,
    "q": "Po zadaní príkazu  $ls –lin  sme dostali nasledujúci výstup: 175 -rw-r--r-- 7 62 66 71 2011-02-26 06:35 ttt    Určte hodnotu premennej  x.st_gid,  po úspešnom volaní služby  stat(”ttt”,&x)  pre horeuvedený súbor.",
    "answer": "66",
    "alt": [],
    "pretests": []
  },
  {
    "id": 288,
    "q": "Po zadaní príkazu  $ls –lin  sme dostali nasledujúci výstup: 155 -rw-r--r-- 4 64 42 29 2011-02-26 06:35 ddd    Určte hodnotu premennej  x.st_ino,  po úspešnom volaní služby  stat(”ddd”,&x)  pre horeuvedený súbor.",
    "answer": "155",
    "alt": [],
    "pretests": []
  },
  {
    "id": 289,
    "q": "Po zadaní príkazu  $ls –lin  sme dostali nasledujúci výstup: 190 -rw-r--r-- 3 77 89 45 2011-02-26 06:35 jjj    Určte hodnotu premennej  x.st_nlink,  po úspešnom volaní služby  stat(”jjj”,&x)  pre horeuvedený súbor.",
    "answer": "3",
    "alt": [],
    "pretests": []
  },
  {
    "id": 290,
    "q": "Po zadaní príkazu  $ls –lin  sme dostali nasledujúci výstup: 160 -rw-r--r-- 8 45 74 59 2011-02-26 06:35 rrr    Určte hodnotu premennej  x.st_size,  po úspešnom volaní služby  stat(”rrr”,&x)  pre horeuvedený súbor.",
    "answer": "59",
    "alt": [],
    "pretests": []
  },
  {
    "id": 291,
    "q": "Po zadaní príkazu  $ls –lin  sme dostali nasledujúci výstup: 172 -rw-r--r-- 4 75 80 31 2011-02-26 06:35 ccc    Určte hodnotu premennej  x.st_uid,  po úspešnom volaní služby  stat(”ccc”,&x)  pre horeuvedený súbor.",
    "answer": "75",
    "alt": [],
    "pretests": []
  },
  {
    "id": 292,
    "q": "Akú hodnotu vráti služba umask() po svojom úspešnom vykonaní? (viď sekcia RETURN VALUE manulálovej stránky man 2 umask; hodnotu špecifikujte niektorou z relácií <, >, <=, >=, =, != a číslom bez medzier!)",
    "answer": ">=0",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 293,
    "q": "Uveďte význam (sémantiku) návratovej hodnoty služby umask() ? (viď sekcia RETURN VALUE manulálovej stránky man 2 umask() Pozn. - bez slovesa; po slovensky; v prvom páde (nominatív)",
    "answer": "predchádzajúca hodnota",
    "alt": [],
    "pretests": []
  },
  {
    "id": 294,
    "q": "Doplňte vetu: \"Služba chmod() slúži na zmenu/nastavenie .... ... súboru\". (viď Sofia, služba chmod(), KROK 1; doplňte dve slová)",
    "answer": "prístupových práv",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 295,
    "q": "Uveďte maximálny počet parametrov služby  chmod(). (viď man 2 chmod. Počet vyjadrite číslom v desiatkovej sústave)",
    "answer": "2",
    "alt": [],
    "pretests": []
  },
  {
    "id": 296,
    "q": "Uveďte typ návratovej hodnoty služby chmod() (podľa man 2 chmod.)",
    "answer": "int",
    "alt": [],
    "pretests": []
  },
  {
    "id": 297,
    "q": "Akú hodnotu vráti služba chmod() po svojom úspešnom vykonaní? (viď sekcia RETURN VALUE manulálovej stránky man 2 chmod; hodnotu špecifikujte niektorou z relácií <, >, <=, >=, =, != a číslom bez medzier!)",
    "answer": "=0",
    "alt": [],
    "pretests": []
  },
  {
    "id": 298,
    "q": "Akú hodnotu vráti služba chmod() po svojom neúspešnom vykonaní? (viď sekcia RETURN VALUE manulálovej stránky man 2 chmod; hodnotu špecifikujte celým číslom bez typovej konverzie!)",
    "answer": "-1",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 299,
    "q": "Uveďte názov globálnej premennej, v ktorej jadro (kernel) vráti kód chyby po neúspešnom vykonaní služby chmod ? (viď sekcia RETURN VALUE manulálovej stránky man 2 chmod",
    "answer": "errno",
    "alt": [],
    "pretests": []
  },
  {
    "id": 300,
    "q": "Uveďte význam (sémantiku) návratovej hodnoty služby chmod() pri úspešnom vykonaní služby (viď sekcia RETURN VALUE manulálovej stránky man 2 chmod)",
    "answer": "vracia nulu",
    "alt": [],
    "pretests": []
  },
  {
    "id": 301,
    "q": "Doplňte vetu: \"Služba chown() slúži na zmenu/nastavenie .... súboru\". (viď Sofia, služba chown(), sekcia POSTUP; doplňte jedno slovo)",
    "answer": "vlastníka",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 302,
    "q": "Uveďte maximálny počet parametrov služby  chown(). (viď man 2 chown. Počet vyjadrite číslom)",
    "answer": "3",
    "alt": [],
    "pretests": []
  },
  {
    "id": 303,
    "q": "Akú hodnotu vráti služba chown() po svojom úspešnom vykonaní? (viď sekcia RETURN VALUE manulálovej stránky man 2 chown; hodnotu špecifikujte niektorou z relácií <, >, <=, >=, =, != a číslom bez medzier!)",
    "answer": "=0",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 304,
    "q": "Akú hodnotu vráti služba chown() po svojom neúspešnom vykonaní? (viď sekcia RETURN VALUE manulálovej stránky man 2 chown; hodnotu špecifikujte celým číslom bez typovej konverzie!)",
    "answer": "-1",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 305,
    "q": "Uveďte názov globálnej premennej, v ktorej jadro (kernel) vráti kód chyby po neúspešnom vykonaní služby chown ? (viď sekcia RETURN VALUE manulálovej stránky man 2 chown",
    "answer": "errno",
    "alt": [],
    "pretests": []
  },
  {
    "id": 306,
    "q": "Uveďte význam (sémantiku) návratovej hodnoty služby chown pri úspešnom vykonaní služby (viď sekcia RETURN VALUE manulálovej stránky man 2 chown).",
    "answer": "vracia nulu",
    "alt": [],
    "pretests": []
  },
  {
    "id": 307,
    "q": "Uveďte zoznam služieb relevatných k téme \"ovládanie zariadení\". (Podľa Sofie, Téma: Ovládanie zariadení, terminálová disciplína, str. 2. Služby uveďte v poradí, v akom sú uvedené v dokumente, oddelené práve jednou medzerou).",
    "answer": "ioctl tcgetattr tcsetattr",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 308,
    "q": "Uveďte zoznam dátových štruktúr relevatných k téme \"ovládanie zariadení\". (Podľa Sofie, Téma: Ovládanie zariadení, terminálová disciplína, str. 2. Dátové štruktúry uveďte v poradí, v akom sú uvedené v dokumente, oddelené práve jednou medzerou).",
    "answer": "termios",
    "alt": [],
    "pretests": []
  },
  {
    "id": 309,
    "q": "Doplňte vetu: \"Zariadenie, do ktorého OS zapisuje dáta ako sekvenčnú postupnosť bajtov, nazývame zariadením ...  (viď Sofia; pozor na správny pád doplňovaného slova).",
    "answer": "znakovým",
    "alt": [],
    "pretests": []
  },
  {
    "id": 310,
    "q": "Doplňte vetu: \"Zariadenie, do ktorého OS zapisuje dáta v blokoch stanovenej veľkosti, nazývame zariadením ...  (viď Sofia).",
    "answer": "blokovým",
    "alt": [],
    "pretests": []
  },
  {
    "id": 311,
    "q": "Uveďte aké prístupové práva bude mať súbor „abc“ po vykonaní fragmentu programu     . . .  umask(003);  open(“abc”,O_RDWR|O_CREAT,0751);  . . .    Predpokladáme, že súbor „abc“ neexistoval.",
    "answer": "0750",
    "alt": [],
    "pretests": []
  },
  {
    "id": 312,
    "q": "Aký je najmenší počet argumentov (parametrov) funkcie main() - začiatok vykonávania C programu? (Odpoveď zadajte číslom)",
    "answer": "0",
    "alt": [],
    "pretests": []
  },
  {
    "id": 313,
    "q": "Doplňte tvrdenie: Služba fork() slúži na vytvorenie ... ... . (dve slová - Sofia alebo man 2 fork)",
    "answer": "dcérskeho procesu",
    "alt": [],
    "pretests": []
  },
  {
    "id": 314,
    "q": "Doplňte tvrdenie: Služba wait() slúži na ... vykonávania rodičovského procesu . (Sofia alebo man 2 wait)",
    "answer": "pozastavenie",
    "alt": [],
    "pretests": []
  },
  {
    "id": 315,
    "q": "Doplňte tvrdenie: Služba waitpid() slúži na ... vykonávania rodičovského procesu . (Sofia alebo man 2 waitpid)",
    "answer": "pozastavenie",
    "alt": [],
    "pretests": []
  },
  {
    "id": 316,
    "q": "Doplňte tvrdenie: Služba getpid() slúži na zistenie ID ... . (Sofia alebo man 2 getpid)",
    "answer": "procesu",
    "alt": [],
    "pretests": []
  },
  {
    "id": 317,
    "q": "Doplňte tvrdenie: Služba getppid() slúži na zistenie ID ... procesu. (Sofia alebo man 2 getpid)",
    "answer": "rodiča",
    "alt": [],
    "pretests": []
  },
  {
    "id": 318,
    "q": "Doplňte tvrdenie: Služba/funkcia exit() slúži na ... procesu. (Sofia alebo man 2 exit)",
    "answer": "ukončenie",
    "alt": [],
    "pretests": []
  },
  {
    "id": 319,
    "q": "Uveďte názov funkcie, ktorej služba execve() \"odovzdá riadenie\" v spustenom programe napísanom v jazuky C (man 2 execve, sekcia DESCRIPTION)",
    "answer": "main",
    "alt": [],
    "pretests": []
  },
  {
    "id": 320,
    "q": "Doplňte tvrdenie: Služba wait() vráti ID procesu .... potomka. (man 2 wait, sekcia RETURN VALUE)",
    "answer": "ukončeného",
    "alt": [],
    "pretests": []
  },
  {
    "id": 321,
    "q": "Uveďte skratku kategórie systémových prostriedkov, do ktorej patrí mechanizmus rúr (pipes) (Sofia, pipes, str. 1)",
    "answer": "ipc",
    "alt": [],
    "pretests": []
  },
  {
    "id": 322,
    "q": "Uveďte službu jadra, ktorou vytvoríme nepomenovaný pipe (rúru)",
    "answer": "pipe",
    "alt": [],
    "pretests": []
  },
  {
    "id": 323,
    "q": "Uveďte typ návratovej hodnoty služby pipe() podľa manuálovej stránky",
    "answer": "int",
    "alt": [],
    "pretests": []
  },
  {
    "id": 324,
    "q": "Akú návratovú hodnotu vráti služba pipe(), ak sa jej podarí vytvoriť pipe (rúru)? (špecifikujte relačným operátorom [<, >, <=, >=, =, !=] a číslom; bez medzier!)",
    "answer": "=0",
    "alt": [],
    "pretests": []
  },
  {
    "id": 325,
    "q": "Akú návratovú hodnotu vráti služba pipe(), ak sa jej nepodarí vytvoriť pipe (rúru)? (špecifikujte číslom)",
    "answer": "-1",
    "alt": [],
    "pretests": []
  },
  {
    "id": 326,
    "q": "Ktorý systémový prostriedok využíva mechanizmus pipe (rúr) na dočasné uschovanie dát? (nominatív singuláru)",
    "answer": "pamat",
    "alt": [],
    "pretests": []
  },
  {
    "id": 327,
    "q": "Akú prístupovú disciplínu využíva mechanizmus pipe/rúr (viď napr. Sofia; na jej označenie sa používajú veľké písmená )",
    "answer": "FIFO",
    "alt": [],
    "pretests": []
  },
  {
    "id": 328,
    "q": "Služba pipe() okrem tradičnej návratovej hodnoty vracia aj ďalšie dáta. Aký je typ návratovej hodnoty každej z týchto dátových položiek? (neštrukturovaný dátový typ)",
    "answer": "int",
    "alt": [],
    "pretests": []
  },
  {
    "id": 329,
    "q": "Ktorý zo \"základných\"  príznakov (flag) služby open() charakterizuje filedes[0]?",
    "answer": "O_RDONLY",
    "alt": [],
    "pretests": []
  },
  {
    "id": 330,
    "q": "Ktorý zo \"základných\"  príznakov (flag) služby open() charakterizuje filedes[1]?",
    "answer": "O_WRONLY",
    "alt": [],
    "pretests": []
  },
  {
    "id": 331,
    "q": "Uveďte niektorý z prostriedkov (služby jadra, funkcie, príkazy), pomocou ktorých vieme vytvoriť pomenovaný pipe/rúru (Sofia, pipes, str. 1)",
    "answer": "mkfifo",
    "alt": [],
    "pretests": []
  },
  {
    "id": 332,
    "q": "Uveďte skratku kategórie systémových prostriedkov, do ktorej patrí mechanizmus signálov (Sofia, signaly, str. 1).",
    "answer": "ipc",
    "alt": [],
    "pretests": []
  },
  {
    "id": 333,
    "q": "Uveďte službu jadra, ktorou zaregistrujeme obslužný program prerušenia?",
    "answer": "signal",
    "alt": [],
    "pretests": []
  },
  {
    "id": 334,
    "q": "Koľko parametrov má služba signal()?",
    "answer": "2",
    "alt": [],
    "pretests": []
  },
  {
    "id": 335,
    "q": "Uveďte typ návratovej hodnoty služby signal() podľa manuálovej stránky.",
    "answer": "sighandler_t",
    "alt": [],
    "pretests": []
  },
  {
    "id": 336,
    "q": "Uveďte sémantiku (význam) návratovej hodnoty služby signal() v pojmoch \"objektov\" jazyka C!",
    "answer": "funkcia",
    "alt": [],
    "pretests": []
  },
  {
    "id": 337,
    "q": "Uveďte akú návratovú hodnotu vráti služba signal() v prípade chyby. Hodnotu uveďte ako relevantnú symbolickú konštantu (viď napr. man 2 signal).",
    "answer": "SIG_ERR",
    "alt": [],
    "pretests": []
  },
  {
    "id": 338,
    "q": "Uveďte hodnotu pre obslužný program prerušenia, ktorú musíme použiť vo volaní služby signal(), ak chceme ignorovať konkrétny signál. Hodnotu uveďte ako relevantnú symbolickú konštantu.",
    "answer": "SIG_IGN",
    "alt": [],
    "pretests": []
  },
  {
    "id": 339,
    "q": "Uveďte službu jadra, ktorou môžeme poslať signál procesu.",
    "answer": "kill",
    "alt": [],
    "pretests": []
  },
  {
    "id": 340,
    "q": "Koľko parametrov má služba kill()?",
    "answer": "2",
    "alt": [],
    "pretests": []
  },
  {
    "id": 341,
    "q": "Akú návratovú hodnotu vráti služba kill(), ak sa jej podarí poslať signál? (špecifikujte relačným operátorom [<, >, <=, >=, =, !=] a číslom; bez medzier!)",
    "answer": "=0",
    "alt": [],
    "pretests": []
  },
  {
    "id": 342,
    "q": "Akú návratovú hodnotu vráti služba kill(), ak sa jej nepodarí poslať signál? (špecifikujte číslom)",
    "answer": "-1",
    "alt": [],
    "pretests": []
  },
  {
    "id": 343,
    "q": "Signály sú rozdelené do niekoľkých kategórií. Ako sa volá kategória, pre ktorú podľa \"man 7 signal\" preddefinovaným správaním je ignorovať signál? (Uveďte presne podľa manuálu)",
    "answer": "Ign",
    "alt": [],
    "pretests": []
  },
  {
    "id": 344,
    "q": "Signály sú rozdelené do niekoľkých kategórií. Ako sa volá kategória, pre ktorú podľa \"man 7 signal\" preddefinovaným správaním je ukončiť proces? (Uveďte presne podľa manuálu)",
    "answer": "Term",
    "alt": [],
    "pretests": []
  },
  {
    "id": 345,
    "q": "Uveďte názov signálu pre zastavenie procesu (man 7 signal).",
    "answer": "SIGSTOP",
    "alt": [],
    "pretests": []
  },
  {
    "id": 346,
    "q": "Uveďte názov signálu generovaného pri výskyte chyby výpočtu v pohyblivej rádovej čiarke (man 7 signal).",
    "answer": "SIGFPE",
    "alt": [],
    "pretests": []
  },
  {
    "id": 347,
    "q": "Používateľ má k dispozícii signály pre vlastnú potrebu. Uveďte názov prvého z nich (man 7 signal).",
    "answer": "SIGUSR1",
    "alt": [],
    "pretests": []
  },
  {
    "id": 348,
    "q": "Uveďte číselnú hodnotu pre signál SIGKILL (man 7 signal).",
    "answer": "9",
    "alt": [],
    "pretests": []
  },
  {
    "id": 349,
    "q": "Doplňte: Preddefinovaná činnosť pri výskyte signálu SIGUSR1 je ... procesu\" (man 7 signal)",
    "answer": "ukončenie",
    "alt": [],
    "pretests": []
  },
  {
    "id": 350,
    "q": "Doplňte: Preddefinovaná činnosť pri výskyte signálu SIGSTOP je ... procesu\" (man 7 signal)",
    "answer": "zastavenie",
    "alt": [],
    "pretests": []
  },
  {
    "id": 351,
    "q": "Uveďte skratku kategórie systémových prostriedkov, do ktorej patrí mechanizmus zdieľanej pamäte (Sofia, shm, str. 1).",
    "answer": "ipc",
    "alt": [],
    "pretests": [
      "T6 – Zdieľaná pamäť – príprava na cvičenie v 8. týždni"
    ]
  },
  {
    "id": 352,
    "q": "Uveďte službu jadra, ktorou vytvoríme segment zdieľanej pamäte?",
    "answer": "shmget",
    "alt": [],
    "pretests": [
      "T6 – Zdieľaná pamäť – príprava na cvičenie v 8. týždni"
    ]
  },
  {
    "id": 353,
    "q": "Uveďte službu jadra, ktorou pripojíme segment zdieľanej pamäte do logického adresného priestoru aplikácie?",
    "answer": "shmat",
    "alt": [],
    "pretests": [
      "T6 – Zdieľaná pamäť – príprava na cvičenie v 8. týždni"
    ]
  },
  {
    "id": 354,
    "q": "Uveďte službu jadra, ktorou odpojíme segment zdieľanej pamäte z logického adresného priestoru aplikácie?",
    "answer": "shmdt",
    "alt": [],
    "pretests": [
      "T6 – Zdieľaná pamäť – príprava na cvičenie v 8. týždni"
    ]
  },
  {
    "id": 355,
    "q": "Uveďte službu jadra, ktorou zrušíme segment zdieľanej pamäte?",
    "answer": "shmctl",
    "alt": [],
    "pretests": [
      "T6 – Zdieľaná pamäť – príprava na cvičenie v 8. týždni"
    ]
  },
  {
    "id": 356,
    "q": "Uveďte službu jadra, ktorou vieme zistiť niektoré parametre segmentu zdieľanej pamäte?",
    "answer": "shmctl",
    "alt": [],
    "pretests": [
      "T6 – Zdieľaná pamäť – príprava na cvičenie v 8. týždni"
    ]
  },
  {
    "id": 357,
    "q": "Uveďte službu jadra, ktorou vieme nastaviť niektoré parametre segmentu zdieľanej pamäte?",
    "answer": "shmctl",
    "alt": [],
    "pretests": [
      "T6 – Zdieľaná pamäť – príprava na cvičenie v 8. týždni"
    ]
  },
  {
    "id": 358,
    "q": "Doplňte: \"Služba shmget() vracia ... zdieľanej pamäte.\"",
    "answer": "identifikátor",
    "alt": [],
    "pretests": [
      "T6 – Zdieľaná pamäť – príprava na cvičenie v 8. týždni"
    ]
  },
  {
    "id": 359,
    "q": "Doplňte: \"Na identifikáciu segmentu zdieľanej pamäte, ku ktorému sa chceme pripojiť, používame parameter ... služby shmget().\" (uveďte názov parametra podľa 'man 2 shmget' resp. Sofie)",
    "answer": "key",
    "alt": [],
    "pretests": [
      "T6 – Zdieľaná pamäť – príprava na cvičenie v 8. týždni"
    ]
  },
  {
    "id": 360,
    "q": "Akú hodnotu musí v sebe zahŕňať parameter 'shmflg' služby shmget(), aby sa zabezpečilo vytvorenie segmentu zdieľanej pamäte? (hodnotu špecifikujte symbolickou konštantou)",
    "answer": "IPC_CREAT",
    "alt": [],
    "pretests": [
      "T6 – Zdieľaná pamäť – príprava na cvičenie v 8. týždni"
    ]
  },
  {
    "id": 361,
    "q": "Akú hodnotu musí v sebe zahŕňať parameter 'shmflg' služby shmget(), aby sa zabránilo konfliktom (pripojenie k nechcenému segmentu) pri vytváraní nového segmentu zdieľanej pamäte? (hodnotu špecifikujte symbolickou konštantou)",
    "answer": "IPC_EXCL",
    "alt": [],
    "pretests": [
      "T6 – Zdieľaná pamäť – príprava na cvičenie v 8. týždni"
    ]
  },
  {
    "id": 362,
    "q": "Koľko bitov parametra shmflg služby shmget() slúži na definovanie prístupových práv k segmentu zdieľanej pamäte?",
    "answer": "9",
    "alt": [],
    "pretests": [
      "T6 – Zdieľaná pamäť – príprava na cvičenie v 8. týždni"
    ]
  },
  {
    "id": 363,
    "q": "Ktorý z príznakov prístupových práv nie je podporovaný pre zdieľanú pamäť? (viď 'man 2 shmget'; uveďte symbolicky, vo forme bežne používanej pre súbory)",
    "answer": "x",
    "alt": [],
    "pretests": [
      "T6 – Zdieľaná pamäť – príprava na cvičenie v 8. týždni"
    ]
  },
  {
    "id": 364,
    "q": "Uveďte jeden z hlavičkových súborov, ktorý musíme použiť pre službu shmget().",
    "answer": "sys/ipc.h",
    "alt": [
      "sys/shm.h"
    ],
    "pretests": [
      "T6 – Zdieľaná pamäť – príprava na cvičenie v 8. týždni"
    ]
  },
  {
    "id": 365,
    "q": "Doplňte: \"Služba shmat() vracia ... pripojenej zdieľanej pamäte.\" (jedno slovo; akuzatív)",
    "answer": "adresu",
    "alt": [],
    "pretests": [
      "T6 – Zdieľaná pamäť – príprava na cvičenie v 8. týždni"
    ]
  },
  {
    "id": 366,
    "q": "Akú hodnotu musí mať paramter 'shmaddr' služby shmat(), aby systém sám vybral vhodnú adresu na pripojenie segmentu zdieľanej pamäte? (hodnotu špecifikujte symbolickou konštantou)",
    "answer": "NULL",
    "alt": [],
    "pretests": [
      "T6 – Zdieľaná pamäť – príprava na cvičenie v 8. týždni"
    ]
  },
  {
    "id": 367,
    "q": "Ktorou službou získame hodnotu prvého parametra služby shmat()?",
    "answer": "shmget",
    "alt": [],
    "pretests": [
      "T6 – Zdieľaná pamäť – príprava na cvičenie v 8. týždni"
    ]
  },
  {
    "id": 368,
    "q": "Doplňte: \"Po úspešnom vykonaní služby fork() potomok ... pripojené segmenty zdieľanej pamäte.\" (viď 'man 2 shmat'; jedno slovo)",
    "answer": "zdedí",
    "alt": [],
    "pretests": [
      "T6 – Zdieľaná pamäť – príprava na cvičenie v 8. týždni"
    ]
  },
  {
    "id": 369,
    "q": "Doplňte: \"Po úspešnom vykonaní služby execve() pripojené segmenty zdieľanej pamäte budú ... od procesu.\" (viď 'man 2 shmat'; jedno slovo)",
    "answer": "odpojené",
    "alt": [],
    "pretests": [
      "T6 – Zdieľaná pamäť – príprava na cvičenie v 8. týždni"
    ]
  },
  {
    "id": 370,
    "q": "Doplňte: \"Segment zdieľanej pamäte pri odpojovaní od procesu identifikujeme pomocou jeho ... .\" (viď 'man 2 shmat'; jedno slovo; genitív)",
    "answer": "adresy",
    "alt": [],
    "pretests": [
      "T6 – Zdieľaná pamäť – príprava na cvičenie v 8. týždni"
    ]
  },
  {
    "id": 371,
    "q": "Ktorou službou získame hodnotu parametra služby shmdt()?",
    "answer": "shmat",
    "alt": [],
    "pretests": [
      "T6 – Zdieľaná pamäť – príprava na cvičenie v 8. týždni"
    ]
  },
  {
    "id": 372,
    "q": "Uveďte jeden z všeobecne podporovaných príkazov služby shmctl() (hodnotu špecifikujte symbolickou konštantou).",
    "answer": "IPC_STAT",
    "alt": [
      "IPC_SET",
      "IPC_RMID"
    ],
    "pretests": [
      "T6 – Zdieľaná pamäť – príprava na cvičenie v 8. týždni"
    ]
  },
  {
    "id": 373,
    "q": "Uveďte názov premennej v ktorej získame aktuálny počet pripojení na segment zdieľanej pamäte. Premennú uveďte v tvare \"nazov_struktury.nazov_zlozky\", teda presne tak, ako by ste ju uviedli v zdrojovom kóde jazyka C. Názov záznamu/štruktúry a jej zložky/prvku uveďte podľa 'man 2 shmctl'.",
    "answer": "shmid_ds.shm_nattch",
    "alt": [],
    "pretests": [
      "T6 – Zdieľaná pamäť – príprava na cvičenie v 8. týždni"
    ]
  },
  {
    "id": 374,
    "q": "Uveďte názov premennej prostredníctvom ktorej vieme zmeniť prístupové práva na segment zdieľanej pamäte. Premennú uveďte v tvare \"nazov_struktury.nazov_zlozky\", teda presne tak, ako by ste ju uviedli v zdrojovom kóde jazyka C. Názov záznamu/štruktúry a jej zložky/prvku uveďte podľa 'man 2 shmctl'.",
    "answer": "ipc_perm.mode",
    "alt": [],
    "pretests": [
      "T6 – Zdieľaná pamäť – príprava na cvičenie v 8. týždni"
    ]
  },
  {
    "id": 375,
    "q": "Uveďte názov funkcie pre zabezpečenie jednoznačnosti identifikátora segmentu zdieľanej pamäte (viď sekcia SEE ALSO 'man 2 shmget').",
    "answer": "ftok",
    "alt": [],
    "pretests": [
      "T6 – Zdieľaná pamäť – príprava na cvičenie v 8. týždni"
    ]
  },
  {
    "id": 376,
    "q": "Uveďte priezvisko vedca, ktorý zaviedol koncept semafórov. (viď napr. Wikipedia)",
    "answer": "Dijkstra",
    "alt": [],
    "pretests": []
  },
  {
    "id": 377,
    "q": "Doplňte: \"Semafór je celé číslo, hodnote ktorého nie je dovolené ... pod nulu.\" (viď man 7 sem_overview, alebo http://www.kernel.org/doc/man-pages/online/pages/man7/sem_overview.7.html)",
    "answer": "klesnúť",
    "alt": [],
    "pretests": []
  },
  {
    "id": 378,
    "q": "Nad semafórmi môžeme vykonávať dve operácie. Uveďte jednu z nich, podľa 'man 7 sem_overview'. (Jedno slovo, tak ako je uvedené v manuáli. Nie funkcie, ale názov operácií.)",
    "answer": "inkrement",
    "alt": [],
    "pretests": []
  },
  {
    "id": 379,
    "q": "Uveďte označenie niektorej z 'teoretických' semafórových operácií. (Odpoveď nájdete napr. v Sofii)",
    "answer": "P",
    "alt": [],
    "pretests": []
  },
  {
    "id": 380,
    "q": "Uveďte skratku kategórie systémových prostriedkov, do ktorej patrí mechanizmus semafórov. (Sofia, shm, str. 1)",
    "answer": "ipc",
    "alt": [],
    "pretests": []
  },
  {
    "id": 381,
    "q": "Uveďte službu jadra, ktorou vytvoríme sadu semafórov (pool).",
    "answer": "semget",
    "alt": [],
    "pretests": []
  },
  {
    "id": 382,
    "q": "Doplňte: \"Služba semget() vracia  ... sady semafórov (semaphore pool).\"",
    "answer": "identifikátor",
    "alt": [],
    "pretests": []
  },
  {
    "id": 383,
    "q": "Doplňte: \"Na identifikáciu sady semafórov, ktorú chceme využiť, používame parameter ... služby semget().\" (uveďte názov parametra podľa 'man 2 semget' resp. Sofie)",
    "answer": "key",
    "alt": [],
    "pretests": []
  },
  {
    "id": 384,
    "q": "Doplňte: \"Vytvorenie NOVEJ (neverejnej) sady semafórov, zabezpečíme použitím symbolickej konštanty ... ako hodnoty prvého parametra služby semget().\" (uveďte názov konštanty podľa 'man 2 semget')",
    "answer": "IPC_PRIVATE",
    "alt": [],
    "pretests": []
  },
  {
    "id": 385,
    "q": "Doplňte: \"Druhý parameter služby semget() určuje ... semafórov v semafórovej sade (sade semafórov).\" ('man 2 semget' resp. Sofia)",
    "answer": "počet",
    "alt": [],
    "pretests": []
  },
  {
    "id": 386,
    "q": "Koľko bitov parametra semflg služby semget() slúži na definovanie prístupových práv k sade semafórov?",
    "answer": "9",
    "alt": [],
    "pretests": []
  },
  {
    "id": 387,
    "q": "Ktoré bity parametra semflg, služby semget(), slúžia na definovanie prístupových práv k sade semafórov? (man 2 semget; jedno slovo)",
    "answer": "najnižšie",
    "alt": [],
    "pretests": []
  },
  {
    "id": 388,
    "q": "Akú hodnotu (resp. aké hodnoty) musí v sebe zahŕňať parameter 'semflg' služby shmget(), aby sa zabezpečilo vytvorenie NOVEJ semafórovej sady? (hodnotu špecifikujte ako výraz jazyka C, ktorý bude adekvátnym spôsobom pridaný k zvyšným hodnotám parametra; bez medzier!)",
    "answer": "IPC_CREAT|IPC_EXCL",
    "alt": [],
    "pretests": []
  },
  {
    "id": 389,
    "q": "Ktoré \"prístupové\" právo oprávňuje používateľa meniť hodnoty semafórov v semafórovej sade? (Uveďte pomocou notácie používanej pre prístupové práva súborov vo výpise príkazu ls.)",
    "answer": "w",
    "alt": [],
    "pretests": []
  },
  {
    "id": 390,
    "q": "Akú hodnotu NESMIE mať parameter 'key' služby semget(), ak chceme vytvoriť semafór pre procesy, ktoré NIE SÚ vo vzťahu rodič/potomok.",
    "answer": "IPC_PRIVATE",
    "alt": [],
    "pretests": []
  },
  {
    "id": 391,
    "q": "Uveďte názov funkcie pre zabezpečenie jednoznačnosti identifikátora semafórovej sady (viď sekcia SEE ALSO 'man 2 semget').",
    "answer": "ftok",
    "alt": [],
    "pretests": []
  },
  {
    "id": 392,
    "q": "Uveďte službu jadra, ktorou vykonávame riadiace operácie nad semafórmi resp. semafórovou sadou.",
    "answer": "semctl",
    "alt": [],
    "pretests": []
  },
  {
    "id": 393,
    "q": "Ktorou službou získame hodnotu prvého parametra služby semctl()?",
    "answer": "semget",
    "alt": [],
    "pretests": []
  },
  {
    "id": 394,
    "q": "Ktorým parametrom služby semctl() špecifikujeme semafórovú sadu, ktorej sa týka riadiaca operácia? (Uveďte názov premennej podľa 'man 2 semctl' alebo podľa Sofie.)",
    "answer": "semid",
    "alt": [],
    "pretests": []
  },
  {
    "id": 395,
    "q": "Ktorým parametrom služby semctl() špecifikujeme konkrétny semafór, ktorého sa týka riadiaca operácia? (Uveďte názov premennej podľa 'man 2 semctl' alebo podľa Sofie.)",
    "answer": "semnum",
    "alt": [],
    "pretests": []
  },
  {
    "id": 396,
    "q": "Uveďte, akú hodnotu musí mať parameter 'cmd/command' služby semctl(), ak chceme zmazať semafórovú sadu. (Uveďte hodnotu symbolickej konštanty.)",
    "answer": "IPC_RMID",
    "alt": [],
    "pretests": []
  },
  {
    "id": 397,
    "q": "Uveďte, akú hodnotu musí mať parameter 'cmd/command' služby semctl(), ak chceme inicializovať konkrétny semafór. (Uveďte hodnotu symbolickej konštanty.)",
    "answer": "SETVAL",
    "alt": [],
    "pretests": []
  },
  {
    "id": 398,
    "q": "Uveďte, akú hodnotu musí mať parameter 'cmd/command' služby semctl(), ak chceme zistiť hodnotu konkrétneho semafóra. (Uveďte hodnotu symbolickej konštanty.)",
    "answer": "GETVAL",
    "alt": [],
    "pretests": []
  },
  {
    "id": 399,
    "q": "Návratovou hodnotou služby semctl() pre príkaz GETVAL je .... špecifikovaného semafóra. (viď 'man 2 semctl')",
    "answer": "hodnota",
    "alt": [],
    "pretests": []
  },
  {
    "id": 400,
    "q": "Uveďte názov služby jadra, ktorou realizujeme semafórové operácie.",
    "answer": "semop",
    "alt": [],
    "pretests": []
  },
  {
    "id": 401,
    "q": "Ktorou službou získame hodnotu prvého parametra služby semop()?",
    "answer": "semget",
    "alt": [],
    "pretests": []
  },
  {
    "id": 402,
    "q": "Ktorou službou inicializujeme semafóry semafórovej sady pred ich použitím službou semop()?",
    "answer": "semctl",
    "alt": [],
    "pretests": []
  },
  {
    "id": 403,
    "q": "Doplňte: \"Druhý parameter služby semop() je ... prvkov typu 'struct sembuf').\" ('man 2 semget' resp. Sofia)",
    "answer": "poľom",
    "alt": [],
    "pretests": []
  },
  {
    "id": 404,
    "q": "Doplňte: \"Jednotlivé prvky druhého parametra služby semop() špecifikujú semafórové ... .\" ('man 2 semop' alebo Sofia)",
    "answer": "operácie",
    "alt": [],
    "pretests": []
  },
  {
    "id": 405,
    "q": "Doplňte: \"Počet semafórových operácií nad semafórovou sadou určuje parameter ... služby semop().\" (Uveďte názov premennej zo signatúry funkcie podľa manuálovej stránky alebo Sofie.)",
    "answer": "nsops",
    "alt": [],
    "pretests": []
  },
  {
    "id": 406,
    "q": "Doplňte: \"Množina semafórových operácií špecifikovaných druhým parametrom služby semop() sa vykoná ... .\" (viď 'man 2 semop()', sekcia DESCRIPTION. Môže byť aj anglicky termín použitý v manuáli :)",
    "answer": "atomicky",
    "alt": [],
    "pretests": []
  },
  {
    "id": 407,
    "q": "Doplňte: \"Konkrétna semafórová operácia je špecifikovaná v prvku/zložke … premennej záznamu/štruktúry 'struct sembuf'.\"",
    "answer": "sem_op",
    "alt": [],
    "pretests": []
  },
  {
    "id": 408,
    "q": "Doplňte: \"'V' operácii nad UNIX/Linux semafórom zodpovedá hodnota semafórovej operácie ... .\" (Špecifikujte relačným operátorom [<, >, <=, >=, =, !=] a číslom; bez medzier!)",
    "answer": ">0",
    "alt": [],
    "pretests": []
  },
  {
    "id": 409,
    "q": "Doplňte: \"'P' operácii nad UNIX/Linux semafórom zodpovedá hodnota semafórovej operácie ... .\" (Špecifikujte relačným operátorom [<, >, <=, >=, =, !=] a číslom; bez medzier!)",
    "answer": "<0",
    "alt": [],
    "pretests": []
  },
  {
    "id": 410,
    "q": "Uveďte názov služby jadra pre vytvorenie koncového komunikačného bodu.",
    "answer": "socket",
    "alt": [],
    "pretests": []
  },
  {
    "id": 411,
    "q": "Uveďte hodnotu prvého parametra služby pre vytvorenie koncového komunikačného bodu pre komunikáciu protokolom IPv4 (symbolická konstanta z manualovej stránky)",
    "answer": "PF_INET",
    "alt": [],
    "pretests": []
  },
  {
    "id": 412,
    "q": "Akú hodnotu musí mať druhý parameter služby pre vytvorenie koncového komunikačného bodu pre komunikáciu (transportným) protokolom s potvrdzovaním (spoľahlivý protokol, symbolická konštanta z manuálovej stránky)",
    "answer": "SOCK_STREAM",
    "alt": [],
    "pretests": []
  },
  {
    "id": 413,
    "q": "Akú hodnotu musí mať druhý parameter služby pre vytvorenie koncového komunikačného bodu pre komunikáciu (transportným) protokolom bez potvrdzovania (symbolická konštanta z manuálovej stránky)",
    "answer": "SOCK_DGRAM",
    "alt": [],
    "pretests": []
  },
  {
    "id": 414,
    "q": "Akú hodnotu musí mať druhý parameter služby pre vytvorenie koncového komunikačného bodu pre priamy prístup k sieťovému protokolu (symbolická konštanta z manuálovej stránky)",
    "answer": "SOCK_RAW",
    "alt": [],
    "pretests": []
  },
  {
    "id": 415,
    "q": "Uveďte názov služby jadra, ktorou priradíme adresu koncovému komunikačnému bodu v rámci zvoleného protokolu.",
    "answer": "bind",
    "alt": [],
    "pretests": []
  },
  {
    "id": 416,
    "q": "Uveďte názov argumentu, prostredníctvom ktorého nastavíme adresu koncového komunikačného bodu (podľa mauálovej stránky)",
    "answer": "addr",
    "alt": [],
    "pretests": []
  },
  {
    "id": 417,
    "q": "Uveďte názov zložky/prvku zodpovedajúceho záznamu (štruktúry) pre nastavenie adresy koncového komunikačného bodu v rámci protokolu IP (viď 'man 7 ip'; len názov zložky/prvku, bez názvu záznamu)",
    "answer": "sin_addr",
    "alt": [],
    "pretests": []
  },
  {
    "id": 418,
    "q": "Uveďte názov zložky/prvku zodpovedajúceho záznamu (štruktúry) pre nastavenie portu koncového komunikačného bodu v rámci protokolu IP (viď 'man 7 ip'; len názov zložky/prvku, bez názvu záznamu)",
    "answer": "sin_port",
    "alt": [],
    "pretests": []
  },
  {
    "id": 419,
    "q": "Uveďte názov služby jadra, ktorou 'spasívnime' koncový komunikačný bod aby čakal na prichádzajúce spojenia .",
    "answer": "listen",
    "alt": [],
    "pretests": []
  },
  {
    "id": 420,
    "q": "Uveďte názov parametra zodpovedajúcej služby jadra, ktorý špecifikuje počet požiadaviek, ktoré budú zaznamenané (archivované) v štruktúrach jadra OS počas obsluhy/spracovania aktuálnej požiadavky (podľa manuálovej stránky).",
    "answer": "backlog",
    "alt": [],
    "pretests": []
  },
  {
    "id": 421,
    "q": "Uveďte názov služby, ktorá uspí proces až do príchodu požiadavky na vytvorenie spojenia.",
    "answer": "accept",
    "alt": [],
    "pretests": []
  },
  {
    "id": 422,
    "q": "Ktorou službou získame hodnotu prvého parametra služby accept()?",
    "answer": "socket",
    "alt": [],
    "pretests": []
  },
  {
    "id": 423,
    "q": "Ktorou službou získame hodnotu prvého parametra služby listen()?",
    "answer": "socket",
    "alt": [],
    "pretests": []
  },
  {
    "id": 424,
    "q": "Ktorou službou získame hodnotu prvého parametra služby bind()?",
    "answer": "socket",
    "alt": [],
    "pretests": []
  },
  {
    "id": 425,
    "q": "Ktorá služba nám vráti adresu 'protiľahlého' koncového komunikačného bodu (ten, ktorý žiada o spojenie)",
    "answer": "accept",
    "alt": [],
    "pretests": []
  },
  {
    "id": 426,
    "q": "Ktorou službou jadra odošleme dáta 'protiľahlému' koncovému komunikačnému bodu pri použití doručovania s potvrdzovaním?",
    "answer": "write",
    "alt": [],
    "pretests": []
  },
  {
    "id": 427,
    "q": "Ktorou službou jadra prečítame dáta od 'protiľahlého' koncového komunikačného bodu pri použití doručovania s potvrdzovaním?",
    "answer": "read",
    "alt": [],
    "pretests": []
  },
  {
    "id": 428,
    "q": "Ktorou službou jadra odošleme dáta 'protiľahlému' koncovému komunikačnému bodu pri použití doručovania bez potvrdzovania?",
    "answer": "sendto",
    "alt": [],
    "pretests": []
  },
  {
    "id": 429,
    "q": "Ktorou službou jadra prečítame dáta od 'protiľahlého' koncového komunikačného bodu pri použití doručovania bez potvrdzovania?",
    "answer": "recvfrom",
    "alt": [],
    "pretests": []
  },
  {
    "id": 430,
    "q": "Ktorá služba nám vráti adresu 'protiľahlého' koncového komunikačného bodu pri komunikácii protokolom bez potvrdzovania? (Ten, ktorý žiada o spojenie)",
    "answer": "recvfrom",
    "alt": [],
    "pretests": []
  },
  {
    "id": 431,
    "q": "Uveďte názov služby, ktorou klient nadviaže spojenie so serverom v prípade potvrdzovaného spojenia v rámci IP protokolu",
    "answer": "connect",
    "alt": [],
    "pretests": []
  },
  {
    "id": 432,
    "q": "Uveďte názov protokolu v rámci sieťového protokolu IPv4 pre potvrdzované doručovanie paketov.",
    "answer": "tcp",
    "alt": [],
    "pretests": []
  },
  {
    "id": 433,
    "q": "Uveďte názov protokolu v rámci sieťového protokolu IPv4 pre doručovanie paketov bez potvrdzovania.",
    "answer": "udp",
    "alt": [],
    "pretests": []
  },
  {
    "id": 434,
    "q": "Označme si služby jadra číslami takto:  1.accept()  2.bind()  3.connect()  4.listen()  5.socket()  Určte, ktoré služby a v akom poradí musíme použiť pre zriadenie/iniciáciu procesu-servera (tzv. daemona) pre TCP spojenie. Služby špecifikujte ako postupnosť relevantných číslic bez medzier; napr. 12345.",
    "answer": "5241",
    "alt": [],
    "pretests": []
  },
  {
    "id": 435,
    "q": "Označme si služby jadra číslami takto:  1.accept()  2.bind()  3.connect()  4.listen()  5.socket()  Určte, ktoré služby a v akom poradí musíme použiť pre zriadenie/iniciáciu procesu-klienta pre TCP spojenie. Služby špecifikujte ako postupnosť relevantných číslic bez medzier; napr. 12345.",
    "answer": "53",
    "alt": [],
    "pretests": []
  },
  {
    "id": 436,
    "q": "Uveďte (číslom) návratovú hodnotu, ktorú vráti systémové volanie 'write(2,buff,6)' po svojom úspešnom vykonaní.",
    "answer": "6",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 437,
    "q": "Veľkosť súboru je 57 bajtov. Aktuálna pozícia súborového kurzora je 43, fd má hodnotu 5. Uveďte (číslom) návratovú hodnotu, ktorú vráti systémové volanie 'lseek(fd,45L,SEEK_SET)' po svojom úspešnom vykonaní.",
    "answer": "45",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 438,
    "q": "Veľkosť súboru je 87 bajtov. Aktuálna pozícia súborového kurzora je 25, fd má hodnotu 5. Uveďte (číslom) návratovú hodnotu, ktorú vráti systémové volanie 'lseek(fd,-10L,SEEK_CUR)' po svojom úspešnom vykonaní.",
    "answer": "15",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 439,
    "q": "Veľkosť (!!!) súboru je 101 bajtov. Aktuálna pozícia súborového kurzora je 29, fd má hodnotu 5. Uveďte (číslom) návratovú hodnotu, ktorú vráti systémové volanie 'lseek(fd,-2L,SEEK_SET)' po svojom vykonaní.",
    "answer": "-1",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 440,
    "q": "Majme súbor qwe.txt, ktorého aktuálny stav v mieste vykonania služby read() je definovaný takto:\n  Znaky:        anrcnmouhwyjpmbwpjdbkoupie\n  Pozicia:      00000000001111111111222222\n                01234567890123456789012345\n  Ukazovatel:   ...................^\n\n  a fragmnet kodu:\n        //--------- zaciatok fragmnetu\n        int fd,i;\n        char buffer[80];\n        ...\n        fd=open(\"qwe.txt\",O_RDONLY);\n        ...\n        i=read(fd,buffer,6);\n        printf(\"%d\",i);\n        ...\n        //--------- koniec fragmnetu\n\nŠpecifikujte postupnosť znakov, ktoré do vyrovnávacej pamäte \"buffer\" umiestni fragment kódu v jazyku C uvedený vyššie. Predpokladáme, že sa obe služby vykonajú korektne. (Reťazec špecifikujte presne aj so zohľadnením malých a veľkých písmen.)",
    "answer": "bkoupi",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 441,
    "q": "Majme súbor qwe.txt, aktuálny stav ktorého (obsah a súborový kurzor) je v mieste vykonania služby read() definovaný takto:\n Znaky:        pnywpxsvmiaaoqldhwbnlwlcwr\n Pozicia:      00000000001111111111222222\n               01234567890123456789012345\n Ukazovatel:   .....................^\n\n a fragmnet kodu:\n       //--------- zaciatok fragmentu\n       int fd,i;\n       char buffer[80];\n       ...\n       fd=open(\"qwe.txt\",O_RDONLY);\n       ...\n       i=read(fd,buffer,3);\n       printf(\"%d\",i);\n       ...\n       //--------- koniec fragmentu\n\nŠpecifikujte akú hodnotu premennej i vytlačí fragment kódu v jazyku C. Predpokladáme, že sa obe služby vykonajú korektne.",
    "answer": "3",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 442,
    "q": "Majme súbor qwe.txt, ktorého aktuálny stav v mieste vykonania služby read() je definovaný takto:\n  Znaky:        ghpyngsjbettperycucoafopbr\n  Pozicia:      00000000001111111111222222\n                01234567890123456789012345\n  Ukazovatel:   .....................^\n\n  a fragmnet kodu:\n        //--------- zaciatok fragmnetu\n        int fd,i;\n        char buffer[80];\n        ...\n        fd=open(\"qwe.txt\",O_RDONLY);\n        ...\n        i=read(fd,buffer,7);\n        printf(\"%d\",i);\n        ...\n        //--------- koniec fragmnetu\n\nŠpecifikujte postupnosť znakov, ktoré do vyrovnávacej pamäte \"buffer\" umiestni fragment kódu v jazyku C uvedený vyššie. Predpokladáme, že sa obe služby vykonajú korektne. (Reťazec špecifikujte presne aj so zohľadnením malých a veľkých písmen.)",
    "answer": "fopbr",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 443,
    "q": "Majme súbor qwe.txt, aktuálny stav ktorého (obsah a súborový kurzor) je v mieste vykonania služby read() definovaný takto:\n Znaky:        pnywpxsvmiaaoqldhwbnlwlcwr\n Pozicia:      00000000001111111111222222\n               01234567890123456789012345\n Ukazovatel:   ........................^\n\n a fragmnet kodu:\n       //--------- zaciatok fragmentu\n       int fd,i;\n       char buffer[80];\n       ...\n       fd=open(\"qwe.txt\",O_RDONLY);\n       ...\n       i=read(fd,buffer,5);\n       printf(\"%d\",i);\n       ...\n       //--------- koniec fragmentu\n\nŠpecifikujte akú hodnotu premennej i vytlačí fragment kódu v jazyku C. Predpokladáme, že sa obe služby vykonajú korektne.",
    "answer": "2",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 444,
    "q": "Majme súbor qwe.txt, aktuálny stav ktorého (obsah a súborový kurzor) je v mieste vykonania služby write() definovaný takto:\n Znaky:         qijqfdfryu\n Pozicia:       0123456789\n Ukazovatel:    ___^\n\n a fragmnet kodu:\n        //--------- zaciatok fragmnetu\n        int fd,i;\n        char buffer[80]=\"PKUJHKETKK\";\n        ...\n        i=write(fd,&buffer[5],2);\n         ...\n        //--------- koniec fragmnetu\n\nŠpecifikujte vo forme reťazca obsah súboru qwe.txt po vykonaní uvedeného fragmentu kódu v jazyku C. (Reťazec špecifikujte presne aj so zohľadnením malých a veľkých písmen.)",
    "answer": "qijKEdfryu",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 445,
    "q": "Majme súbor qwe.txt, aktuálny stav ktorého (obsah a súborový kurzor) je definovaný takto:\n Znaky:         ovmeojkwel\n Pozicia:       0123456789\n\na fragmnet kodu:\n       //--------- zaciatok fragmnetu\n       int fd,i;\n       char buffer[80]=\"GXCQQ\";\n       ...\n       fd=open(\"qwe.txt\",O_WRONLY|O_APPEND);\n       i=write(fd,buffer,4);\n         ...\n       //--------- koniec fragmnetu\n\nŠpecifikujte vo forme reťazca obsah súboru qwe.txt po vykonaní uvedeného fragmentu kódu v jazyku C.\nPozn.\n1.Reťazec špecifikujte presne aj so zohľadnením malých a veľkých písmen.\n2.Nezabudnite zohľadniť príznaky (flags) služby open().\n3.Predpokladáme, že všetky služby sa vykonajú korektne.",
    "answer": "ovmeojkwelGXCQ",
    "alt": [],
    "pretests": [
      "T2 – Práca so súbormi I. – príprava na cvičenie v 3. týždni"
    ]
  },
  {
    "id": 446,
    "q": "Vyjadrite aké práva nastavíme súboru „file“ službou\nchmod(“file”,0463)\nNastavené práva vyjadrite vo forme rwxrwxrwx uvedením písmen r,w,x tam, kde je právo pridelené a znakom “-“ (minus), kde právo udelené nie je. Nezabudnite na úvodné mínus, indikujúce, že ide o obyčajný súbor.",
    "answer": "-r--rw--wx",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 447,
    "q": "Požadujeme pre súbor „file“ nastaviť prístupové práva na hodnotu -r----x-wx. Uveďte hodnotu osmičkovej konštanty, ktorú použijeme pri volaní služby chmod(). Konštantu zapíšte v tvare korektnej osmičkovej konštanty jazyka C.",
    "answer": "0413",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 448,
    "q": "Po zadaní príkazu\n$ls –lin\nsme dostali nasledujúci výstup:\n 100 -rw-r--r-- X usr1 group 38 2011-02-26 06:35 vuc\n\n 101 -rw-r--r-- X usr1 group 38 2011-02-26 06:35 skf\n\n 101 -rw-r--r-- X usr1 group 38 2011-02-26 06:35 tqa\n\n 100 -rw-r--r-- X usr1 group 38 2011-02-26 06:35 fih\n\n 102 -rw-r--r-- X usr1 group 38 2011-02-26 06:35 xqx\n\n 101 -rw-r--r-- X usr1 group 38 2011-02-26 06:35 eiy\n\nUveďte, ktorý z vyššie uvedených súborov je zaručene identický so súborom\ntqa\nUveďte práve jeden aj vtedy, ak ich je viac (vtedy - hociktorý z nich). Ak žiaden, uveďte “žiadny” alebo “ziadny” (bez úvodzoviek). Súbor tqa sa nepočíta. Hodnota tretej položky výpisu bola skrytá – znak X.",
    "answer": "skf",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 449,
    "q": "Po zadaní príkazu\n$ls –lin\nsme dostali nasledujúci výstup:\n162 -rw-r--r-- 4 63 28 30 2011-02-26 06:35 sss\n\nUrčte hodnotu premennej\nx.d_name,\npo úspešnom volaní služby\nreaddir(&x),\nvzťahujúcom sa na horeuvedený súbor.",
    "answer": "sss",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 450,
    "q": "Po zadaní príkazu\n$ls –lin\nsme dostali nasledujúci výstup:\n128 -rw-r--r-- 8 81 22 82 2011-02-26 06:35 eee\n\nUrčte hodnotu premennej\nx.st_gid,\npo úspešnom volaní služby\nstat(”eee”,&x)\npre horeuvedený súbor.",
    "answer": "22",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 451,
    "q": "Po zadaní príkazu\n$ls –lin\nsme dostali nasledujúci výstup:\n172 -rw-r--r-- 4 75 80 31 2011-02-26 06:35 ccc\n\nUrčte hodnotu premennej\nx.st_ino,\npo úspešnom volaní služby\nstat(”ccc”,&x)\npre horeuvedený súbor.",
    "answer": "172",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 452,
    "q": "Po zadaní príkazu\n$ls –lin\nsme dostali nasledujúci výstup:\n183 -rw-r--r-- 5 15 39 59 2011-02-26 06:35 nnn\n\nUrčte hodnotu premennej\nx.st_nlink,\npo úspešnom volaní služby\nstat(”nnn”,&x)\npre horeuvedený súbor.",
    "answer": "5",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 453,
    "q": "Po zadaní príkazu\n$ls –lin\nsme dostali nasledujúci výstup:\n180 -rw-r--r-- 8 80 71 11 2011-02-26 06:35 ggg\n\nUrčte hodnotu premennej\nx.st_size,\npo úspešnom volaní služby\nstat(”ggg”,&x)\npre horeuvedený súbor.",
    "answer": "11",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 454,
    "q": "Po zadaní príkazu\n$ls –lin\nsme dostali nasledujúci výstup:\n176 -rw-r--r-- 2 23 54 73 2011-02-26 06:35 vvv\n\nUrčte hodnotu premennej\nx.st_uid,\npo úspešnom volaní služby\nstat(”vvv”,&x)\npre horeuvedený súbor.",
    "answer": "23",
    "alt": [],
    "pretests": [
      "T3 – Príprava na cvičenie v 4. týždni"
    ]
  },
  {
    "id": 455,
    "q": "Uveďte aké prístupové práva bude mať súbor „abc“ po vykonaní fragmentu programu\n\n . . .\n umask(006);\n open(“abc”,O_RDWR|O_CREAT,0774);\n . . .\n\nPredpokladáme, že súbor „abc“ neexistoval.",
    "answer": "0770",
    "alt": [],
    "pretests": [
      "T4 – Príprava na cvičenie v 5. týždni"
    ]
  }
];
