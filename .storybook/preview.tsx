import React from "react";
import { ThemeProvider } from "styled-components";
import type { Decorator, Preview } from "@storybook/react";

import { oakDefaultTheme } from "../src/styles/theme/default.theme";
import { OakGlobalStyle } from "../src/components/atoms/OakGlobalStyle/OakGlobalStyle";
import { oakStorybookTheme } from "./oakStorybookTheme";

const globalDecorator: Decorator = (Story, context) => {
  return (
    <ThemeProvider theme={{ ...context.globals.theme, ...oakDefaultTheme }}>
      <link
        href="https://googleapis-fonts.thenational.academy/css2?family=Lexend:wght@300;400;600&display=swap"
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
  },
  decorators: [globalDecorator],
};

export default preview;
