import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalCheckBoxLabel } from "./InternalCheckBoxLabel";

import { flexArgTypes } from "@/storybook-helpers/flexStyleHelpers";

const meta: Meta<typeof InternalCheckBoxLabel> = {
  component: InternalCheckBoxLabel,
  tags: ["autodocs"],
  title: "components/atoms/InternalCheckBoxLabel",
  argTypes: {
    disabled: {
      control: "boolean",
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
