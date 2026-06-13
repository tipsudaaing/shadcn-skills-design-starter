import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Switch } from "@/components/ui/switch";
import { getEntry } from "@/components/docs/registry";

const meta: Meta<typeof Switch> = {
  title: "Form & Input/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("switch")?.description } } },
  args: { defaultChecked: false, disabled: false },
  argTypes: {
    defaultChecked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Switch>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo (states)", render: () => <>{getEntry("switch")!.demo}</> };
