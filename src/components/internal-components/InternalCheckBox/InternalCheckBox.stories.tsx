import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import {
  InternalCheckBox,
  InternalCheckBoxHover,
  InternalCheckBoxFocus,
  InternalCheckBoxHoverFocus,
  internalCheckBoxDefaults,
} from "./InternalCheckBox";

import { OakBox } from "@/components/layout-and-structure/OakBox";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";

const meta: Meta<typeof InternalCheckBox> = {
  component: InternalCheckBox,
  tags: ["autodocs"],
  title: "internal components/InternalCheckBox",
  args: internalCheckBoxDefaults,
  argTypes: {
    sizeArgTypes,
    borderArgTypes,
    colorArgTypes,
    spacingArgTypes,
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

type Story = StoryObj<
  | typeof InternalCheckBox
  | typeof InternalCheckBoxHover
  | typeof InternalCheckBoxFocus
  | typeof InternalCheckBoxHoverFocus
>;

export const Default: Story = {
  render: (args) => <InternalCheckBox {...args} />,
  args: {
    id: "checkbox-test-default-1",
    value: "a test value",
    $width: "spacing-24",
    $height: "spacing-24",
  },
};

export const Hover: Story = {
  render: (args) => (
    <OakBox $position="relative" $width={args.$width} $height={args.$height}>
      <InternalCheckBoxHover {...args} />
    </OakBox>
  ),
  args: {
    id: "checkbox-test-default-2",
    value: "a test value",
    $width: "spacing-24",
    $height: "spacing-24",
  },
};

export const Focus: Story = {
  render: (args) => (
    <OakBox $position="relative" $width={args.$width} $height={args.$height}>
      <InternalCheckBoxFocus {...args} />
    </OakBox>
  ),
  args: {
    id: "checkbox-test-default-3",
    value: "a test value",
    $width: "spacing-24",
    $height: "spacing-24",
  },
};

export const HoverFocus: Story = {
  render: (args) => (
    <OakBox $position="relative" $width={args.$width} $height={args.$height}>
      <InternalCheckBoxHoverFocus {...args} />
    </OakBox>
  ),
  args: {
    id: "checkbox-test-default-4",
    value: "a test value",
    $width: "spacing-24",
    $height: "spacing-24",
  },
};
