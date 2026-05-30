"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ComponentPreview({
  preview,
  code,
}: {
  preview: React.ReactNode;
  code: string;
}) {
  const [copied, setCopied] = React.useState(false);

  function copy() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <Tabs defaultValue="preview" className="w-full">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>

      <TabsContent value="preview">
        <div className="flex min-h-[350px] w-full items-center justify-center rounded-lg border p-10">
          {preview}
        </div>
      </TabsContent>

      <TabsContent value="code">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={copy}
            aria-label="Copy code"
            className="absolute top-3 right-3 z-10 size-7 text-muted-foreground"
          >
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
          </Button>
          <pre className="max-h-[450px] overflow-auto rounded-lg border bg-muted/50 p-4">
            <code className="font-mono text-sm leading-relaxed">{code}</code>
          </pre>
        </div>
      </TabsContent>
    </Tabs>
  );
}
