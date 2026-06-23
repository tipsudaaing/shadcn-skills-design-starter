import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AutoFitPreview } from "@/components/docs/auto-fit-preview";
import { defaultPreview } from "@/components/docs/card-preview";
import { DesignTokensView } from "@/components/docs/design-tokens-view";
import { CATEGORY_ORDER, registry } from "@/components/docs/registry";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

// Card-specific previews for components whose real demo can't show its point in
// an inert, non-hover thumbnail. Tooltip only appears on hover and portals out
// of the frame, so we render a static mock of the open tooltip using the same
// tokens as the real TooltipContent (bg-foreground / text-background).
const CARD_PREVIEW_OVERRIDES: Record<string, ReactNode> = {
  tooltip: (
    <div className="flex flex-col items-center gap-2">
      <div className="bg-foreground text-background relative rounded-md px-3 py-1.5 text-xs">
        Add to library
        <span className="bg-foreground absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rotate-45 rounded-[1px]" />
      </div>
      <Button variant="outline">Hover me</Button>
    </div>
  ),
};

export default function DocsHome() {
  // Component groups for the "Browse components" tab (design tokens live in
  // their own tab). Keeps the full registry entries so cards get a live preview.
  const groups = CATEGORY_ORDER.filter((c) => c !== "Design Tokens")
    .map((title) => ({
      title,
      items: registry.filter((e) => e.category === title),
    }))
    .filter((g) => g.items.length > 0);
  const total = groups.reduce((n, g) => n + g.items.length, 0);

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
      </div>

      <Tabs defaultValue="components" className="mt-10 w-full gap-8">
        <TabsList>
          <TabsTrigger value="components">Browse components</TabsTrigger>
          <TabsTrigger value="tokens">Design tokens</TabsTrigger>
        </TabsList>

        <TabsContent value="components" className="space-y-8">
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
                      <div
                        inert
                        className="bg-muted/30 relative flex h-36 items-center justify-center overflow-hidden border-b"
                      >
                        {FIT_TO_FRAME.has(item.slug) ? (
                          <AutoFitPreview>{item.demo}</AutoFitPreview>
                        ) : (
                          <div className="flex w-full scale-90 items-center justify-center p-4 [&_*]:!animate-none">
                            {CARD_PREVIEW_OVERRIDES[item.slug] ??
                              defaultPreview(item.demo)}
                          </div>
                        )}
                      </div>
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

          <p className="text-muted-foreground text-sm">
            {total} components · Add a new one by appending to{" "}
            <code className="font-mono">components/docs/registry.tsx</code>.
          </p>
        </TabsContent>

        <TabsContent value="tokens">
          <DesignTokensView />
        </TabsContent>
      </Tabs>
    </div>
  );
}
