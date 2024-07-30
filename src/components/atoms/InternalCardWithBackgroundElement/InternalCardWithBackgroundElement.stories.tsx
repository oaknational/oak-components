import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalCardWithBackgroundElement } from "./InternalCardWithBackgroundElement";

import { InternalStyledSvg } from "@/components/atoms/InternalStyledSvg";
import { flexArgTypes } from "@/storybook-helpers/flexStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";

const meta: Meta<typeof InternalCardWithBackgroundElement> = {
  component: InternalCardWithBackgroundElement,
  tags: ["autodocs"],
  title: "components/atoms/InternalCardWithBackgroundElement",
  argTypes: {
    ...flexArgTypes,
    ...spacingArgTypes,
    children: { type: "string" },
  },
  parameters: {
    controls: {
      include: [
        ...Object.keys(flexArgTypes),
        ...Object.keys(spacingArgTypes),
        "children",
      ],
    },
  },
  args: {
    children: "Card content goes here",
  },
};
export default meta;

type Story = StoryObj<typeof InternalCardWithBackgroundElement>;

export const Default: Story = {
  render: (args) => (
    <InternalCardWithBackgroundElement
      {...args}
      backgroundElement={
        <InternalStyledSvg
          preserveAspectRatio="none"
          viewBox="0 0 10 10"
          $fill="aqua50"
          $stroke="aqua110"
          $strokeWidth="border-solid-s"
        >
          <circle cx="5" cy="5" r="5" vectorEffect="non-scaling-stroke" />
        </InternalStyledSvg>
      }
    />
  ),
};
