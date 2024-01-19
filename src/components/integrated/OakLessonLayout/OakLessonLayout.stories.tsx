import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakLessonTopNav } from "../OakLessonTopNav";
import { OakLessonBottomNav } from "../OakLessonBottomNav";
import { OakQuizCounter } from "../OakQuizCounter";

import { OakLessonLayout, OakLessonLayoutProps } from "./OakLessonLayout";

import { OakBackLink, OakPrimaryButton } from "@/components/ui";
import { OakBox } from "@/components/base";

const meta: Meta<typeof OakLessonLayout> = {
  component: OakLessonLayout,
  tags: ["autodocs"],
  title: "components/integrated/OakLessonLayout",
  decorators: [(Story) => <Story />],
  parameters: {
    controls: {
      include: ["lessonSectionName"],
    },
    layout: "fullscreen",
  },
  args: {
    lessonSectionName: "intro",
  },
};
export default meta;

type Story = StoryObj<typeof OakLessonLayout>;

const headings: Record<
  Exclude<OakLessonLayoutProps["lessonSectionName"], "overview" | "review">,
  string
> = {
  intro: "Intro",
  "starter-quiz": "Starter Quiz",
  video: "Video",
  "exit-quiz": "Exit Quiz",
};

const mobileSumamry: Record<
  Exclude<OakLessonLayoutProps["lessonSectionName"], "overview" | "review">,
  string
> = {
  intro: "In progress...",
  "starter-quiz": "Question 1 of 6",
  video: "In progress...",
  "exit-quiz": "Question 1 of 6",
};

export const Default: Story = {
  render: ({ lessonSectionName, ...args }) => (
    <OakLessonLayout
      {...args}
      lessonSectionName={lessonSectionName}
      topNavSlot={
        lessonSectionName !== "overview" && lessonSectionName !== "review" ? (
          <OakLessonTopNav
            lessonSectionName={lessonSectionName}
            backLinkSlot={<OakBackLink type="button" />}
            heading={headings[lessonSectionName]}
            mobileSummary={mobileSumamry[lessonSectionName]}
            counterSlot={
              lessonSectionName === "exit-quiz" ||
              lessonSectionName === "starter-quiz" ? (
                <OakQuizCounter counter={1} total={6} />
              ) : null
            }
          />
        ) : null
      }
      bottomNavSlot={
        <OakLessonBottomNav>
          <OakPrimaryButton width={["100%", "auto"]}>Button</OakPrimaryButton>
        </OakLessonBottomNav>
      }
    >
      <OakBox
        $height="all-spacing-24"
        $ba="border-solid-xl"
        $borderColor="black"
      >
        <p>Section content</p>
      </OakBox>
    </OakLessonLayout>
  ),
};
