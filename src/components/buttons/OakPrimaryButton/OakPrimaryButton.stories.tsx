import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakPrimaryButton } from "./OakPrimaryButton";

import { oakIconNames } from "@/components/images-and-icons/OakIcon";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";

const controlIconNames = [
  null,
  [...oakIconNames].sort((a, b) => a.localeCompare(b)),
].flat();

const meta: Meta<typeof OakPrimaryButton> = {
  component: OakPrimaryButton,
  tags: ["autodocs"],
  title: "components/Buttons/OakPrimaryButton (deprecated)",
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
    <OakFlex $gap="spacing-24">
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

/**
 * hey
 */
export const LinkStyledAsButton: Story = {
  render: (args) => (
    <OakFlex $gap="spacing-24">
      <OakPrimaryButton {...args}>Primary Link</OakPrimaryButton>
    </OakFlex>
  ),
  args: {
    element: "a",
    href: "/",
    iconName: "arrow-right",
    disabled: true,
  },
};
