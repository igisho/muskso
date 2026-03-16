# 00 - Prehlad projektu

## Ucel

MUSKSO je otvoreny komunitny archiv slovenskeho softveru. Web je staticky frontend, obsah je ulozeny v JSON suboroch a meni sa cez Pull Requesty.

## Zakladne entity

| Pojem | Vyznam |
|-------|--------|
| `project` | Zaznam softveroveho projektu v `src/content/projects` |
| `person` | Osoba naviazana na projekty v `src/content/people` |
| `company` | Firma/studio naviazane na projekty v `src/content/companies` |
| `importance` | Kuratorska priorita projektu od `1` po `5` |
| `summary` | Kratky text projektu (max 300 znakov) |
| `storyMarkdown` | Volitelny dlhy formatovany popis projektu (Markdown) |

## Hlavne principy

- fakticky ton, nie promo text,
- kazde tvrdenie musi mat zdroj,
- cover s obrazkom musi mat aj kredit a povod,
- konzistentne ID a referencie medzi entitami,
- naming konvencia suborov `YYYY(-MM)-slug.json`,
- ziadne binarky v repozitari.

## Struktura repozitara

```text
src/content/projects/*.json
src/content/people/*.json
src/content/companies/*.json
src/data/repository.ts
scripts/validate-content.mjs
scripts/content-backlog.mjs
```

## Povinne kontroly pred PR

```bash
npm run validate:content
npm run lint
npm test
npm run build
```
