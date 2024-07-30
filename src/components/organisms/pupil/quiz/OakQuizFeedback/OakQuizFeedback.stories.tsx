import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakQuizFeedback } from "./OakQuizFeedback";

import { OakFlex } from "@/components/atoms";

const meta: Meta<typeof OakQuizFeedback> = {
  component: OakQuizFeedback,
  tags: ["autodocs"],

  argTypes: {
    answerFeedback: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    feedback: "correct",
    answerFeedback: "Well done!",
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

type Story = StoryObj<typeof OakQuizFeedback>;

export const Default: Story = {
  render: (args) => <OakQuizFeedback {...args} />,
};

export const AllFeedback: Story = {
  render: (args) => (
    <>
      <OakQuizFeedback
        {...args}
        feedback="correct"
        answerFeedback="Well done!"
      />
      <OakQuizFeedback
        {...args}
        feedback="incorrect"
        answerFeedback="Correct answer: Flying Eye Books, Flying Eye, flying eye books, Flying eye books, FLYING EYE BOOKS"
      />
      <OakQuizFeedback
        {...args}
        feedback="partially-correct"
        answerFeedback="Correct answers: front cover, text title, blurb"
      />
    </>
  ),
  args: {
    answerFeedback: "Good work!",
  },
};

export const WithNoAnswerFeedback: Story = {
  args: {
    feedback: "partially-correct",
    answerFeedback: undefined,
  },
};
