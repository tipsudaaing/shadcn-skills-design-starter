import { registry } from "@/components/docs/registry";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/**
 * The tabbed Design Tokens reference (Colors / Typography / Spacing / Radius),
 * pulled from the registry so it stays in sync. Shared by the `/docs/tokens`
 * page and the "Design tokens" tab on the docs home.
 */
export function DesignTokensView() {
  const tokens = registry.filter((e) => e.category === "Design Tokens");

  return (
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
  );
}
