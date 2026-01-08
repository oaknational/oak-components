import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { HandDrawnFocusUnderlineSvg } from "./SubHandDrawnFocusUnderline";

import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";

const meta: Meta<typeof HandDrawnFocusUnderlineSvg> = {
  component: HandDrawnFocusUnderlineSvg,
  tags: ["autodocs"],
  title:
    "components/molecules/OWA (❌ to be moved out)/SubHandDrawnFocusUnderline",
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

type Story = StoryObj<typeof HandDrawnFocusUnderlineSvg>;

export const Default: Story = {
  render: (args) => <HandDrawnFocusUnderlineSvg {...args} />,
};
