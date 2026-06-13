import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Checkbox } from "@/components/ui/checkbox";
import { getEntry } from "@/components/docs/registry";

const meta: Meta<typeof Checkbox> = {
  title: "Form & Input/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("checkbox")?.description } } },
  args: { defaultChecked: false, disabled: false },
  argTypes: {
    defaultChecked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo (states)", render: () => <>{getEntry("checkbox")!.demo}</> };
