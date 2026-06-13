import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Label } from "@/components/ui/label";
import { getEntry } from "@/components/docs/registry";

const meta: Meta<typeof Label> = {
  title: "Form & Input/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("label")?.description } } },
  args: { children: "Your email address" },
  argTypes: { children: { control: "text" } },
};
export default meta;
type Story = StoryObj<typeof Label>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo (with controls)", render: () => <>{getEntry("label")!.demo}</> };
