import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel } from "@/components/ui/select";
import { getEntry } from "@/components/docs/registry";

type Args = { placeholder: string; disabled: boolean };

const meta: Meta<Args> = {
  title: "Form & Input/Select",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("select")?.description } } },
  args: { placeholder: "Select a fruit", disabled: false },
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
  render: ({ placeholder, disabled }) => (
    <Select disabled={disabled}>
      <SelectTrigger className="w-48">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          {["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"].map((f) => (
            <SelectItem key={f} value={f.toLowerCase()}>{f}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("select")!.demo}</> };
