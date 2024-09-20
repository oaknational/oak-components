import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakPrintableQuizHeader } from "./OakPrintableQuizHeader";

const meta: Meta<typeof OakPrintableQuizHeader> = {
  component: OakPrintableQuizHeader,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    controls: {
      include: ["title"],
    },
  },
  args: {
    title: "Quiz title",
    grade: 4,
    numQuestions: 10,
    attempts: 2,
  },
};

export default meta;

type Story = StoryObj<typeof OakPrintableQuizHeader>;

export const Default: Story = {
  render: (args) => <OakPrintableQuizHeader {...args} />,
  args: {},
};
