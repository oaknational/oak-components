import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSmallPrimaryInvertedButton } from "./OakSmallPrimaryInvertedButton";

import { oakIconNames } from "@/components/atoms/OakIcon";
import { OakFlex } from "@/components/atoms";

const controlIconNames = [
  null,
  [...oakIconNames].sort((a, b) => a.localeCompare(b)),
].flat();

const meta: Meta<typeof OakSmallPrimaryInvertedButton> = {
  component: OakSmallPrimaryInvertedButton,
  tags: ["autodocs"],
  title: "components/molecules/OakSmallPrimaryInvertedButton",
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
    backgrounds: {
      default: "light",
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakSmallPrimaryInvertedButton>;

export const Default: Story = {
  render: (args) => (
    <OakFlex $gap="spacing-24">
      <OakSmallPrimaryInvertedButton {...args}>
        Primary Inverted Button
      </OakSmallPrimaryInvertedButton>
      <OakSmallPrimaryInvertedButton {...args} disabled>
        Disabled Inverted Button
      </OakSmallPrimaryInvertedButton>
      <OakSmallPrimaryInvertedButton {...args} isLoading>
        Loading Inverted Button
      </OakSmallPrimaryInvertedButton>
    </OakFlex>
  ),
  args: {
    iconName: "arrow-right",
  },
};

export const LinkStyledAsButton: Story = {
  render: (args) => (
    <OakFlex $gap="spacing-24">
      <OakSmallPrimaryInvertedButton {...args}>
        Primary Inverted Link
      </OakSmallPrimaryInvertedButton>
    </OakFlex>
  ),
  args: {
    element: "a",
    href: "/",
    iconName: "arrow-right",
  },
};
