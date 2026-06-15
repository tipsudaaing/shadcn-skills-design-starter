import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from "lucide-react";
import { getEntry } from "@/components/docs/registry";

type Args = { defaultOpen: boolean };

const meta: Meta<Args> = {
  title: "Data/Collapsible",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("collapsible")?.description } } },
  args: { defaultOpen: false },
  argTypes: { defaultOpen: { control: "boolean" } },
  render: ({ defaultOpen }) => (
    <Collapsible defaultOpen={defaultOpen} className="w-80 space-y-2">
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-semibold">@peduarte starred 3 repositories</span>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Toggle">
            <ChevronsUpDown />
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/primitives</div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/colors</div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm">@stitches/react</div>
      </CollapsibleContent>
    </Collapsible>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("collapsible")!.demo}</> };
