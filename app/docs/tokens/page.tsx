import type { Metadata } from "next";

import { registry } from "@/components/docs/registry";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Design Tokens — Documentation",
  description:
    "Every design token in the system — colors, typography, spacing, and radius.",
};

export default function DesignTokensPage() {
  // Pulled from the registry so the page stays in sync as tokens are added.
  const tokens = registry.filter((e) => e.category === "Design Tokens");

  return (
    <article className="mx-auto max-w-4xl px-6 py-10 md:py-14">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Design Tokens</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <header className="mb-8 space-y-2">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">Design Tokens</h1>
          <Badge variant="outline">{tokens.length}</Badge>
        </div>
        <p className="text-muted-foreground text-base leading-7">
          The full token set powering this design system — colors, typography,
          spacing, and radius. Every value is pulled live from the Figma export
          and maps 1:1 to Tailwind classes.
        </p>
      </header>

      <Tabs defaultValue={tokens[0]?.slug} className="w-full gap-6">
        <TabsList>
          {tokens.map((token) => (
            <TabsTrigger key={token.slug} value={token.slug}>
              {token.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {tokens.map((token) => (
          <TabsContent key={token.slug} value={token.slug} className="space-y-4">
            <p className="text-muted-foreground border-b pb-3 text-sm leading-6">
              {token.description}
            </p>
            {token.demo}
          </TabsContent>
        ))}
      </Tabs>
    </article>
  );
}
