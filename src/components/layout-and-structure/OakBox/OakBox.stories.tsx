import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";

import { OakBox, OakBoxProps } from "./OakBox";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { parseColor } from "@/styles/helpers/parseColor";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { positionArgTypes } from "@/storybook-helpers/positionStyleHelpers";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";
import { opacityArgTypes } from "@/storybook-helpers/opacityStyleHelpers";
import { zIndexArgTypes } from "@/storybook-helpers/zIndexStyleHelpers";
import { transitionArgTypes } from "@/storybook-helpers/transitionStyleHelpers";

const meta: Meta<typeof OakBox> = {
  component: OakBox,
  tags: ["autodocs"],
  title: "components/Layout and structure/OakBox",
  argTypes: {
    ...colorArgTypes,
    ...sizeArgTypes,
    ...spacingArgTypes,
    ...positionArgTypes,
    ...borderArgTypes,
    ...opacityArgTypes,
    ...zIndexArgTypes,
    ...transitionArgTypes,
  },
  parameters: {
    controls: {
      include: [],
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
    $background: "bg-decorative1-main",
    $color: "text-primary",
    $width: "spacing-120",
    $height: "spacing-120",
    $pa: "spacing-16",
  },
  parameters: {
    controls: { include: Object.keys(colorArgTypes) },
  },
};

export const Position: Story = {
  render: (args) => (
    <OakBox
      $background={"bg-interactive-element2"}
      $width={"100%"}
      $height={"100vh"}
    >
      <OakBox data-testId="box-id" {...args}>
        Use controls to change position, spacing and size attributes
      </OakBox>
    </OakBox>
  ),
  args: {
    $background: "bg-decorative1-main",
    $color: "text-primary",
    $width: "spacing-360",
    $height: "spacing-120",
    $position: "absolute",
    $pa: "spacing-16",
    $mt: "spacing-48",
    $ml: "spacing-48",
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
      $gap={"spacing-16"}
      $width={"100%"}
      $height={"100vh"}
    >
      <OakBox data-testId="box-id" {...args} $pa="spacing-24">
        Use controls to change border style
      </OakBox>

      <OakBox data-testId="box-id" $pa="spacing-24" $ba="border-solid-s">
        Border Solid Small
      </OakBox>

      <OakBox data-testId="box-id" $pa="spacing-24" $ba="border-solid-m">
        Border Solid Medium
      </OakBox>

      <OakBox
        data-testId="box-id"
        $pa="spacing-24"
        $ba="border-solid-m"
        $borderRadius={"border-radius-m"}
      >
        Border Radius Medium
      </OakBox>
    </OakFlex>
  ),
  args: {
    $background: "bg-decorative1-main",
  },
  parameters: {
    controls: { include: Object.keys(borderArgTypes) },
  },
};

export const DropShadow: Story = {
  render: (args) => (
    <OakBox
      data-testId="box-id"
      $dropShadow="drop-shadow-standard"
      $pa="spacing-20"
      $width="spacing-120"
      {...args}
    >
      Drop Shadow Standard
    </OakBox>
  ),
  args: {
    $background: "bg-decorative1-main",
  },
  parameters: {
    controls: { include: [] },
  },
};

export const OpacityAndZIndex: Story = {
  render: (args) => (
    <OakBox $width={"100%"} $height={"100vh"}>
      <OakBox
        $pa="spacing-24"
        $width="spacing-180"
        $height="spacing-180"
        $background="bg-error"
        $position="absolute"
        $left="spacing-48"
        $top="spacing-48"
      >
        Fixed Box
      </OakBox>
      <OakBox
        {...args}
        $pa="spacing-24"
        $width="spacing-180"
        $height="spacing-180"
        $background="bg-decorative2-main"
        $position="absolute"
      >
        Adjust the opacity and z-index using controls
      </OakBox>
    </OakBox>
  ),
  args: {},
  parameters: {
    controls: {
      include: [
        ...Object.keys(opacityArgTypes),
        ...Object.keys(zIndexArgTypes),
      ],
    },
  },
};

export const TransitionAndTransform: Story = {
  render: (args) => {
    const HoverBox = styled(OakBox)<OakBoxProps>`
      &:hover {
        transform: ${() => args.$transform};
        background-color: ${() => parseColor(args.$background)};
      }
    `;
    return (
      <HoverBox
        $pa="spacing-24"
        $width="spacing-180"
        $background="bg-decorative1-main"
        $transition={args.$transition}
      >
        Hover over me to change
      </HoverBox>
    );
  },
  args: {
    $background: "bg-error",
    $transform: "scale(1.2)",
  },
  parameters: {
    controls: {
      include: ["$transition", "$background", "$transform"],
    },
  },
};
