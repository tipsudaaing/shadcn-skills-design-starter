import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { getEntry } from "@/components/docs/registry";

type Args = { type: "single" | "multiple"; collapsible: boolean };

const items = ["Product Information", "Shipping Details", "Return Policy"];

const meta: Meta<Args> = {
  title: "Data/Accordion",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("accordion")?.description } } },
  args: { type: "single", collapsible: true },
  argTypes: {
    type: { control: "inline-radio", options: ["single", "multiple"] },
    collapsible: { control: "boolean", description: "single only — allow closing the open item" },
  },
  render: ({ type, collapsible }) => {
    const body = items.map((t) => (
      <AccordionItem key={t} value={t}>
        <AccordionTrigger>{t}</AccordionTrigger>
        <AccordionContent>Content for {t}.</AccordionContent>
      </AccordionItem>
    ));
    return type === "multiple" ? (
      <Accordion type="multiple" className="w-96">{body}</Accordion>
    ) : (
      <Accordion type="single" collapsible={collapsible} className="w-96">{body}</Accordion>
    );
  },
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("accordion")!.demo}</> };
