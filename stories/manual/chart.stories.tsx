import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { getEntry } from "@/components/docs/registry";

type Args = { color: "chart-1" | "chart-2" | "chart-3" | "chart-4" | "chart-5"; showGrid: boolean; showTooltip: boolean; radius: number };

const chartData = [
  { month: "Jan", desktop: 186 },
  { month: "Feb", desktop: 305 },
  { month: "Mar", desktop: 237 },
  { month: "Apr", desktop: 273 },
  { month: "May", desktop: 209 },
  { month: "Jun", desktop: 314 },
];

const meta: Meta<Args> = {
  title: "Display/Chart",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("chart")?.description } } },
  args: { color: "chart-1", showGrid: true, showTooltip: true, radius: 4 },
  argTypes: {
    color: { control: "inline-radio", options: ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"], description: "Chart token color" },
    showGrid: { control: "boolean" },
    showTooltip: { control: "boolean" },
    radius: { control: { type: "range", min: 0, max: 16, step: 1 }, description: "Bar corner radius" },
  },
  render: ({ color, showGrid, showTooltip, radius }) => {
    const config = { desktop: { label: "Desktop", color: `var(--color-${color})` } } satisfies ChartConfig;
    return (
      <ChartContainer config={config} className="h-[250px] w-full max-w-md">
        <BarChart accessibilityLayer data={chartData}>
          {showGrid && <CartesianGrid vertical={false} />}
          <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
          {showTooltip && <ChartTooltip content={<ChartTooltipContent />} />}
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={radius} />
        </BarChart>
      </ChartContainer>
    );
  },
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("chart")!.demo}</> };
