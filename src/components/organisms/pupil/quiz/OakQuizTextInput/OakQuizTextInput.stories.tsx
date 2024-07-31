import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakQuizTextInput } from "./OakQuizTextInput";

import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";

const meta: Meta<typeof OakQuizTextInput> = {
  component: OakQuizTextInput,
  tags: ["autodocs"],

  argTypes: {
    wrapperWidth: sizeArgTypes["$width"],
  },
  parameters: {
    controls: {
      include: ["feedback", "wrapperWidth", "disabled"],
    },
  },
  args: {
    placeholder: "Placeholder text",
  },
  render: (args) => <OakQuizTextInput {...args} />,
};
export default meta;

type Story = StoryObj<typeof OakQuizTextInput>;

export const Default: Story = {};

export const WithCorrectFeedback: Story = {
  args: {
    value: "A correct answer",
    feedback: "correct",
  },
};

export const WithIncorrectFeedback: Story = {
  args: {
    value: "An incorrect answer",
    feedback: "incorrect",
  },
};

export const Highlighted: Story = {
  args: {
    isHighlighted: true,
  },
};

export const ResponsiveWidth: Story = {
  args: {
    wrapperWidth: ["100%", "all-spacing-20"],
    feedback: "incorrect",
    defaultValue:
      "The pupil's answer which is longer than the width of the input",
  },
  parameters: {
    controls: {
      include: ["feedback"],
    },
  },
};
