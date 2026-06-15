import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Pagination, PaginationContent, PaginationItem, PaginationLink,
  PaginationPrevious, PaginationNext, PaginationEllipsis,
} from "@/components/ui/pagination";
import { getEntry } from "@/components/docs/registry";

type Args = { pages: number; current: number };

const meta: Meta<Args> = {
  title: "Navigation/Pagination",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("pagination")?.description } } },
  args: { pages: 3, current: 2 },
  argTypes: {
    pages: { control: { type: "number", min: 1, max: 8 } },
    current: { control: { type: "number", min: 1, max: 8 } },
  },
  render: ({ pages, current }) => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        {Array.from({ length: pages }).map((_, i) => (
          <PaginationItem key={i}>
            <PaginationLink href="#" isActive={i + 1 === current}>{i + 1}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("pagination")!.demo}</> };
