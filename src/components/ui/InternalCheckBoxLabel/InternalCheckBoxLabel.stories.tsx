import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalCheckBoxLabel } from "./InternalCheckBoxLabel";

import { flexArgTypes } from "@/storybook-helpers/flexStyleHelpers";

/**
 *
 * Specialised Label Component can be used and extended to create various different versions of CheckboxLabels
 *
 */

const meta: Meta<typeof InternalCheckBoxLabel> = {
  component: InternalCheckBoxLabel,
  tags: ["autodocs"],
  title: "components/ui/InternalCheckBoxLabel",
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },

    labelGap: flexArgTypes.$gap,
    labelAlignItems: flexArgTypes.$alignItems,
  },
  parameters: {
    controls: {
      include: ["labelGap", "labelAlignItems", "disabled"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof InternalCheckBoxLabel>;

export const Default: Story = {
  render: (args) => (
    <InternalCheckBoxLabel {...args}>Value</InternalCheckBoxLabel>
  ),
  args: {
    htmlFor: "test",
    value: "a test value",
  },
};
