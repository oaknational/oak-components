import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakQuizTextInput } from "./OakQuizTextInput";

import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";

const meta: Meta<typeof OakQuizTextInput> = {
  component: OakQuizTextInput,
  tags: ["autodocs"],
  title: "components/integrated/OakQuizTextInput",
  argTypes: {
    width: sizeArgTypes["$width"],
  },
  parameters: {
    controls: {
      include: ["feedback", "width", "disabled"],
    },
  },
  args: {
    placeholder: "Placeholder text",
  },
};
export default meta;

type Story = StoryObj<typeof OakQuizTextInput>;

export const Default: Story = {
  render: (args) => <OakQuizTextInput {...args} />,
};

export const WithCorrectFeedback: Story = {
  render: () => (
    <OakQuizTextInput value="A correct answer" feedback="correct" />
  ),
};

export const WithIncorrectFeedback: Story = {
  render: () => (
    <OakQuizTextInput value="An incorrect answer" feedback="incorrect" />
  ),
};

export const ResponsiveWidth: Story = {
  render: () => (
    <OakQuizTextInput
      value="An incorrect answer"
      feedback="incorrect"
      wrapperWidth={["100%", "all-spacing-22"]}
    />
  ),
};
