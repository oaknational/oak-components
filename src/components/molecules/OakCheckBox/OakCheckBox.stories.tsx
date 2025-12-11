import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakCheckBox } from "./OakCheckBox";

import { OakBox, OakFlex } from "@/components/atoms";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";
import { flexArgTypes } from "@/storybook-helpers/flexStyleHelpers";

const meta: Meta<typeof OakCheckBox> = {
  component: OakCheckBox,
  tags: ["autodocs"],
  title: "components/molecules/OakCheckBox",
  argTypes: {
    disabled: {
      control: "boolean",
    },
    checkboxSize: {
      options: ["spacing-24", "spacing-32", "spacing-40"],
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
        "checkedBorderColor",
        "uncheckedBorderColor",
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
    checkboxSize: "spacing-32",
    checkboxBorder: "border-solid-l",
    checkboxBorderRadius: "border-radius-m",
    iconPadding: "spacing-8",
    hoverBorderRadius: "border-radius-l",
    labelGap: "spacing-16",
    labelAlignItems: "flex-start",
    defaultColor: "text-error",
    disabledColor: "text-disabled",
  },
};

export const CustomIcon: Story = {
  render: (args) => <OakCheckBox {...args} />,
  args: {
    id: "checkbox-test-custom",
    value: "a test value",
    iconPadding: "spacing-4",
    checkedBackgroundFill: false,
    checkedIcon: (
      <OakBox
        $width="100%"
        $height="100%"
        $borderRadius="border-radius-xs"
        $background="icon-primary"
      ></OakBox>
    ),
  },
};

export const PreChecked: Story = {
  render: (args) => {
    const { id, ...rest } = args;

    return (
      <OakFlex $gap="spacing-24">
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
