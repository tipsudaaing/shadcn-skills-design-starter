import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "@/components/ui/input";
import { getEntry } from "@/components/docs/registry";

const meta: Meta<typeof Input> = {
  title: "Form & Input/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("input")?.description } } },
  args: { placeholder: "Email", type: "text", disabled: false },
  argTypes: {
    type: { control: "select", options: ["text", "email", "password", "number", "search", "tel", "url"] },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
  render: (args) => (
    <div className="w-72">
      <Input {...args} />
    </div>
  ),
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo (states)", render: () => <>{getEntry("input")!.demo}</> };
