import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSpan, OakSpanProps } from "./OakSpan";

import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { typographyArgTypes } from "@/storybook-helpers/typographyStyleHelpers";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";
import { positionArgTypes } from "@/storybook-helpers/positionStyleHelpers";

/**
 *
 * OakSpan applies the Oak typography styles to the text content in addition to color, opacity, margin, padding and border styles.
 *
 */

const meta: Meta<typeof OakSpan> = {
  component: OakSpan,
  tags: ["autodocs"],
  title: "components/layout/OakSpan",
  argTypes: {
    ...colorArgTypes,
    ...sizeArgTypes,
    ...spacingArgTypes,
    ...typographyArgTypes,
    ...borderArgTypes,
    ...positionArgTypes,
  },
  parameters: {
    controls: {
      include: [
        ...Object.keys(typographyArgTypes),
        "$overflow",
        "$ba",
        "$ph",
        "$pv",
        ...Object.keys(colorArgTypes),
      ],
      sort: "none",
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakSpan>;

export const DefaultOakSpan: Story = (args: Partial<OakSpanProps>) => (
  <OakSpan data-testId="OakSpan-id" {...args}>
    Get a head-start on your lesson planning using quality-checked resources you
    can download and adapt for free.
  </OakSpan>
);

DefaultOakSpan.args = {};
