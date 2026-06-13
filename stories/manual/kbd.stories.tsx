import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Kbd } from "@/components/ui/kbd";
import { getEntry } from "@/components/docs/registry";

const meta: Meta<typeof Kbd> = {
  title: "Display/Kbd",
  component: Kbd,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("kbd")?.description } } },
  args: { children: "⌘K" },
  argTypes: { children: { control: "text" } },
};
export default meta;
type Story = StoryObj<typeof Kbd>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("kbd")!.demo}</> };
