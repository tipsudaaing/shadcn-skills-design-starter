import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { CircleCheck } from "lucide-react";
import { getEntry } from "@/components/docs/registry";

const meta: Meta<typeof Alert> = {
  title: "Feedback/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("alert")?.description } } },
  args: { variant: "default" },
  argTypes: {
    variant: { control: "inline-radio", options: ["default", "destructive"] },
  },
  render: (args) => (
    <Alert className="w-96" {...args}>
      <CircleCheck />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>This is an alert with an icon, title and description.</AlertDescription>
    </Alert>
  ),
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo (variants)", render: () => <>{getEntry("alert")!.demo}</> };
