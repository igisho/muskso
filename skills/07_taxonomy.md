# 07 - Taxonomia

## Odporucane hodnoty `type`

- `application`
- `game`
- `utility`
- `system`

Poznamka: schema dnes povoluje lubovolny string, ale preferujeme konzistentne hodnoty z tohto zoznamu.

## `status`

- `draft` - novy/neovereny zaznam
- `verified` - overeny zaznam so zdrojmi
- `disputed` - sporne tvrdenia alebo nejasny povod

## `platform` (priklady)

- `MS-DOS`, `Windows`, `Linux`, `Java`, `Web`, `Android`, `iOS`, `Cross-platform`, `Embedded`, `PC`, `ZX Spectrum 128K, ZX Spectrum 48K`

## `tags`

Pravidla:

- lowercase, bez diakritiky,
- pomlcky namiesto medzier,
- odporucane max ~10 tagov,
- pouzivaj existujuce tagy pred vytvaranim novych.

Priklady:

- technologia: `ai`, `automation`, `local-llm`, `jmix`, `web`
- domena: `security`, `forensics`, `banking`, `media`
- distribucia: `open-source`, `commercial`, `shareware`

## Textove polia

- `summary`: kratke zhrnutie (max 300)
- `storyMarkdown`: detailny formatovany popis (volitelne)
