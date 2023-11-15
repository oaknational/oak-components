import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakMainButton } from "./OakMainButton";

import { oakIconNames } from "@/components/ui/OakIcon";

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

const meta: Meta<typeof OakMainButton> = {
  component: OakMainButton,
  tags: ["autodocs"],
  title: "components/ui/OakMainButton",
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

type Story = StoryObj<typeof OakMainButton>;

export const Default: Story = {
  render: (args) => <OakMainButton {...args}>Button</OakMainButton>,
  args: {
    $background: "white",
    $color: "black",
    iconName: "arrow-right",
  },
};
