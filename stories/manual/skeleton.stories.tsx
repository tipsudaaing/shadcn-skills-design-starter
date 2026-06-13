import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Skeleton } from "@/components/ui/skeleton";
import { getEntry } from "@/components/docs/registry";

const meta: Meta<typeof Skeleton> = {
  title: "Display/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("skeleton")?.description } } },
  args: { className: "h-4 w-48 rounded-md" },
  argTypes: {
    className: { control: "text", description: "Tailwind classes set the shape (h-* w-* rounded-*)" },
  },
};
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo (card placeholder)", render: () => <>{getEntry("skeleton")!.demo}</> };
