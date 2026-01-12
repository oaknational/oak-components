import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSmallPrimaryButton } from "./OakSmallPrimaryButton";

import { oakIconNames } from "@/components/atoms/OakIcon";
import { OakFlex } from "@/components/atoms";

const controlIconNames = [
  null,
  [...oakIconNames].sort((a, b) => a.localeCompare(b)),
].flat();

const meta: Meta<typeof OakSmallPrimaryButton> = {
  component: OakSmallPrimaryButton,
  tags: ["autodocs"],
  title: "components/Buttons/OakSmallPrimaryButton",
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

type Story = StoryObj<typeof OakSmallPrimaryButton>;

export const Default: Story = {
  render: (args) => (
    <OakFlex $gap="spacing-24">
      <OakSmallPrimaryButton {...args}>Primary Button</OakSmallPrimaryButton>
      <OakSmallPrimaryButton {...args} disabled>
        Disabled Button
      </OakSmallPrimaryButton>
      <OakSmallPrimaryButton {...args} isLoading>
        Loading Button
      </OakSmallPrimaryButton>
    </OakFlex>
  ),
  args: {
    iconName: "arrow-right",
  },
};

export const LinkStyledAsButton: Story = {
  render: (args) => (
    <OakFlex $gap="spacing-24">
      <OakSmallPrimaryButton {...args}>Primary Link</OakSmallPrimaryButton>
    </OakFlex>
  ),
  args: {
    element: "a",
    href: "/",
    iconName: "arrow-right",
  },
};
