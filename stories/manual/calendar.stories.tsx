import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Calendar } from "@/components/ui/calendar";
import { getEntry } from "@/components/docs/registry";

type Args = { numberOfMonths: number; showOutsideDays: boolean };

const meta: Meta<Args> = {
  title: "Utility/Calendar",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("calendar")?.description } } },
  args: { numberOfMonths: 1, showOutsideDays: true },
  argTypes: {
    numberOfMonths: { control: { type: "number", min: 1, max: 3 } },
    showOutsideDays: { control: "boolean" },
  },
  render: ({ numberOfMonths, showOutsideDays }) => (
    <Calendar
      mode="single"
      numberOfMonths={numberOfMonths}
      showOutsideDays={showOutsideDays}
      className="rounded-md border"
    />
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("calendar")!.demo}</> };
