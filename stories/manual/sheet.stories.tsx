import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { getEntry } from "@/components/docs/registry";

type Args = { side: "top" | "right" | "bottom" | "left"; defaultOpen: boolean };

const meta: Meta<Args> = {
  title: "Overlay/Sheet",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("sheet")?.description } } },
  args: { side: "right", defaultOpen: false },
  argTypes: {
    side: { control: "inline-radio", options: ["top", "right", "bottom", "left"] },
    defaultOpen: { control: "boolean", description: "Open on mount" },
  },
  render: ({ side, defaultOpen }) => (
    <Sheet defaultOpen={defaultOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">Open sheet</Button>
      </SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile here.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("sheet")!.demo}</> };
