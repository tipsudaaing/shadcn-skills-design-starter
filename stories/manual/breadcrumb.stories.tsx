import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage,
  BreadcrumbSeparator, BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb";
import { getEntry } from "@/components/docs/registry";

type Args = { depth: number; withEllipsis: boolean };

const trail = ["Home", "Components", "Breadcrumb", "Item", "Current"];

const meta: Meta<Args> = {
  title: "Navigation/Breadcrumb",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("breadcrumb")?.description } } },
  args: { depth: 3, withEllipsis: false },
  argTypes: {
    depth: { control: { type: "range", min: 2, max: 5, step: 1 }, description: "Number of segments" },
    withEllipsis: { control: "boolean", description: "Collapse middle with an ellipsis" },
  },
  render: ({ depth, withEllipsis }) => {
    const items = trail.slice(0, depth);
    return (
      <Breadcrumb>
        <BreadcrumbList>
          {items.map((label, i) => {
            const last = i === items.length - 1;
            return (
              <span key={label} className="contents">
                <BreadcrumbItem>
                  {withEllipsis && i === 1 && !last ? (
                    <BreadcrumbEllipsis />
                  ) : last ? (
                    <BreadcrumbPage>{label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href="#">{label}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!last && <BreadcrumbSeparator />}
              </span>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    );
  },
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("breadcrumb")!.demo}</> };
