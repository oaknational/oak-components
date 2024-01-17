import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakLessonBottomNav } from "./OakLessonBottomNav";

import { OakFlex } from "@/components/base";
import { OakPrimaryButton } from "@/components/ui";

const meta: Meta<typeof OakLessonBottomNav> = {
  component: OakLessonBottomNav,
  tags: ["autodocs"],
  title: "components/integrated/OakLessonBottomNav",
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
};
export default meta;

type Story = StoryObj<typeof OakLessonBottomNav>;

export const Default: Story = {
  render: (args) => <OakLessonBottomNav {...args} />,
};

export const WithButton: Story = {
  render: (args) => (
    <OakLessonBottomNav {...args}>
      <OakPrimaryButton
        iconName="arrow-right"
        isTrailingIcon
        width={["100%", "auto"]}
      >
        Continue
      </OakPrimaryButton>
    </OakLessonBottomNav>
  ),
};

export const WithHintAndButton: Story = {
  render: (args) => (
    <OakLessonBottomNav {...args}>
      <OakPrimaryButton
        iconName="arrow-right"
        isTrailingIcon
        width={["100%", "auto"]}
      >
        Continue
      </OakPrimaryButton>
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
        <OakPrimaryButton
          iconName="arrow-right"
          isTrailingIcon
          width={["100%", "auto"]}
        >
          Continue
        </OakPrimaryButton>
      </OakLessonBottomNav>
      <OakLessonBottomNav {...args} feedback="incorrect">
        <OakPrimaryButton
          iconName="arrow-right"
          isTrailingIcon
          width={["100%", "auto"]}
        >
          Continue
        </OakPrimaryButton>
      </OakLessonBottomNav>
      <OakLessonBottomNav {...args} feedback="partially-correct">
        <OakPrimaryButton
          iconName="arrow-right"
          isTrailingIcon
          width={["100%", "auto"]}
        >
          Continue
        </OakPrimaryButton>
      </OakLessonBottomNav>
    </>
  ),
  args: {
    answerFeedback: "Good work!",
  },
};
