import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakFlex, OakFlexProps } from "./OakFlex";

import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { flexArgTypes } from "@/storybook-helpers/flexStyleHelpers";

/**
 *
 * OakFlex extends OakBox by exposing flexbox related props.
 * All size, color, spacing and position props are available but not displayed in the controls here.
 *
 */

const meta: Meta<typeof OakFlex> = {
  component: OakFlex,
  tags: ["autodocs"],
  title: "components/Layout and structure/OakFlex",
  argTypes: {
    ...flexArgTypes,
    ...colorArgTypes,
    ...spacingArgTypes,
  },
  parameters: {
    controls: {
      include: [...Object.keys(flexArgTypes)],
      sort: "none",
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakFlex>;

export const DefaultOakFlex: Story = (args: Partial<OakFlexProps>) => (
  <OakFlex data-testId="OakFlex-id" {...args}>
    A simple flex container without nested content
  </OakFlex>
);

DefaultOakFlex.args = {
  $background: "bg-decorative1-main",
  $color: "text-primary",
  $pa: "spacing-16",
};

export const NestedOakFlex: Story = (args: Partial<OakFlexProps>) => (
  <OakFlex {...args}>
    <OakFlex
      data-testId="OakFlex-id"
      $background={"bg-interactive-element2"}
      $pa={"spacing-16"}
    >
      Test content 1
    </OakFlex>
    <OakFlex
      data-testId="OakFlex-id"
      $background={"bg-interactive-element2"}
      $pa={"spacing-16"}
    >
      Test content 2
    </OakFlex>
    <OakFlex
      data-testId="OakFlex-id"
      $background={"bg-interactive-element2"}
      $pa={"spacing-16"}
    >
      Test content 3
    </OakFlex>
  </OakFlex>
);
NestedOakFlex.args = {
  $background: "bg-decorative1-main",
  $flexDirection: "column",
  $pa: "spacing-16",
  $gap: "spacing-24",
  $alignItems: "center",
};
