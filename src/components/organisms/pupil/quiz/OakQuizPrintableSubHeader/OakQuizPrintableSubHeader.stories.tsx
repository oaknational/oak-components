import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakQuizPrintableSubHeader } from "./OakQuizPrintableSubHeader";

const meta: Meta<typeof OakQuizPrintableSubHeader> = {
  component: OakQuizPrintableSubHeader,
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

type Story = StoryObj<typeof OakQuizPrintableSubHeader>;

export const Default: Story = {
  render: (args) => <OakQuizPrintableSubHeader {...args} />,
  args: {},
};
