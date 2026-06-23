import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AutoFitPreview } from "@/components/docs/auto-fit-preview";
import { defaultPreview } from "@/components/docs/card-preview";
import { CATEGORY_ORDER, registry } from "@/components/docs/registry";

// Demos taller/wider than the card frame — scaled to fit so the whole
// component shows uncropped, instead of being centre-cropped to the frame.
const FIT_TO_FRAME = new Set([
  "card",
  "carousel",
  "empty",
  "sidebar",
  "data-table",
  "command",
  "calendar",
  "scroll-area",
  "chart",
]);
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DocsHome() {
  // Group the full registry entries (keeps `demo` for the card previews).
  const groups = CATEGORY_ORDER.map((title) => ({
    title,
    items: registry.filter((e) => e.category === title),
  })).filter((g) => g.items.length > 0);
  const total = registry.length;

  return (
    <div className="mx-auto max-w-4xl px-6 py-10 md:py-14">
      <div className="space-y-3">
        <Badge variant="secondary">Next.js 16 · Tailwind v4 · shadcn/ui</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Component Documentation</h1>
        <p className="text-muted-foreground max-w-2xl text-base leading-7">
          A living catalogue of every component in this design system. Each page shows a live
          preview and the code, styled entirely from the {""}
          <span className="text-foreground font-medium">1,804 Figma design tokens</span> —
          colors, spacing, radius, and typography map 1:1 to Tailwind classes.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild>
            <Link href="/docs/button">
              Browse components <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/tokens">View design tokens</Link>
          </Button>
        </div>
      </div>

      <div className="mt-12 space-y-8">
        {groups.map((group) => (
          <section key={group.title} className="space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold tracking-tight">{group.title}</h2>
              <Badge variant="outline">{group.items.length}</Badge>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                // The card holds a live demo preview that can itself contain
                // links/buttons, so the whole card can't be wrapped in an <a>
                // (that nests anchors → invalid HTML + hydration error). Instead
                // an absolutely-positioned overlay <Link> makes it clickable, and
                // the preview is `inert` so it's out of the tab order / a11y tree.
                <div key={item.slug} className="group relative">
                  <Card className="group-hover:border-foreground/20 h-full gap-0 overflow-hidden p-0 transition-colors">
                    {item.category !== "Design Tokens" && (
                      <div
                        inert
                        className="bg-muted/30 relative flex h-36 items-center justify-center overflow-hidden border-b"
                      >
                        {FIT_TO_FRAME.has(item.slug) ? (
                          <AutoFitPreview>{item.demo}</AutoFitPreview>
                        ) : (
                          <div className="flex w-full scale-90 items-center justify-center p-4 [&_*]:!animate-none">
                            {defaultPreview(item.demo)}
                          </div>
                        )}
                      </div>
                    )}
                    <CardHeader className="group-hover:bg-accent/40 p-4 transition-colors">
                      <CardTitle className="flex items-center justify-between text-base">
                        {item.title}
                        <ArrowRight className="text-muted-foreground size-4 opacity-0 transition-opacity group-hover:opacity-100" />
                      </CardTitle>
                      <CardDescription className="font-mono text-xs">
                        /docs/{item.slug}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Link
                    href={`/docs/${item.slug}`}
                    aria-label={`${item.title} documentation`}
                    className="focus-visible:ring-ring absolute inset-0 rounded-lg focus-visible:ring-2 focus-visible:outline-none"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="text-muted-foreground mt-12 text-sm">
        {total} documented entries · Add a new one by appending to{" "}
        <code className="font-mono">components/docs/registry.tsx</code>.
      </p>
    </div>
  );
}
