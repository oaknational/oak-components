import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakLI, oakLIDefaults } from "./OakLI";

import { OakUL, OakULProps } from "@/components/atoms/OakUL";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";

/**
 *
 * A styled LI tag. To be used inside OakUL or OakOL.
 *
 */

const meta: Meta<typeof OakUL> = {
  component: OakLI,
  tags: ["autodocs"],
  title: "components/atoms/OakLI",
  args: oakLIDefaults,
  argTypes: {
    ...colorArgTypes,
    ...spacingArgTypes,
  },
  parameters: {
    controls: {
      include: [],
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

DefaultOakUL.args = { $font: "list-item-1" };
