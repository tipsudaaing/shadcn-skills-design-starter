import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { getEntry } from "@/components/docs/registry";

type Args = { defaultValue: string; disabled: boolean };

const options = ["Default", "Comfortable", "Compact"];

const meta: Meta<Args> = {
  title: "Form & Input/Radio Group",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("radio-group")?.description } } },
  args: { defaultValue: "Comfortable", disabled: false },
  argTypes: {
    defaultValue: { control: "inline-radio", options },
    disabled: { control: "boolean" },
  },
  render: ({ defaultValue, disabled }) => (
    <RadioGroup defaultValue={defaultValue} disabled={disabled} className="gap-3">
      {options.map((o) => (
        <div key={o} className="flex items-center gap-2">
          <RadioGroupItem value={o} id={o} />
          <Label htmlFor={o}>{o}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("radio-group")!.demo}</> };
