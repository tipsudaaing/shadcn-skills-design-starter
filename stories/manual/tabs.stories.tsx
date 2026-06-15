import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { getEntry } from "@/components/docs/registry";

type Args = { defaultValue: "account" | "password" };

const meta: Meta<Args> = {
  title: "Navigation/Tabs",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("tabs")?.description } } },
  args: { defaultValue: "account" },
  argTypes: {
    defaultValue: { control: "inline-radio", options: ["account", "password"], description: "Initially active tab" },
  },
  render: ({ defaultValue }) => (
    <Tabs defaultValue={defaultValue} className="w-96">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="pt-2 text-sm text-muted-foreground">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password" className="pt-2 text-sm text-muted-foreground">
        Change your password here.
      </TabsContent>
    </Tabs>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("tabs")!.demo}</> };
