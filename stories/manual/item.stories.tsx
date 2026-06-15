import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions } from "@/components/ui/item";
import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import { getEntry } from "@/components/docs/registry";

type Args = {
  variant: "default" | "outline" | "muted";
  size: "default" | "sm" | "xs";
  title: string;
  description: string;
};

const meta: Meta<Args> = {
  title: "Display/Item",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("item")?.description } } },
  args: { variant: "outline", size: "default", title: "Basic Item", description: "A simple item with title and description." },
  argTypes: {
    variant: { control: "inline-radio", options: ["default", "outline", "muted"] },
    size: { control: "inline-radio", options: ["default", "sm", "xs"] },
    title: { control: "text" },
    description: { control: "text" },
  },
  render: ({ variant, size, title, description }) => (
    <Item variant={variant} size={size} className="w-96">
      <ItemMedia variant="icon"><CircleCheck /></ItemMedia>
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">Open</Button>
      </ItemActions>
    </Item>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("item")!.demo}</> };
