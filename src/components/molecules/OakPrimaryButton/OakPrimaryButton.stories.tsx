import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakPrimaryButton } from "./OakPrimaryButton";

import { oakIconNames } from "@/components/atoms/OakIcon";
import { OakFlex } from "@/components/atoms";

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

const meta: Meta<typeof OakPrimaryButton> = {
  component: OakPrimaryButton,
  tags: ["autodocs"],
  title: "components/molecules/OakPrimaryButton",
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
      include: ["iconName", "isTrailingIcon", "isLoading", "type"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakPrimaryButton>;

export const Default: Story = {
  render: (args) => (
    <OakFlex $gap="space-between-m">
      <OakPrimaryButton {...args}>Primary Button</OakPrimaryButton>
      <OakPrimaryButton {...args} disabled>
        Disabled Button
      </OakPrimaryButton>
      <OakPrimaryButton {...args} isLoading>
        Loading Button
      </OakPrimaryButton>
    </OakFlex>
  ),
  args: {
    iconName: "arrow-right",
  },
};

export const LinkStyledAsButton: Story = {
  render: (args) => (
    <OakFlex $gap="space-between-m">
      <OakPrimaryButton {...args}>Primary Link</OakPrimaryButton>
    </OakFlex>
  ),
  args: {
    element: "a",
    href: "/",
    iconName: "arrow-right",
  },
};