import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Toggle } from "@/components/ui/toggle";
import { Bold } from "lucide-react";
import { getEntry } from "@/components/docs/registry";

const meta: Meta<typeof Toggle> = {
  title: "Form & Input/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("toggle")?.description } } },
  args: { variant: "default", size: "default", disabled: false, defaultPressed: false },
  argTypes: {
    variant: { control: "select", options: ["default", "outline"] },
    size: { control: "select", options: ["default", "sm", "lg"] },
    disabled: { control: "boolean" },
    defaultPressed: { control: "boolean" },
  },
  render: (args) => (
    <Toggle aria-label="Toggle bold" {...args}>
      <Bold />
    </Toggle>
  ),
};
export default meta;
type Story = StoryObj<typeof Toggle>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo (variants)", render: () => <>{getEntry("toggle")!.demo}</> };
