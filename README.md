# Genči OS TestLab

**Genči OS TestLab** je offline desktopová aplikácia v Electron-e na precvičovanie otázok o **systémových volaniach v UNIX/Linux**
(open, read, write, lseek, chmod, fork, execve, semafory, zdieľaná pamäť…).

Je to sesterská aplikácia k [ZIM TestLab](https://github.com/davidbabjarcik/zim-testlab).

🌐 **Webová verzia (bez inštalácie):** https://davidbabjarcik.github.io/genci-os-testlab/
(história, zlé a obľúbené otázky sa na webe ukladajú v prehliadači)

---

## 📚 Zdroj otázok

Otázky a odpovede pochádzajú z **[https://gencisearch.surge.sh/](https://gencisearch.surge.sh/)**
(510 záznamov, po zlúčení duplicít 435 unikátnych otázok) a slúžia výhradne na **študijné účely**.

---

## ✨ Funkcie

- 🎯 Náhodný test (10 / 20 / 40 / všetky otázky), časomiera 45 s na otázku
- ✍️ Odpoveď sa **píše** – kontrola ignoruje veľké/malé písmená, medzery, `()` za názvom služby a (voliteľne) diakritiku
- ✔ Pri preklepe si odpoveď môžeš uznať tlačidlom **„Mal som pravdu“**
- 🃏 Dlhé (opisné) odpovede fungujú ako kartička: odkryješ a povieš, či si vedel
- 🏷️ **Výber otázok tlačidlami** v troch radoch:
  - **Rozsah** – Všetko, 🎓 Zápočet 1 (T1–T4 + copymaster), 🎓 Zápočet 2 (T5–T8 + Unix1), jednotlivé T1–T8, 🤖 Copymaster, 🤖 Unix1
  - **Typ** – všetky / 🧮 len praktické / 📖 len teória
  - **Zdroj** – 📝 z pretestov, 📚 mimo pretestov (z gencisearch, k téme ich zaradila 🤖 AI podľa najpodobnejšej otázky z pretestov), 🤖 vytvorené AI
- ✅ **Viem** – v hľadaní si pri otázke zaklikneš, že ju vieš (spoločné s kartičkami v bleskovkách); hľadanie sa dá filtrovať Všetky / Ešte neviem / Viem
  a na úvodnej obrazovke môžeš z testov **vynechať, čo už vieš**
- 🧮 **Praktické IPC úlohy** (🤖 AI, 39): rúry, fork, signály, zdieľaná pamäť, semafory, sokety – odpovede overené spustením v Linuxe
- 📘 **Učenie na zápočet** – ťahák služieb z T1–T4 (hlavičky, parametre, návratové hodnoty tak, ako ich chcú pretesty) s precvičovaním po témach
  a nástroje: práva rwx ↔ osmičkovo, umask + open, lseek kalkulačka, simulátor súboru (open/read/write/lseek krok po kroku), rozklad výpisu `ls -lin`
- ⚡ **Bleskovky** – učenie na týždenné testy (T1–T8): kartičky z pretestu daného týždňa (odkryješ odpoveď a povieš, či si vedel;
  čo nevieš, príde znova), opakovanie len neznámych, rýchla bleskovka z 10 otázok a ťahák k téme týždňa
- 🤖 Otázky ku copymasteru a ťaháky sú **AI generované** (Claude) – v appke majú fialový štítok a značku 🤖 vo výbere
- 🔍 Vyhľadávanie otázok (ako na gencisearch)
- ❌ Zlé otázky + test z nich, ⭐ obľúbené otázky + test z nich
- 📊 História testov a detail každého testu
- 🌙 Tmavý / svetlý režim
- 💾 Všetko offline (JSON súbory v priečinku aplikácie)

---

## 🚀 Spustenie

```bash
npm install
npm start
```

Build `.exe` pre Windows:

```bash
npm run build
```

Bez inštalácie sa dá otvoriť aj priamo `public/index.html` v prehliadači (dáta sa vtedy ukladajú do prehliadača).

---

## 🏷️ Pretesty

Každá otázka v `public/data/questions.js` má pole `pretests`, napr.:

```js
{ "id": 1, "q": "…", "answer": "3", "alt": [], "pretests": ["Pretest 1", "Pretest 3"] }
```

Na úvodnej obrazovke si vyberieš: všetky otázky, všetky z pretestov (na zápočet), konkrétny pretest,
alebo otázky, ktoré neboli v žiadnom preteste.

**Pridanie ďalšieho pretestu:** skopíruj z Moodle stránku „Pokus … zhrnutie“ do súboru v `pretests/`
s prvým riadkom `NAME: T2 – …` a spusti:

```bash
python tools/import_pretest.py "pretests/T2 - ....txt"
```

Skript vypíše, ktoré otázky spároval a ktoré sú nové. Ak to sedí, spusti ho znova s `--apply`.
Hlavná odpoveď sa berie z Moodle („Správna odpoveď je…“), tvoja uznaná odpoveď a pôvodná z gencisearch sa uložia ako alternatívy.

Hotové pretesty:
- **T1** – Príprava na cvičenie v 2. týždni (89 otázok)
- **T2** – Práca so súbormi I. – príprava na cvičenie v 3. týždni (67 otázok)
- **T3** – Príprava na cvičenie v 4. týždni (47 otázok)
- **T4** – Príprava na cvičenie v 5. týždni (27 otázok)
- v 5. týždni pretest nebol, zápočet bol v 6. týždni (z T1–T4)
- **T5** – Rúry a signály – príprava na cvičenie v 7. týždni (30 otázok)
- **T6** – Zdieľaná pamäť – príprava na cvičenie v 8. týždni (25 otázok)
- **T7** – Semafory – príprava na cvičenie v 9. týždni (34 otázok)
- **T8** – Sokety – príprava na cvičenie v 10. týždni (26 otázok)

## 🎓 Zápočet (bol v 6. týždni)

Režimy zápočtu berú len pretesty **T1–T4** (zoznam `ZAPOCET_PRETESTS` v `public/js/script.js`).

- **Zápočet – všetko z pretestov T1–T4**
- **Zápočet – praktické úlohy z pretestov + copymaster** – výpočty a ukážky kódu z pretestov (lseek, read/write fragmenty, chmod, umask, výpis `ls`…) spolu s AI generovanými otázkami ku copymasteru
- **Zápočet – len praktické úlohy z pretestov**
- **Tréning – všetky praktické varianty** – aj s variantmi z gencisearch, ktoré v pretestoch neboli

## 🤖 Copymaster (Zadanie 1, verzia 2024.01) – AI generované otázky

`public/data/copymaster.js` – 83 **AI generovaných otázok** (vytvoril ich Claude podľa textu zadania, nie sú oficiálne). V appke majú fialový štítok „🤖 AI generovaná“ a v ponuke výberu značku 🤖:
- fragment kódu → ku ktorému prepínaču patrí (20)
- opis / chybová správa / návratový kód → prepínač a naopak
- formát chybového výpisu, konfliktné prepínače, getopt, make, týždne priebežnej kontroly

Pri prepínačoch záleží na veľkosti písmen (`-d` ≠ `-D`, `-s` ≠ `-S`). Uznáva sa `-c`, `c` aj `--create`.
Fragmenty kódu sú ilustračné – typické riešenie daného prepínača, nie jediné správne.

## 🎓 Zápočet 2 (IPC) a 🤖 zadanie Unix1 – AI generované otázky

Výber **Zápočet 2** = pretesty T5–T8 (rúry a signály, zdieľaná pamäť, semafory, sokety) + otázky k zadaniu Unix1.

`public/data/unix1.js` – 97 **AI generovaných otázok** k zadaniu Unix1 (vytvoril ich Claude podľa textu zadania, nie sú oficiálne), s fialovým štítkom „🤖 AI generovaná · Zadanie Unix1“:
- zo zadania: procesy, súbory, rúry R1/R2, zdieľané pamäte SM1/SM2, semafory S1/S2 (kto sa riadi ktorým, inicializácia, farby), makefile, odovzdanie
- použitie služieb jadra v zadaní: pipe, fork/execve, signal/kill/pause, shmget/shmat/shmdt/shmctl, semget/semctl/semop, socket/bind/listen/accept/connect, sendto/recvfrom, htons
- fragment kódu → ktorému procesu patrí (P1, T, D, Serv2, Zadanie) a doplňovačky do fragmentov

---

## ⚠️ Upozornenie

Aplikácia je **pomôcka na učenie**. Negarantuje správnosť odpovedí ani zhodu so skutočnými testami.

## 🐞 Feedback

💬 **Discord:** `david.babjarcik`
