import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import OakOL, { OakOLProps } from "../OakOL/OakOL";
import OakLI from "../OakLI/OakLI";

import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";

/**
 *
 * OakOL is a style ol tag.
 * Use the controls to view different font styles.
 *
 */

const meta: Meta<typeof OakOL> = {
  component: OakOL,
  tags: ["autodocs"],
  title: "components/base/OakOL",
  argTypes: {
    ...colorArgTypes,
    ...spacingArgTypes,
  },
  parameters: {
    controls: {
      include: [...Object.keys(colorArgTypes), ...Object.keys(spacingArgTypes)],
      sort: "none",
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakOL>;

export const DefaultOakOL: Story = (args: Partial<OakOLProps>) => (
  <OakOL data-testId="OakOL-id" {...args}>
    <OakLI>Item 1</OakLI>
    <OakLI>Item 2</OakLI>
    <OakLI>Item 3</OakLI>
  </OakOL>
);

DefaultOakOL.args = {
  $color: "black",
};
