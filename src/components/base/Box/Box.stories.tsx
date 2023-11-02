import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Box, BoxProps } from "./Box";

import { oakAllColorsHex } from "@/styles/theme/color";
import { oakAllSpacingPx } from "@/styles/theme/spacing";

const meta: Meta<typeof Box> = {
  component: Box,
  title: "OakComponents/base/Box",
  argTypes: {
    $background: {
      options: Object.keys(oakAllColorsHex),
      control: { type: "select" },
    },
    $color: {
      options: Object.keys(oakAllColorsHex),
      control: { type: "select" },
    },
    $width: {
      options: Object.keys(oakAllSpacingPx),
      control: { type: "select" },
    },
    $height: {
      options: Object.keys(oakAllSpacingPx),
      control: { type: "select" },
    },
  },
  parameters: {
    controls: {
      include: ["$background", "$color", "$width", "$height"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Box>;

export const DefaultBox: Story = (args: Partial<BoxProps>) => (
  <Box data-testId="box-id" {...args}>
    Test content
  </Box>
);
DefaultBox.args = {
  $background: "mint",
  $color: "black",
  $width: "all-spacing-12",
  $height: "all-spacing-12",
};
