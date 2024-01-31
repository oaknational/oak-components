import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakLessonReviewItem } from "./OakPupilLessonReviewItem";

import { OakFlex } from "@/components/base";

const meta: Meta<typeof OakLessonReviewItem> = {
  component: OakLessonReviewItem,
  tags: ["autodocs"],
  title: "components/integrated/OakLessonReviewItem",
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
  },
  decorators: [
    (Story) => {
      return (
        <OakFlex $flexDirection="column" $gap="space-between-m">
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

type Story = StoryObj<typeof OakLessonReviewItem>;

export const Default: Story = {
  render: (args) => <OakLessonReviewItem {...args} />,
};
