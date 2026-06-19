# Design Tokens — DTCG 3-tier (Apple design language)

W3C **DTCG**-format design tokens for this project, in the canonical 3-tier
architecture. Direction applied via the `apply-aesthetic` skill → **Apple**
(action blue `#0071e3`, near-black ink `#1d1d1f`, pale gray `#f5f5f7`, graphite
darks, soft 12px geometry, SF/system type).

## The three tiers

```
Primitive  →  Semantic  →  Component
raw palette   purpose roles  component-scoped
(#0071e3)      (primary)      (button.default-bg)
```

| Tier | Lives in | Rule |
|---|---|---|
| **Primitive** | `*.tokens.json` → `primitive` | Raw values. Never referenced by components. |
| **Semantic** | `*.tokens.json` → `semantic` + **`app/globals.css`** `:root`/`.dark` | Purpose roles (`primary`, `muted-foreground`, `ring`…). Names map 1:1 to CSS vars and Tailwind classes (`bg-primary`, `text-muted-foreground`). Light = `$value`; dark = `$extensions.mode.dark`. |
| **Component** | `*.tokens.json` → `component` → generated to `app/tokens.generated.css` | `button.*`, `field.*`, `dialog.*`. Each aliases a semantic role — components never touch primitives or raw values. |

## Files

- `color.tokens.json` — palette → roles → button/field/dialog colors
- `dimension.tokens.json` — radius scale (12px Apple-soft base)
- `motion.tokens.json` — durations + easings + per-component transitions
- `typography.tokens.json` — font families (Apple system stack), weights, sizes

## Build

```bash
npm run tokens:build   # tokens/*.tokens.json → app/tokens.generated.css
```

`scripts/build-tokens.mjs` emits **only the component tier** as CSS custom
properties. The trick that keeps light/dark working: when a component token
aliases a **semantic** role it emits `var(--role)` (not the resolved literal),
so it inherits the mode-swapped value from `globals.css`. Primitive aliases and
raw values (overlay, durations) are inlined. `globals.css` `@import`s the
generated file, and `npm run build` runs `tokens:build` first so it never drifts.

`globals.css` `:root`/`.dark` **is** the compiled primitive+semantic output (the
source of truth that actually renders); these JSON files are the documented,
tool-portable definition of the same system.

## Accessibility

Every mapped text/UI color pair is verified **WCAG 2.2 AA** with
`.claude/skills/_resources/scripts/contrast.py` (e.g. white on `#0071e3` =
4.70:1; `#6e6e73` on white = 5.07:1; `#86868b` on black = 5.80:1).

> Note: this Apple direction intentionally diverges from the original
> Figma-synced neutral theme (a deliberate `apply-aesthetic` re-point).
