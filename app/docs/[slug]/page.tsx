import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { ComponentPreview } from "@/components/docs/component-preview";
import { getEntry, registry } from "@/components/docs/registry";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return registry.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) return { title: "Not found" };
  return { title: `${entry.title} — Documentation`, description: entry.description };
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) notFound();

  return (
    <article className="mx-auto max-w-4xl px-6 py-10 md:py-14">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{entry.category}</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{entry.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <header className="mb-8 space-y-2">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">{entry.title}</h1>
          <Badge variant="outline">{entry.category}</Badge>
        </div>
        <p className="text-muted-foreground text-base leading-7">{entry.description}</p>
      </header>

      <ComponentPreview preview={entry.demo} code={entry.code} />
    </article>
  );
}
