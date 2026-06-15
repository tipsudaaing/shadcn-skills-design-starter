import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { getEntry } from "@/components/docs/registry";

type Args = { defaultOpen: boolean; title: string; description: string };

const meta: Meta<Args> = {
  title: "Overlay/Dialog",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("dialog")?.description } } },
  args: {
    defaultOpen: true,
    title: "Edit profile",
    description: "Make changes to your profile here. Click save when you're done.",
  },
  argTypes: {
    defaultOpen: { control: "boolean", description: "Open the dialog on mount" },
    title: { control: "text" },
    description: { control: "text" },
  },
  render: ({ defaultOpen, title, description }) => (
    <Dialog defaultOpen={defaultOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("dialog")!.demo}</> };
