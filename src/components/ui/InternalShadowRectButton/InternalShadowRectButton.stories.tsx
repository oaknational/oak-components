import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalShadowRectButton } from "./InternalShadowRectButton";

import { oakIconNames } from "@/components/base/OakIcon";
import { OakFlex } from "@/components/base";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";

const controlIconNames = [null, [...oakIconNames].sort()].flat();

/**
 *
 * A styled rectangular button, not intended to be used directly. 
 * Instead used by OakPrimaryButton and OakSecondaryButton.
 * 
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`

 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */

const meta: Meta<typeof InternalShadowRectButton> = {
  component: InternalShadowRectButton,
  tags: ["autodocs"],
  title: "components/ui/InternalShadowRectButton",
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
