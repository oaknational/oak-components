import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalReviewAccordion } from "./InternalReviewAccordion";

import { OakLessonReviewItem } from "@/components/organisms/pupil/OakLessonReviewItem";

const meta: Meta<typeof InternalReviewAccordion> = {
  component: InternalReviewAccordion,
  tags: ["autodocs"],
  title: "components/organisms/pupil/InternalReviewAccordion",
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
  render: (args) => <InternalReviewAccordion {...args} />,
};
export default meta;

type Story = StoryObj<typeof InternalReviewAccordion>;

export const Default: Story = {};

export const ExitQuiz: Story = {
  render: (args) => (
    <OakLessonReviewItem
      completed={true}
      grade={4}
      lessonSectionName="exit-quiz"
      numQuestions={6}
      expandableReviewSlot={<InternalReviewAccordion {...args} />}
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
      expandableReviewSlot={<InternalReviewAccordion {...args} />}
    />
  ),
};
