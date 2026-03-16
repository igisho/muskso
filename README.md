# Múzeum slovenského softvéru (MUSKSO)

Webová aplikácia pre komunitný digitálny archív slovenského softvéru.

Produkčná doména: `https://muskso.sk`

## O projekte

MUSKSO zhromažďuje historické softvérové projekty, ich autorov a firmy.
Súčasťou aplikácie sú:

- domovská stránka s kurátorským výberom,
- archív s filtrovaním a vyhľadávaním exponátov,
- detail projektu, osoby a firmy,
- časová os významných udalostí,
- stránka s pravidlami prispievania.

Hlavné routy sú definované v `src/App.tsx`.

Zakladateľ portálu: Igor Sovcik.

## Požiadavky

- Node.js 20+
- npm 10+

## Spustenie lokálne

```sh
npm install
npm run dev
```

Aplikácia sa štandardne spúšťa na porte `8080`.

## Užitočné skripty

```sh
npm run dev      # development server
npm run build    # produkčný build
npm run preview  # lokálny náhľad buildu
npm run lint     # linting
npm test         # testy (vitest)
npm run validate:content # validácia dát archívu
npm run audit:content    # backlog neúplných projektov podľa priority
```

## Štruktúra projektu

- `src/pages` - routovateľné stránky aplikácie
- `src/components` - zdieľané UI a doménové komponenty
- `src/content/projects` - záznamy projektov (1 súbor = 1 záznam)
- `src/content/people` - záznamy osôb
- `src/content/companies` - záznamy firiem
- `src/data/repository.ts` - načítanie obsahu pre UI, časová os sa generuje automaticky z projektov
- `src/test` - test setup a testy

## Konvencie súborov obsahu

- projekty: `YYYY-slug.json` alebo `YYYY-MM-slug.json` (rok vydania + `id`)
- firmy: `YYYY-slug.json` alebo `YYYY-MM-slug.json` (rok založenia + `id`)
- ľudia: `YYYY-slug.json` alebo `YYYY-MM-slug.json` (najskorší rok naviazaného projektu + `id`)

Konvencie kontroluje `npm run validate:content`.

## Formát textu projektu

- `summary` slúži ako krátky text pre výpisy a úvod detailu projektu,
- `summary` má limit 300 znakov,
- voliteľné pole `storyMarkdown` slúži na dlhší formátovaný popis (Markdown) v detaile projektu,
- voliteľné pole `importance` (`1-5`) určuje kurátorskú prioritu pri obohacovaní a výbere top exponátov,
- ak je vyplnené `cover`, projekt musí mať aj `coverAlt`, `coverCredit` a `coverOrigin`,
- `coverSourceUrl` a `coverLicense` sú odporúčané pre lepšiu provenienciu obrázka,
- odporúčanie: `summary` držať stručné, detailnejší obsah písať do `storyMarkdown`.

## Agentický enrichment workflow

- project-local OpenCode subagenti sú v `.opencode/agents/`,
- vstupný orchestrátor je `@exhibit-orchestrator`,
- backlog neúplných projektov si viete vypísať cez `npm run audit:content`,
- pre dynamické weby a captures je pripravený `browser-researcher`,
- pri vlastných captures používajte rozumný crop na 16:9, ideálne `1600x900` alebo `1280x720`, a vždy uveďte kredit a zdroj.

## Ako prispieť cez PR

1. vytvorte branch vo svojom fork-u,
2. pridajte alebo upravte JSON záznam v `src/content/projects`, `src/content/people` alebo `src/content/companies`,
3. dodržte názov súboru `YYYY-slug.json` (alebo `YYYY-MM-slug.json`) a rovnaké `id` v obsahu,
4. spustite `npm run validate:content && npm run lint && npm test && npm run build`,
5. otvorte Pull Request so stručným popisom zmien a zdrojov.

## Technológie

- React + TypeScript
- Vite
- React Router
- TanStack Query
- Tailwind CSS + shadcn/ui
- Vitest + Testing Library

## Licencie

- Kód projektu: MIT (`LICENSE`)
- Obsah a dátové záznamy: CC BY-SA 4.0 (`LICENSE-CONTENT`)
