import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakLeftAlignedButton } from "./OakLeftAlignedButton";

import { oakIconNames } from "@/components/atoms/OakIcon";
import { OakFlex } from "@/components/atoms";

const controlIconNames = [
  null,
  [...oakIconNames].sort((a, b) => a.localeCompare(b)),
].flat();

const meta: Meta<typeof OakLeftAlignedButton> = {
  component: OakLeftAlignedButton,
  tags: ["autodocs"],
  title: "components/molecules/OakLeftAlignedButton",
  argTypes: {
    iconName: {
      options: controlIconNames,
    },
    isTrailingIcon: {
      control: "boolean",
    },
    rightAlignIcon: {
      control: "boolean",
    },
    isLoading: {
      control: "boolean",
    },
    selected: {
      control: "boolean",
    },
  },
  parameters: {
    controls: {
      include: [
        "iconName",
        "isTrailingIcon",
        "rightAlignIcon",
        "isLoading",
        "type",
        "selected",
      ],
    },
    backgrounds: {
      default: "light",
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakLeftAlignedButton>;

export const Default: Story = {
  render: (args) => (
    <OakFlex
      $background={"bg-decorative1-main"}
      $pa={"spacing-4"}
      $flexDirection="column"
      $gap="spacing-24"
    >
      <OakLeftAlignedButton width="spacing-240" {...args}>
        Left Aligned Button
      </OakLeftAlignedButton>
      <OakLeftAlignedButton width="spacing-240" {...args} selected>
        Selected Button
      </OakLeftAlignedButton>
      <OakLeftAlignedButton width="spacing-240" {...args} disabled>
        Disabled Button
      </OakLeftAlignedButton>
      <OakLeftAlignedButton width="spacing-240" {...args} isLoading>
        Loading Button
      </OakLeftAlignedButton>
    </OakFlex>
  ),
  args: {
    iconName: "chevron-right",
  },
};

export const WithRightAlignedIcon: Story = {
  render: (args) => (
    <OakFlex $flexDirection="column" $gap="spacing-24">
      <OakLeftAlignedButton {...args} width="100%">
        Text left, icon right
      </OakLeftAlignedButton>
      <OakLeftAlignedButton {...args} width="100%" selected>
        Selected with right icon
      </OakLeftAlignedButton>
      <OakLeftAlignedButton {...args} width="100%" disabled>
        Disabled with right icon
      </OakLeftAlignedButton>
    </OakFlex>
  ),
  args: {
    iconName: "chevron-right",
    rightAlignIcon: true,
    isTrailingIcon: true,
  },
};

export const VariousWidths: Story = {
  render: (args) => (
    <OakFlex $flexDirection="column" $gap="spacing-24" $alignItems="flex-start">
      <OakLeftAlignedButton {...args}>Auto width</OakLeftAlignedButton>
      <OakLeftAlignedButton {...args} width="spacing-480">
        Fixed width
      </OakLeftAlignedButton>
      <OakLeftAlignedButton {...args} width="100%">
        Full width
      </OakLeftAlignedButton>
    </OakFlex>
  ),
  args: {
    iconName: "chevron-right",
    isTrailingIcon: true,
  },
};
