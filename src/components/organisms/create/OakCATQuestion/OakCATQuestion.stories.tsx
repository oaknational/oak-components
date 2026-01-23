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
      include: ["questionNumber", "status", "initialOpen"],
    },
  },
  decorators: [
    (Story) => (
      <OakBox $background={"bg-neutral"} $pa="spacing-24" $width={"100%"}>
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
      <OakBox $background={"bg-decorative2-subdued"} $pa="spacing-4">
        Dummy Question Type Input
      </OakBox>
    ),
    questionStem: (
      <OakBox $background={"bg-decorative2-subdued"} $pa="spacing-12">
        Dummy Question Text Input
      </OakBox>
    ),
    hintInput: (
      <OakBox $background={"bg-decorative2-subdued"}>
        <OakBox
          $background={"bg-decorative6-subdued"}
          $pa="spacing-4"
          $height={"spacing-72"}
        >
          Dummy Hint Input
        </OakBox>
        <OakP>Character count 0/200</OakP>
      </OakBox>
    ),
    feedbackInput: (
      <OakBox $background={"bg-decorative2-subdued"}>
        <OakBox
          $background={"bg-decorative6-subdued"}
          $pa="spacing-4"
          $height={"spacing-72"}
        >
          Dummy Feedback Input
        </OakBox>
        <OakP>Character count 0/200</OakP>
      </OakBox>
    ),
    answersSection: (
      <OakBox
        $background={"bg-decorative1-subdued"}
        $pa="spacing-12"
        $height={"spacing-360"}
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
      <OakBox $background={"bg-decorative2-subdued"} $pa="spacing-4">
        Dummy Question Type Input
      </OakBox>
    ),
    questionStem: (
      <OakBox $background={"bg-decorative2-subdued"} $pa="spacing-12">
        Dummy Question Text Input
      </OakBox>
    ),
    hintInput: (
      <OakBox $background={"bg-decorative2-subdued"}>
        <OakBox
          $background={"bg-decorative6-subdued"}
          $pa="spacing-4"
          $height={"spacing-72"}
          $width={"spacing-360"}
        >
          Dummy Hint Input
        </OakBox>
        <OakP>Character count 0/200</OakP>
      </OakBox>
    ),
    feedbackInput: (
      <OakBox $background={"bg-decorative2-subdued"}>
        <OakBox
          $background={"bg-decorative6-subdued"}
          $pa="spacing-4"
          $height={"spacing-72"}
          $width={"spacing-360"}
        >
          Dummy Feedback Input
        </OakBox>
        <OakP>Character count 0/200</OakP>
      </OakBox>
    ),
    answersSection: (
      <OakBox
        $background={"bg-decorative1-subdued"}
        $pa="spacing-12"
        $height={"spacing-360"}
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
    status: "selected",
    questionTypeInput: (
      <OakBox $background={"bg-decorative2-subdued"} $pa="spacing-4">
        Dummy Question Type Input
      </OakBox>
    ),
    questionStem: (
      <OakBox $background={"bg-decorative2-subdued"} $pa="spacing-12">
        Dummy Question Text Input
      </OakBox>
    ),
    hintInput: (
      <OakMultilineText
        charLimit={100}
        name="hintInput"
        id="hintInput"
        $height={"spacing-120"}
      />
    ),
    feedbackInput: (
      <OakMultilineText
        charLimit={100}
        name="feedbackInput"
        id="feedbackInput"
        $height={"spacing-120"}
      />
    ),
    answersSection: (
      <OakBox
        $background={"bg-decorative1-subdued"}
        $pa="spacing-12"
        $height={"spacing-360"}
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
    questionTypeInput: (
      <OakBox $background={"bg-decorative2-subdued"} $pa="spacing-4">
        Dummy Question Type Input
      </OakBox>
    ),
    questionStem: (
      <OakBox $background={"bg-decorative2-subdued"} $pa="spacing-12">
        Dummy Question Text Input
        <OakImage
          src="https://oaknationalacademy-res.cloudinary.com/image/upload/v1755009886/hc2moqkbq4rlsouotg2c.jpg"
          alt="cat on chair"
          $height={"spacing-100"}
          $width={"spacing-100"}
        />
      </OakBox>
    ),
    hintInput: (
      <OakMultilineText
        charLimit={100}
        name="hintInput"
        id="hintInput"
        $height={"spacing-120"}
      />
    ),
    feedbackInput: (
      <OakMultilineText
        charLimit={100}
        name="feedbackInput"
        id="feedbackInput"
        $height={"spacing-120"}
      />
    ),
    answersSection: (
      <OakBox
        $background={"bg-decorative1-subdued"}
        $pa="spacing-12"
        $height={"spacing-360"}
      >
        Dummy answers Section
      </OakBox>
    ),
  },
};
