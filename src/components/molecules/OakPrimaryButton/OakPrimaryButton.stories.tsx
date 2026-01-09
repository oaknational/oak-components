import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakPrimaryButton } from "./OakPrimaryButton";

import { oakIconNames } from "@/components/atoms/OakIcon";
import { OakFlex } from "@/components/atoms";

const controlIconNames = [
  null,
  [...oakIconNames].sort((a, b) => a.localeCompare(b)),
].flat();

const meta: Meta<typeof OakPrimaryButton> = {
  component: OakPrimaryButton,
  tags: ["autodocs"],
  title: "components/buttons/OakButton (🔀 to be created)/OakPrimaryButton",
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
  },
};
