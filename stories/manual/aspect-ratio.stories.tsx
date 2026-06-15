import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { getEntry } from "@/components/docs/registry";

type Args = { ratio: number };

const meta: Meta<Args> = {
  title: "Utility/Aspect Ratio",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("aspect-ratio")?.description } } },
  args: { ratio: 16 / 9 },
  argTypes: {
    ratio: {
      control: "select",
      options: [16 / 9, 4 / 3, 1, 3 / 4, 9 / 16],
      labels: { [16 / 9]: "16 / 9", [4 / 3]: "4 / 3", [1]: "1 / 1", [3 / 4]: "3 / 4", [9 / 16]: "9 / 16" },
    },
  },
  render: ({ ratio }) => (
    <div className="w-96">
      <AspectRatio ratio={ratio} className="grid place-items-center rounded-md bg-muted text-sm text-muted-foreground">
        {ratio.toFixed(2)}
      </AspectRatio>
    </div>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("aspect-ratio")!.demo}</> };
