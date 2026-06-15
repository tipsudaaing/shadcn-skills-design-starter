import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getEntry } from "@/components/docs/registry";

type Args = { title: string; description: string; content: string; footer: boolean };

const meta: Meta<Args> = {
  title: "Display/Card",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("card")?.description } } },
  args: {
    title: "Create project",
    description: "Deploy your new project in one click.",
    content: "Card content goes here.",
    footer: true,
  },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    content: { control: "text" },
    footer: { control: "boolean" },
  },
  render: ({ title, description, content, footer }) => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">{content}</CardContent>
      {footer && (
        <CardFooter className="justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      )}
    </Card>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("card")!.demo}</> };
