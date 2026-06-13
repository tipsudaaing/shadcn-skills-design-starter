import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "@/components/ui/badge";
import { getEntry } from "@/components/docs/registry";

const meta: Meta<typeof Badge> = {
  title: "Display/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("badge")?.description } } },
  args: { children: "Badge", variant: "default" },
  argTypes: {
    variant: { control: "select", options: ["default", "secondary", "destructive", "outline", "ghost", "link"] },
    children: { control: "text" },
    asChild: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo (all variants)", render: () => <>{getEntry("badge")!.demo}</> };
