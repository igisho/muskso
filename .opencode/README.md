# MUSKSO agent workflow

Project-local OpenCode subagents for content enrichment live in `.opencode/agents/`.

Recommended flow:

1. `@exhibit-orchestrator enrich top 5 unfinished exhibits`
2. Review the proposed sources, claims, and image candidates.
3. Let the orchestrator create or update `src/content/projects/*.json` and matching assets in `public/projects/`.
4. Run `npm run validate:content`, `npm run lint`, `npm test`, and `npm run build`.

Useful helpers:

- `npm run audit:content` prints the current backlog sorted by importance and missing fields.
- Covers must include credit metadata in project JSON.
- Own captures are allowed, but they should be cropped to a clean 16:9 presentation size such as `1600x900` or `1280x720` before commit.
