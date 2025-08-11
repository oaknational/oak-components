import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import {
  InternalCheckBox,
  InternalCheckBoxHover,
  InternalCheckBoxFocus,
  InternalCheckBoxHoverFocus,
} from "./InternalCheckBox";

import { OakBox } from "@/components/atoms/OakBox";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";

const meta: Meta<typeof InternalCheckBox> = {
  component: InternalCheckBox,
  tags: ["autodocs"],
  title: "components/atoms/InternalCheckBox",
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

export const Default: StoryObj<typeof InternalCheckBox> = {
  render: (args) => <InternalCheckBox {...args} />,
  args: {
    id: "checkbox-test-default-1",
    value: "a test value",
    $width: "all-spacing-6",
    $height: "all-spacing-6",
  },
};

export const Hover: StoryObj<typeof InternalCheckBoxHover> = {
  render: (args) => (
    <OakBox $position="relative" $width={args.$width} $height={args.$height}>
      <InternalCheckBoxHover {...args} />
    </OakBox>
  ),
  args: {
    id: "checkbox-test-default-2",
    value: "a test value",
    $width: "all-spacing-6",
    $height: "all-spacing-6",
  },
};

export const Focus: StoryObj<typeof InternalCheckBoxFocus> = {
  render: (args) => (
    <OakBox $position="relative" $width={args.$width} $height={args.$height}>
      <InternalCheckBoxFocus {...args} />
    </OakBox>
  ),
  args: {
    id: "checkbox-test-default-3",
    value: "a test value",
    $width: "all-spacing-6",
    $height: "all-spacing-6",
  },
};

export const HoverFocus: StoryObj<typeof InternalCheckBoxHoverFocus> = {
  render: (args) => (
    <OakBox $position="relative" $width={args.$width} $height={args.$height}>
      <InternalCheckBoxHoverFocus {...args} />
    </OakBox>
  ),
  args: {
    id: "checkbox-test-default-4",
    value: "a test value",
    $width: "all-spacing-6",
    $height: "all-spacing-6",
  },
};
