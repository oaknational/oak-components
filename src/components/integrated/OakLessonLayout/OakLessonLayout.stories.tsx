import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakLessonTopNav } from "../OakLessonTopNav";
import { OakLessonBottomNav } from "../OakLessonBottomNav";
import { OakQuizCounter } from "../OakQuizCounter";

import { OakLessonLayout } from "./OakLessonLayout";

import { OakBackLink, OakPrimaryButton } from "@/components/ui";

const meta: Meta<typeof OakLessonLayout> = {
  component: OakLessonLayout,
  tags: ["autodocs"],
  title: "components/integrated/OakLessonLayout",
  decorators: [(Story) => <Story />],
  parameters: {
    controls: {
      include: ["contentHeight"],
    },
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof OakLessonLayout>;

export const Default: Story = {
  render: (args) => (
    <OakLessonLayout
      {...args}
      topNavSlot={
        <OakLessonTopNav
          lessonSectionName="intro"
          backLinkSlot={<OakBackLink type="button" />}
          heading="Intro"
          mobileSummary="Introduction to the lesson"
          counterSlot={<OakQuizCounter counter={1} total={6} />}
        />
      }
      bottomNavSlot={
        <OakLessonBottomNav>
          <OakPrimaryButton width={["100%", "auto"]}>
            Start lesson
          </OakPrimaryButton>
        </OakLessonBottomNav>
      }
    >
      {Array.from({ length: 20 }, (_, i) => (
        <p key={i}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          rhoncus risus velit, vitae accumsan odio convallis sit amet. Sed dui
          est, elementum a varius vitae, molestie at mi. Donec dignissim
          scelerisque nulla ut posuere. Aliquam consequat consectetur lorem, ut
          pellentesque tellus tincidunt pharetra. Nunc tempor ultricies risus
          eget pharetra.
        </p>
      ))}
    </OakLessonLayout>
  ),
};
