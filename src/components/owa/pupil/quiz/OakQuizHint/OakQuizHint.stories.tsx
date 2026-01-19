import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakQuizHint } from "./OakQuizHint";

import { OakCodeRenderer } from "@/components/owa/OakCodeRenderer/OakCodeRenderer";
import { OakBox } from "@/components/layout-and-structure/OakBox";

const meta: Meta<typeof OakQuizHint> = {
  component: OakQuizHint,
  tags: ["autodocs"],
  title: "OWA/pupil/quiz/OakQuizHint",

  argTypes: {
    hint: {
      control: {
        type: "text",
      },
    },
  },
  decorators: [
    (Story) => (
      <OakBox $mt="spacing-72">
        <Story />
      </OakBox>
    ),
  ],
  args: {
    hint: "A football and an orange are both sphere shaped, like Earth.",
    id: "quiz-hint",
  },
};
export default meta;

type Story = StoryObj<typeof OakQuizHint>;

export const Default: Story = {
  render: (args) => <OakQuizHint {...args} />,
};

const hintWithCode = (
  <OakCodeRenderer string={"Is it `true`?"} $font={"code-3"} />
);

export const WithCode: Story = {
  render: () => <OakQuizHint hint={hintWithCode} id="test-id" />,
};
