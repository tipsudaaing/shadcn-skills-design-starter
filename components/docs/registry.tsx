import type { ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type DocCategory = "Components" | "Design Tokens";

export type DocEntry = {
  slug: string;
  title: string;
  description: string;
  category: DocCategory;
  demo: ReactNode;
  code: string;
};

export const CATEGORY_ORDER: DocCategory[] = ["Components", "Design Tokens"];

const swatches: { name: string; className: string; fg: string }[] = [
  { name: "background", className: "bg-background", fg: "text-foreground" },
  { name: "primary", className: "bg-primary", fg: "text-primary-foreground" },
  { name: "secondary", className: "bg-secondary", fg: "text-secondary-foreground" },
  { name: "muted", className: "bg-muted", fg: "text-muted-foreground" },
  { name: "accent", className: "bg-accent", fg: "text-accent-foreground" },
  { name: "destructive", className: "bg-destructive", fg: "text-white" },
  { name: "card", className: "bg-card", fg: "text-card-foreground" },
  { name: "border", className: "bg-border", fg: "text-foreground" },
];

export const registry: DocEntry[] = [
  {
    slug: "button",
    title: "Button",
    description: "Displays a button or a component that looks like a button.",
    category: "Components",
    demo: (
      <div className="flex flex-wrap items-center gap-2">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>
    ),
    code: `<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>`,
  },
  {
    slug: "badge",
    title: "Badge",
    description: "Displays a badge or a component that looks like a badge.",
    category: "Components",
    demo: (
      <div className="flex flex-wrap items-center gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    ),
    code: `<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`,
  },
  {
    slug: "card",
    title: "Card",
    description: "A container for content with a header, body, and footer.",
    category: "Components",
    demo: (
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one click.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            <Label htmlFor="card-name">Name</Label>
            <Input id="card-name" placeholder="Name of your project" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    ),
    code: `<Card className="w-full max-w-sm">
  <CardHeader>
    <CardTitle>Create project</CardTitle>
    <CardDescription>Deploy your new project in one click.</CardDescription>
  </CardHeader>
  <CardContent>{/* fields */}</CardContent>
  <CardFooter className="flex justify-between gap-2">
    <Button variant="outline">Cancel</Button>
    <Button>Deploy</Button>
  </CardFooter>
</Card>`,
  },
  {
    slug: "accordion",
    title: "Accordion",
    description: "A vertically stacked set of interactive headings that expand to reveal content.",
    category: "Components",
    demo: (
      <Accordion type="single" collapsible className="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled with tokens?</AccordionTrigger>
          <AccordionContent>Yes. Every color comes from a semantic design token.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>Yes, with tw-animate-css on open and close.</AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
    code: `<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
  </AccordionItem>
</Accordion>`,
  },
  {
    slug: "dialog",
    title: "Dialog",
    description: "A modal dialog that interrupts the user with important content.",
    category: "Components",
    demo: (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>Make changes to your profile here.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-2 py-2">
            <Label htmlFor="dlg-name">Name</Label>
            <Input id="dlg-name" defaultValue="Pedro Duarte" />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    ),
    code: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open dialog</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Make changes to your profile here.</DialogDescription>
    </DialogHeader>
    {/* fields */}
    <DialogFooter>
      <Button>Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
  },
  {
    slug: "dropdown-menu",
    title: "Dropdown Menu",
    description: "A menu of actions or options triggered by a button.",
    category: "Components",
    demo: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-destructive">Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="start">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem className="text-destructive">Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
  },
  {
    slug: "input",
    title: "Input",
    description: "A form input field with a matching label.",
    category: "Components",
    demo: (
      <div className="grid w-full max-w-sm gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>
    ),
    code: `<div className="grid w-full max-w-sm gap-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>`,
  },
  {
    slug: "tabs",
    title: "Tabs",
    description: "Layered sections of content shown one panel at a time.",
    category: "Components",
    demo: (
      <Tabs defaultValue="account" className="w-full max-w-md">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="text-muted-foreground text-sm">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password" className="text-muted-foreground text-sm">
          Change your password here.
        </TabsContent>
      </Tabs>
    ),
    code: `<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account panel</TabsContent>
  <TabsContent value="password">Password panel</TabsContent>
</Tabs>`,
  },
  {
    slug: "tooltip",
    title: "Tooltip",
    description: "A floating label shown on hover or focus.",
    category: "Components",
    demo: (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>Add to library</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
    code: `<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Hover me</Button>
  </TooltipTrigger>
  <TooltipContent>Add to library</TooltipContent>
</Tooltip>`,
  },
  {
    slug: "breadcrumb",
    title: "Breadcrumb",
    description: "Displays the path to the current resource.",
    category: "Components",
    demo: (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/breadcrumb">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    ),
    code: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
  },
  {
    slug: "table",
    title: "Table",
    description: "A responsive table for displaying tabular data.",
    category: "Components",
    demo: (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>
              <Badge>Paid</Badge>
            </TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV002</TableCell>
            <TableCell>
              <Badge variant="secondary">Pending</Badge>
            </TableCell>
            <TableCell className="text-right">$150.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
    code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell><Badge>Paid</Badge></TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
  },
  {
    slug: "skeleton",
    title: "Skeleton",
    description: "A placeholder to show while content is loading.",
    category: "Components",
    demo: (
      <div className="flex items-center gap-4">
        <Skeleton className="size-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[160px]" />
        </div>
      </div>
    ),
    code: `<div className="flex items-center gap-4">
  <Skeleton className="size-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[200px]" />
    <Skeleton className="h-4 w-[160px]" />
  </div>
</div>`,
  },
  {
    slug: "colors",
    title: "Colors",
    description: "Semantic color tokens. Figma variables map 1:1 to Tailwind classes.",
    category: "Design Tokens",
    demo: (
      <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
        {swatches.map((s) => (
          <div
            key={s.name}
            className={`flex h-20 flex-col justify-end rounded-lg border p-3 ${s.className} ${s.fg}`}
          >
            <span className="font-mono text-xs">{s.name}</span>
          </div>
        ))}
      </div>
    ),
    code: `// Never hardcode colors — use semantic tokens
<div className="bg-primary text-primary-foreground" />
<div className="bg-muted text-muted-foreground" />
<div className="bg-card text-card-foreground" />`,
  },
  {
    slug: "typography",
    title: "Typography",
    description: "Token-based type scale built on the 4px spacing system.",
    category: "Design Tokens",
    demo: (
      <div className="space-y-3">
        <p className="text-4xl font-bold tracking-tight">Heading 4xl / Bold</p>
        <p className="text-2xl font-semibold tracking-tight">Heading 2xl / Semibold</p>
        <p className="text-xl font-semibold">Heading xl / Semibold</p>
        <p className="text-base leading-7">Body — base size on a 28px line height.</p>
        <p className="text-muted-foreground text-sm">Muted — helper and caption text.</p>
        <code className="font-mono text-sm">font-mono — Geist Mono</code>
      </div>
    ),
    code: `<h1 className="text-4xl font-bold tracking-tight">Heading</h1>
<h2 className="text-2xl font-semibold tracking-tight">Section</h2>
<p className="text-base leading-7">Body</p>
<p className="text-muted-foreground text-sm">Muted</p>`,
  },
];

export function getEntry(slug: string): DocEntry | undefined {
  return registry.find((e) => e.slug === slug);
}

export type NavGroup = { title: DocCategory; items: { title: string; slug: string }[] };

export function getNavGroups(): NavGroup[] {
  return CATEGORY_ORDER.map((cat) => ({
    title: cat,
    items: registry
      .filter((e) => e.category === cat)
      .map((e) => ({ title: e.title, slug: e.slug })),
  }));
}
