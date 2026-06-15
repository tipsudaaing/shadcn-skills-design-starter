import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter,
  AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { getEntry } from "@/components/docs/registry";

type Args = { defaultOpen: boolean; title: string; description: string };

const meta: Meta<Args> = {
  title: "Overlay/Alert Dialog",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("alert-dialog")?.description } } },
  args: {
    defaultOpen: true,
    title: "Are you absolutely sure?",
    description: "This action cannot be undone. This will permanently delete your account.",
  },
  argTypes: {
    defaultOpen: { control: "boolean" },
    title: { control: "text" },
    description: { control: "text" },
  },
  render: ({ defaultOpen, title, description }) => (
    <AlertDialog defaultOpen={defaultOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("alert-dialog")!.demo}</> };
