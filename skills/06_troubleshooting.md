# 06 - Troubleshooting

## Najcastejsie chyby pri `validate:content`

| Chyba | Pricina | Oprava |
|---|---|---|
| `Invalid project filename` | zly format nazvu suboru | pouzi `YYYY-slug.json` alebo `YYYY-MM-slug.json` |
| `Invalid ... filename year` | rok v nazve nesedi s datami | zosulad rok v nazve s `year_start`/`founded` |
| `Invalid ... filename slug` | slug sa nezhoduje s `id` | oprav nazov suboru alebo `id` |
| `references missing project` | neplatna referencia | oprav `person.projects` alebo `company.projects` |
| `references missing company` | projekt odkazuje na neexistujucu firmu | pridaj firmu alebo odstran `company` |

## Build/test chyby

| Chyba | Pricina | Oprava |
|---|---|---|
| lint error | porusene pravidla kodu | oprav kod podla hlasenia ESLint |
| failing test | regresia funkcionality | oprav test alebo implementaciu |
| build warning chunk size | velke kniznice v main bundle | lazy-load tazke komponenty |

## Rychly postup opravy

```bash
npm run validate:content
npm run lint
npm test
npm run build
```

Ak chyba pretrvava, zmensi scope PR na jednu vec a skus znovu.
