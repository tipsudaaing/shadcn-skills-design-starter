import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { getEntry } from "@/components/docs/registry";
import { Search, Mail } from "lucide-react";

type Args = { placeholder: string; addon: "leading" | "trailing" | "both"; disabled: boolean };

const meta: Meta<Args> = {
  title: "Form & Input/Input Group",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("input-group")?.description } } },
  args: { placeholder: "Search...", addon: "leading", disabled: false },
  argTypes: {
    placeholder: { control: "text" },
    addon: { control: "inline-radio", options: ["leading", "trailing", "both"], description: "Addon placement" },
    disabled: { control: "boolean" },
  },
  render: ({ placeholder, addon, disabled }) => (
    <InputGroup className="w-full max-w-sm">
      {(addon === "leading" || addon === "both") && (
        <InputGroupAddon><Search className="size-4" /></InputGroupAddon>
      )}
      <InputGroupInput placeholder={placeholder} disabled={disabled} />
      {(addon === "trailing" || addon === "both") && (
        <InputGroupAddon align="inline-end"><Mail className="size-4" /></InputGroupAddon>
      )}
    </InputGroup>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("input-group")!.demo}</> };
