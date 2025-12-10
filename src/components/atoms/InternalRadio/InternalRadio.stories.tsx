import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import {
  InternalRadio,
  InternalRadioHover,
  InternalRadioFocus,
  InternalRadioHoverFocus,
  internalRadioDefaults,
} from "./InternalRadio";

import { OakBox } from "@/components/atoms/OakBox";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { buildArgTypes } from "@/storybook-helpers/buildArgTypes";

const meta: Meta<typeof InternalRadio> = {
  component: InternalRadio,
  tags: ["autodocs"],
  title: "components/atoms/InternalRadio",
  argTypes: {
    ...buildArgTypes(
      [sizeArgTypes, borderArgTypes, colorArgTypes, spacingArgTypes],
      internalRadioDefaults,
    ),
    disabled: {
      control: "boolean",
    },
    $checkedBackground: {
      ...colorArgTypes.$color,
      table: {
        defaultValue: { summary: internalRadioDefaults.$checkedBackground },
      },
    },
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
  | typeof InternalRadio
  | typeof InternalRadioHover
  | typeof InternalRadioFocus
  | typeof InternalRadioHoverFocus
>;

export const Default: Story = {
  render: (args) => <InternalRadio {...args} />,
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
      <InternalRadioHover {...args} />
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
      <InternalRadioFocus {...args} />
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
      <InternalRadioHoverFocus {...args} />
    </OakBox>
  ),
  args: {
    id: "checkbox-test-default-4",
    value: "a test value",
    $width: "spacing-24",
    $height: "spacing-24",
  },
};
