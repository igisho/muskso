# 07 – Taxonómia

## Kontrolovaný slovník

### type (typ projektu)

| Hodnota | Popis |
|---------|-------|
| `application` | Desktopová alebo serverová aplikácia |
| `game` | Hra (akákoľvek platforma) |
| `utility` | Nástroj / utilita |
| `system` | Systémový softvér, OS, driver |
| `library` | Knižnica, framework, SDK |
| `other` | Iné (vysvetliť v story) |

### status

| Hodnota | Popis | Požiadavky |
|---------|-------|------------|
| `draft` | Nový, neoverený | Žiadne špeciálne |
| `verified` | Overený maintainerom | Aspoň 1 funkčný zdroj |
| `disputed` | Sporné tvrdenia | Vysvetlenie v story |

### platform

Preferované hodnoty (nie je striktný enum):

- `MS-DOS`
- `Windows`
- `Linux`
- `macOS`
- `Java`
- `Web`
- `Android`
- `iOS`
- `Cross-platform`
- `Mainframe`
- `Embedded`

### tags

Pravidlá pre tagy:
- Malé písmená, bez diakritiky
- Pomlčky namiesto medzier
- Max 10 tagov na exponát
- Používať existujúce tagy kde je to možné

Bežné tagy:

| Kategória | Tagy |
|-----------|------|
| Typ | antivirus, game, database, editor, browser |
| Technológia | dos, windows, java, web, mobile |
| Odvetvie | banking, construction, education, healthcare |
| Distribúcia | shareware, freeware, commercial, open-source |
| Éra | 80s, 90s, 2000s, 2010s |

## DO

- Kontrolovať existujúce tagy pred vytvorením nových
- Používať najšpecifickejší tag (nie `software`, ale `antivirus`)
- Konzistentne používať anglické tagy

## DON'T

- Nevytvárať duplicitné tagy (anti-virus vs antivirus)
- Nepoužívať príliš všeobecné tagy (app, program)
- Nepoužívať viac ako 10 tagov
