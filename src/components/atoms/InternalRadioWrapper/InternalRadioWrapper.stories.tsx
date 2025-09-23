import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalRadioWrapper } from "./InternalRadioWrapper";

import { InternalRadioHoverFocus } from "@/components/atoms/InternalRadio/InternalRadio";

const meta: Meta<typeof InternalRadioWrapper> = {
  component: InternalRadioWrapper,
  tags: ["autodocs"],
  title: "components/atoms/InternalRadioWrapper",
  argTypes: {
    size: {
      options: ["spacing-24", "spacing-32", "spacing-40"],
    },
  },
  parameters: {
    controls: {
      include: ["size", "iconPadding"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof InternalRadioWrapper>;

export const Default: Story = {
  render: (args) => (
    <InternalRadioWrapper
      {...args}
      internalRadio={
        <InternalRadioHoverFocus
          id={"test"}
          value="A test value"
          $width={args.size}
          $height={args.size}
          $hoverBorderRadius="border-radius-xs"
        />
      }
    />
  ),
  args: { size: "spacing-24" },
};
