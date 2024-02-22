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

/**
 *
 * These components can be used with InternalCheckBoxWrapper which allows for customisable icons
 *
 * Several flavours of checkbox are created here:
 *  - Default
 *  - Hover decorations
 *  - Focus decorations
 *  - Hover + Focus decorations
 *
 * NB. Hover decorations must be wrapped in a box with position relative to allow for the hover effect to work
 *
 * As they are styled components they can be further customised in implementation. Alternatively additional
 * components can be created here.
 *
 *
 * ## Events
 * The following callbacks are available for tracking focus events:
 *
 * ### onChange
 * onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
 *
 * ### onFocus
 *   onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
 *
 * ### onBlur
 *    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
 *
 * ### onHovered
 *  `onHovered?: (id, value, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 *
 *
 */

const meta: Meta<typeof InternalCheckBox> = {
  component: InternalCheckBox,
  tags: ["autodocs"],
  title: "components/atoms/InternalCheckBox",
  argTypes: {
    sizeArgTypes,
    borderArgTypes,
    colorArgTypes,
    spacingArgTypes,
    disabled: {
      control: { type: "boolean" },
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
    $width: "all-spacing-6",
    $height: "all-spacing-6",
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
    $width: "all-spacing-6",
    $height: "all-spacing-6",
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
    $width: "all-spacing-6",
    $height: "all-spacing-6",
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
    $width: "all-spacing-6",
    $height: "all-spacing-6",
  },
};
