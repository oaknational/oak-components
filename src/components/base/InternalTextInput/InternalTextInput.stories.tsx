import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalTextInput } from "./InternalTextInput";

import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";

const meta: Meta<typeof InternalTextInput> = {
  component: InternalTextInput,
  tags: ["autodocs"],
  title: "components/base/InternalTextInput",
  argTypes: {
    ...sizeArgTypes,
    ...spacingArgTypes,
  },
};
export default meta;

type Story = StoryObj<typeof InternalTextInput>;

export const Default: Story = {
  render: (args) => (
    <InternalTextInput {...args} placeholder="placeholder text" type="text" />
  ),
};
