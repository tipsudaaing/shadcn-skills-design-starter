import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Progress } from "@/components/ui/progress";
import { getEntry } from "@/components/docs/registry";

const meta: Meta<typeof Progress> = {
  title: "Display/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("progress")?.description } } },
  args: { value: 60 },
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
  render: (args) => (
    <div className="w-64">
      <Progress {...args} />
    </div>
  ),
};
export default meta;
type Story = StoryObj<typeof Progress>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("progress")!.demo}</> };
