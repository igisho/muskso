# 05 - Review playbook

## 1) Struktura a schema (automatizovatelne)

- [ ] subor je v spravnom priecinku (`projects|people|companies`)
- [ ] nazov suboru je `YYYY(-MM)-slug.json`
- [ ] slug v nazve sa rovna `id`
- [ ] `npm run validate:content` prechadza

## 2) Kvalita obsahu (manualne)

- [ ] text je fakticky, nie promo
- [ ] `summary` je vecne, kratke (<= 300)
- [ ] dlhy obsah je v `storyMarkdown`
- [ ] tvrdenia maju zdroje (`sources`)

## 3) Referencna integrita

- [ ] `project.company` existuje vo firmach
- [ ] `person.projects` ukazuje na existujuce projekty
- [ ] `company.projects` ukazuje na existujuce projekty

## 4) Prava a media

- [ ] cover/media maju jasny povod
- [ ] bez binarok a zakazanych suborov
- [ ] bez obsahu porusujuceho prava tretich stran

## 5) Technicke minimum pred merge

- [ ] `npm run lint`
- [ ] `npm test`
- [ ] `npm run build`

## Vysledok review

- approve: vecne spravne + vsetky kontroly zelene
- request changes: konkretne body s navrhom opravy
- close: porusenie prav alebo zjavne nevhodny obsah
