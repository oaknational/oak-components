import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakQuizBottomNav } from "./OakQuizBottomNav";

import { OakFlex } from "@/components/base";
import { OakPrimaryButton } from "@/components/ui";

const meta: Meta<typeof OakQuizBottomNav> = {
  component: OakQuizBottomNav,
  tags: ["autodocs"],
  title: "components/integrated/OakQuizBottomNav",
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

type Story = StoryObj<typeof OakQuizBottomNav>;

export const Default: Story = {
  render: (args) => <OakQuizBottomNav {...args} />,
};

export const WithButton: Story = {
  render: (args) => (
    <OakQuizBottomNav {...args}>
      <OakPrimaryButton iconName="arrow-right" isTrailingIcon>
        Continue
      </OakPrimaryButton>
    </OakQuizBottomNav>
  ),
};

export const WithHintAndButton: Story = {
  render: (args) => (
    <OakQuizBottomNav {...args}>
      <OakPrimaryButton iconName="arrow-right" isTrailingIcon>
        Continue
      </OakPrimaryButton>
    </OakQuizBottomNav>
  ),
  args: {
    hint: "A football and an orange are both sphere shaped, like Earth.",
  },
};

export const WithFeedbackAndButton: Story = {
  render: (args) => (
    <>
      <OakQuizBottomNav {...args} feedback="correct">
        <OakPrimaryButton iconName="arrow-right" isTrailingIcon>
          Continue
        </OakPrimaryButton>
      </OakQuizBottomNav>
      <OakQuizBottomNav {...args} feedback="incorrect">
        <OakPrimaryButton iconName="arrow-right" isTrailingIcon>
          Continue
        </OakPrimaryButton>
      </OakQuizBottomNav>
      <OakQuizBottomNav {...args} feedback="partially-correct">
        <OakPrimaryButton iconName="arrow-right" isTrailingIcon>
          Continue
        </OakPrimaryButton>
      </OakQuizBottomNav>
    </>
  ),
  args: {
    answerFeedback: "Good work!",
  },
};
