import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import {
  OakLessonLayout,
  OakLessonLayoutProps,
  lessonSectionNames,
} from "./OakLessonLayout";

import { OakBackLink, OakPrimaryButton } from "@/components/molecules";
import { OakBox } from "@/components/atoms";
import { OakLessonTopNav } from "@/components/organisms/pupil/lesson/OakLessonTopNav";
import { OakLessonBottomNav } from "@/components/organisms/pupil/lesson/OakLessonBottomNav";
import { OakQuizCounter } from "@/components/organisms/pupil/quiz/OakQuizCounter";

const meta: Meta<typeof OakLessonLayout> = {
  component: OakLessonLayout,
  tags: ["autodocs"],
  title: "OWA (❌ to be moved out)/pupil/lesson/OakLessonLayout",

  decorators: [(Story) => <Story />],
  argTypes: {
    lessonSectionName: {
      options: [...lessonSectionNames],
      control: { type: "radio" },
    },
    phase: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    celebrate: {
      control: { type: "boolean" },
    },
  },
  parameters: {
    controls: {
      include: ["lessonSectionName", "celebrate", "phase"],
    },
    layout: "fullscreen",
  },
  args: {
    lessonSectionName: lessonSectionNames[0],
    celebrate: false,
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
        $height="spacing-1280"
        $ba="border-solid-xl"
        $borderColor="border-primary"
      >
        <p>Section content</p>
      </OakBox>
    </OakLessonLayout>
  ),
};
