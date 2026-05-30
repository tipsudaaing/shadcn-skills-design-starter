# Component Audit — DESIGN.md / SKILL.md ↔ Figma

> Generated: 2026-05-30 · Figma file `aZs8dlgg9wlcmEM0lFd3Zw` · 91 pages, 55 component pages

## Scope & Sources

| Source | Role |
|---|---|
| `references/DESIGN.md` | Token reference (1,804 tokens) — no component catalogue |
| `SKILL.md` → `references/components.md` | Component catalogue (authoritative) |
| Figma file | 55 component pages (first contiguous `↳` run) |
| `components/ui/*.tsx` | Built components |

## Summary

| Metric | Before | After |
|---|---|---|
| Documented (catalogue) | 48 | 56 |
| Figma component pages | 55 | 55 |
| Built (`components/ui`) | 18 | 52 |
| Documented ∩ Figma | 47 | 55 |
| In Figma but undocumented | 8 | 0 |
| Documented but not in Figma | 1 | 1 |

## Remediation

1. **+8 components → catalogue** — `button-group` `combobox` `empty` `field` `input-group` `item` `kbd` `native-select` (were in Figma, missing from docs).
2. **+34 components built** — `npx shadcn add` for every documented + Figma component not yet in `components/ui` (built coverage 18 → 52).
3. **`resizable`** kept as a valid shadcn component (no Figma page) — flagged in the catalogue.

## Data-quality findings (Figma file)

Misspelled page names, normalized by the audit — recommend fixing in Figma for Code Connect:

| Figma page | Correct slug |
|---|---|
| `↳ Contex Menu` | context-menu |
| `↳ Seperator` | separator |
| `↳ Aspect Radio` | aspect-ratio |
| `↳ KPD` | kbd |

## Coverage Matrix

| Component | Group | Documented | In Figma | Built |
|---|---|:---:|:---:|:---:|
| `accordion` | Data | ✅ | ✅ | ✅ |
| `alert` | Feedback | ✅ | ✅ | ✅ |
| `alert-dialog` | Overlay | ✅ | ✅ | ✅ |
| `aspect-ratio` | Utility | ✅ | ✅ | ✅ |
| `avatar` | Display | ✅ | ✅ | ✅ |
| `badge` | Display | ✅ | ✅ | ✅ |
| `breadcrumb` | Navigation | ✅ | ✅ | ✅ |
| `button` | Form & Input | ✅ | ✅ | ✅ |
| `button-group` | Form & Input | ✅ | ✅ | ✅ |
| `calendar` | Utility | ✅ | ✅ | ✅ |
| `card` | Display | ✅ | ✅ | ✅ |
| `carousel` | Display | ✅ | ✅ | ✅ |
| `chart` | Display | ✅ | ✅ | ✅ |
| `checkbox` | Form & Input | ✅ | ✅ | ✅ |
| `collapsible` | Data | ✅ | ✅ | ✅ |
| `combobox` | Form & Input | ✅ | ✅ | — |
| `command` | Data | ✅ | ✅ | ✅ |
| `context-menu` | Overlay | ✅ | ✅ | ✅ |
| `data-table` | Data | ✅ | ✅ | ✅ |
| `date-picker` | Utility | ✅ | ✅ | — |
| `dialog` | Overlay | ✅ | ✅ | ✅ |
| `drawer` | Overlay | ✅ | ✅ | ✅ |
| `dropdown-menu` | Overlay | ✅ | ✅ | ✅ |
| `empty` | Display | ✅ | ✅ | ✅ |
| `field` | Form & Input | ✅ | ✅ | ✅ |
| `hover-card` | Overlay | ✅ | ✅ | ✅ |
| `input` | Form & Input | ✅ | ✅ | ✅ |
| `input-group` | Form & Input | ✅ | ✅ | ✅ |
| `input-otp` | Form & Input | ✅ | ✅ | ✅ |
| `item` | Display | ✅ | ✅ | ✅ |
| `kbd` | Display | ✅ | ✅ | ✅ |
| `label` | Form & Input | ✅ | ✅ | ✅ |
| `menubar` | Navigation | ✅ | ✅ | ✅ |
| `native-select` | Form & Input | ✅ | ✅ | ✅ |
| `navigation-menu` | Navigation | ✅ | ✅ | ✅ |
| `pagination` | Navigation | ✅ | ✅ | ✅ |
| `popover` | Overlay | ✅ | ✅ | ✅ |
| `progress` | Display | ✅ | ✅ | ✅ |
| `radio-group` | Form & Input | ✅ | ✅ | ✅ |
| `resizable` | Utility | ✅ | — | — |
| `scroll-area` | Utility | ✅ | ✅ | ✅ |
| `select` | Form & Input | ✅ | ✅ | ✅ |
| `separator` | Data | ✅ | ✅ | ✅ |
| `sheet` | Overlay | ✅ | ✅ | ✅ |
| `sidebar` | Navigation | ✅ | ✅ | ✅ |
| `skeleton` | Display | ✅ | ✅ | ✅ |
| `slider` | Form & Input | ✅ | ✅ | ✅ |
| `sonner` | Feedback | ✅ | ✅ | ✅ |
| `spinner` | Display | ✅ | ✅ | ✅ |
| `switch` | Form & Input | ✅ | ✅ | ✅ |
| `table` | Display | ✅ | ✅ | ✅ |
| `tabs` | Navigation | ✅ | ✅ | ✅ |
| `textarea` | Form & Input | ✅ | ✅ | ✅ |
| `toggle` | Form & Input | ✅ | ✅ | ✅ |
| `toggle-group` | Form & Input | ✅ | ✅ | ✅ |
| `tooltip` | Overlay | ✅ | ✅ | ✅ |

_56 components audited · 53 fully covered (documented + Figma + built)._
