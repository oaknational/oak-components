import React from "react";
import { ThemeProvider } from "styled-components";
import type { Decorator, Preview, ReactRenderer } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import { oakDefaultTheme } from "../src/styles/theme/default.theme";
import { oakDarkTheme } from "../src/styles/theme/dark.theme";
import { OakGlobalStyle } from "../src/components/atoms/OakGlobalStyle/OakGlobalStyle";
import { oakStorybookTheme } from "./oakStorybookTheme";

const globalDecorator: Decorator = (Story, context) => {
  return (
    <ThemeProvider theme={{ ...context.globals.theme, ...oakDefaultTheme }}>
      <link
        href="https://googleapis-fonts.thenational.academy/css2?family=Lexend:wght@300;400;600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
      <OakGlobalStyle />
      <Story {...context} />
    </ThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: oakStorybookTheme,
    },
    options: {
      storySort: {
        order: [
          "components",
          [
            "typography",
            "buttons",
            "forms",
            "layout",
            "image",
            "accessibility",
            "others",
          ],
          "internal components",
          "OWA (❌ to be moved out)",
          "House CAT (❌ to be moved out)",
          "docs",
          "style tokens",
          "test helpers",
        ],
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider<ReactRenderer>({
      themes: {
        default: oakDefaultTheme,
        dark: oakDarkTheme,
      },
      defaultTheme: "default",
      Provider: ThemeProvider,
      GlobalStyles: OakGlobalStyle,
    }),
    globalDecorator,
  ],
};

export default preview;
