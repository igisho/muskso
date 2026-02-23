# 00 – Prehľad projektu

## Účel

Slovak Software Museum je otvorený komunitný archív zachovávajúci digitálne dedičstvo slovenského softvéru. Web je statický, príspevky idú cez GitHub PR.

## Definície

| Pojem | Význam |
|-------|--------|
| **Heritage** | Softvérový projekt zaradený do archívu |
| **Exhibit** | Jeden exponát = heritage + story + metadata |
| **Submission** | PR s novým exponátom |
| **Verified** | Exponát overený maintainerom, má aspoň 1 zdroj |
| **Draft** | Nový/neoverený exponát |
| **Disputed** | Exponát so spornými tvrdeniami |
| **Provenance** | Zdroje a pôvod informácií |

## Princípy

- Faktický tón, nie promo
- Vždy uvádzať zdroje
- Sporné tvrdenia označiť ako "disputed"
- Metadata sú striktné, story je voľný
- Žiadne binárky, len text, obrázky, linky

## Štruktúra repozitára

```
content/heritage/<id>/meta.yaml    # Povinné
content/heritage/<id>/story.md     # Povinné
content/heritage/<id>/media/       # Voliteľné
content/people/<id>/meta.yaml
content/companies/<id>/meta.yaml
```
