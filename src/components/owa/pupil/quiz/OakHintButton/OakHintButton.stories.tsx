import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakHintButton } from "./OakHintButton";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";

const meta: Meta<typeof OakHintButton> = {
  tags: ["autodocs"],
  title: "OWA/pupil/OakHintButton",
  component: OakHintButton,

  argTypes: {
    isOpen: {
      control: "boolean",
    },
  },
  parameters: {
    controls: {
      include: ["isOpen"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakHintButton>;

export const Default: Story = {
  render: (args) => (
    <OakFlex $gap="spacing-24">
      <OakHintButton {...args} />
      <OakHintButton {...args} disabled />
      <OakHintButton {...args} isLoading />
    </OakFlex>
  ),
  args: {
    isOpen: false,
  },
};
