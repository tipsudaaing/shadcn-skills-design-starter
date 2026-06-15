import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { getEntry } from "@/components/docs/registry";

type Args = { orientation: "horizontal" | "vertical"; slides: number };

const meta: Meta<Args> = {
  title: "Display/Carousel",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("carousel")?.description } } },
  args: { orientation: "horizontal", slides: 5 },
  argTypes: {
    orientation: { control: "inline-radio", options: ["horizontal", "vertical"] },
    slides: { control: { type: "number", min: 1, max: 10 } },
  },
  render: ({ orientation, slides }) => (
    <Carousel orientation={orientation} className="w-64">
      <CarouselContent className={orientation === "vertical" ? "h-64" : ""}>
        {Array.from({ length: slides }).map((_, i) => (
          <CarouselItem key={i}>
            <Card>
              <CardContent className="grid aspect-square place-items-center p-6 text-3xl font-semibold">
                {i + 1}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("carousel")!.demo}</> };
