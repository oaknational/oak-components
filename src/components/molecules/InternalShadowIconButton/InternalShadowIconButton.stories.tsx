import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalShadowIconButton } from "./InternalShadowIconButton";

import { oakIconNames } from "@/components/atoms/OakIcon";
import { OakBox, OakFlex, OakLI, OakUL } from "@/components/atoms";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";

const controlIconNames = [
  null,
  [...oakIconNames].sort((a, b) => a.localeCompare(b)),
].flat();

const meta: Meta<typeof InternalShadowIconButton> = {
  component: InternalShadowIconButton,
  tags: ["autodocs"],
  title: "components/molecules/InternalShadowIconButton",
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
        "defaultTextColor",
        "hoverTextColor",
        "hoverIconColor",
        "disabledTextColor",
      ],
    },
  },
  args: {
    defaultTextColor: "text-primary",
    hoverTextColor: "text-primary",
    disabledTextColor: "text-disabled",
    disabledIconColor: "icon-disabled",
    defaultIconColor: "bg-btn-primary",
  },
  render: (args) => (
    <OakFlex $gap="spacing-24">
      <InternalShadowIconButton {...args}>Button</InternalShadowIconButton>
      <InternalShadowIconButton {...args} disabled>
        Disabled Button
      </InternalShadowIconButton>
      <InternalShadowIconButton {...args} isLoading>
        Loading Button
      </InternalShadowIconButton>
    </OakFlex>
  ),
};
export default meta;

type Story = StoryObj<typeof InternalShadowIconButton>;

export const Default: Story = {
  args: {
    iconName: "chevron-right",
    "aria-label": "Button",
  },
};

export const WithNoIcon: Story = {};

export const LinkStyledAsButton: Story = {
  render: (args) => (
    <OakBox>
      <InternalShadowIconButton {...args}>Link</InternalShadowIconButton>
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
        <InternalShadowIconButton {...args}>Link 1</InternalShadowIconButton>
      </OakLI>
      <OakLI $pv={"spacing-12"}>
        <InternalShadowIconButton {...args}>Link 2</InternalShadowIconButton>
      </OakLI>
      <OakLI $pv={"spacing-12"}>
        <InternalShadowIconButton {...args}>Link 3</InternalShadowIconButton>
      </OakLI>
    </OakUL>
  ),
  args: {
    iconName: "arrow-right",
  },
};
