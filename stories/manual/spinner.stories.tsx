import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Spinner } from "@/components/ui/spinner";
import { getEntry } from "@/components/docs/registry";

type SpinnerArgs = { size: number };

const meta: Meta<SpinnerArgs> = {
  title: "Display/Spinner",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("spinner")?.description } } },
  args: { size: 24 },
  argTypes: {
    size: { control: { type: "range", min: 12, max: 64, step: 2 }, description: "Rendered size in px" },
  },
  render: ({ size }) => <Spinner style={{ width: size, height: size }} />,
};
export default meta;
type Story = StoryObj<SpinnerArgs>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo (in context)", render: () => <>{getEntry("spinner")!.demo}</> };
