# Ako prispieť do MUSKSO

Ďakujeme, že pomáhate rozširovať archív slovenského softvéru.

## Pred začiatkom

- Prečítajte si `CODE_OF_CONDUCT.md`
- Overte, že záznam ešte v archíve nie je
- Pripravte si dôveryhodné zdroje (aspoň 1)

## Workflow (fork -> branch -> PR)

```bash
git clone https://github.com/<your-fork>/muskso.git
cd muskso
git checkout -b add/<id-zaznamu>
```

Po dokončení zmien otvorte Pull Request do `igisho/muskso`.

## Kde pridávať obsah

- Projekty: `src/content/projects/`
- Ľudia: `src/content/people/`
- Firmy/štúdiá: `src/content/companies/`

Každý súbor je jeden JSON záznam.

## Konvencia názvu súborov

- `YYYY-slug.json` alebo `YYYY-MM-slug.json`
- `slug` v názve musí byť rovnaký ako pole `id` v JSON

Príklady:

- `1992-prva-akcia.json`
- `2024-altky-media-platform.json`

## Minimálne požiadavky na JSON

- vyplnené povinné polia podľa schémy,
- platné referencie (`person.projects`, `company.projects`, `project.company`),
- aspoň 1 zdroj v poli `sources`.

## Lokálna validácia pred PR

```bash
npm run validate:content
npm run lint
npm test
npm run build
```

## PR checklist

- [ ] Zmeny sú iba k veci (bez nesúvisiacich úprav)
- [ ] Názvy súborov dodržujú konvenciu
- [ ] `id` v JSON sedí so slugom v názve
- [ ] Prešli `validate:content`, `lint`, `test`, `build`
- [ ] PR obsahuje stručný popis zmien a zdrojov

## Poznámky

- Necommitujte `node_modules`, build output ani binárky
- Pri neistote pridajte záznam ako `status: "draft"`

Ďakujeme za váš príspevok.
