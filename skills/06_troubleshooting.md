# 06 – Troubleshooting

## Najčastejšie CI chyby a opravy

### meta.yaml validation failed

| Chyba | Príčina | Oprava |
|-------|---------|--------|
| `missing field: id` | Chýba pole `id` | Pridaj `id: slug-projektu` |
| `missing field: authors` | Chýba pole `authors` | Pridaj `authors:` s aspoň 1 položkou |
| `invalid type` | Neplatná hodnota `type` | Použi: application, game, utility, system, library, other |
| `invalid status` | Neplatná hodnota `status` | Použi: draft, verified, disputed |
| `invalid YAML` | Syntax chyba | Skontroluj odsadenie (2 medzery) |

### Build errors

| Chyba | Príčina | Oprava |
|-------|---------|--------|
| `file too large` | Obrázok > 2 MB | Zmenši obrázok alebo použi WebP |
| `forbidden file type` | .exe/.dll/.zip súbor | Odstráň binárku, len linkuj |
| `duplicate id` | ID už existuje | Zmeň ID na unikátne |

### PR issues

| Chyba | Príčina | Oprava |
|-------|---------|--------|
| `changes in multiple dirs` | PR mení viac exponátov | Rozdeľ na viac PR |
| `merge conflict` | Konflikt s main | Rebase na main |
| `missing checklist` | Nevyplnený PR template | Vyplň checklist |

## Quick fixes

```bash
# Rebase na main
git fetch origin
git rebase origin/main

# Zmenšiť obrázok
convert image.png -resize 1200x image.png

# Validovať YAML
python -c "import yaml; yaml.safe_load(open('meta.yaml'))"
```
