import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakInfoButton } from "./OakInfoButton";

import { OakBox } from "@/components/atoms";

const meta: Meta<typeof OakInfoButton> = {
  component: OakInfoButton,
  tags: ["autodocs"],
  title: "components/organisms/pupil/OakInfoButton",
  argTypes: {
    hint: {
      control: {
        type: "text",
      },
    },
    tooltipPosition: {
      options: ["top-right", "bottom-left", "top-left", "top-right"],
      control: { type: "select" },
    },
  },
  decorators: [
    (Story) => (
      <OakBox $mt="space-between-xxl">
        <Story />
      </OakBox>
    ),
  ],
  args: {
    hint: "We've put the lessons in order helping you build on what you've learned before so it’s best to start with the first lesson of a unit.",
    tooltipPosition: "top-left",
  },
};
export default meta;

type Story = StoryObj<typeof OakInfoButton>;

export const Default: Story = {
  render: (args) => <OakInfoButton {...args} />,
};
