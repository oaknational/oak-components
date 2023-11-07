import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakBox, OakBoxProps } from "./OakBox";

import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { positionArgTypes } from "@/storybook-helpers/positionStyleHelpers";

const meta: Meta<typeof OakBox> = {
  component: OakBox,
  tags: ["autodocs"],
  title: "components/base/OakBox",
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

type Story = StoryObj<typeof OakBox>;

export const DefaultBox: Story = (args: Partial<OakBoxProps>) => (
  <OakBox data-testId="box-id" {...args}>
    Test content
  </OakBox>
);

DefaultBox.args = {
  $background: "mint",
  $color: "black",
  $width: "all-spacing-16",
  $height: "all-spacing-16",
  $pa: "inner-padding-m",
};

export const PositionedBox: Story = (args: Partial<OakBoxProps>) => (
  <OakBox $background={"grey40"} $width={"100%"} $height={"100vh"}>
    <OakBox data-testId="box-id" {...args}>
      Test content
    </OakBox>
  </OakBox>
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
