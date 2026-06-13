import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { getEntry } from "@/components/docs/registry";

type AvatarArgs = { src: string; fallback: string };

const meta: Meta<AvatarArgs> = {
  title: "Display/Avatar",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("avatar")?.description } } },
  args: { src: "https://github.com/shadcn.png", fallback: "CN" },
  argTypes: {
    src: { control: "text", description: "Image URL (empty → fallback)" },
    fallback: { control: "text", description: "Shown when the image fails to load" },
  },
  render: ({ src, fallback }) => (
    <Avatar>
      <AvatarImage src={src} alt={fallback} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  ),
};
export default meta;
type Story = StoryObj<AvatarArgs>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo (image · fallback · group)", render: () => <>{getEntry("avatar")!.demo}</> };
