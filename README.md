# Genči OS TestLab

**Genči OS TestLab** je offline desktopová aplikácia v Electron-e na precvičovanie otázok o **systémových volaniach v UNIX/Linux**
(open, read, write, lseek, chmod, fork, execve, semafory, zdieľaná pamäť…).

Je to sesterská aplikácia k [ZIM TestLab](https://github.com/davidbabjarcik/zim-testlab).

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
- 🏷️ **Filter podľa pretestov** – test len z konkrétneho pretestu alebo zo všetkých, ktoré môžu byť na zápočte
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
- v 5. týždni pretest nebol, 6. týždeň = zápočet (z T1–T4)
- **T5** – Zdieľaná pamäť – príprava na cvičenie v 7. týždni (25 otázok)

## 🎓 Zápočet (6. týždeň)

Režimy zápočtu berú len pretesty **T1–T4** (zoznam `ZAPOCET_PRETESTS` v `public/js/script.js`).

- **Zápočet – všetko z pretestov T1–T4**
- **Zápočet – praktické úlohy z pretestov + copymaster** – výpočty a ukážky kódu z pretestov (lseek, read/write fragmenty, chmod, umask, výpis `ls`…) spolu s otázkami ku copymasteru
- **Zápočet – len praktické úlohy z pretestov**
- **Tréning – všetky praktické varianty** – aj s variantmi z gencisearch, ktoré v pretestoch neboli

## 📄 Copymaster (Zadanie 1, verzia 2024.01)

`public/data/copymaster.js` – 83 **vlastných otázok zostavených podľa textu zadania** (nie sú oficiálne):
- fragment kódu → ku ktorému prepínaču patrí (20)
- opis / chybová správa / návratový kód → prepínač a naopak
- formát chybového výpisu, konfliktné prepínače, getopt, make, týždne priebežnej kontroly

Pri prepínačoch záleží na veľkosti písmen (`-d` ≠ `-D`, `-s` ≠ `-S`). Uznáva sa `-c`, `c` aj `--create`.
Fragmenty kódu sú ilustračné – typické riešenie daného prepínača, nie jediné správne.

---

## ⚠️ Upozornenie

Aplikácia je **pomôcka na učenie**. Negarantuje správnosť odpovedí ani zhodu so skutočnými testami.

## 🐞 Feedback

💬 **Discord:** `david.babjarcik`
