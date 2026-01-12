import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakLessonReviewIntroVideo } from "./OakPupilLessonReviewIntroVideo";

import { OakFlex } from "@/components/atoms";

const meta: Meta<typeof OakLessonReviewIntroVideo> = {
  component: OakLessonReviewIntroVideo,
  tags: ["autodocs"],
  title: "OWA/pupil/lesson/OakLessonReviewIntroVideo",
  args: {
    lessonSectionName: "intro",
    completed: false,
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

type Story = StoryObj<typeof OakLessonReviewIntroVideo>;

export const Default: Story = {
  render: (args) => <OakLessonReviewIntroVideo {...args} />,
};
