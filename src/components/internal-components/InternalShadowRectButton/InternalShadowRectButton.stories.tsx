import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalShadowRectButton } from "./InternalShadowRectButton";

import { OakIcon, oakIconNames } from "@/components/images-and-icons/OakIcon";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakLI } from "@/components/typography/OakLI";
import { OakUL } from "@/components/typography/OakUL";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { flexArgTypes } from "@/storybook-helpers/flexStyleHelpers";

const controlIconNames = [
  null,
  [...oakIconNames].sort((a, b) => a.localeCompare(b)),
].flat();

const meta: Meta<typeof InternalShadowRectButton> = {
  component: InternalShadowRectButton,
  tags: ["autodocs"],
  title: "internal components/InternalShadowRectButton",
  argTypes: {
    iconName: {
      options: controlIconNames,
    },
    iconLayout: flexArgTypes["$flexDirection"],
    iconGap: flexArgTypes["$gap"],
    isTrailingIcon: {
      control: "boolean",
    },
    isLoading: {
      control: "boolean",
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
    selected: { control: { type: "boolean" } },
  },
  parameters: {
    controls: {
      include: [
        "iconName",
        "iconOverride",
        "iconLayout",
        "iconGap",
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
        "selected",
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof InternalShadowRectButton>;

export const Default: Story = {
  render: (args) => (
    <OakFlex $gap="spacing-24">
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

export const Selected: Story = {
  render: (args) => (
    <InternalShadowRectButton {...args}>
      Selected button{" "}
    </InternalShadowRectButton>
  ),
  args: {
    selected: true,
    iconName: "arrow-right",
    isTrailingIcon: true,
  },
};

export const ButtonWithNoHoverShadow: Story = {
  render: (args) => (
    <OakFlex $gap="spacing-24">
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
    <OakFlex $gap="spacing-24">
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
    <OakUL $width={"spacing-180"}>
      <OakLI $pv={"spacing-12"}>
        <InternalShadowRectButton {...args}>Link 1</InternalShadowRectButton>
      </OakLI>
      <OakLI $pv={"spacing-12"}>
        <InternalShadowRectButton {...args}>Link 2</InternalShadowRectButton>
      </OakLI>
      <OakLI $pv={"spacing-12"}>
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

export const VeritcalLayout: Story = {
  render: (args) => (
    <OakFlex $gap="spacing-24">
      <InternalShadowRectButton {...args}>Button</InternalShadowRectButton>
    </OakFlex>
  ),
  args: {
    iconName: "bell",
    iconLayout: "column",
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

export const CustomIcon: Story = {
  render: (args) => {
    const customIcon = (
      <OakIcon
        iconName="books"
        $pa={"spacing-16"}
        $width={"spacing-92"}
        $height={"spacing-92"}
      />
    );
    return (
      <OakFlex $gap="spacing-24">
        <InternalShadowRectButton {...args} iconOverride={customIcon}>
          Button
        </InternalShadowRectButton>
      </OakFlex>
    );
  },
  args: {
    iconLayout: "column",
    iconGap: "spacing-24",
    font: "heading-5",
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
