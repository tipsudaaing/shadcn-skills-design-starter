import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Presentational scaffolding for the docs previews so every showcase reads the
 * same: optional group headings + per-example captions act as the "indicator"
 * that labels each variant/size.
 */
export function DemoShowcase({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex w-full max-w-2xl flex-col [&>section+section]:mt-6 [&>section+section]:border-t [&>section+section]:border-border [&>section+section]:pt-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function DemoSection({
  label,
  align = "start",
  className,
  children,
}: {
  label?: string;
  align?: "start" | "center";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={cn("flex flex-col gap-3", className)}>
      {label && (
        <span className="text-muted-foreground text-[0.65rem] font-medium tracking-wider uppercase">
          {label}
        </span>
      )}
      <div
        className={cn(
          "flex flex-wrap items-end gap-x-6 gap-y-4",
          align === "center" && "justify-center",
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function DemoItem({
  caption,
  className,
  children,
}: {
  caption?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col items-center gap-1.5", className)}>
      {children}
      {caption && (
        <span className="text-muted-foreground font-mono text-[0.7rem]">
          {caption}
        </span>
      )}
    </div>
  );
}
