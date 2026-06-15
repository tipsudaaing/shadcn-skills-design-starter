import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getEntry } from "@/components/docs/registry";

type Args = { height: number; items: number };

const meta: Meta<Args> = {
  title: "Utility/Scroll Area",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("scroll-area")?.description } } },
  args: { height: 160, items: 20 },
  argTypes: {
    height: { control: { type: "range", min: 80, max: 320, step: 8 } },
    items: { control: { type: "number", min: 1, max: 50 } },
  },
  render: ({ height, items }) => (
    <ScrollArea className="w-56 rounded-md border p-4" style={{ height }}>
      <div className="space-y-2">
        {Array.from({ length: items }).map((_, i) => (
          <div key={i} className="text-sm">Item {i + 1}</div>
        ))}
      </div>
    </ScrollArea>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("scroll-area")!.demo}</> };
