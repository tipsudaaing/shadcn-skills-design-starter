import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FieldGroup, Field, FieldLabel, FieldDescription } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { getEntry } from "@/components/docs/registry";

type Args = { label: string; description: string; placeholder: string };

const meta: Meta<Args> = {
  title: "Form & Input/Field",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("field")?.description } } },
  args: { label: "Name", description: "This is your public display name.", placeholder: "Evil Rabbit" },
  argTypes: {
    label: { control: "text" },
    description: { control: "text" },
    placeholder: { control: "text" },
  },
  render: ({ label, description, placeholder }) => (
    <FieldGroup className="w-full max-w-sm">
      <Field>
        <FieldLabel htmlFor="play-field">{label}</FieldLabel>
        <Input id="play-field" placeholder={placeholder} />
        <FieldDescription>{description}</FieldDescription>
      </Field>
    </FieldGroup>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("field")!.demo}</> };
