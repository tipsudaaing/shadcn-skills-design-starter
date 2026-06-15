import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverTitle, PopoverDescription } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { getEntry } from "@/components/docs/registry";

type Args = { side: "top" | "right" | "bottom" | "left"; align: "start" | "center" | "end" };

const meta: Meta<Args> = {
  title: "Overlay/Popover",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("popover")?.description } } },
  args: { side: "bottom", align: "center" },
  argTypes: {
    side: { control: "inline-radio", options: ["top", "right", "bottom", "left"] },
    align: { control: "inline-radio", options: ["start", "center", "end"] },
  },
  render: ({ side, align }) => (
    <Popover defaultOpen>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent side={side} align={align} className="w-72">
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("popover")!.demo}</> };
