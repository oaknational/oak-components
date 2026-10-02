import React from "react";
import { Meta, StoryObj } from "@storybook/nextjs";

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

type InternalCheckBoxStory = StoryObj<typeof InternalCheckBox>;
type InternalCheckBoxFocusStory = StoryObj<typeof InternalCheckBoxFocus>;
type InternalCheckBoxHoverFocusStory = StoryObj<
  typeof InternalCheckBoxHoverFocus
>;

export const Default: InternalCheckBoxStory = {
  render: (args) => <InternalCheckBox {...args} />,
  args: {
    id: "checkbox-test-default-1",
    value: "a test value",
    $width: "spacing-24",
    $height: "spacing-24",
  },
};

export const Hover: InternalCheckBoxStory = {
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

export const Focus: InternalCheckBoxFocusStory = {
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

export const HoverFocus: InternalCheckBoxHoverFocusStory = {
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
