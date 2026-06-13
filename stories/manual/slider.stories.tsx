import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Slider } from "@/components/ui/slider";
import { getEntry } from "@/components/docs/registry";

const meta: Meta<typeof Slider> = {
  title: "Form & Input/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("slider")?.description } } },
  args: { defaultValue: [50], min: 0, max: 100, step: 1, disabled: false },
  argTypes: {
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    disabled: { control: "boolean" },
  },
  render: (args) => (
    <div className="w-64">
      <Slider {...args} />
    </div>
  ),
};
export default meta;
type Story = StoryObj<typeof Slider>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("slider")!.demo}</> };
