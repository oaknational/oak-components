import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakBaseButton } from "./OakBaseButton";

/**
 *
 * An unstyled button to be used as a basis for all UI button components.
 * The following callbacks are available for tracking focus events:
 *
 *
 */

const meta: Meta<typeof OakBaseButton> = {
  component: OakBaseButton,
  tags: ["autodocs"],
  title: "components/base/OakBaseButton",
  argTypes: {},
  parameters: {
    controls: {
      include: [],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakBaseButton>;

export const Default: Story = {
  render: (args) => <OakBaseButton {...args} />,
  args: {},
  parameters: {
    controls: { include: [] },
  },
};

Default.args = {
  $ba: "border-solid-s",
  $pa: "inner-padding-s",
  $borderRadius: "border-radius-m",
};
