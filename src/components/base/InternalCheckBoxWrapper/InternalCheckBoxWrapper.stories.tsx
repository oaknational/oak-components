import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalCheckBoxWrapper } from "./InternalCheckBoxWrapper";

import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { InternalCheckBoxHoverFocus } from "@/components/base/InternalCheckBox/InternalCheckBox";

/**
 *
 * This component is a wrapper for the InternalCheckBox component. It allows for customisable icons.
 *
 * NB. size must have the same value as the InternalCheckBox width and height
 *
 *
 */

const meta: Meta<typeof InternalCheckBoxWrapper> = {
  component: InternalCheckBoxWrapper,
  tags: ["autodocs"],
  title: "components/base/InternalCheckBoxWrapper",
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
