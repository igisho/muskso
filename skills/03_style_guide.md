# 03 - Style guide

## Ton textu

- fakticky, neutralny, vecny,
- ziadny marketingovy jazyk,
- pri neistote explicitne uviest kontext alebo status `draft/disputed`.

## Pisanie do projektu

- `summary`: kratke zhrnutie (max 300 znakov),
- `storyMarkdown`: dlhy popis vo formate Markdown (volitelne),
- preferuj kratke odseky a konkretne tvrdenia.

## Markdown odporucania (`storyMarkdown`)

- pouzivaj `##` a `###` pre sekcie,
- zoznamy pre metodiku, kroky, obmedzenia,
- linky pis ako plne URL,
- nepis HTML, pokial to nie je nevyhnutne.

## Obrazky

- cover ukladaj do `public/projects/`,
- v JSON pouzi `cover: "/projects/<nazov-suboru>.png"`,
- pomer pre cover odporucany 16:9,
- v UI sa obrazok oreze cez `object-cover`.

## DO

- uvadzaj zdroje ku klucovym tvrdeniam,
- udrzuj konzistentne nazvy a terminologiu,
- pis v slovencine.

## DON'T

- neprehanaj "vplyv a vyznam" bez dokazov,
- nepouzivaj superlativy bez zdrojov,
- nenechavaj dlhy text v `summary`.
