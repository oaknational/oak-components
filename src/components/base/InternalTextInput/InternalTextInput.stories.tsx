import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalTextInput } from "./InternalTextInput";

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

const meta: Meta<typeof InternalTextInput> = {
  component: InternalTextInput,
  tags: ["autodocs"],
  title: "components/base/InternalTextInput",
  argTypes: {},
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
  args: {},
  parameters: {
    controls: { include: [] },
  },
};
