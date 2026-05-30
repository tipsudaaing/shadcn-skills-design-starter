"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { toast } from "sonner";
import { Home, Inbox, Search, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

const chartData = [
  { month: "Jan", desktop: 186 },
  { month: "Feb", desktop: 305 },
  { month: "Mar", desktop: 237 },
  { month: "Apr", desktop: 273 },
  { month: "May", desktop: 209 },
  { month: "Jun", desktop: 314 },
];

const chartConfig = {
  desktop: { label: "Desktop", color: "var(--color-chart-1)" },
} satisfies ChartConfig;

export function ChartDemo() {
  return (
    <ChartContainer config={chartConfig} className="h-[250px] w-full max-w-md">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}

export function SonnerDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event created", {
          description: "Sunday, December 03 at 9:00 AM",
          action: { label: "Undo", onClick: () => {} },
        })
      }
    >
      Show toast
    </Button>
  );
}

const sidebarItems = [
  { title: "Home", icon: Home },
  { title: "Inbox", icon: Inbox },
  { title: "Search", icon: Search },
  { title: "Settings", icon: Settings },
];

export function SidebarDemo() {
  return (
    <div className="h-[320px] w-full overflow-hidden rounded-lg border">
      <SidebarProvider className="min-h-full items-stretch">
        <Sidebar collapsible="none" className="border-r">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton>
                        <item.icon className="size-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main className="text-muted-foreground flex-1 p-4 text-sm">Content area</main>
      </SidebarProvider>
    </div>
  );
}
