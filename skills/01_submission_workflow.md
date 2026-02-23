# 01 – Submission Workflow

## Kroky

1. **Fork** repozitára
2. **Branch**: `add/<id>` (napr. `add/eset-nod`)
3. **Vytvor priečinok**: `content/heritage/<id>/`
4. **Pridaj súbory**:
   - `meta.yaml` (povinné – viď 02_content_schema.md)
   - `story.md` (povinné – viď 03_style_guide.md)
   - `media/` (voliteľné)
5. **Otvor PR** s názvom `add: <Title>`
6. **Vyplň PR checklist**

## PR Checklist

- [ ] Priečinok je `content/heritage/<id>/`
- [ ] `meta.yaml` má všetky povinné polia
- [ ] `story.md` má sekcie: About, Impact, Tech, Sources
- [ ] Obrázky < 2 MB, formáty PNG/JPG/WebP/SVG
- [ ] Žiadne binárky (.exe, .dll, .zip)
- [ ] Status = `draft` pre nové submission
- [ ] Aspoň 1 zdroj uvedený
- [ ] ID je slug (malé písmená, pomlčky, bez diakritiky)

## DO

- Jeden PR = jeden exponát
- Uvádzať zdroje ku každému tvrdeniu
- Používať slug ako ID (napr. `eset-nod`)

## DON'T

- Nemeniť existujúce exponáty v tom istom PR
- Nepoužívať diakritiku v ID
- Neposielať PR bez meta.yaml

## Common failures

| Chyba | Oprava |
|-------|--------|
| Chýba meta.yaml | Pridaj do root priečinka exponátu |
| ID s diakritikou | Nahraď za ASCII ekvivalent |
| PR mení viac priečinkov | Rozdeľ na viac PR |
