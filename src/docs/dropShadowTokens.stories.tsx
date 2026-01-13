import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakFlex, OakBox } from "@/components/atoms";
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
  title: "style tokens/OakDropShadowTokens",
};
export default meta;

type Story = StoryObj<typeof OakFlex>;

export const SingleShadow: Story = {
  render: (args) => (
    <OakFlex
      $flexDirection={"column"}
      $gap="spacing-24"
      {...args}
      $alignItems="start"
    >
      {Object.keys(oakDropShadowTokens).map((token) => (
        <OakBox
          key={token}
          $ba={"border-solid-m"}
          $pa={"spacing-20"}
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
      $gap="spacing-24"
      {...args}
      $alignItems="start"
    >
      <OakBox $position={"relative"}>
        <OakBox
          $position={"absolute"}
          $top={"spacing-0"}
          $left={"spacing-0"}
          $width={"100%"}
          $height={"100%"}
          $dropShadow={"drop-shadow-centered-grey"}
          $borderRadius={"border-radius-s"}
        />
        <OakBox
          $borderRadius={"border-radius-s"}
          $dropShadow={"drop-shadow-centered-lemon"}
          $position={"absolute"}
          $top={"spacing-0"}
          $left={"spacing-0"}
          $width={"100%"}
          $height={"100%"}
        />
        <OakBox
          $pa="spacing-16"
          $ba="border-solid-m"
          $borderRadius="border-radius-s"
        >
          inner content
        </OakBox>
      </OakBox>

      <OakBox $position={"relative"}>
        <OakBox
          $position={"absolute"}
          $top={"spacing-0"}
          $left={"spacing-0"}
          $width={"100%"}
          $height={"100%"}
          $dropShadow={"drop-shadow-grey"}
          $borderRadius={"border-radius-s"}
        />
        <OakBox
          $borderRadius={"border-radius-s"}
          $dropShadow={"drop-shadow-lemon"}
          $position={"absolute"}
          $top={"spacing-0"}
          $left={"spacing-0"}
          $width={"100%"}
          $height={"100%"}
        />
        <OakBox
          $pa="spacing-16"
          $ba="border-solid-m"
          $borderRadius="border-radius-s"
        >
          inner content
        </OakBox>
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
