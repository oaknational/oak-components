import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakQuizCounter } from "./OakQuizCounter";

import { OakFlex } from "@/components/atoms";

const meta: Meta<typeof OakQuizCounter> = {
  component: OakQuizCounter,
  tags: ["autodocs"],

  argTypes: {
    counter: {
      control: {
        type: "number",
      },
    },
  },
  args: {
    counter: 6,
    total: 6,
  },
  decorators: [
    (Story) => (
      <OakFlex $flexDirection="column" $gap="space-between-m">
        <Story />
      </OakFlex>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof OakQuizCounter>;

export const Default: Story = {
  render: (args) => <OakQuizCounter {...args} />,
};

export const MaxQuestions: Story = {
  render: (args) => <OakQuizCounter {...args} />,
  args: {
    counter: 3,
    total: 12,
  },
};
