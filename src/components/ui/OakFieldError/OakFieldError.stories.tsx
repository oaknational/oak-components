import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakFieldError, OakFieldErrorProps } from "./OakFieldError";

/**
 *
 *
 *
 */

const meta: Meta<typeof OakFieldError> = {
  component: OakFieldError,
  tags: ["autodocs"],
  title: "components/ui/OakFieldError",
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
) => (
  <OakFieldError data-testId="OakMaxWidth-id" {...args}>
    A simple flex container with pre set padding and max width
  </OakFieldError>
);

DefaultOakFieldError.args = {};
