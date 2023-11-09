import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakFlex } from "../OakFlex";

import { OakBox } from "./OakBox";

import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { positionArgTypes } from "@/storybook-helpers/positionStyleHelpers";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";

const meta: Meta<typeof OakBox> = {
  component: OakBox,
  tags: ["autodocs"],
  title: "components/base/OakBox",
  argTypes: {
    ...colorArgTypes,
    ...sizeArgTypes,
    ...spacingArgTypes,
    ...positionArgTypes,
    ...borderArgTypes,
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

export const Color: Story = {
  render: (args) => (
    <OakBox data-testId="box-id" {...args}>
      Use controls to change color
    </OakBox>
  ),
  args: {
    $background: "mint",
    $color: "black",
    $width: "all-spacing-16",
    $height: "all-spacing-16",
    $pa: "inner-padding-m",
  },
  parameters: {
    controls: { include: [...Object.keys(colorArgTypes)] },
  },
};

export const Position: Story = {
  render: (args) => (
    <OakBox $background={"grey40"} $width={"100%"} $height={"100vh"}>
      <OakBox data-testId="box-id" {...args}>
        Use controls to change position, spacing and size attributes
      </OakBox>
    </OakBox>
  ),
  args: {
    $background: "mint",
    $color: "black",
    $width: "all-spacing-20",
    $height: "all-spacing-16",
    $position: "absolute",
    $pa: "inner-padding-m",
    $mt: "space-between-l",
    $ml: "space-between-l",
  },
  parameters: {
    controls: {
      include: [
        ...Object.keys(sizeArgTypes),
        ...Object.keys(spacingArgTypes),
        ...Object.keys(positionArgTypes),
      ],
      sort: "none",
    },
  },
};

export const Borders: Story = {
  render: (args) => (
    <OakFlex
      $flexDirection={"column"}
      $alignItems={"start"}
      $gap={"space-between-s"}
      $width={"100%"}
      $height={"100vh"}
    >
      <OakBox data-testId="box-id" {...args} $pa="inner-padding-xl">
        Use controls to change border style
      </OakBox>

      <OakBox data-testId="box-id" $pa="inner-padding-xl" $ba="border-solid-s">
        Border Solid Small
      </OakBox>

      <OakBox data-testId="box-id" $pa="inner-padding-xl" $ba="border-solid-m">
        Border Solid Medium
      </OakBox>

      <OakBox
        data-testId="box-id"
        $pa="inner-padding-xl"
        $ba="border-solid-m"
        $borderRadius={"border-radius-m"}
      >
        Border Radius Medium
      </OakBox>
    </OakFlex>
  ),
  args: {
    $background: "mint",
  },
  parameters: {
    controls: { include: [...Object.keys(borderArgTypes)] },
  },
};

export const DropShadow: Story = {
  render: (args) => (
    <OakBox
      data-testId="box-id"
      $dropShadow="drop-shadow-standard"
      $pa="inner-padding-l"
      $width="all-spacing-16"
      {...args}
    >
      Drop Shadow Standard
    </OakBox>
  ),
  args: {
    $background: "mint",
  },
  parameters: {
    controls: { include: [] },
  },
};

export const OpacityAndZIndex: Story = {
  render: (args) => (
    <OakBox $width={"100%"} $height={"100vh"}>
      <OakBox data-testId="box-id" {...args} $pa="inner-padding-xl">
        Use controls to change border style
      </OakBox>

      <OakBox data-testId="box-id" $pa="inner-padding-xl" $ba="border-solid-s">
        Border Solid Small
      </OakBox>

      <OakBox data-testId="box-id" $pa="inner-padding-xl" $ba="border-solid-m">
        Border Solid Medium
      </OakBox>

      <OakBox
        data-testId="box-id"
        $pa="inner-padding-xl"
        $ba="border-solid-m"
        $borderRadius={"border-radius-m"}
      >
        Border Radius Medium
      </OakBox>
    </OakBox>
  ),
  args: {
    $background: "mint",
  },
  parameters: {
    controls: { include: [...Object.keys(borderArgTypes)] },
  },
};
