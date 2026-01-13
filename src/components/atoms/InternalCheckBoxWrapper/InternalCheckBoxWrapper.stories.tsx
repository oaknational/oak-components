import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalCheckBoxWrapper } from "./InternalCheckBoxWrapper";

import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { InternalCheckBoxHoverFocus } from "@/components/atoms/InternalCheckBox/InternalCheckBox";

const meta: Meta<typeof InternalCheckBoxWrapper> = {
  component: InternalCheckBoxWrapper,
  tags: ["autodocs"],
  title: "internal components/InternalCheckBoxWrapper",
  argTypes: {
    size: {
      options: ["spacing-24", "spacing-32", "spacing-40"],
    },
    iconPadding: spacingArgTypes.$pa,
  },
  parameters: {
    controls: {
      include: ["size", "iconPadding"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof InternalCheckBoxWrapper>;

export const Default: Story = {
  render: (args) => (
    <InternalCheckBoxWrapper
      {...args}
      internalCheckbox={
        <InternalCheckBoxHoverFocus
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
