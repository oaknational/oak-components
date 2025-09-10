import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakCATQuestion } from "./OakCATQuestion";

import { OakBox, OakP } from "@/components/atoms";

const meta: Meta<typeof OakCATQuestion> = {
  component: OakCATQuestion,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    controls: {
      include: ["questionNumber", "status"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakCATQuestion>;

export const Default: Story = {
  render: (args) => <OakCATQuestion {...args} />,
  args: {
    questionNumber: 1,
    status: "draft",
    questionTypeInput: (
      <OakBox $background={"aqua50"} $pa="inner-padding-ssx">
        Dummy Question Type Input
      </OakBox>
    ),
    questionTextInput: (
      <OakBox $background={"aqua50"} $pa="inner-padding-s">
        Dummy Question Text Input
      </OakBox>
    ),
    hintInput: (
      <OakBox $background={"aqua50"}>
        <OakBox
          $background={"amber50"}
          $pa="inner-padding-ssx"
          $height={"all-spacing-12"}
          $width={"all-spacing-20"}
        >
          Dummy Hint Input
        </OakBox>
        <OakP>Character count 0/200</OakP>
      </OakBox>
    ),
    feedbackInput: (
      <OakBox $background={"aqua50"}>
        <OakBox
          $background={"amber50"}
          $pa="inner-padding-ssx"
          $height={"all-spacing-12"}
          $width={"all-spacing-20"}
        >
          Dummy Feedback Input
        </OakBox>
        <OakP>Character count 0/200</OakP>
      </OakBox>
    ),
    answersSection: (
      <OakBox
        $background={"mint50"}
        $pa="inner-padding-s"
        $height={"all-spacing-20"}
      >
        Dummy answers Section
      </OakBox>
    ),
  },
};
