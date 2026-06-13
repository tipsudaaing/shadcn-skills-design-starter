import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@/components/ui/button";
import { getEntry } from "@/components/docs/registry";

const meta: Meta<typeof Button> = {
  title: "Form & Input/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("button")?.description } } },
  args: { children: "Button", variant: "default", size: "default", disabled: false },
  argTypes: {
    variant: { control: "select", options: ["default", "outline", "secondary", "ghost", "destructive", "link"] },
    size: { control: "select", options: ["default", "xs", "sm", "lg", "icon"] },
    disabled: { control: "boolean" },
    children: { control: "text" },
    asChild: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo (all variants)", render: () => <>{getEntry("button")!.demo}</> };
