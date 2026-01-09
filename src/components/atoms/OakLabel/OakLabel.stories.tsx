import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakLabel, OakLabelProps } from "./OakLabel";

import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { typographyArgTypes } from "@/storybook-helpers/typographyStyleHelpers";

/**
 *
 * Applies typography styles to a label element in addition to color, opacity, margin, padding and border styles.
 *
 */

const meta: Meta<typeof OakLabel> = {
  component: OakLabel,
  tags: ["autodocs"],
  title: "components/forms/OakLabel",
  argTypes: {
    ...typographyArgTypes,
    ...colorArgTypes,
    ...sizeArgTypes,
    ...spacingArgTypes,
  },
  parameters: {
    controls: {
      include: [
        ...Object.keys(typographyArgTypes),
        ...Object.keys(colorArgTypes),
        ...Object.keys(sizeArgTypes),
        ...Object.keys(spacingArgTypes),
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
