import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakPrimaryInvertedButton } from "./OakPrimaryInvertedButton";

import { oakIconNames } from "@/components/images-and-icons/OakIcon";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";

const controlIconNames = [
  null,
  [...oakIconNames].sort((a, b) => a.localeCompare(b)),
].flat();

const meta: Meta<typeof OakPrimaryInvertedButton> = {
  component: OakPrimaryInvertedButton,
  tags: ["autodocs"],
  title: "components/Buttons/OakPrimaryInvertedButton",
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

type Story = StoryObj<typeof OakPrimaryInvertedButton>;

export const Default: Story = {
  render: (args) => (
    <OakFlex $gap="spacing-24">
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
    <OakFlex $gap="spacing-24">
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
