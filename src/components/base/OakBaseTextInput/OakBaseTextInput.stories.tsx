import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakBaseTextInput } from "./OakBaseTextInput";

/**
 *
 * An unstyled input to be used as a basis for UI input components.
 * The following callbacks are available for tracking focus events:
 *
 *  ### onFocus
 * `(e: FocusEvent<HTMLInputElement>) => void;`
 *  ### onBlur
 * `(e: FocusEvent<HTMLInputElement>) => void;`
 *  ### onInitialFocus
 * `(e: FocusEvent<HTMLInputElement>) => void;`<br>
 *  occurs only when the input is focused for the first time
 *
 */

const meta: Meta<typeof OakBaseTextInput> = {
  component: OakBaseTextInput,
  tags: ["autodocs"],
  title: "components/base/OakBaseTextInput",
  argTypes: {},
  parameters: {
    controls: {
      include: [],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakBaseTextInput>;

export const Default: Story = {
  render: (args) => (
    <OakBaseTextInput {...args} placeholder="placeholder text" type="text" />
  ),
  args: {},
  parameters: {
    controls: { include: [] },
  },
};
