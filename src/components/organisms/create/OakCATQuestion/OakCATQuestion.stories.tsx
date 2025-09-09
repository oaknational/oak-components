import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakCATQuestion } from "./OakCATQuestion";

const meta: Meta<typeof OakCATQuestion> = {
  component: OakCATQuestion,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    controls: {
      include: [
        "questionNumber",
        "status",
        "availableQuestionTypes",
        "chosenQuestionType",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakCATQuestion>;

export const Default: Story = {
  render: (args) => <OakCATQuestion {...args} />,
  args: {
    questionNumber: 1,
    status: "draft",
    availableQuestionTypes: [
      "multiple-choice",
      "short-answer",
      "match",
      "order",
    ],
    chosenQuestionType: "multiple-choice",
    onQuestionTypeChange: (type: string) => {
      console.log(type);
    },
    questionTextInput: <div>Question Text Input</div>,
    hintInput: <div>Hint Input</div>,
    feedbackInput: <div>Feedback Input</div>,
    answersSection: <div>Answers Section</div>,
  },
};
