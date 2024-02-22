import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakCheckBox } from "./OakCheckBox";

import { OakBox, OakFlex } from "@/components/atoms";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";
import { flexArgTypes } from "@/storybook-helpers/flexStyleHelpers";

/**
 *
 * Default checkbox which can be extended to create specialised checkboxes.
 * - if provided, displayValue is used to display a different value to the value prop.
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

const meta: Meta<typeof OakCheckBox> = {
  component: OakCheckBox,
  tags: ["autodocs"],
  title: "components/molecules/OakCheckBox",
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
        "value",
        "displayValue",
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
        "decor",
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakCheckBox>;

export const Default: Story = {
  render: (args) => <OakCheckBox {...args} />,
  args: {
    id: "checkbox-test-default",
    value: "a test value",
  },
};

export const WithStyling: Story = {
  render: (args) => <OakCheckBox {...args} />,
  args: {
    id: "checkbox-test-with-styling",
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

export const CustomIcon: Story = {
  render: (args) => <OakCheckBox {...args} />,
  args: {
    id: "checkbox-test-custom",
    value: "a test value",
    iconPadding: "inner-padding-ssx",
    checkedBackgroundFill: false,
    checkedIcon: (
      <OakBox
        $width="100%"
        $height="100%"
        $borderRadius="border-radius-xs"
        $background="black"
      ></OakBox>
    ),
  },
};

export const PreChecked: Story = {
  render: (args) => {
    const { id, ...rest } = args;

    return (
      <OakFlex $gap="space-between-m">
        <OakCheckBox
          id="checkbox-test-prechecked-1"
          {...rest}
          value="pre-checked and not disabled"
        />
        <OakCheckBox
          id="checkbox-test-prechecked-2"
          {...rest}
          value="pre-checked and disabled"
          disabled
        />
      </OakFlex>
    );
  },
  args: {
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
