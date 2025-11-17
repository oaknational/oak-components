import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakHandDrawnHR } from "./OakHandDrawnHR";

import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { drawingArgTypes } from "@/storybook-helpers/drawingStyleHelpers";

const meta: Meta<typeof OakHandDrawnHR> = {
  component: OakHandDrawnHR,
  tags: ["autodocs"],
  title: "Components/molecules/OakHandDrawnHR",
  argTypes: {
    hrColor: drawingArgTypes["$fill"],
    ...spacingArgTypes,
    ...sizeArgTypes,
  },
  parameters: {
    controls: {
      include: [
        "fill",
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
    $height: "spacing-4",
  },
};
