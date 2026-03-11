import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakLessonNavItem } from "./OakLessonNavItem";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";

const meta: Meta<typeof OakLessonNavItem> = {
  component: OakLessonNavItem,
  tags: ["autodocs"],
  title: "OWA/pupil/lesson/OakLessonNavItem",

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
    lessonSectionName: "intro",
    progress: "not-started",
    href: "#",
    grade: 4,
    numQuestions: 6,
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
      include: [
        "progress",
        "lessonSectionName",
        "disabled",
        "isLoading",
        "grade",
        "numQuestions",
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

export const Loading: Story = {
  args: {
    isLoading: true,
  },
  render: (args) => <OakLessonNavItem {...args} />,
};

export const NotStarted: Story = {
  render: () => (
    <>
      <OakLessonNavItem lessonSectionName="intro" progress="not-started" />
      <OakLessonNavItem
        lessonSectionName="starter-quiz"
        progress="not-started"
        numQuestions={6}
        grade={0}
      />
      <OakLessonNavItem lessonSectionName="video" progress="not-started" />
      <OakLessonNavItem
        lessonSectionName="exit-quiz"
        progress="not-started"
        numQuestions={4}
        grade={0}
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
        numQuestions={6}
        grade={0}
      />
      <OakLessonNavItem lessonSectionName="video" progress="in-progress" />
      <OakLessonNavItem
        lessonSectionName="exit-quiz"
        progress="in-progress"
        numQuestions={6}
        grade={0}
      />
    </>
  ),
};

export const Disabled: Story = {
  render: () => (
    <>
      <OakLessonNavItem
        lessonSectionName="starter-quiz"
        progress="complete"
        numQuestions={6}
        grade={5}
        disabled
      />
      <OakLessonNavItem
        lessonSectionName="exit-quiz"
        progress="complete"
        numQuestions={4}
        grade={3}
        disabled
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
        numQuestions={6}
        grade={5}
      />
      <OakLessonNavItem lessonSectionName="video" progress="complete" />
      <OakLessonNavItem
        lessonSectionName="exit-quiz"
        progress="complete"
        numQuestions={4}
        grade={4}
      />
    </>
  ),
};
