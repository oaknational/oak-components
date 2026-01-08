import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakHandDrawnCard } from "./OakHandDrawnCard";

import { OakSpan } from "@/components/atoms";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { drawingArgTypes } from "@/storybook-helpers/drawingStyleHelpers";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";

const meta: Meta<typeof OakHandDrawnCard> = {
  component: OakHandDrawnCard,
  tags: ["autodocs"],
  title: "components/molecules/OWA (❌ to be moved out)/OakHandDrawnCard",
  argTypes: {
    fill: drawingArgTypes["$fill"],
    stroke: drawingArgTypes["$stroke"],
    strokeWidth: drawingArgTypes["$strokeWidth"],
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
        "strokeWidth",
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

type Story = StoryObj<typeof OakHandDrawnCard>;

export const Default: Story = {
  render: (args) => (
    <OakHandDrawnCard {...args}>
      <OakSpan $font="heading-5">Keep going, you're doing great!</OakSpan>
    </OakHandDrawnCard>
  ),
};
