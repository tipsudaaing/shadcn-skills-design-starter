import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Server-only helper. For a component slug it reads the matching source in
 * `components/ui/*.tsx`, figures out which design tokens (CSS custom
 * properties) the component actually styles itself with, and resolves their
 * light/dark values from `app/globals.css`. The result is a copy-pasteable CSS
 * block rendered in the doc page's "CSS Variables" tab.
 *
 * It never invents values — it only surfaces tokens already defined in the
 * theme, so the docs stay in sync with `globals.css` (CLAUDE.md rule #1).
 */

// Semantic colour tokens, in the order we want them emitted. A component is
// considered to "use" one when its source contains a colour utility bound to it
// (e.g. `bg-primary`, `border-input`, `dark:hover:bg-muted/50`).
const COLOR_TOKENS = [
  "background",
  "foreground",
  "card",
  "card-foreground",
  "popover",
  "popover-foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "border",
  "input",
  "ring",
  "chart-1",
  "chart-2",
  "chart-3",
  "chart-4",
  "chart-5",
  "sidebar",
  "sidebar-foreground",
  "sidebar-primary",
  "sidebar-primary-foreground",
  "sidebar-accent",
  "sidebar-accent-foreground",
  "sidebar-border",
  "sidebar-ring",
] as const;

const RADIUS_TOKENS = [
  "radius",
  "radius-sm",
  "radius-md",
  "radius-lg",
  "radius-xl",
  "radius-2xl",
  "radius-3xl",
  "radius-4xl",
] as const;

// Tailwind utility prefixes that take a colour token as their value.
const COLOR_PREFIXES =
  "bg|text|border|ring|ring-offset|inset-ring|fill|stroke|from|via|to|outline|divide|caret|decoration|placeholder|shadow|accent";

// Compositions have no single source file — read their primitives instead.
const SOURCE_OVERRIDES: Record<string, string[]> = {
  combobox: ["popover", "command"],
  "data-table": ["table"],
  "date-picker": ["calendar", "popover"],
};

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Parse a single `selector { ... }` block from globals.css into a name→value map. */
function parseBlock(css: string, head: RegExp): Record<string, string> {
  const start = css.search(head);
  if (start === -1) return {};
  const open = css.indexOf("{", start);
  const close = css.indexOf("\n}", open);
  const body = css.slice(open + 1, close === -1 ? undefined : close);
  const out: Record<string, string> = {};
  const re = /--([a-z0-9-]+):\s*([^;]+);/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(body))) out[m[1]] = m[2].trim();
  return out;
}

type Theme = { light: Record<string, string>; dark: Record<string, string> };

let themeCache: Theme | null = null;

function loadTheme(): Theme {
  if (themeCache) return themeCache;
  const css = readFileSync(join(process.cwd(), "app/globals.css"), "utf8");
  // `@theme inline` defines the radius scale; `:root` holds the real light
  // values and overrides any aliases; `.dark` holds the dark overrides.
  const themeInline = parseBlock(css, /@theme inline\s*\{/);
  const root = parseBlock(css, /:root\s*\{/);
  themeCache = {
    light: { ...themeInline, ...root },
    dark: parseBlock(css, /\.dark\s*\{/),
  };
  return themeCache;
}

function readSources(slug: string): string {
  const names = SOURCE_OVERRIDES[slug] ?? [slug];
  const parts: string[] = [];
  for (const name of names) {
    try {
      parts.push(
        readFileSync(join(process.cwd(), "components/ui", `${name}.tsx`), "utf8"),
      );
    } catch {
      // primitive missing — skip; result may legitimately be empty
    }
  }
  return parts.join("\n");
}

function tokensUsed(source: string): string[] {
  if (!source) return [];
  const used = new Set<string>();

  // 1. Colour utilities, e.g. `bg-primary`, `dark:border-input/50`. The
  //    negative lookahead keeps `primary` from matching inside `primary-foreground`.
  for (const token of COLOR_TOKENS) {
    const re = new RegExp(`(?:${COLOR_PREFIXES})-${escapeRe(token)}(?![a-z-])`);
    if (re.test(source)) used.add(token);
  }

  // 2. Direct `var(--token)` references (arbitrary values, color-mix, etc.).
  let m: RegExpExecArray | null;
  const varRe = /var\(\s*--([a-z0-9-]+)\s*\)/g;
  while ((m = varRe.exec(source))) used.add(m[1]);

  // 3. Any `rounded*` utility pulls in the base radius token.
  if (/\brounded(?:-[a-z0-9[\]]+)?\b/.test(source)) used.add("radius");

  return [...used];
}

export type ComponentCss = { css: string; tokenCount: number };

/**
 * Build the "CSS Variables" block for a component, or `null` when no source
 * file resolves (e.g. pure reference pages) or no tokens are used.
 */
export function getComponentCss(slug: string, title: string): ComponentCss | null {
  const source = readSources(slug);
  const used = new Set(tokensUsed(source));
  if (used.size === 0) return null;

  const { light, dark } = loadTheme();
  const order = [...COLOR_TOKENS, ...RADIUS_TOKENS];
  const emit = order.filter((t) => used.has(t) && light[t] !== undefined);
  if (emit.length === 0) return null;

  const lightLines = emit.map((t) => `  --${t}: ${light[t]};`).join("\n");

  // Only show a `.dark` block for tokens whose value actually changes.
  const darkEmit = emit.filter((t) => dark[t] !== undefined && dark[t] !== light[t]);
  const darkBlock = darkEmit.length
    ? `\n\n.dark {\n${darkEmit.map((t) => `  --${t}: ${dark[t]};`).join("\n")}\n}`
    : "";

  const css = `/* Design tokens used by ${title} */\n:root {\n${lightLines}\n}${darkBlock}`;
  return { css, tokenCount: emit.length };
}
