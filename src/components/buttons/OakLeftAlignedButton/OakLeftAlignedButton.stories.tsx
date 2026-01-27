import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakLeftAlignedButton } from "./OakLeftAlignedButton";

import { oakIconNames } from "@/components/images-and-icons/OakIcon";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";

const controlIconNames = [
  null,
  [...oakIconNames].sort((a, b) => a.localeCompare(b)),
].flat();

const meta: Meta<typeof OakLeftAlignedButton> = {
  component: OakLeftAlignedButton,
  tags: ["autodocs"],
  title: "components/Buttons/OakLeftAlignedButton",
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
    <OakFlex $pa={"spacing-4"} $flexDirection="column" $gap="spacing-24">
      <OakLeftAlignedButton width="spacing-240" {...args}>
        Button
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

export const Alignment: Story = {
  render: (args) => (
    <OakFlex $flexDirection="column" $gap="spacing-24">
      <OakLeftAlignedButton {...args} width="100%">
        Default
      </OakLeftAlignedButton>
      <OakLeftAlignedButton {...args} isTrailingIcon width="100%">
        Trailing Icon
      </OakLeftAlignedButton>
      <OakLeftAlignedButton {...args} rightAlignIcon width="100%">
        Right aligned icon
      </OakLeftAlignedButton>
    </OakFlex>
  ),
  args: {
    iconName: "chevron-right",
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
