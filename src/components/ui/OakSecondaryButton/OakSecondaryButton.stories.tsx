import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSecondaryButton } from "./OakSecondaryButton";

import { oakIconNames } from "@/components/base/OakIcon";
import { OakFlex } from "@/components/base";

const controlIconNames = [null, [...oakIconNames].sort()].flat();

/**
 *
 * A specific implementation of InternalRectButton
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
    isLoading: {
      control: { type: "boolean" },
    },
  },
  parameters: {
    controls: {
      include: ["iconName", "isTrailingIcon", "isLoading"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakSecondaryButton>;

export const Default: Story = {
  render: (args) => (
    <OakFlex $gap="space-between-m">
      <OakSecondaryButton {...args}>Secondary Button</OakSecondaryButton>
      <OakSecondaryButton {...args} disabled>
        Disabled Button
      </OakSecondaryButton>
      <OakSecondaryButton {...args} isLoading>
        Loading Button
      </OakSecondaryButton>
    </OakFlex>
  ),
  args: {
    iconName: "arrow-right",
  },
};
