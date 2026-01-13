import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalShadowRoundButton } from "./InternalShadowRoundButton";

import { oakIconNames } from "@/components/atoms/OakIcon";
import { OakBox, OakFlex, OakLI, OakUL } from "@/components/atoms";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";

const controlIconNames = [
  null,
  [...oakIconNames].sort((a, b) => a.localeCompare(b)),
].flat();

const meta: Meta<typeof InternalShadowRoundButton> = {
  component: InternalShadowRoundButton,
  tags: ["autodocs"],
  title: "internal components/InternalShadowRoundButton",
  argTypes: {
    iconName: {
      options: controlIconNames,
    },
    isTrailingIcon: {
      control: "boolean",
    },
    isLoading: {
      control: "boolean",
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
  args: {
    defaultIconBackground: "bg-decorative1-main",
    defaultTextColor: "text-primary",
    hoverTextColor: "text-primary",
    disabledIconBackground: "bg-btn-primary-disabled",
    disabledBackground: "bg-btn-secondary-disabled",
    disabledBorderColor: "text-disabled",
    disabledTextColor: "text-disabled",
    disabledIconColor: "icon-main",
    defaultIconColor: "icon-main",
    defaultBackground: "bg-btn-secondary",
    defaultBorderColor: "text-primary",
    hoverBackground: "bg-btn-secondary-hover",
    hoverBorderColor: "text-primary",
    hoverIconBackground: "bg-decorative1-subdued",
    width: "auto",
    iconBackgroundSize: "spacing-32",
    iconSize: "spacing-24",
  },
  render: (args) => (
    <OakFlex $gap="spacing-24">
      <InternalShadowRoundButton {...args}>Button</InternalShadowRoundButton>
      <InternalShadowRoundButton {...args} disabled>
        Disabled Button
      </InternalShadowRoundButton>
      <InternalShadowRoundButton {...args} isLoading>
        Loading Button
      </InternalShadowRoundButton>
    </OakFlex>
  ),
};
export default meta;

type Story = StoryObj<typeof InternalShadowRoundButton>;

export const Default: Story = {
  args: {
    iconName: "lightbulb",
    "aria-label": "Button",
  },
};

export const WithNoIcon: Story = {};

export const LinkStyledAsButton: Story = {
  render: (args) => (
    <OakBox>
      <InternalShadowRoundButton {...args}>Link</InternalShadowRoundButton>
    </OakBox>
  ),
  args: {
    as: "a",
    href: "/",
  },
};

export const ButtonInList: Story = {
  render: (args) => (
    <OakUL $width={"spacing-180"}>
      <OakLI $pv={"spacing-12"}>
        <InternalShadowRoundButton {...args}>Link 1</InternalShadowRoundButton>
      </OakLI>
      <OakLI $pv={"spacing-12"}>
        <InternalShadowRoundButton {...args}>Link 2</InternalShadowRoundButton>
      </OakLI>
      <OakLI $pv={"spacing-12"}>
        <InternalShadowRoundButton {...args}>Link 3</InternalShadowRoundButton>
      </OakLI>
    </OakUL>
  ),
  args: {
    iconName: "arrow-right",
  },
};
