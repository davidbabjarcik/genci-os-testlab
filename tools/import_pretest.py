"""
Import pretestu (text skopírovaný z Moodle „Pokus … zhrnutie“) do public/data/questions.js.

Použitie:
  python tools/import_pretest.py "pretests/T02 - ....txt"          # len report
  python tools/import_pretest.py "pretests/T02 - ....txt" --apply  # zapíše zmeny

Prvý riadok súboru: "NAME: <názov pretestu v appke>".
Pre každú otázku:
  - nájde zodpovedajúcu otázku v databáze (alebo ju pridá ako novú),
  - pridá názov pretestu do "pretests",
  - hlavná odpoveď = "Správna odpoveď je: …" z Moodle,
  - do "alt" pridá starú odpoveď z databázy a tvoju odpoveď, ak ju Moodle uznal.
"""
import json, re, sys, unicodedata
from difflib import SequenceMatcher
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "public" / "data" / "questions.js"
HEADER = "// Otázky z https://gencisearch.surge.sh/ + doplnené z pretestov\n// pretests: zoznam pretestov, v ktorých sa otázka objavila\nwindow.QUESTIONS = "

sys.stdout.reconfigure(encoding="utf-8")

# ---------- načítanie ----------
def load_db():
    txt = DATA.read_text(encoding="utf8")
    return json.loads(txt[txt.index("["): txt.rindex("]") + 1])

def save_db(db):
    DATA.write_text(HEADER + json.dumps(db, ensure_ascii=False, indent=2) + ";\n", encoding="utf8")

SKIP = {"Označiť otázku", "Text otázky", "Spätná väzba"}
STATUS_RE = re.compile(r"^(Správna odpoveď|Nesprávna odpoveď|Čiastočne správna odpoveď|Nezodpovedané)$")

def join_question(lines):
    """Zachová zalomenia riadkov z Moodle (výpisy ls, ukážky kódu, zoznam možností)."""
    import textwrap
    while lines and not lines[-1].strip():
        lines.pop()
    text = textwrap.dedent("\n".join(l.rstrip() for l in lines))
    return re.sub(r"\n{3,}", "\n\n", text).strip("\n")

def parse_pretest(path):
    lines = [l.rstrip() for l in Path(path).read_text(encoding="utf8").splitlines()]
    name = next(l[5:].strip() for l in lines if l.startswith("NAME:"))
    items, cur, part = [], None, None
    for l in lines:
        m = re.match(r"^Otázka (\d+)$", l.strip())
        if m:
            cur = {"n": int(m.group(1)), "status": None, "q": [], "given": [], "official": None}
            items.append(cur)
            part = "status"
            continue
        if cur is None or l.strip() in SKIP or l.startswith(("Známka", "Hodnotenie", "Bodový zisk")):
            continue
        if not l.strip():
            if part == "q" and cur["q"]:
                cur["q"].append("")  # prázdny riadok vnútri otázky (ukážky kódu)
            continue
        s = l.strip()
        if part == "status" and STATUS_RE.match(s):
            cur["status"] = s
            part = "q"
        elif s.startswith("Odpoveď: Otázka"):
            part = "given"
        elif s.startswith("Správna odpoveď je:"):
            cur["official"] = re.sub(r"\.$", "", s.split(":", 1)[1].strip())
            part = "done"
        elif STATUS_RE.match(s):
            part = "done"  # záverečný stav pod spätnou väzbou
        elif part == "q":
            cur["q"].append(l.expandtabs(8))  # zachová odsadenie (ukážky súboru a kódu)
        elif part == "given":
            cur["given"].append(s)
    for it in items:
        it["q"] = join_question(it["q"])
        it["given"] = " ".join(it["given"]).strip()
        it["ok"] = it["status"] == "Správna odpoveď" and bool(it["given"])
    return name, items

# ---------- porovnávanie ----------
def strip_dia(s):
    return "".join(c for c in unicodedata.normalize("NFD", s) if unicodedata.category(c) != "Mn")

def clean_text(q):
    """Text otázky do appky: URL manuálov nahradí za 'man 2 xxx'."""
    url = r"https?://www\.kernel\.org/doc/man-pages/online/pages/man\d/[\w.-]+?\.\d\.html"
    q = re.sub(r"\s*(-|na adrese|na URL|na stránke|na)?\s*" + url + r"\.?", "", q)
    q = re.sub(r"[ \t]+\(\s*\)", "", q)  # prázdna zátvorka po odstránení URL
    if "\n" in q:
        return q.strip("\n")
    return re.sub(r"\s+", " ", q).strip()

def core(q):
    """Text na porovnanie: bez URL, bez zátvoriek s poznámkami, bez diakritiky."""
    t = strip_notes(q).replace("()", " ")
    t = strip_dia(t.lower())
    t = re.sub(r"[^\w|<>=!]+", " ", t)
    return re.sub(r"\s+", " ", t).strip()

CONTRAST = ["neuspes", "uspes", "kladn", "zaporn", "maxim", "minim", "prv", "druh", "tret",
            "citan", "zapis", "nazyva", "typ", "nepodar", "podar", "chyb", "eof", "zapor"]

def strip_notes(q):
    """Odstráni URL a poznámky v zátvorkách, ale nechá 'open()'."""
    t = re.sub(r"https?://[^\s()]+", " ", q)
    t = re.sub(r"\s*\(\s*\)", "⁽⁾", t)
    for _ in range(3):
        t = re.sub(r"\([^()]*\)", " ", t)
        t = re.sub(r"\[[^\[\]]*\]", " ", t)
    t = re.sub(r"\([^()]*$", " ", t)          # neuzavretá zátvorka do konca
    t = re.sub(r"pozn\..*$", " ", t, flags=re.I)
    return t.replace("⁽⁾", "()")

def signature(q):
    t = strip_notes(q)
    funcs = frozenset(re.findall(r"\b(\w+)\(\)", strip_dia(t.lower())))
    consts = frozenset(re.findall(r"\b[A-Z][A-Z0-9_]{2,}\b", t))
    words = core(q).split()
    contrast = frozenset(c for c in CONTRAST
                         if any(w in ("typ", "typu") if c == "typ" else w.startswith(c) for w in words))
    # čísla a reťazce znakov (varianty tej istej otázky s inými hodnotami = iná otázka)
    values = set(re.findall(r"-?\d+", t))
    raw = re.sub(r"https?://[^\s()]+", " ", q)
    for args in re.findall(r"\b\w+\(([^()]*,[^()]*)\)", raw):   # argumenty volaní: read(0,buff,3)
        values |= set(re.findall(r"-?\d+", args))
    values |= set(re.findall(r"(?<![\w-])[-d][-r][-w][-x][-r][-w][-x][-r][-w][-x](?![\w-])", raw))  # -rw-r--r--
    values |= set(re.findall(r"\b(?:st|d)_[a-z]+\b", raw))      # st_ino, d_name …
    values |= {"[" + i + "]" for i in re.findall(r"\w\[(\d+)\]", raw)}  # filedes[0] vs filedes[1]
    values |= set(re.findall(r"Znaky:\s*(\w+)", q))
    values |= set(re.findall(r"\"([A-Za-z]{4,})\"", q))
    for line in q.splitlines():
        m = re.match(r"\s*Ukazovate\w*:\s*([._ ]*)\^", line)
        if m:
            values.add("^" + str(len(m.group(1))))
    return funcs, consts, contrast, frozenset(values)

def similarity(a, b):
    ca, cb = core(a), core(b)
    ratio = SequenceMatcher(None, ca, cb).ratio()
    # databáza má niekedy otázku dlhšiu/kratšiu – koľko slov kratšej je v dlhšej
    ta, tb = ca.split(), cb.split()
    short, long_ = (ta, tb) if len(ta) <= len(tb) else (tb, ta)
    contain = sum(1 for w in short if w in long_) / len(short) if len(short) >= 5 else 0
    return max(ratio, contain * 0.95)

def norm_ans(a):
    t = strip_dia(a.lower()).strip()
    t = re.sub(r"\s*\(\s*\)", "", t)
    return re.sub(r"\s+", " ", t).rstrip(".")

def find_match(item, db):
    sig = signature(item["q"])
    best, best_r = None, 0
    for d in db:
        f, c, k, v = signature(d["q"])
        # názvy služieb/konštánt: jedna verzia môže mať v poznámke navyše (podmnožina)
        if k != sig[2] or v != sig[3] or not (f <= sig[0] or sig[0] <= f) or not (c <= sig[1] or sig[1] <= c):
            continue
        if not (f & sig[0] or not (f or sig[0])):
            continue
        r = similarity(item["q"], d["q"])
        if r > best_r:
            best, best_r = d, r
    return (best, best_r) if best_r >= 0.72 else (None, best_r)

# ---------- hlavný beh ----------
def main():
    path, apply = sys.argv[1], "--apply" in sys.argv
    name, items = parse_pretest(path)
    db = load_db()
    print(f"Pretest: {name} – {len(items)} otázok\n")

    used, new, matched = {}, [], []
    for it in items:
        d, r = find_match(it, db)
        if d and d["id"] in used:
            print(f"!! Q{it['n']} aj Q{used[d['id']]} -> rovnaká otázka #{d['id']} – beriem ako novú")
            d = None
        if d:
            used[d["id"]] = it["n"]
            matched.append((it, d, r))
        else:
            new.append(it)

    print("== Spárované (podobnosť < 0.95 na kontrolu) ==")
    for it, d, r in matched:
        if r < 0.95:
            print(f"Q{it['n']:>2} {r:.2f}  {core(it['q'])[:70]}\n         #{d['id']:<4}{core(d['q'])[:70]}")
    print(f"\nSpárovaných: {len(matched)}, nových: {len(new)}")
    for it in new:
        print(f"  NOVÁ Q{it['n']}: {clean_text(it['q'])[:90]}  => {it['official'] or it['given']}")

    if not apply:
        print("\n(len report – pre zápis pridaj --apply)")
        return

    def merge(d, it):
        primary = it["official"] or it["given"]
        answers = [primary] + ([d["answer"]] if d.get("answer") else []) + d.get("alt", []) + ([it["given"]] if it["ok"] else [])
        uniq = []
        for a in answers:
            if a and norm_ans(a) not in [norm_ans(u) for u in uniq]:
                uniq.append(a)
        d["q"] = clean_text(it["q"])
        d["answer"], d["alt"] = uniq[0], uniq[1:]
        if name not in d.setdefault("pretests", []):
            d["pretests"].append(name)

    for it, d, _ in matched:
        merge(d, it)
    next_id = max(d["id"] for d in db) + 1
    for it in new:
        d = {"id": next_id, "q": "", "answer": "", "alt": [], "pretests": []}
        next_id += 1
        merge(d, it)
        db.append(d)

    save_db(db)
    print(f"\nZapísané: {len(db)} otázok v databáze, {sum(1 for d in db if name in d['pretests'])} v '{name}'.")

if __name__ == "__main__":
    main()
