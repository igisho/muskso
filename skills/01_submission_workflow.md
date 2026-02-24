# 01 - Submission workflow

## Kroky

1. Fork repozitara.
2. Vytvor branch: `add/<id-zaznamu>`.
3. Pridaj alebo uprav JSON subor v jednom z priecinkov:
   - `src/content/projects/`
   - `src/content/people/`
   - `src/content/companies/`
4. Dodrz nazov suboru: `YYYY-slug.json` alebo `YYYY-MM-slug.json`.
5. Over, ze `slug` v nazve sa rovna `id` v obsahu.
6. Spusti lokalne validacie.
7. Otvor PR do `main` s popisom zmien a zdrojov.

## PR checklist

- [ ] Zmena je vecne ohranicena (bez nesuvisiacich suborov)
- [ ] Naming konvencia je dodrzana
- [ ] Referencie medzi `projects/people/companies` su validne
- [ ] `summary` je kratky (max 300 znakov)
- [ ] Dlhe texty su v `storyMarkdown`
- [ ] Prechadzaju `validate:content`, `lint`, `test`, `build`

## DO

- Jeden PR = jedna tematicka zmena.
- Pri novom projekte pridaj aspon 1 URL v `sources`.
- Ak si nie si isty, pouzi `status: "draft"`.

## DON'T

- Nepouzivaj `meta.yaml` ani `story.md` (uz sa nepouzivaju).
- Nepouzivaj diakritiku v `id`.
- Nepridavaj `node_modules`, `dist` ani binarne subory.
