# _resources

Shared reference data for the design skills installed from `ux-ui-agent-skills`.
Vendored here so the project root stays clean — every sibling skill folder
references these files via `../_resources/...`.

**The full kit is now installed: all 17 skills + the complete 138-system
`design-systems/library/` catalog + all framework adapters, scripts, tokens, and
component specs.**

## Important: tokens here are the kit's samples — not this project's source of truth

`tokens/*.json` and the `scripts/validate_*.py` / `build_tokens.mjs` pipeline are
the kit's generic DTCG examples. **This project's real design tokens live in the
neutral theme owned by the `shadcn-ui-design` skill** (`app/globals.css` +
`shadcn-ui-design/references/DESIGN.md`, synced 1:1 from Figma).

When a skill (design-tokens, token-build, brandkit, design-code, figma-integration…)
says to generate/build/validate tokens, **target the project source**, not the
sample files here. Treat everything under `_resources/tokens/` as reference only.

**Wired (2026-06-13):** `scripts/build_tokens.mjs` now has a project mode that reads the
real theme directly:
- `node _resources/scripts/build_tokens.mjs --from-css app/globals.css` → re-emit real `:root`+`.dark`
- `… --from-css app/globals.css --json --out dist/tokens.json` → canonical `{name:{light,dark}}`
  map (32 tokens) to feed platform/framework export.
The no-arg DTCG mode (kit samples) is kept for back-compat only. The script was also fixed to
work when the project path contains spaces (uses `fileURLToPath`, not `import.meta.url.pathname`).
The kit tokens never touch `globals.css`, so they don't silently replace the
neutral theme — but the active token-generating skills *can* introduce competing
values if pointed at the wrong place. Keep the neutral theme as the single source
of truth (project `CLAUDE.md`: semantic tokens only, no hardcoded colors).

## Overlap to be aware of

These kit skills overlap with the project's own `shadcn-ui-design` skill and the
`figma:*` skills — prefer the project skill for this codebase's UI work:

- `design-code` / `design-component` ↔ `shadcn-ui-design` (building UI for this app)
- `design-tokens` / `token-build` / `brandkit` ↔ the Figma-synced neutral theme
- `figma-integration` ↔ the Figma MCP rules in root `CLAUDE.md` + the `figma:*` skills
- `apply-aesthetic` / `migrate-design-system` ↔ can pull away from the neutral theme;
  use only when a deliberate restyle is intended

## Note on kit conventions

Some skills reference the kit's own `CLAUDE.md` sections (e.g. "Component Quality
Bar", "Single-Theme Consistency") and `npm run` scripts that aren't wired into this
project's `package.json`. Read those as the equivalent rules in this project's root
`CLAUDE.md`, and run the scripts directly from `_resources/scripts/` (or via the
`design-qa` skill) rather than `npm run`.
