import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSecondaryButton } from "./OakSecondaryButton";

import { oakIconNames } from "@/components/ui/OakIcon";
import { OakFlex } from "@/components/base";

/**
 *
 * An unstyled button to be used as a basis for all UI button components.
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`

 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */

const controlIconNames = [...oakIconNames].sort();

const meta: Meta<typeof OakSecondaryButton> = {
  component: OakSecondaryButton,
  tags: ["autodocs"],
  title: "components/ui/OakSecondaryButton",
  argTypes: {
    iconName: {
      options: controlIconNames,
      control: { type: "select" },
    },
    isTrailingIcon: {
      control: { type: "boolean" },
    },
  },
  parameters: {
    controls: {
      include: ["iconName", "isTrailingIcon"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakSecondaryButton>;

export const Default: Story = {
  render: (args) => (
    <OakFlex $gap="space-between-m">
      <OakSecondaryButton {...args}>Button</OakSecondaryButton>
      <OakSecondaryButton {...args}>Button</OakSecondaryButton>
    </OakFlex>
  ),
  args: {
    $background: "white",
    $color: "black",
    iconName: "arrow-right",
  },
};
