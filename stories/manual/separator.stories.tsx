import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Separator } from "@/components/ui/separator";
import { getEntry } from "@/components/docs/registry";

const meta: Meta<typeof Separator> = {
  title: "Data/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("separator")?.description } } },
  args: { orientation: "horizontal", decorative: true },
  argTypes: {
    orientation: { control: "inline-radio", options: ["horizontal", "vertical"] },
    decorative: { control: "boolean" },
  },
  render: (args) =>
    args.orientation === "vertical" ? (
      <div className="flex h-12 items-center gap-4 text-sm">
        <span>Docs</span>
        <Separator {...args} />
        <span>Source</span>
      </div>
    ) : (
      <div className="w-64 space-y-4 text-sm">
        <span>Above</span>
        <Separator {...args} />
        <span>Below</span>
      </div>
    ),
};
export default meta;
type Story = StoryObj<typeof Separator>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("separator")!.demo}</> };
