# 08 - Capture coverov

Platí pre každý nový alebo opravovaný cover, ktorý vzniká ako screenshot webu.

## Základ

- Rozmer: **1600×900**, pomer 16:9, device scale factor 1.
- Formát: PNG (alebo JPG pri fotografii), bez zbytočnej kompresie.
- Snímaj až po načítaní obsahu, nie hneď po `domcontentloaded`.

## Pred snímkou vždy odstráň overlaye

Nikdy necommituj cover s cookie lištou, newsletter modalom, chatom alebo iným popupom.

Poradie zásahov:

1. **Blokuj známe skripty** cez request interception:
   `cookiebot`, `iubenda`, `usercentrics`, `onetrust`, `cookieyes`,
   `smartsupp`, `livechat`, `crisp`, `tawk`, `intercom`, `drift`.
2. **Klikni consent**, ak lišta aj tak vznikne:
   `Allow all`, `Accept all`, `Prijať všetky`, `Súhlasím`, `Povoliť všetko`.
   Pri iubende pomáha priamy JS click na `.iubenda-cs-accept-btn`.
3. **Skry fixed overlaye**, ktoré ostali: prvky s textom
   `cookies`, `súbory cookie`, `privacy`, `súhlas`, `newsletter`.
4. **Skry malé fixed widgety** v rohoch (accessibility, chat launcher, cookie settings).
5. Ak overlay nejde odstrániť, použijeme iný zdroj alebo produktovú podstránku — nie generatívne domýšľanie UI.

## Čo nikdy nerobiť

- Negenerovať chýbajúce UI prvky ani text pomocou image modelu.
- Neupravovať text, čísla ani logá na screenshote.
- Nepoužívať cover, na ktorom je viditeľná cookie lišta alebo modal.

## Kontrola pred commitom

```bash
# rozmery všetkých coverov
python3 - <<'PY'
from PIL import Image
import os, json
for f in sorted(os.listdir("src/content/projects")):
    if not f.endswith(".json"): continue
    j = json.load(open("src/content/projects/" + f))
    if j.get("cover"):
        print(f, Image.open("public" + j["cover"]).size)
PY

# OCR kontrola cookie textov
tesseract public/projects/<cover>.png - | grep -iE "cookie|súhlas|privacy|newsletter"
```

Ak OCR nájde cookie alebo privacy text, cover sa nesmie commitnúť.
