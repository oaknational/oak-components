import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakFlex, OakBox } from "@/components/base";
import {
  OakDropShadowToken,
  oakDropShadowTokens,
} from "@/styles/theme/dropShadow";

/**
 *
 * OakSpan applies the Oak typography styles to the text content in addition to color, opacity, margin, padding and border styles.
 *
 */

const meta: Meta<typeof OakFlex> = {
  component: OakFlex,
  tags: ["autodocs"],
  title: "StyleTokens/OakDropShadowTokens",
};
export default meta;

type Story = StoryObj<typeof OakFlex>;

export const SingleShadow: Story = {
  render: (args) => (
    <OakFlex
      $flexDirection={"column"}
      $gap="space-between-m"
      {...args}
      $alignItems="start"
    >
      {Object.keys(oakDropShadowTokens).map((token) => (
        <OakBox
          key={token}
          $ba={"border-solid-m"}
          $pa={"inner-padding-l"}
          $borderRadius={"border-radius-s"}
          $dropShadow={token as OakDropShadowToken}
        >
          {token}
        </OakBox>
      ))}
    </OakFlex>
  ),
  parameters: {
    controls: {
      include: [],
    },
  },
  args: {},
};

export const DoubleShadow: Story = {
  render: (args) => (
    <OakFlex
      $flexDirection={"column"}
      $gap="space-between-m"
      {...args}
      $alignItems="start"
    >
      <OakBox
        $ba={"border-solid-m"}
        $pa={"inner-padding-m"}
        $borderRadius={"border-radius-s"}
        $dropShadow={"drop-shadow-centered-yellow"}
        $position={"relative"}
        $background={"white"}
      >
        <OakBox
          $position={"absolute"}
          $top={"space-between-none"}
          $left={"space-between-none"}
          $width={"100%"}
          $height={"100%"}
          $dropShadow={"drop-shadow-centered-grey"}
          $borderRadius={"border-radius-s"}
          $zIndex={"behind"}
        ></OakBox>
        inner content
      </OakBox>

      <OakBox
        $ba={"border-solid-m"}
        $pa={"inner-padding-m"}
        $borderRadius={"border-radius-s"}
        $dropShadow={"drop-shadow-yellow"}
        $position={"relative"}
        $background={"white"}
      >
        <OakBox
          $position={"absolute"}
          $top={"space-between-none"}
          $left={"space-between-none"}
          $width={"100%"}
          $height={"100%"}
          $dropShadow={"drop-shadow-grey"}
          $borderRadius={"border-radius-s"}
          $zIndex={"behind"}
        ></OakBox>
        inner content
      </OakBox>
    </OakFlex>
  ),
  parameters: {
    controls: {
      include: [],
    },
  },
  args: {},
};
