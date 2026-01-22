import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakHandDrawnFocusUnderline } from "./OakHandDrawnFocusUnderline";

import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { drawingArgTypes } from "@/storybook-helpers/drawingStyleHelpers";

const meta: Meta<typeof OakHandDrawnFocusUnderline> = {
  component: OakHandDrawnFocusUnderline,
  tags: ["autodocs"],
  title: "OWA/OakHandDrawnFocusUnderline",
  argTypes: {
    fill: drawingArgTypes["$fill"],
    ...spacingArgTypes,
    ...sizeArgTypes,
  },
  parameters: {
    controls: {
      include: [
        "fill",
        "fillColor",
        ...Object.keys(spacingArgTypes),
        ...Object.keys(sizeArgTypes),
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakHandDrawnFocusUnderline>;

export const Default: Story = {
  render: (args) => <OakHandDrawnFocusUnderline {...args} />,
  args: {
    $height: "spacing-4",
    fill: "amber",
  },
};

export const Colors: Story = {
  render: (args) => <OakHandDrawnFocusUnderline {...args} />,
  args: {
    fill: "amber",
  },
};
