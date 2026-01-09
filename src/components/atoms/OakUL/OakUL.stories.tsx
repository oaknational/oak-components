import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakUL, OakULProps } from "./OakUL";

import { OakLI } from "@/components/atoms/OakLI";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { typographyArgTypes } from "@/storybook-helpers/typographyStyleHelpers";

/**
 *
 * OakUL is a style ol tag.
 * Use the controls to view different font styles.
 *
 */

const meta: Meta<typeof OakUL> = {
  component: OakUL,
  tags: ["autodocs"],
  title: "components/typography/OakUL",
  argTypes: {
    ...colorArgTypes,
    ...spacingArgTypes,
    ...typographyArgTypes,
  },
  parameters: {
    controls: {
      include: [
        ...Object.keys(colorArgTypes),
        ...Object.keys(typographyArgTypes),
      ],
      sort: "none",
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakUL>;

export const DefaultOakUL: Story = (args: Partial<OakULProps>) => (
  <OakUL data-testId="OakUL-id" {...args}>
    <OakLI>Item 1</OakLI>
    <OakLI>Item 2</OakLI>
    <OakLI>Item 3</OakLI>
  </OakUL>
);

DefaultOakUL.args = {
  $color: "text-primary",
  $font: "list-item-1",
};
