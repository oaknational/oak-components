import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakCATQuestion } from "./OakCATQuestion";

import { OakBox, OakImage, OakP, OakUL } from "@/components/atoms";
import { OakMultilineText } from "@/components/molecules";

const meta: Meta<typeof OakCATQuestion> = {
  component: OakCATQuestion,
  tags: ["autodocs"],
  argTypes: {
    questionNumber: { control: "number" },
    status: {
      control: { type: "select" },
      options: ["error", "selected", "neutral"],
    },
    initialOpen: { control: "boolean" },
  },
  parameters: {
    controls: {
      include: [
        "questionNumber",
        "status",
        "initialOpen",
        "questionImagePosition",
      ],
    },
  },
  decorators: [
    (Story) => (
      <OakBox $background={"grey20"} $pa="inner-padding-xl" $width={"100%"}>
        <OakUL>
          <Story />
        </OakUL>
      </OakBox>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof OakCATQuestion>;

export const Default: Story = {
  render: (args) => <OakCATQuestion {...args} />,
  args: {
    questionNumber: 1,
    status: "neutral",
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

export const InitiallyOpen: Story = {
  render: (args) => <OakCATQuestion {...args} />,
  args: {
    initialOpen: true,
    questionNumber: 1,
    status: "neutral",
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

export const WithMultilineText: Story = {
  render: (args) => <OakCATQuestion {...args} />,
  args: {
    questionNumber: 1,
    status: "neutral",
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
      <OakMultilineText
        charLimit={100}
        name="hintInput"
        id="hintInput"
        $height={"all-spacing-24"}
      />
    ),
    feedbackInput: (
      <OakMultilineText
        charLimit={100}
        name="feedbackInput"
        id="feedbackInput"
        $height={"all-spacing-24"}
      />
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

export const WithMultilineTextAndStemImage: Story = {
  render: (args) => <OakCATQuestion {...args} />,
  args: {
    questionNumber: 1,
    status: "neutral",
    questionImagePosition: "below",
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
    questionImage: (
      <OakImage
        src="https://oaknationalacademy-res.cloudinary.com/image/upload/v1755009886/hc2moqkbq4rlsouotg2c.jpg"
        alt="cat on chair"
        $height={"all-spacing-15"}
        $width={"all-spacing-15"}
      />
    ),
    hintInput: (
      <OakMultilineText
        charLimit={100}
        name="hintInput"
        id="hintInput"
        $height={"all-spacing-24"}
      />
    ),
    feedbackInput: (
      <OakMultilineText
        charLimit={100}
        name="feedbackInput"
        id="feedbackInput"
        $height={"all-spacing-24"}
      />
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
