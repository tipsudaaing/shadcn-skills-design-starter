import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Bold, Italic, Underline } from "lucide-react";
import { getEntry } from "@/components/docs/registry";

type Args = {
  type: "single" | "multiple";
  variant: "default" | "outline";
  size: "default" | "sm" | "lg";
  disabled: boolean;
};

const meta: Meta<Args> = {
  title: "Form & Input/Toggle Group",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("toggle-group")?.description } } },
  args: { type: "multiple", variant: "outline", size: "default", disabled: false },
  argTypes: {
    type: { control: "inline-radio", options: ["single", "multiple"] },
    variant: { control: "inline-radio", options: ["default", "outline"] },
    size: { control: "inline-radio", options: ["default", "sm", "lg"] },
    disabled: { control: "boolean" },
  },
  render: ({ type, variant, size, disabled }) => {
    const body = (
      <>
        <ToggleGroupItem value="bold" aria-label="Bold"><Bold /></ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic"><Italic /></ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline"><Underline /></ToggleGroupItem>
      </>
    );
    return type === "single" ? (
      <ToggleGroup type="single" variant={variant} size={size} disabled={disabled}>{body}</ToggleGroup>
    ) : (
      <ToggleGroup type="multiple" variant={variant} size={size} disabled={disabled}>{body}</ToggleGroup>
    );
  },
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("toggle-group")!.demo}</> };
