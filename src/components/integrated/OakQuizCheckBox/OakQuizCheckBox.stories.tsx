import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";

import { OakQuizCheckBox } from "./OakQuizCheckBox";

import { OakFlex, OakCloudinaryImage } from "@/components/base";

const meta: Meta<typeof OakQuizCheckBox> = {
  component: OakQuizCheckBox,
  tags: ["autodocs"],
  title: "components/integrated/OakQuizCheckBox",
  argTypes: {
    feedback: {
      options: ["correct", "incorrect", null],
      control: { type: "select" },
    },
  },
  parameters: {
    controls: {
      include: [
        "feedback",
        "disabled",
        "defaultChecked",
        "displayValue",
        "value",
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakQuizCheckBox>;

export const Default: Story = {
  render: (args) => (
    <OakFlex $pa="inner-padding-l" $background={"bg-neutral"}>
      <OakQuizCheckBox {...args} />
    </OakFlex>
  ),
  args: {
    id: "checkbox-test-default",
    value: "a test value",
  },
  parameters: {
    controls: {
      include: [
        "disabled",
        "defaultChecked",
        "feedback",
        "displayValue",
        "value",
      ],
    },
  },
};

export const WithImage: Story = {
  render: (args) => (
    <OakFlex $pa="inner-padding-l" $background={"bg-neutral"}>
      <OakQuizCheckBox {...args} />
    </OakFlex>
  ),
  args: {
    id: "checkbox-test-default-1",
    displayValue: "a test value",
    value: "test-default",
    image: (
      <OakCloudinaryImage
        alt="Some trees"
        cloudinaryId={`https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336490/sample.jpg`}
        width={864}
        height={576}
        $minWidth={"all-spacing-19"}
      />
    ),
  },
  parameters: {
    controls: {
      include: ["disabled", "feedback"],
    },
  },
};

export const WithImageNoDims: Story = {
  render: (args) => (
    <OakFlex
      $pa="inner-padding-l"
      $background={"bg-neutral"}
      $gap={"space-between-m"}
      $flexDirection={"column"}
    >
      <OakQuizCheckBox
        {...args}
        id="checkbox-test-default-2"
        value="test"
        displayValue="a test display value"
        image={
          <OakCloudinaryImage
            alt="Some trees"
            cloudinaryId={`https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336490/sample.jpg`}
            $width={"all-spacing-19"}
            $height={"all-spacing-17"}
            $background={"bg-neutral"}
          />
        }
      />
      <OakQuizCheckBox
        {...args}
        id="checkbox-test-default-3"
        value="test-2"
        displayValue="a test display value"
        image={
          <OakCloudinaryImage
            alt="Some trees"
            cloudinaryId={`https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336526/samples/dessert-on-a-plate.jpg`}
            $width={"all-spacing-19"}
            $height={"all-spacing-17"}
            $background={"bg-neutral"}
          />
        }
      />
    </OakFlex>
  ),
  args: {},
  parameters: {
    controls: {
      include: ["disabled", "feedback"],
    },
  },
};

export const Feedback: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getByLabelText("correctly selected").click(); // clicking the answers to select them in the story
    canvas.getByLabelText("incorrectly selected").click();
  },
  render: (args) => {
    // These states are just a way to demonstrate the various feedback states in the story
    const [feedbackCorrect, setFeedbackCorrect] = useState<
      "correct" | "incorrect" | null | undefined
    >(null);

    const [feedbackIncorrect, setFeedbackIncorrect] = useState<
      "correct" | "incorrect" | null | undefined
    >(null);

    return (
      <OakFlex
        $pa="inner-padding-l"
        $background={"bg-neutral"}
        $flexDirection={"column"}
        $gap={"space-between-m"}
      >
        <OakQuizCheckBox
          {...args}
          id="checkbox-test-default-7"
          value="test-6"
          displayValue="correctly selected"
          feedback={feedbackCorrect}
          onChange={() => {
            setFeedbackCorrect("correct");
          }}
        />
        <OakQuizCheckBox
          {...args}
          id="checkbox-test-default-8"
          value="test-7"
          displayValue="incorrectly selected"
          feedback={feedbackIncorrect}
          onChange={() => {
            setFeedbackIncorrect("incorrect");
          }}
        />
        <OakQuizCheckBox
          {...args}
          id="checkbox-test-default-9"
          feedback={"incorrect"}
          value="test-8"
          displayValue="unselected correct answer"
        />
        <OakQuizCheckBox
          {...args}
          id="checkbox-test-default-10"
          feedback={"correct"}
          value="test-9"
          displayValue="unselected incorrect answer"
        />
      </OakFlex>
    );
  },
  args: {},
  parameters: {
    controls: {
      include: [],
    },
  },
};
