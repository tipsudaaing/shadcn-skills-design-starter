# shadcn-skills-design-starter

A Next.js starter wired to a Figma-driven design system, built to work with Claude Code.

## Stack

- **Next.js 16** (App Router) · **React 19** · **Tailwind CSS v4**
- **shadcn/ui** (Radix, neutral theme, CSS variables)
- **next-themes** (light/dark), **lucide-react**, **sonner**
- **1,804 design tokens** synced from Figma (`variables-export.json`)

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`, `npm run typecheck`.

## Claude Code Integration

This repo is set up to drive UI work from a Figma design file through Claude Code:

- **`CLAUDE.md`** — project guide loaded every session: stack, structure, design-system
  rules, and the Figma MCP integration flow (`get_design_context` → `get_variable_defs` →
  `get_screenshot` → map variables → build → validate).
- **`.claude/skills/shadcn-ui-design/`** — a Claude Code Skill carrying the full token
  reference, Next.js conventions, and component patterns. Auto-activates on UI work.
  - `references/DESIGN.md` — all 1,804 tokens (Quick Reference + Appendix)
  - `references/nextjs.md`, `references/components.md`
  - `scripts/generate_tokens.py` — regenerate `DESIGN.md` from the Figma export
  - `assets/` — `globals.css`, `utils.ts`, `fonts.ts`, `variables-export.json`

## Design Tokens

Figma variables map 1:1 to Tailwind classes (e.g. `primary` → `bg-primary`,
`muted-foreground` → `text-muted-foreground`). Never hardcode colors — use semantic
token classes. Regenerate the token reference after a Figma re-sync:

```bash
python3 .claude/skills/shadcn-ui-design/scripts/generate_tokens.py
```

## Project Structure

```
app/                  # App Router — Server Components by default
components/ui/         # shadcn/ui components (edit directly)
components/providers/  # theme-provider
components/layout/     # app chrome (mode-toggle, …)
lib/utils.ts           # cn() helper
.claude/skills/        # design-system skill
CLAUDE.md              # Claude Code project guide
```
