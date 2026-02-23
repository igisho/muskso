# 02 – Content Schema

## meta.yaml – Povinné polia

```yaml
id: string          # Slug, malé písmená, pomlčky. POVINNÉ.
title: string       # Názov projektu. POVINNÉ.
type: string        # Jedna z: application | game | utility | system | library | other. POVINNÉ.
year_start: number  # Rok vzniku. POVINNÉ.
year_end: number    # Rok ukončenia. VOLITEĽNÉ.
authors:            # Aspoň 1 autor. POVINNÉ.
  - string
tags:               # Aspoň 1 tag. POVINNÉ.
  - string
status: string      # Jedna z: draft | verified | disputed. POVINNÉ.
platform: string    # Napr. MS-DOS, Windows, Linux, Java, Web. POVINNÉ.
sources:            # URLs. Pri verified aspoň 1. POVINNÉ.
  - string
company: string     # ID firmy z content/companies/. VOLITEĽNÉ.
```

## Príklad

```yaml
id: eset-nod
title: ESET NOD
type: application
year_start: 1987
year_end: 1995
authors:
  - Peter Paško
  - Miroslav Trnka
tags:
  - antivirus
  - security
  - dos
status: verified
platform: MS-DOS
sources:
  - https://www.eset.com/sk/o-nas/historia/
company: eset
```

## story.md – Štruktúra

```markdown
# {title}

## O projekte
[Popis, história, kontext]

## Vplyv a význam
[Dopad na priemysel, používateľov]

## Technológie
[Použité technológie, architektúra]

## Zdroje
- [Názov](URL)
```

## DO

- Používať plain Markdown
- Vždy mať sekciu Zdroje
- Obrázky referencovať relatívne: `./media/screenshot.png`

## DON'T

- Nepoužívať HTML v story.md
- Nepísať promo text
- Nepoužívať heading level 1 viackrát
