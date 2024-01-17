import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakQuizCounter } from "../OakQuizCounter";

import { OakLessonTopNav } from "./OakLessonTopNav";

import { OakFlex } from "@/components/base";
import { OakBackLink } from "@/components/ui";

const meta: Meta<typeof OakLessonTopNav> = {
  component: OakLessonTopNav,
  tags: ["autodocs"],
  title: "components/integrated/OakLessonTopNav",
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
      control: { type: "text" },
    },
    mobileSummary: {
      control: { type: "text" },
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
