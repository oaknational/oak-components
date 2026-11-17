import { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";

import { OakCloseButton } from "./OakCloseButton";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { oakAllSpacingTokens } from "@/styles/theme/spacing";

const meta: Meta<typeof OakCloseButton> = {
  component: OakCloseButton,
  tags: ["autodocs"],
  title: "components/Buttons/OakCloseButton",
  argTypes: {
    onClose: {
      description: "Function to be called when a button pressed",
      action: "clicked",
    },
    size: {
      description: "Size of the button and its icon",
      control: "select",
      options: Object.keys(oakAllSpacingTokens),
    },
    variant: {
      description: "Use `inverted` on dark backgrounds",
      control: "radio",
      options: ["default", "inverted"],
    },
  },
  parameters: {
    controls: {
      include: ["onClose", "size", "variant"],
    },
  },
  args: {
    onClose: () => {},
  },
  render: (args) => {
    return <OakCloseButton {...args} />;
  },
};

export default meta;

type Story = StoryObj<typeof OakCloseButton>;

export const Default: Story = {};

export const Inverted: Story = {
  args: { variant: "inverted" },
  render: (args) => (
    <OakFlex $background="bg-inverted" $pa="spacing-16" $width="fit-content">
      <OakCloseButton {...args} />
    </OakFlex>
  ),
};
