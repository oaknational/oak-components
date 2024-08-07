import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakLessonTopNav } from "./OakLessonTopNav";

import { OakQuizCounter } from "@/components/organisms/pupil/quiz/OakQuizCounter";
import { OakFlex } from "@/components/atoms";
import { OakBackLink } from "@/components/molecules";

const meta: Meta<typeof OakLessonTopNav> = {
  component: OakLessonTopNav,
  tags: ["autodocs"],

  decorators: [
    (Story) => (
      <OakFlex
        $mt="space-between-xl"
        $flexDirection="column"
        $gap="space-between-m"
      >
        <Story />
      </OakFlex>
    ),
  ],
  argTypes: {
    heading: {
      control: "text",
    },
    mobileSummary: {
      control: "text",
    },
  },
  args: {
    lessonSectionName: "intro",
    heading: "Intro",
    mobileSummary: "Introduction to the lesson",
    backLinkSlot: <OakBackLink type="button" />,
  },
  parameters: {
    controls: {
      include: ["lessonSectionName", "heading", "mobileSummary"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakLessonTopNav>;

export const Default: Story = {
  render: (args) => <OakLessonTopNav {...args} />,
};

export const WithCounter: Story = {
  render: (args) => (
    <OakLessonTopNav
      {...args}
      lessonSectionName="starter-quiz"
      heading="Starter quiz"
      mobileSummary="Question 4 of 6"
      counterSlot={<OakQuizCounter counter={4} total={6} />}
    />
  ),
};
