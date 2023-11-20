import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalRectButton } from "./InternalRectButton";

import { oakIconNames } from "@/components/ui/OakIcon";
import { OakFlex } from "@/components/base";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";

/**
 *
 * An Styled button used by the OakPrimaryButton and OakSecondaryButton components.
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */

const controlIconNames = [...oakIconNames].sort();

const meta: Meta<typeof InternalRectButton> = {
  component: InternalRectButton,
  tags: ["autodocs"],
  title: "components/ui/InternalRectButton",
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
  },
  parameters: {
    controls: {
      include: [
        "iconName",
        "isTrailingIcon",
        "isLoading",
        "$ba",
        "defaultBackground",
        "defaultTextColor",
        "defaultBorderColor",
        "hoverTextColor",
        "hoverBackground",
        "hoverBorderColor",
        "disabledBackground",
        "disabledBorderColor",
        "disabledTextColor",
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof InternalRectButton>;

export const Default: Story = {
  render: (args) => (
    <OakFlex $gap="space-between-m">
      <InternalRectButton {...args}>Button</InternalRectButton>
      <InternalRectButton {...args} disabled>
        Disabled Button
      </InternalRectButton>
      <InternalRectButton {...args} isLoading>
        Loading Button
      </InternalRectButton>
    </OakFlex>
  ),
  args: {
    $background: "white",
    $color: "black",
    $ba: "border-solid-m",
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
