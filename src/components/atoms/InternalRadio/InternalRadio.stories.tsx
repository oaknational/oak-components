import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import {
  InternalRadio,
  InternalRadioHover,
  InternalRadioFocus,
  InternalRadioHoverFocus,
} from "./InternalRadio";

import { OakBox } from "@/components/atoms/OakBox";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";

console.log({ sizeArgTypes });

const meta: Meta<typeof InternalRadio> = {
  component: InternalRadio,
  tags: ["autodocs"],
  title: "components/atoms/InternalRadio",
  argTypes: {
    ...sizeArgTypes,
    ...borderArgTypes,
    ...colorArgTypes,
    ...spacingArgTypes,
    disabled: {
      control: "boolean",
    },
    $checkedBackground: colorArgTypes.$color,
  },
  parameters: {
    controls: {
      include: [
        "disabled",
        "defaultChecked",
        "$width",
        "$height",
        "$ba",
        "$borderRadius",
        "$borderColor",
        "$hoverBorderRadius",
        "$checkedBackground",
      ],
    },
  },
};
export default meta;

export const Default: StoryObj<typeof InternalRadio> = {
  render: (args) => <InternalRadio {...args} />,
  args: {
    id: "checkbox-test-default-1",
    value: "a test value",
    $width: "all-spacing-6",
    $height: "all-spacing-6",
  },
};

export const Hover: StoryObj<typeof InternalRadioHover> = {
  render: (args) => (
    <OakBox $position="relative" $width={args.$width} $height={args.$height}>
      <InternalRadioHover {...args} />
    </OakBox>
  ),
  args: {
    id: "checkbox-test-default-2",
    value: "a test value",
    $width: "all-spacing-6",
    $height: "all-spacing-6",
  },
};

export const Focus: StoryObj<typeof InternalRadioFocus> = {
  render: (args) => (
    <OakBox $position="relative" $width={args.$width} $height={args.$height}>
      <InternalRadioFocus {...args} />
    </OakBox>
  ),
  args: {
    id: "checkbox-test-default-3",
    value: "a test value",
    $width: "all-spacing-6",
    $height: "all-spacing-6",
  },
};

export const HoverFocus: StoryObj<typeof InternalRadioHoverFocus> = {
  render: (args) => (
    <OakBox $position="relative" $width={args.$width} $height={args.$height}>
      <InternalRadioHoverFocus {...args} />
    </OakBox>
  ),
  args: {
    id: "checkbox-test-default-4",
    value: "a test value",
    $width: "all-spacing-6",
    $height: "all-spacing-6",
  },
};
