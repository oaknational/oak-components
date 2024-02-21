import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalShadowRoundButton } from "./InternalShadowRoundButton";

import { oakIconNames } from "@/components/atoms/OakIcon";
import { OakBox, OakFlex, OakLI, OakUL } from "@/components/atoms";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";

const controlIconNames = [null, [...oakIconNames].sort()].flat();

/**
 *
 * A styled button with round icons, not intended to be used directly. 
 * Instead used by OakTertiaryButton and OakHintButton.
 * 
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`

 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */

const meta: Meta<typeof InternalShadowRoundButton> = {
  component: InternalShadowRoundButton,
  tags: ["autodocs"],
  title: "components/molecules/InternalShadowRoundButton",
  argTypes: {
    iconName: {
      options: controlIconNames,
      control: { type: "select" },
    },
    isTrailingIcon: {
      control: { type: "boolean" },
    },
    isLoading: {
      control: { type: "boolean" },
    },
    ...borderArgTypes,
    defaultIconBackground: colorArgTypes.$color,
    disabledIconBackground: colorArgTypes.$color,
    hoverIconBackground: colorArgTypes.$color,
    defaultTextColor: colorArgTypes.$color,
    hoverTextColor: colorArgTypes.$color,
    disabledTextColor: colorArgTypes.$color,
    width: sizeArgTypes["$width"],
    disabledIconColor: colorArgTypes.$color,
    defaultIconColor: colorArgTypes.$color,
    iconBackgroundSize: sizeArgTypes["$width"],
    iconSize: sizeArgTypes["$width"],
  },
  parameters: {
    controls: {
      include: [
        "iconName",
        "isTrailingIcon",
        "isLoading",
        "defaultBackground",
        "defaultTextColor",
        "defaultBorderColor",
        "hoverTextColor",
        "hoverBackground",
        "hoverBorderColor",
        "disabledBackground",
        "disabledBorderColor",
        "disabledTextColor",
        "width",
        "type",
        "disabledIconColor",
        "defaultIconColor",
        "iconBackgroundSize",
        "iconSize",
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof InternalShadowRoundButton>;

export const Default: Story = {
  render: (args) => (
    <OakFlex $gap="space-between-m">
      <InternalShadowRoundButton {...args}>Button</InternalShadowRoundButton>
      <InternalShadowRoundButton {...args} disabled>
        Disabled Button
      </InternalShadowRoundButton>
      <InternalShadowRoundButton {...args} isLoading>
        Loading Button
      </InternalShadowRoundButton>
    </OakFlex>
  ),
  args: {
    iconName: "lightbulb",
    defaultIconBackground: "mint",
    defaultTextColor: "text-primary",
    hoverTextColor: "text-primary",
    disabledIconBackground: "bg-btn-primary-disabled",
    disabledTextColor: "text-disabled",
    disabledIconColor: "white",
    defaultIconColor: "white",
    hoverIconBackground: "mint50",
    width: "auto",
    iconBackgroundSize: "all-spacing-7",
    iconSize: "all-spacing-6",
  },
};

export const LinkStyledAsButton: Story = {
  render: (args) => (
    <OakBox>
      <InternalShadowRoundButton {...args}>Link</InternalShadowRoundButton>
    </OakBox>
  ),
  args: {
    as: "a",
    href: "/",
    iconName: "lightbulb",
    defaultIconBackground: "mint",
    defaultTextColor: "text-primary",
    hoverTextColor: "text-primary",
    disabledIconBackground: "bg-btn-primary-disabled",
    disabledTextColor: "text-disabled",
    disabledIconColor: "white",
    defaultIconColor: "white",
    hoverIconBackground: "mint50",
    width: "auto",
    iconBackgroundSize: "all-spacing-7",
    iconSize: "all-spacing-6",
  },
};

export const ButtonInList: Story = {
  render: (args) => (
    <OakUL $width={"all-spacing-18"}>
      <OakLI $pv={"inner-padding-s"}>
        <InternalShadowRoundButton {...args}>Link 1</InternalShadowRoundButton>
      </OakLI>
      <OakLI $pv={"inner-padding-s"}>
        <InternalShadowRoundButton {...args}>Link 2</InternalShadowRoundButton>
      </OakLI>
      <OakLI $pv={"inner-padding-s"}>
        <InternalShadowRoundButton {...args}>Link 3</InternalShadowRoundButton>
      </OakLI>
    </OakUL>
  ),
  args: {
    iconName: "arrow-right",
    defaultBackground: "bg-btn-secondary",
    defaultTextColor: "text-primary",
    defaultBorderColor: "text-primary",
    hoverBackground: "bg-btn-secondary-hover",
    hoverTextColor: "text-primary",
    hoverBorderColor: "text-primary",
    disabledBackground: "bg-btn-secondary-disabled",
    disabledBorderColor: "text-disabled",
    disabledTextColor: "text-disabled",
  },
};
