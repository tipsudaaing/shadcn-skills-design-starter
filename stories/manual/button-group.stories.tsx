import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import { getEntry } from "@/components/docs/registry";

type Args = { orientation: "horizontal" | "vertical" };

const meta: Meta<Args> = {
  title: "Form & Input/Button Group",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("button-group")?.description } } },
  args: { orientation: "horizontal" },
  argTypes: { orientation: { control: "inline-radio", options: ["horizontal", "vertical"] } },
  render: ({ orientation }) => (
    <ButtonGroup orientation={orientation}>
      <Button variant="outline">Archive</Button>
      <Button variant="outline">Report</Button>
      <Button variant="outline">Snooze</Button>
    </ButtonGroup>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("button-group")!.demo}</> };
