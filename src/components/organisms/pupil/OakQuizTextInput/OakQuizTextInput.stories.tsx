import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakQuizTextInput } from "./OakQuizTextInput";

import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";

const meta: Meta<typeof OakQuizTextInput> = {
  component: OakQuizTextInput,
  tags: ["autodocs"],
  title: "components/organisms/pupil/OakQuizTextInput",
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
  render: (args) => (
    <OakQuizTextInput
      wrapperWidth={["100%", "all-spacing-20"]}
      feedback={args.feedback}
      defaultValue={args.defaultValue}
    />
  ),
  args: {
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
