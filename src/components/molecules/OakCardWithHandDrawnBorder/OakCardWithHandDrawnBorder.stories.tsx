import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakCardWithHandDrawnBorder } from "./OakCardWithHandDrawnBorder";

import { OakSpan } from "@/components/atoms";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { drawingArgTypes } from "@/storybook-helpers/drawingStyleHelpers";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";

const meta: Meta<typeof OakCardWithHandDrawnBorder> = {
  component: OakCardWithHandDrawnBorder,
  tags: ["autodocs"],
  title: "OWA/OakCardWithHandDrawnBorder",
  argTypes: {
    fill: drawingArgTypes["$fill"],
    stroke: drawingArgTypes["$stroke"],
    children: { type: "string" },
    ...spacingArgTypes,
    ...colorArgTypes,
  },
  parameters: {
    controls: {
      include: [
        "children",
        "fill",
        "stroke",
        ...Object.keys(colorArgTypes),
        ...Object.keys(spacingArgTypes),
      ],
      sort: "none",
    },
  },
  args: {
    children: "Card content goes here",
  },
};
export default meta;

type Story = StoryObj<typeof OakCardWithHandDrawnBorder>;

export const Default: Story = {
  render: (args) => (
    <OakCardWithHandDrawnBorder {...args}>
      <OakSpan $font="heading-5">Keep going, you're doing great!</OakSpan>
    </OakCardWithHandDrawnBorder>
  ),
};
