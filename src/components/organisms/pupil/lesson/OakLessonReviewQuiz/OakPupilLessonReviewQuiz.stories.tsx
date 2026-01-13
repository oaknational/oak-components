import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakLessonReviewQuiz } from "./OakPupilLessonReviewQuiz";

import { OakFlex } from "@/components/atoms";

const meta: Meta<typeof OakLessonReviewQuiz> = {
  component: OakLessonReviewQuiz,
  tags: ["autodocs"],
  title: "OWA (❌ to be moved out)/pupil/lesson/OakLessonReviewQuiz",
  argTypes: {
    numQuestions: {
      control: {
        type: "number",
      },
    },
    grade: {
      control: {
        type: "number",
      },
    },
  },
  args: {
    lessonSectionName: "starter-quiz",
    completed: false,
    grade: 4,
    numQuestions: 6,
    resultsSlot: <div>Results Slot</div>,
  },
  decorators: [
    (Story) => {
      return (
        <OakFlex $flexDirection="column" $gap="spacing-24">
          {Story()}
        </OakFlex>
      );
    },
  ],
  parameters: {
    controls: {
      include: ["completed", "lessonSectionName", "grade", "numQuestions"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakLessonReviewQuiz>;

export const Default: Story = {
  render: (args) => <OakLessonReviewQuiz {...args} />,
};
