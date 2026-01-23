import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSecondaryButton } from "./OakSecondaryButton";

import { oakIconNames } from "@/components/images-and-icons/OakIcon";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";

const controlIconNames = [
  null,
  [...oakIconNames].sort((a, b) => a.localeCompare(b)),
].flat();

const meta: Meta<typeof OakSecondaryButton> = {
  component: OakSecondaryButton,
  tags: ["autodocs"],
  title: "components/Buttons/OakSecondaryButton",
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
      include: ["iconName", "isTrailingIcon", "isLoading"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakSecondaryButton>;

export const Default: Story = {
  render: (args) => (
    <OakFlex $gap="spacing-24">
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

export const LinkStyledAsButton: Story = {
  render: (args) => (
    <OakFlex $gap="spacing-24">
      <OakSecondaryButton {...args}>Secondary Link</OakSecondaryButton>
    </OakFlex>
  ),
  args: {
    element: "a",
    href: "/",
    iconName: "arrow-right",
  },
};
