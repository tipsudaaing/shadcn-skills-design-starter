import { ModeToggle } from "@/components/layout/mode-toggle";
import { Badge } from "@/components/ui/badge";
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const rows = [
  { id: 1, name: "Background", token: "bg-background", status: "active" },
  { id: 2, name: "Primary", token: "bg-primary", status: "active" },
  { id: 3, name: "Muted", token: "bg-muted", status: "inactive" },
  { id: 4, name: "Destructive", token: "text-destructive", status: "error" },
] as const;

const statusVariant = {
  active: "default",
  inactive: "secondary",
  error: "destructive",
} as const;

export default function Home() {
  return (
    <main className="container mx-auto max-w-5xl p-6 md:p-10">
      <header className="mb-10 flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold tracking-tight">Design System</h1>
          <p className="text-muted-foreground text-sm">
            Next.js · Tailwind v4 · shadcn/ui — driven by Figma tokens
          </p>
        </div>
        <ModeToggle />
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>Semantic token variants</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Delete</Button>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full">
              Ghost full-width
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Badges</CardTitle>
            <CardDescription>Status mapping</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Error</Badge>
            <Badge variant="outline">Outline</Badge>
          </CardContent>
        </Card>

        <Card className="sm:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>Typography</CardTitle>
            <CardDescription>Token-based scale</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-2xl font-semibold tracking-tight">Heading 2xl</p>
            <p className="text-base leading-7">Body text on the 4px scale.</p>
            <p className="text-muted-foreground text-sm">Muted helper text.</p>
            <code className="font-mono text-sm">const cn = clsx + twMerge</code>
          </CardContent>
        </Card>
      </section>

      <section className="mt-10">
        <Card>
          <CardHeader>
            <CardTitle>Token Reference</CardTitle>
            <CardDescription>
              Figma variables map 1:1 to Tailwind classes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Token</TableHead>
                  <TableHead>Tailwind class</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="font-medium">{row.name}</TableCell>
                    <TableCell>
                      <code className="font-mono text-sm">{row.token}</code>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge variant={statusVariant[row.status]}>{row.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
