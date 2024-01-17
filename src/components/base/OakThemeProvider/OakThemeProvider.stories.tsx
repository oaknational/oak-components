import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakThemeProvider } from "./OakThemeProvider";

import { OakFlex } from "@/components/base/OakFlex";
import { oakDefaultTheme } from "@/styles";

/**
 *
 * OakThemeProvider wraps Styled Components ThemeProvider allowing the use of the custom type OakTheme.
 *
 */

const meta: Meta<typeof OakThemeProvider> = {
  component: OakThemeProvider,
  tags: ["autodocs"],
  title: "components/base/OakThemeProvider",
  argTypes: {},
  parameters: {
    controls: {
      include: [],
      sort: "none",
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakThemeProvider>;

export const DefaultOakThemeProvider: Story = () => (
  <OakThemeProvider theme={oakDefaultTheme}>
    <OakFlex
      $background="bg-decorative1-main"
      $color="text-inverted"
      $ba="border-solid-m"
      $pa="inner-padding-xl"
      $borderRadius="border-radius-l"
      $borderColor="border-primary"
    >
      Get a head-start on your lesson planning using quality-checked resources
      you can download and adapt for free.
    </OakFlex>
  </OakThemeProvider>
);

DefaultOakThemeProvider.args = {};
