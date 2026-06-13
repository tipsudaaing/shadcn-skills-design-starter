// AUTO-GENERATED from components/docs/registry.tsx — run `npm run gen:stories`. Do not edit.
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { getEntry } from "@/components/docs/registry";

const entry = getEntry("tooltip")!;

const meta: Meta = {
  title: "Overlay/Tooltip",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: { component: entry.description },
      source: { code: entry.code, language: "tsx" },
    },
  },
};
export default meta;

export const Demo: StoryObj = { name: "Tooltip", render: () => <>{entry.demo}</> };
