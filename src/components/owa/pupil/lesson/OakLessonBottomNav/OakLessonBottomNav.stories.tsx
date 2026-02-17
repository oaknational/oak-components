import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakLessonBottomNav } from "./OakLessonBottomNav";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakButton } from "@/components/buttons/OakButton";
import { OakCodeRenderer } from "@/components/owa/OakCodeRenderer";

const meta: Meta<typeof OakLessonBottomNav> = {
  component: OakLessonBottomNav,
  tags: ["autodocs"],
  title: "OWA/pupil/lesson/OakLessonBottomNav",

  decorators: [
    (Story) => (
      <OakFlex $mt="spacing-56" $flexDirection="column" $gap="spacing-24">
        <Story />
      </OakFlex>
    ),
  ],
  argTypes: {
    hint: {
      control: {
        type: "text",
      },
    },
    answerFeedback: {
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
  render: (args) => <OakLessonBottomNav {...args} />,
};
export default meta;

type Story = StoryObj<typeof OakLessonBottomNav>;

export const Default: Story = {
  render: (args) => <OakLessonBottomNav {...args} />,
};

export const WithButton: Story = {
  render: (args) => (
    <OakLessonBottomNav {...args}>
      <OakButton
        variant="primary"
        iconName="arrow-right"
        isTrailingIcon
        width={["100%", "auto"]}
      >
        Next question
      </OakButton>
    </OakLessonBottomNav>
  ),
};

export const WithHintAndButton: Story = {
  render: (args) => (
    <OakLessonBottomNav {...args}>
      <OakButton
        variant="primary"
        iconName="arrow-right"
        isTrailingIcon
        width={["100%", "auto"]}
      >
        Continue
      </OakButton>
    </OakLessonBottomNav>
  ),
  args: {
    hint: "A football and an orange are both sphere shaped, like Earth.",
  },
};

export const WithFeedbackAndButton: Story = {
  render: (args) => (
    <>
      <OakLessonBottomNav {...args} feedback="correct">
        <OakButton
          variant="primary"
          iconName="arrow-right"
          isTrailingIcon
          width={["100%", "max-content"]}
        >
          Next question
        </OakButton>
      </OakLessonBottomNav>
      <OakLessonBottomNav {...args} feedback="incorrect">
        <OakButton
          variant="primary"
          iconName="arrow-right"
          isTrailingIcon
          width={["100%", "max-content"]}
        >
          Next question
        </OakButton>
      </OakLessonBottomNav>
      <OakLessonBottomNav {...args} feedback="partially-correct">
        <OakButton
          variant="primary"
          iconName="arrow-right"
          isTrailingIcon
          width={["100%", "max-content"]}
        >
          Next question
        </OakButton>
      </OakLessonBottomNav>
    </>
  ),
  args: {
    answerFeedback: "Good work!",
  },
};

export const WithLongFeedbackAndButton: Story = {
  render: (args) => (
    <OakLessonBottomNav {...args}>
      <OakButton
        variant="primary"
        iconName="arrow-right"
        isTrailingIcon
        width={["100%", "max-content"]}
      >
        Next question
      </OakButton>
    </OakLessonBottomNav>
  ),
  args: {
    feedback: "incorrect",
    answerFeedback:
      "Correct answer: George Orwell, a renowned British author, penned the dystopian masterpiece '1984' in 1949, depicting a totalitarian society under constant surveillance, influencing literature and pop culture for decades.",
  },
};

export const WithNoAnswerFeedbackAndButton: Story = {
  render: (args) => (
    <OakLessonBottomNav {...args}>
      <OakButton
        variant="primary"
        iconName="arrow-right"
        isTrailingIcon
        width={["100%", "max-content"]}
      >
        Next question
      </OakButton>
    </OakLessonBottomNav>
  ),
  args: {
    feedback: "incorrect",
  },
};

export const FeedbackWithCode: Story = {
  render: (args) => (
    <OakLessonBottomNav {...args}>
      <OakButton
        variant="primary"
        iconName="arrow-right"
        isTrailingIcon
        width={["100%", "max-content"]}
      >
        Next question
      </OakButton>
    </OakLessonBottomNav>
  ),
  args: {
    feedback: "incorrect",
    answerFeedback: (
      <OakCodeRenderer
        string={"Correct answer: Is it `true`?"}
        $font={"code-3"}
      />
    ),
  },
};
