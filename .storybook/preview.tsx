import type { Preview } from "@storybook/nextjs-vite";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: { test: "todo" },
    // The token theme owns the surface — disable Storybook's own backgrounds.
    backgrounds: { disable: true },
  },
  decorators: [
    // Toolbar light/dark switch — toggles `.dark` on <html>, matching next-themes.
    withThemeByClassName({
      themes: { light: "", dark: "dark" },
      defaultTheme: "light",
      parentSelector: "html",
    }),
    (Story) => (
      <div className="flex min-h-24 items-center justify-center bg-background p-8 text-foreground">
        <Story />
      </div>
    ),
  ],
};

export default preview;
