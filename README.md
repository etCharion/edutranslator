# EduTranslator - String Extractor & Editor

Webová aplikace pro extrakci a úpravu textů v uvozovkách přímo v prohlížeči.

## Funkce

- 📤 **Nahrávání souboru**: Prˇetahni soubor nebo vyber jej z počítače
- 🔍 **Automatická extrakce**: Najde všechny texty v `" "` (uvozovkách)
- ✏️ **Online editor**: Vypiš a uprav texty přímo v prohlížeči
- 💾 **Stažení souboru**: Stáhni upravený soubor s novými texty
- 🎯 **Jazykově nezávislé**: Funguje s JS, TS, Python, C++, HTML, CSS a dalšími

## Jak se používá

### Krok 1: Přístup k aplikaci

Otevři aplikaci v prohlížeči:

```
https://etcharion.github.io/edutranslator/
```

### Krok 2: Nahrání souboru

1. Klikni na oblast "Prˇetahni soubor sem" nebo klikni na tlačítko "vyberi soubor"
2. Vyber soubor s kódem ze svého počítače
3. Aplikace automaticky najde všechny texty v uvozovkách

### Krok 3: Úprava textů

1. Každý nalezený text je zobrazen v samostatné kartě
2. Původní text vidíš v šedé zóně nahoře
3. Napiš upravenou verzi do textového pole
4. Počet znaků se aktualizuje v reálném čase

### Krok 4: Stažení upravené verze

1. Klikni na tlačítko "Stahni upravený soubor"
2. Soubor se stáhne s názvem `jméno_souboru_upraveny.rozšíření`
3. Upravený kód obsahuje všechny tvé změny v uvozovkách

## Příklady

### JavaScript/TypeScript

```javascript
const message = "Ahoj, světe!";
const greeting = "Dobrý den";
```

Aplikace najde:
- "Ahoj, světe!"
- "Dobrý den"

### Python

```python
print("Počítej si nás")
print('Jednoduchý text')
```

Aplikace najde:
- "Počítej si nás" (v uvozovkách)

### HTML

```html
<p>"Toto je text"</p>
<div>"Další text"</div>
```

## Technologie

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla JS - bez závislostí)
- **Storage**: localStorage pro uchování stavu
- **API**: FileReader API pro čtení souborů

## Omezení

- Aplikace pracuje v prohlížeči - nemůže přímo měnit soubor na disku
- Soubor musí být text (UTF-8)
- Regex hledá jen texty v dvojitých uvozovkách `"`
- Velké soubory (>10MB) mohou být pomalé

## Budoucí vylepšení

- [ ] Podpora jednoduchých uvozovek `'`
- [ ] Podpora backticks ` ` ` (template strings)
- [ ] Vyhledávání a nahrazení s regex
- [ ] Podpora více souborů najednou
- [ ] Export do CSV
- [ ] Tmavý režim

## Jak spustit lokálně

```bash
# Klonuj repozitář
git clone https://github.com/etCharion/edutranslator.git

# Pojď do složky
cd edutranslator

# Otevři index.html v prohlížeči
open index.html
```

Nebo použij lokální server:

```bash
python -m http.server 8000
# Pak jdi na http://localhost:8000
```

## Licence

MIT License - Volně k použití

## Autor

**etCharion** - Vzdělávací projekt pro zpracování textů v kódu

---

**Vykřičník**: Tato aplikace nepotřebuje internet pro chod - všechno funguje lokálně v tvém prohlížeči!
