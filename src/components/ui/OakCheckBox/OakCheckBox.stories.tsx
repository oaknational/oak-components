import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakCheckbox } from "./OakCheckBox";

import { OakFlex } from "@/components/base";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";
import { flexArgTypes } from "@/storybook-helpers/flexStyleHelpers";

/**
 *
 * Default checkbox which can be extended to create specialised checkboxes.
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

const meta: Meta<typeof OakCheckbox> = {
  component: OakCheckbox,
  tags: ["autodocs"],
  title: "components/ui/OakCheckbox",
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    checkboxSize: {
      options: ["all-spacing-6", "all-spacing-7", "all-spacing-8"],
      control: { type: "select" },
    },
    labelGap: flexArgTypes.$gap,
    labelAlignItems: flexArgTypes.$alignItems,
    checkboxBorder: borderArgTypes.$ba,
    checkboxBorderRadius: borderArgTypes.$borderRadius,
    iconPadding: spacingArgTypes.$pa,
    defaultColor: colorArgTypes.$color,
    disabledColor: colorArgTypes.$color,
  },
  parameters: {
    controls: {
      include: [
        "defaultColor",
        "disabledColor",
        "checkboxSize",
        "checkboxBorder",
        "checkboxBorderRadius",
        "hoverBorderRadius",
        "iconPadding",
        "labelGap",
        "labelAlignItems",
        "disabled",
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakCheckbox>;

export const Default: Story = {
  render: (args) => <OakCheckbox {...args} />,
  args: {
    id: "checkbox-test",
    value: "a test value",
  },
};

export const WithStyling: Story = {
  render: (args) => <OakCheckbox {...args} />,
  args: {
    id: "checkbox-test",
    value: "a test value",
    checkboxSize: "all-spacing-7",
    checkboxBorder: "border-solid-l",
    checkboxBorderRadius: "border-radius-m",
    iconPadding: "inner-padding-xs",
    hoverBorderRadius: "border-radius-l",
    labelGap: "space-between-s",
    labelAlignItems: "flex-start",
    defaultColor: "red",
    disabledColor: "red50",
  },
};

export const PreChecked: Story = {
  render: (args) => (
    <OakFlex $gap="space-between-m">
      <OakCheckbox {...args} value="pre-checked and not disabled" />
      <OakCheckbox {...args} value="pre-checked and disabled" disabled />
    </OakFlex>
  ),
  args: {
    id: "checkbox-test",
    defaultChecked: true,
  },
  parameters: {
    controls: {
      include: [
        "defaultColor",
        "disabledColor",
        "checkboxBorder",
        "checkboxBorderRadius",
        "checkboxSize",
        "iconPadding",
        "labelGap",
        "labelAlignItems",
      ],
    },
  },
};
