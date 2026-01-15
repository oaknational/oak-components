import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSmallSecondaryButton } from "./OakSmallSecondaryButton";

import { oakIconNames } from "@/components/atoms/OakIcon";
import { OakFlex } from "@/components/atoms";

const controlIconNames = [
  null,
  [...oakIconNames].sort((a, b) => a.localeCompare(b)),
].flat();

const meta: Meta<typeof OakSmallSecondaryButton> = {
  component: OakSmallSecondaryButton,
  tags: ["autodocs"],
  title:
    "components/molecules/OakButton (🔀 to be created)/OakSmallSecondaryButton",
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

type Story = StoryObj<typeof OakSmallSecondaryButton>;

export const Default: Story = {
  render: (args) => (
    <OakFlex $gap="spacing-24">
      <OakSmallSecondaryButton {...args}>
        Secondary Button
      </OakSmallSecondaryButton>
      <OakSmallSecondaryButton {...args} disabled>
        Disabled Button
      </OakSmallSecondaryButton>
      <OakSmallSecondaryButton {...args} isLoading>
        Loading Button
      </OakSmallSecondaryButton>
    </OakFlex>
  ),
  args: {
    iconName: "arrow-right",
  },
};

export const LinkStyledAsButton: Story = {
  render: (args) => (
    <OakFlex $gap="spacing-24">
      <OakSmallSecondaryButton {...args}>
        Secondary Link
      </OakSmallSecondaryButton>
    </OakFlex>
  ),
  args: {
    element: "a",
    href: "/",
    iconName: "arrow-right",
  },
};
