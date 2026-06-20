import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { ArrowUpDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getEntry } from "@/components/docs/registry";

type Args = { rowCount: number; defaultDesc: boolean };

const payments = [
  { id: "1", status: "success", email: "ken99@example.com", amount: 316 },
  { id: "2", status: "pending", email: "abe45@example.com", amount: 242 },
  { id: "3", status: "processing", email: "monserrat@example.com", amount: 837 },
  { id: "4", status: "failed", email: "carmella@example.com", amount: 721 },
  { id: "5", status: "success", email: "jason@example.com", amount: 159 },
  { id: "6", status: "pending", email: "silas@example.com", amount: 480 },
];

function DataTable({ rowCount, defaultDesc }: Args) {
  const [desc, setDesc] = React.useState(defaultDesc);
  const rows = payments
    .slice(0, rowCount)
    .sort((a, b) => (desc ? b.amount - a.amount : a.amount - b.amount));
  return (
    <div className="w-full max-w-lg rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Status</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">
              <button type="button" className="ml-auto flex items-center gap-1 hover:text-foreground" onClick={() => setDesc((d) => !d)}>
                Amount <ArrowUpDown className="size-3.5" />
              </button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.id}>
              <TableCell><Badge variant={r.status === "success" ? "default" : "secondary"}>{r.status}</Badge></TableCell>
              <TableCell>{r.email}</TableCell>
              <TableCell className="text-right font-medium">${r.amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

const meta: Meta<Args> = {
  title: "Data/Data Table",
  parameters: { docs: { description: { component: getEntry("data-table")?.description } } },
  args: { rowCount: 4, defaultDesc: true },
  argTypes: {
    rowCount: { control: { type: "range", min: 1, max: 6, step: 1 }, description: "Number of rows" },
    defaultDesc: { control: "boolean", description: "Sort amount descending (click the header to toggle)" },
  },
  render: (args) => <DataTable {...args} />,
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("data-table")!.demo}</> };
