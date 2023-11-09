import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import OakLabel, { OakLabelProps } from "./OakLabel";

import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { opacityArgTypes } from "@/storybook-helpers/opacityStyleHelpers";
import { typographyArgTypes } from "@/storybook-helpers/typographyStyleHelpers";

/**
 *
 * OakSpan applies the Oak typography styles to the text content in addition to color, opacity, margin, padding and border styles.
 *
 */

const meta: Meta<typeof OakLabel> = {
  component: OakLabel,
  tags: ["autodocs"],
  title: "components/base/OakLabel",
  argTypes: {
    ...typographyArgTypes,
    ...colorArgTypes,
    ...sizeArgTypes,
    ...spacingArgTypes,
    ...opacityArgTypes,
  },
  parameters: {
    controls: {
      include: [
        ...Object.keys(typographyArgTypes),
        ...Object.keys(colorArgTypes),
        ...Object.keys(sizeArgTypes),
        ...Object.keys(spacingArgTypes),
        ...Object.keys(opacityArgTypes),
      ],
      sort: "none",
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakLabel>;

export const DefaultOakLabel: Story = (args: Partial<OakLabelProps>) => (
  <OakLabel data-testId="OakLabel-id" {...args}>
    Oak Label
  </OakLabel>
);

DefaultOakLabel.args = {};
