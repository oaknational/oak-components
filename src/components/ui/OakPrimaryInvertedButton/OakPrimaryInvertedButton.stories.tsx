import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakPrimaryInvertedButton } from "./OakPrimaryInvertedButton";

import { oakIconNames } from "@/components/base/OakIcon";
import { OakFlex } from "@/components/base";

const controlIconNames = [null, [...oakIconNames].sort()].flat();

const meta: Meta<typeof OakPrimaryInvertedButton> = {
  component: OakPrimaryInvertedButton,
  tags: ["autodocs"],
  title: "components/ui/OakPrimaryInvertedButton",
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
    backgrounds: {
      default: "light",
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakPrimaryInvertedButton>;

export const Default: Story = {
  render: (args) => (
    <OakFlex $gap="space-between-m">
      <OakPrimaryInvertedButton {...args}>
        Primary Inverted Button
      </OakPrimaryInvertedButton>
      <OakPrimaryInvertedButton {...args} disabled>
        Disabled Inverted Button
      </OakPrimaryInvertedButton>
      <OakPrimaryInvertedButton {...args} isLoading>
        Loading Inverted Button
      </OakPrimaryInvertedButton>
    </OakFlex>
  ),
  args: {
    iconName: "arrow-right",
  },
};

export const LinkStyledAsButton: Story = {
  render: (args) => (
    <OakFlex $gap="space-between-m">
      <OakPrimaryInvertedButton {...args}>
        Primary Inverted Link
      </OakPrimaryInvertedButton>
    </OakFlex>
  ),
  args: {
    element: "a",
    href: "/",
    iconName: "arrow-right",
  },
};
