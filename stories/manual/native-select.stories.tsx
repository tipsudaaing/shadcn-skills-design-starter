import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { getEntry } from "@/components/docs/registry";

type Args = { disabled: boolean };

const meta: Meta<Args> = {
  title: "Form & Input/Native Select",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("native-select")?.description } } },
  args: { disabled: false },
  argTypes: { disabled: { control: "boolean" } },
  render: ({ disabled }) => (
    <NativeSelect disabled={disabled} className="w-48" defaultValue="todo">
      <NativeSelectOption value="todo">Todo</NativeSelectOption>
      <NativeSelectOption value="in-progress">In Progress</NativeSelectOption>
      <NativeSelectOption value="done">Done</NativeSelectOption>
      <NativeSelectOption value="cancelled">Cancelled</NativeSelectOption>
    </NativeSelect>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("native-select")!.demo}</> };
