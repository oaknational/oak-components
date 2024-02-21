import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakFieldError, OakFieldErrorProps } from "./OakFieldError";

/**
 *
 * OakFieldError renders a error message when passed children.
 *
 */

const meta: Meta<typeof OakFieldError> = {
  component: OakFieldError,
  tags: ["autodocs"],
  title: "components/molecules/OakFieldError",
  argTypes: {},
  parameters: {
    controls: {
      include: [],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakFieldError>;

export const DefaultOakFieldError: Story = (
  args: Partial<OakFieldErrorProps>,
) => <OakFieldError {...args}>Error message goes here ...</OakFieldError>;

DefaultOakFieldError.args = {};
