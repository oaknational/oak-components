import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakLessonNavItem } from "./OakLessonNavItem";

import { OakFlex } from "@/components/base";

const meta: Meta<typeof OakLessonNavItem> = {
  component: OakLessonNavItem,
  tags: ["autodocs"],
  title: "components/integrated/OakLessonNavItem",
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
    videoLength: {
      control: {
        type: "number",
      },
      if: { arg: "lessonSectionName", eq: "video" },
    },
  },
  args: {
    lessonSectionName: "intro",
    progress: "not-started",
    href: "#",
    answerCount: 4,
    questionCount: 6,
    videoLength: 20,
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
      include: [
        "progress",
        "lessonSectionName",
        "isDisabled",
        "answerCount",
        "questionCount",
        "videoLength",
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakLessonNavItem>;

export const Default: Story = {
  render: (args) => <OakLessonNavItem {...args} />,
};

export const AsAButton: Story = {
  render: (args) => <OakLessonNavItem {...args} as="button" />,
};

export const NotStarted: Story = {
  render: () => (
    <>
      <OakLessonNavItem lessonSectionName="intro" progress="not-started" />
      <OakLessonNavItem
        lessonSectionName="starter-quiz"
        progress="not-started"
        questionCount={6}
        answerCount={0}
      />
      <OakLessonNavItem
        lessonSectionName="video"
        progress="not-started"
        videoLength={20}
      />
      <OakLessonNavItem
        lessonSectionName="exit-quiz"
        progress="not-started"
        questionCount={4}
        answerCount={0}
      />
    </>
  ),
};

export const InProgress: Story = {
  render: () => (
    <>
      <OakLessonNavItem lessonSectionName="intro" progress="in-progress" />
      <OakLessonNavItem
        lessonSectionName="starter-quiz"
        progress="in-progress"
        questionCount={6}
        answerCount={0}
      />
      <OakLessonNavItem
        lessonSectionName="video"
        progress="in-progress"
        videoLength={20}
      />
      <OakLessonNavItem
        lessonSectionName="exit-quiz"
        progress="in-progress"
        questionCount={6}
        answerCount={0}
      />
    </>
  ),
};

export const Complete: Story = {
  render: () => (
    <>
      <OakLessonNavItem lessonSectionName="intro" progress="complete" />
      <OakLessonNavItem
        lessonSectionName="starter-quiz"
        progress="complete"
        questionCount={6}
        answerCount={5}
      />
      <OakLessonNavItem
        lessonSectionName="video"
        progress="complete"
        videoLength={20}
      />
      <OakLessonNavItem
        lessonSectionName="exit-quiz"
        progress="complete"
        questionCount={4}
        answerCount={4}
      />
    </>
  ),
};
