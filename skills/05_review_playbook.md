# 05 – Review Playbook

## Ako posudzovať PR

### 1. Štruktúra (automatizovateľné)

- [ ] PR mení len jeden priečinok v `content/`
- [ ] Existuje `meta.yaml` a `story.md`
- [ ] ID v meta.yaml sa zhoduje s názvom priečinka
- [ ] Všetky povinné polia v meta.yaml sú vyplnené
- [ ] Žiadne zakázané súbory (.exe, .dll, .zip)
- [ ] Obrázky < 2 MB

### 2. Kvalita obsahu (manuálne)

- [ ] Tón je faktický, nie propagačný
- [ ] Story má všetky povinné sekcie (About, Impact, Tech, Sources)
- [ ] Headings dodržiavajú hierarchiu
- [ ] Text je v slovenčine
- [ ] Krátke odseky (max 4 vety)

### 3. Fakty a zdroje

- [ ] Tvrdenia sú podložené zdrojmi
- [ ] Zdroje sú funkčné URLs
- [ ] Sporné tvrdenia sú označené
- [ ] Roky a mená sú správne

### 4. Práva

- [ ] Obrázky majú uvedený zdroj
- [ ] Prispievateľ potvrdil práva
- [ ] Žiadny copyrighted obsah bez fair use

### 5. Technické

- [ ] CI build prechádza
- [ ] Žiadne merge konflikty
- [ ] meta.yaml je validný YAML

## Výsledok review

| Výsledok | Akcia |
|----------|-------|
| Všetko OK | Approve + merge |
| Drobné chyby | Request changes s konkrétnymi opravami |
| Závažné problémy | Request changes + vysvetlenie |
| Porušenie práv | Close PR + vysvetlenie |

## DO

- Dávať konštruktívnu spätnú väzbu
- Citovať konkrétne riadky
- Navrhovať opravy

## DON'T

- Neodmietať bez vysvetlenia
- Neschvaľovať bez kontroly zdrojov
