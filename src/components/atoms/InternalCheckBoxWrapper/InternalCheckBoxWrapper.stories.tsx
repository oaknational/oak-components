import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalCheckBoxWrapper } from "./InternalCheckBoxWrapper";

import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { InternalCheckBoxHoverFocus } from "@/components/atoms/InternalCheckBox/InternalCheckBox";

const meta: Meta<typeof InternalCheckBoxWrapper> = {
  component: InternalCheckBoxWrapper,
  tags: ["autodocs"],
  title: "components/atoms/InternalCheckBoxWrapper",
  argTypes: {
    size: {
      options: ["all-spacing-6", "all-spacing-7", "all-spacing-8"],
      control: { type: "select" },
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
  args: { size: "all-spacing-6" },
};
