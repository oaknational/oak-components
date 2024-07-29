import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakLessonExpandableReviewItem } from "./OakLessonExpandableReviewItem";

import { OakLessonReviewItem } from "@/components/organisms/pupil/OakLessonReviewItem";

const meta: Meta<typeof OakLessonExpandableReviewItem> = {
  component: OakLessonExpandableReviewItem,
  tags: ["autodocs"],
  title: "components/organisms/pupil/OakLessonExpandableReviewItem",
  parameters: {
    controls: {
      include: ["expandableLabel", "headerAfterSlot", "children"],
    },
  },
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    expandableLabel: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    id: "accordion-1",
    expandableLabel: "Results",
    children: "In this space we can render the quiz results component",
    initialOpen: false,
  },
  render: (args) => (
    <OakLessonReviewItem
      completed={true}
      grade={4}
      lessonSectionName="starter-quiz"
      numQuestions={6}
      resultSection={<OakLessonExpandableReviewItem {...args} />}
    />
  ),
};
export default meta;

type Story = StoryObj<typeof OakLessonExpandableReviewItem>;

export const Default: Story = {};

export const ExitQuiz: Story = {
  render: (args) => (
    <OakLessonReviewItem
      completed={true}
      grade={4}
      lessonSectionName="exit-quiz"
      numQuestions={6}
      resultSection={<OakLessonExpandableReviewItem {...args} />}
    />
  ),
};

export const StarterQuiz: Story = {
  render: (args) => (
    <OakLessonReviewItem
      completed={true}
      grade={4}
      lessonSectionName="starter-quiz"
      numQuestions={6}
      resultSection={<OakLessonExpandableReviewItem {...args} />}
    />
  ),
};
