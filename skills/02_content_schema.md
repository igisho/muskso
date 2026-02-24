# 02 - Content Schema

## Project JSON (`src/content/projects/*.json`)

```json
{
  "id": "altky-media-platform",
  "title": "Altky.sk",
  "type": "application",
  "year_start": 2024,
  "year_end": 2026,
  "authors": ["Igor Sovcik"],
  "tags": ["media", "ai"],
  "status": "draft",
  "platform": "Web",
  "summary": "Krátke zhrnutie pre výpisy a úvod detailu.",
  "storyMarkdown": "## Detailný popis\n\nDlhší text vo formáte Markdown.",
  "cover": "/projects/altky-media-platform-cover.png",
  "sources": ["https://altky.sk"],
  "company": "altky"
}
```

Povinné polia: `id`, `title`, `type`, `year_start`, `authors`, `tags`, `status`, `platform`, `summary`, `sources`

Limit: `summary` max 300 znakov.

Voliteľné polia: `year_end`, `storyMarkdown`, `cover`, `company`

## People JSON (`src/content/people/*.json`)

```json
{
  "id": "igor-sovcik",
  "name": "Igor Sovcik",
  "bio": "Stručný profil osoby.",
  "roles": ["Founder"],
  "periods": ["2010-súčasnosť"],
  "projects": ["altky-media-platform"]
}
```

## Company JSON (`src/content/companies/*.json`)

```json
{
  "id": "altky",
  "name": "ALTKY.SK",
  "overview": "Stručný profil firmy.",
  "founded": 2024,
  "milestones": [{ "year": 2024, "event": "Vznik projektu" }],
  "projects": ["altky-media-platform"]
}
```

## Naming convention

- `YYYY-slug.json` alebo `YYYY-MM-slug.json`
- `slug` v názve musi byť rovnaký ako `id` v JSON
- pre projects rok = `year_start`
- pre companies rok = `founded`
- pre people rok = najskorší rok naviazaného projektu

## Validation

Pred PR vždy spusti:

```bash
npm run validate:content
npm run lint
npm test
npm run build
```
