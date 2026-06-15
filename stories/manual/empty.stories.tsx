import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from "@/components/ui/empty";
import { Button } from "@/components/ui/button";
import { FolderOpen } from "lucide-react";
import { getEntry } from "@/components/docs/registry";

type Args = { title: string; description: string; withAction: boolean };

const meta: Meta<Args> = {
  title: "Display/Empty",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("empty")?.description } } },
  args: {
    title: "No Projects Yet",
    description: "You haven't created any projects. Get started by creating your first project.",
    withAction: true,
  },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    withAction: { control: "boolean" },
  },
  render: ({ title, description, withAction }) => (
    <Empty className="w-96 rounded-lg border">
      <EmptyHeader>
        <EmptyMedia variant="icon"><FolderOpen /></EmptyMedia>
        <EmptyTitle>{title}</EmptyTitle>
        <EmptyDescription>{description}</EmptyDescription>
      </EmptyHeader>
      {withAction && (
        <EmptyContent>
          <Button>Create Project</Button>
        </EmptyContent>
      )}
    </Empty>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("empty")!.demo}</> };
