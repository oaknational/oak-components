import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakLessonNavItem } from "./OakLessonNavItem";

import { OakFlex } from "@/components/base";

const meta: Meta<typeof OakLessonNavItem> = {
  component: OakLessonNavItem,
  tags: ["autodocs"],
  title: "components/integrated/OakLessonNavItem",
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
    summary: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    lessonSectionName: "intro",
    progress: "not-started",
    label: "Intro",
    summary: "Get ready",
    href: "#",
  },
  parameters: {
    controls: {
      include: [
        "label",
        "summary",
        "progress",
        "lessonSectionName",
        "isDisabled",
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakLessonNavItem>;

export const Default: Story = {
  render: (args) => <OakLessonNavItem {...args} />,
};

export const NotStarted: Story = {
  render: () => (
    <>
      <OakLessonNavItem
        lessonSectionName="intro"
        progress="not-started"
        label="Intro"
      />
      <OakLessonNavItem
        lessonSectionName="starter-quiz"
        progress="not-started"
        label="Starter quiz"
      />
      <OakLessonNavItem
        lessonSectionName="video"
        progress="not-started"
        label="Video"
      />
      <OakLessonNavItem
        lessonSectionName="exit-quiz"
        progress="not-started"
        label="Exit quiz"
      />
    </>
  ),
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
      disable: true,
    },
  },
};
