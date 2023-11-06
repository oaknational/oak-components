import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Box, BoxProps } from "./Box";

import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { positionArgTypes } from "@/storybook-helpers/positionStyleHelpers";

const meta: Meta<typeof Box> = {
  component: Box,
  tags: ["autodocs"],
  title: "components/base/Box",
  argTypes: {
    ...colorArgTypes,
    ...sizeArgTypes,
    ...spacingArgTypes,
    ...positionArgTypes,
  },
  parameters: {
    controls: {
      include: [
        ...Object.keys(colorArgTypes),
        ...Object.keys(sizeArgTypes),
        ...Object.keys(spacingArgTypes),
        ...Object.keys(positionArgTypes),
      ],
      sort: "none",
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
  $width: "all-spacing-16",
  $height: "all-spacing-16",
  $pa: "inner-padding-m",
};

export const PositionedBox: Story = (args: Partial<BoxProps>) => (
  <Box $background={"grey40"} $width={"100%"} $height={"100vh"}>
    <Box data-testId="box-id" {...args}>
      Test content
    </Box>
  </Box>
);
PositionedBox.args = {
  $background: "mint",
  $color: "black",
  $width: "all-spacing-16",
  $height: "all-spacing-16",
  $position: "absolute",
  $pa: "inner-padding-m",
  $mt: "space-between-l",
  $ml: "space-between-l",
};
