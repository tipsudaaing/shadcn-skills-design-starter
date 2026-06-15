import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption } from "@/components/ui/table";
import { getEntry } from "@/components/docs/registry";

type Args = { rows: number; caption: boolean };

const data = [
  ["INV001", "Paid", "Credit Card", "$250.00"],
  ["INV002", "Pending", "PayPal", "$150.00"],
  ["INV003", "Unpaid", "Bank Transfer", "$350.00"],
  ["INV004", "Paid", "Credit Card", "$450.00"],
  ["INV005", "Paid", "PayPal", "$550.00"],
];

const meta: Meta<Args> = {
  title: "Data/Table",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("table")?.description } } },
  args: { rows: 4, caption: true },
  argTypes: {
    rows: { control: { type: "number", min: 1, max: 5 } },
    caption: { control: "boolean" },
  },
  render: ({ rows, caption }) => (
    <Table className="w-[28rem]">
      {caption && <TableCaption>A list of your recent invoices.</TableCaption>}
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.slice(0, rows).map(([inv, status, method, amount]) => (
          <TableRow key={inv}>
            <TableCell className="font-medium">{inv}</TableCell>
            <TableCell>{status}</TableCell>
            <TableCell>{method}</TableCell>
            <TableCell className="text-right">{amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$1,750.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("table")!.demo}</> };
