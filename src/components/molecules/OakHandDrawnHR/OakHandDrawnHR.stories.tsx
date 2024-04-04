import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakHandDrawnHR } from "./OakHandDrawnHR";

import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { drawingArgTypes } from "@/storybook-helpers/drawingStyleHelpers";

const meta: Meta<typeof OakHandDrawnHR> = {
  title: "Components/molecules/OakHandDrawnHR",
  component: OakHandDrawnHR,
  tags: ["autodocs"],
  argTypes: {
    fill: drawingArgTypes["$fill"],
    stroke: drawingArgTypes["$stroke"],
    strokeWidth: drawingArgTypes["$strokeWidth"],
    ...spacingArgTypes,
    ...sizeArgTypes,
  },
  parameters: {
    controls: {
      include: [
        "fill",
        "stroke",
        "strokeWidth",
        ...Object.keys(spacingArgTypes),
        ...Object.keys(sizeArgTypes),
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakHandDrawnHR>;

export const Default: Story = {
  render: (args) => <OakHandDrawnHR {...args} />,
  args: {
    $height: "all-spacing-1",
  },
};
