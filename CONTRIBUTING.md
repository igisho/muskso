# Ako prispieť do Slovak Software Museum

Ďakujeme za váš záujem o zachovanie slovenského softvérového dedičstva!

## Pred začiatkom

- Prečítajte si [Code of Conduct](./CODE_OF_CONDUCT.md)
- Pozrite si existujúce exponáty v `content/heritage/`
- Uistite sa, že váš exponát ešte nie je v archíve

## Postup pridania exponátu

### 1. Fork a branch

```bash
git clone https://github.com/<your-fork>/slovak-software-museum.git
cd slovak-software-museum
git checkout -b add/<id-projektu>
```

### 2. Vytvorte priečinok

```
content/heritage/<id>/
├── meta.yaml
├── story.md
└── media/
    └── (obrázky, max 2 MB každý)
```

**ID (slug):** malé písmená, pomlčky, bez diakritiky. Napr. `eset-nod`, `aquanoid`.

### 3. Vyplňte meta.yaml

```yaml
id: vas-projekt
title: Názov projektu
type: application
year_start: 1995
authors:
  - Meno Autora
tags:
  - relevant-tag
status: draft
platform: Windows
sources:
  - https://zdroj.com
```

**Povinné polia:** id, title, type, year_start, authors, tags, status, platform, sources

### 4. Napíšte story.md

Minimálna štruktúra:

```markdown
# Názov projektu

## O projekte
Čo to bolo, prečo vzniklo.

## Vplyv a význam
Ako ovplyvnilo slovenský softvérový priemysel.

## Technológie
Aké technológie boli použité.

## Zdroje
- [Odkaz na zdroj](https://...)
```

### 5. Otvorte Pull Request

- PR názov: `add: Názov projektu`
- Vyplňte PR template checklist
- PR musí obsahovať zmeny len v jednom priečinku

## Pravidlá pre médiá

- Max 2 MB na obrázok
- Formáty: PNG, JPG, WebP, SVG
- Žiadne binárne súbory (.exe, .dll, .zip)
- Screenshoty a manuály môžete hostovať priamo
- Proprietárny obsah len linkujte, nehostujte

## Review proces

1. Automatická validácia (CI)
2. Review maintainerom alebo agentom
3. Kontrola faktov a zdrojov
4. Merge do main → automatický deploy

## Otázky?

Otvorte issue na GitHub.
