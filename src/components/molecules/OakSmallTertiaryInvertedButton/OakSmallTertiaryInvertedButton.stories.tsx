import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSmallTertiaryInvertedButton } from "./OakSmallTertiaryInvertedButton";

import { oakIconNames } from "@/components/atoms/OakIcon";
import { OakFlex } from "@/components/atoms";

const controlIconNames = [
  null,
  [...oakIconNames].sort((a, b) => a.localeCompare(b)),
].flat();

const meta: Meta<typeof OakSmallTertiaryInvertedButton> = {
  component: OakSmallTertiaryInvertedButton,
  tags: ["autodocs"],
  title:
    "components/molecules/OakButton (🔀 to be created)/OakSmallTertiaryInvertedButton",
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
    backgrounds: {
      default: "light",
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakSmallTertiaryInvertedButton>;

export const Default: Story = {
  render: (args) => (
    <OakFlex $gap="spacing-24">
      <OakSmallTertiaryInvertedButton {...args}>
        Tertiary Inverted Button
      </OakSmallTertiaryInvertedButton>
      <OakSmallTertiaryInvertedButton {...args} disabled>
        Disabled Inverted Button
      </OakSmallTertiaryInvertedButton>
      <OakSmallTertiaryInvertedButton {...args} isLoading>
        Loading Inverted Button
      </OakSmallTertiaryInvertedButton>
    </OakFlex>
  ),
  args: {
    iconName: "arrow-right",
  },
};

export const LinkStyledAsButton: Story = {
  render: (args) => (
    <OakFlex $gap="spacing-24">
      <OakSmallTertiaryInvertedButton {...args}>
        Primary Inverted Link
      </OakSmallTertiaryInvertedButton>
    </OakFlex>
  ),
  args: {
    element: "a",
    href: "/",
    iconName: "arrow-right",
  },
};
