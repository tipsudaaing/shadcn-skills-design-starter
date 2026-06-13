import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Textarea } from "@/components/ui/textarea";
import { getEntry } from "@/components/docs/registry";

const meta: Meta<typeof Textarea> = {
  title: "Form & Input/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("textarea")?.description } } },
  args: { placeholder: "Type your message here.", disabled: false, rows: 4 },
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    rows: { control: { type: "number", min: 1, max: 20 } },
  },
  render: (args) => (
    <div className="w-72">
      <Textarea {...args} />
    </div>
  ),
};
export default meta;
type Story = StoryObj<typeof Textarea>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo (states)", render: () => <>{getEntry("textarea")!.demo}</> };
