import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalShadowRectButton } from "./InternalShadowRectButton";

import { oakIconNames } from "@/components/atoms/OakIcon";
import { OakFlex, OakLI, OakUL } from "@/components/atoms";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";

const controlIconNames = [null, [...oakIconNames].sort()].flat();

const meta: Meta<typeof InternalShadowRectButton> = {
  component: InternalShadowRectButton,
  tags: ["autodocs"],
  title: "components/molecules/InternalShadowRectButton",
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
    defaultBackground: colorArgTypes.$color,
    defaultTextColor: colorArgTypes.$color,
    defaultBorderColor: colorArgTypes.$color,
    hoverBackground: colorArgTypes.$color,
    hoverBorderColor: colorArgTypes.$color,
    hoverTextColor: colorArgTypes.$color,
    disabledBackground: colorArgTypes.$color,
    disabledBorderColor: colorArgTypes.$color,
    disabledTextColor: colorArgTypes.$color,
    width: sizeArgTypes["$width"],
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
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof InternalShadowRectButton>;

export const Default: Story = {
  render: (args) => (
    <OakFlex $gap="space-between-m">
      <InternalShadowRectButton {...args}>Button</InternalShadowRectButton>
      <InternalShadowRectButton {...args} disabled>
        Disabled Button
      </InternalShadowRectButton>
      <InternalShadowRectButton {...args} isLoading>
        Loading Button
      </InternalShadowRectButton>
    </OakFlex>
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

export const ButtonWithNoHoverShadow: Story = {
  render: (args) => (
    <OakFlex $gap="space-between-m">
      <InternalShadowRectButton {...args}>
        Button with no hover shadow
      </InternalShadowRectButton>
    </OakFlex>
  ),
  args: {
    hoverShadow: null,
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

export const LinkStyledAsButton: Story = {
  render: (args) => (
    <OakFlex $gap="space-between-m">
      <InternalShadowRectButton {...args}>Link</InternalShadowRectButton>
    </OakFlex>
  ),
  args: {
    element: "a",
    href: "/",
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

export const ButtonInList: Story = {
  render: (args) => (
    <OakUL $width={"all-spacing-18"}>
      <OakLI $pv={"inner-padding-s"}>
        <InternalShadowRectButton {...args}>Link 1</InternalShadowRectButton>
      </OakLI>
      <OakLI $pv={"inner-padding-s"}>
        <InternalShadowRectButton {...args}>Link 2</InternalShadowRectButton>
      </OakLI>
      <OakLI $pv={"inner-padding-s"}>
        <InternalShadowRectButton {...args}>Link 3</InternalShadowRectButton>
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
