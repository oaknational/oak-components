import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalRoundButton } from "./InternalRoundButton";

import { oakIconNames } from "@/components/base/OakIcon";
import { OakFlex } from "@/components/base";
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

const meta: Meta<typeof InternalRoundButton> = {
  component: InternalRoundButton,
  tags: ["autodocs"],
  title: "components/ui/InternalRoundButton",
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
    defaultTextColor: colorArgTypes.$color,
    hoverTextColor: colorArgTypes.$color,
    disabledIconBackground: colorArgTypes.$color,
    disabledTextColor: colorArgTypes.$color,
    width: sizeArgTypes["$width"],
    disabledIconColor: colorArgTypes.$color,
    defaultIconColor: colorArgTypes.$color,
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
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof InternalRoundButton>;

export const Default: Story = {
  render: (args) => (
    <OakFlex $gap="space-between-m">
      <InternalRoundButton {...args}>
        Button triuhit jnkjhnjiknij njoijnoi
      </InternalRoundButton>
      <InternalRoundButton {...args} disabled>
        Disabled Button
      </InternalRoundButton>
      <InternalRoundButton {...args} isLoading>
        Loading Button
      </InternalRoundButton>
    </OakFlex>
  ),
  args: {
    iconName: "lightbulb",
    defaultIconBackground: "lemon",
    defaultTextColor: "text-primary",
    hoverTextColor: "text-primary",
    disabledIconBackground: "bg-btn-primary-disabled",
    disabledTextColor: "text-disabled",
    disabledIconColor: "white",
  },
};
