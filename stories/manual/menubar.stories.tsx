import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem,
  MenubarSeparator, MenubarShortcut, MenubarCheckboxItem,
} from "@/components/ui/menubar";
import { getEntry } from "@/components/docs/registry";

type Args = { menuCount: number; showShortcuts: boolean; disablePrint: boolean };

const meta: Meta<Args> = {
  title: "Navigation/Menubar",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("menubar")?.description } } },
  args: { menuCount: 2, showShortcuts: true, disablePrint: false },
  argTypes: {
    menuCount: { control: { type: "range", min: 1, max: 3, step: 1 }, description: "Number of top-level menus" },
    showShortcuts: { control: "boolean", description: "Show keyboard shortcut hints" },
    disablePrint: { control: "boolean", description: "Disable the Print item" },
  },
  render: ({ menuCount, showShortcuts, disablePrint }) => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Tab {showShortcuts && <MenubarShortcut>⌘T</MenubarShortcut>}</MenubarItem>
          <MenubarItem>New Window {showShortcuts && <MenubarShortcut>⌘N</MenubarShortcut>}</MenubarItem>
          <MenubarSeparator />
          <MenubarItem disabled={disablePrint}>Print {showShortcuts && <MenubarShortcut>⌘P</MenubarShortcut>}</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      {menuCount >= 2 && (
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Undo {showShortcuts && <MenubarShortcut>⌘Z</MenubarShortcut>}</MenubarItem>
            <MenubarItem>Redo {showShortcuts && <MenubarShortcut>⇧⌘Z</MenubarShortcut>}</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      )}
      {menuCount >= 3 && (
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem checked>Show Toolbar</MenubarCheckboxItem>
            <MenubarCheckboxItem>Show Sidebar</MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
      )}
    </Menubar>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("menubar")!.demo}</> };
