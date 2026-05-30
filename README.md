<div align="center">

# 🎨 shadcn-skills-design-starter

**A Next.js starter wired to a Figma-driven design system — built to work with Claude Code.**

Design in Figma → tokens flow 1:1 into Tailwind → Claude Code builds the UI.

<br/>

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-Radix-000000)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Design Tokens](https://img.shields.io/badge/Design_Tokens-1%2C804-171717)

</div>

---

## ✨ Overview

This starter connects three layers so a Figma design becomes production code with minimal prompting:

| Layer | Role |
| :--- | :--- |
| 🎯 **Figma** | Source of truth — 1,804 design variables (the neutral theme) |
| 🧩 **Design tokens** | Figma variables map **1:1** to Tailwind classes (`primary` → `bg-primary`) |
| 🤖 **Claude Code** | `CLAUDE.md` + a Skill carry the rules, tokens, and the Figma → code workflow |

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)**.

| Script | Action |
| :--- | :--- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Type-check with `tsc --noEmit` |

---

## 🧱 Tech Stack

| Tool | Version | Purpose |
| :--- | :--- | :--- |
| **Next.js** | 16 (App Router) | Framework — Server Components by default |
| **React** | 19 | UI runtime |
| **Tailwind CSS** | v4 | Styling via `@theme inline` tokens |
| **shadcn/ui** | Radix · neutral | Owned components in `components/ui/` |
| **next-themes** | 0.4 | Light / dark mode (class strategy) |
| **lucide-react** | 1.x | Icons |
| **sonner** | 2.x | Toasts |
| **tw-animate-css** | 1.x | Animations |

---

## 🤖 Claude Code Integration

This repo is designed to drive UI work from a Figma file through Claude Code.

### `CLAUDE.md` — loaded every session
Stack, structure, design-system rules, and the **Figma MCP workflow**:

```text
get_design_context → get_variable_defs → get_screenshot
        → map variables to Tailwind tokens
        → build (Server Components, components/ui)
        → validate against the screenshot
```

### `.claude/skills/shadcn-ui-design/` — the design-system Skill
Auto-activates on UI work and keeps heavy reference out of context until needed.

```text
.claude/skills/shadcn-ui-design/
├── SKILL.md                 # manifest + core rules
├── references/
│   ├── DESIGN.md            # all 1,804 tokens (Quick Reference + Appendix)
│   ├── components.md        # shadcn/ui usage patterns
│   └── nextjs.md            # App Router conventions
├── scripts/
│   └── generate_tokens.py   # regenerate DESIGN.md from the Figma export
└── assets/
    ├── globals.css · utils.ts · fonts.ts
    └── variables-export.json   # the Figma token source
```

---

## 🎨 Design Tokens

Never hardcode colors — every value is a **semantic token**. Because the Figma file and the
app share `variables-export.json`, the mapping is exact:

| Figma variable | Tailwind class |
| :--- | :--- |
| `background` / `foreground` | `bg-background` / `text-foreground` |
| `primary` / `primary-foreground` | `bg-primary` / `text-primary-foreground` |
| `muted` / `muted-foreground` | `bg-muted` / `text-muted-foreground` |
| `accent` | `bg-accent` |
| `destructive` | `text-destructive` / `bg-destructive` |
| `border` / `ring` | `border-border` / `ring-ring` |
| `chart-1…5` | `var(--color-chart-1…5)` |

Regenerate the token reference after a Figma re-sync:

```bash
python3 .claude/skills/shadcn-ui-design/scripts/generate_tokens.py
# → writes references/DESIGN.md, verifies all 1,804 tokens
```

---

## 📂 Project Structure

```text
.
├── app/
│   ├── layout.tsx           # fonts + ThemeProvider + Toaster
│   ├── globals.css          # @theme inline tokens (oklch, neutral)
│   └── page.tsx             # token showcase page
├── components/
│   ├── ui/                  # shadcn/ui — edit directly, never wrap
│   ├── providers/           # theme-provider
│   └── layout/              # app chrome (mode-toggle, …)
├── lib/
│   └── utils.ts             # cn() helper
├── .claude/skills/          # design-system Skill
├── components.json          # shadcn config (radix, neutral, @/ aliases)
└── CLAUDE.md                # Claude Code project guide
```

### Included UI components
`badge` · `button` · `card` · `dialog` · `dropdown-menu` · `input` · `label`
· `separator` · `skeleton` · `sonner` · `table`

Add more with:

```bash
npx shadcn@latest add <component>
```

---

## 📐 Conventions

- **Server Components by default** — add `"use client"` only for interactivity.
- **Semantic tokens only** — no raw hex, no `text-gray-500`.
- **Tailwind v4** — `size-4` (not `w-4 h-4`), `tw-animate-css`, React 19 `ComponentProps`.
- **Accessibility** — `aria-label` on icon buttons, `<DialogTitle>` + `<DialogDescription>`,
  visible focus rings, color never the only signal.

---

<div align="center">
<sub>Built with Next.js · Tailwind CSS v4 · shadcn/ui — driven by Figma & Claude Code</sub>
</div>
