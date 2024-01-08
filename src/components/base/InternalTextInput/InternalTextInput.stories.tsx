import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalTextInput } from "./InternalTextInput";

const meta: Meta<typeof InternalTextInput> = {
  component: InternalTextInput,
  tags: ["autodocs"],
  title: "components/base/InternalTextInput",
  parameters: {
    controls: {
      include: [],
    },
  },
};
export default meta;

type Story = StoryObj<typeof InternalTextInput>;

export const Default: Story = {
  render: (args) => (
    <InternalTextInput {...args} placeholder="placeholder text" type="text" />
  ),
};
