import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  NavigationMenu, NavigationMenuList, NavigationMenuItem,
  NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { getEntry } from "@/components/docs/registry";

type Args = { viewport: boolean; linkCount: number };

const links = ["Introduction", "Installation", "Typography", "Theming", "Components"];

const meta: Meta<Args> = {
  title: "Navigation/Navigation Menu",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("navigation-menu")?.description } } },
  args: { viewport: true, linkCount: 2 },
  argTypes: {
    viewport: { control: "boolean", description: "Render content in the shared animated viewport" },
    linkCount: { control: { type: "range", min: 1, max: 5, step: 1 }, description: "Number of links in the panel" },
  },
  render: ({ viewport, linkCount }) => (
    <NavigationMenu viewport={viewport}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[220px] gap-1 p-2">
              {links.slice(0, linkCount).map((l) => (
                <li key={l}><NavigationMenuLink>{l}</NavigationMenuLink></li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("navigation-menu")!.demo}</> };
