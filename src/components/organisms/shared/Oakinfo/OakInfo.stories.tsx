import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakInfo } from "./OakInfo";

import { OakBox } from "@/components/atoms";

const meta: Meta<typeof OakInfo> = {
  component: OakInfo,
  tags: ["autodocs"],

  argTypes: {
    hint: {
      control: {
        type: "text",
      },
    },
    tooltipPosition: {
      options: ["top-right", "bottom-left", "top-left", "top-right"],
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

type Story = StoryObj<typeof OakInfo>;

export const Default: Story = {
  render: (args) => <OakInfo {...args} />,
};
