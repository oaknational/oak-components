import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakOL, OakOLProps } from "../OakOL/OakOL";
import { OakLI } from "../OakLI/OakLI";

import { typographyArgTypes } from "@/storybook-helpers/typographyStyleHelpers";

/**
 *
 * OakOL is a styled ol tag.
 * Use the controls to view different font styles.
 *
 */

const meta: Meta<typeof OakOL> = {
  component: OakOL,
  tags: ["autodocs"],
  title: "components/base/OakOL",
  argTypes: {
    ...typographyArgTypes,
  },
  parameters: {
    controls: {
      include: [...Object.keys(typographyArgTypes)],
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

DefaultOakOL.args = { $font: "list-item-1" };
