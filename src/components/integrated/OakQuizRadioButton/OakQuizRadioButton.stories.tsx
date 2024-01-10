import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakQuizRadioButton } from "./OakQuizRadioButton";

import { OakRadioGroup } from "@/components/ui";
import { OakImage } from "@/components/base";

const meta: Meta<typeof OakQuizRadioButton> = {
  component: OakQuizRadioButton,
  tags: ["autodocs"],
  title: "components/integrated/OakQuizRadioButton",
  args: {
    label: "Radio option",
    value: "Option 1",
  },
  parameters: {
    controls: {
      include: ["feedback", "disabled"],
    },
    backgrounds: {
      default: "light",
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakQuizRadioButton>;

export const Default: Story = {
  render: (args) => (
    <OakRadioGroup name="radio-group-1" $flexDirection="column">
      <OakQuizRadioButton {...args} />
    </OakRadioGroup>
  ),
};

export const Selected: Story = {
  render: (args) => (
    <OakRadioGroup
      name="radio-group-2"
      value="Option 1"
      $flexDirection="column"
    >
      <OakQuizRadioButton {...args} />
    </OakRadioGroup>
  ),
};

export const SelectedCorrect: Story = {
  render: (args) => (
    <OakRadioGroup
      name="radio-group-3"
      value="Option 1"
      $flexDirection="column"
    >
      <OakQuizRadioButton {...args} feedback="correct" />
    </OakRadioGroup>
  ),
};

export const SelectedIncorrect: Story = {
  render: (args) => (
    <OakRadioGroup
      name="radio-group-4"
      value="Option 1"
      $flexDirection="column"
    >
      <OakQuizRadioButton {...args} feedback="incorrect" />
    </OakRadioGroup>
  ),
};

export const Correct: Story = {
  render: (args) => (
    <OakRadioGroup name="radio-group-5" $flexDirection="column">
      <OakQuizRadioButton {...args} feedback="correct" />
    </OakRadioGroup>
  ),
};

export const Incorrect: Story = {
  render: (args) => (
    <OakRadioGroup name="radio-group-6" $flexDirection="column">
      <OakQuizRadioButton {...args} feedback="incorrect" />
    </OakRadioGroup>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <OakRadioGroup name="radio-group-7" $flexDirection="column">
      <OakQuizRadioButton {...args} disabled />
    </OakRadioGroup>
  ),
};

export const SelectedDisabled: Story = {
  render: (args) => (
    <OakRadioGroup
      name="radio-group-8"
      value="Option 1"
      $flexDirection="column"
    >
      <OakQuizRadioButton {...args} disabled />
    </OakRadioGroup>
  ),
};

export const WithImage: Story = {
  render: (args) => (
    <OakRadioGroup name="radio-group-9" $flexDirection="column">
      <OakQuizRadioButton
        {...args}
        image={
          <OakImage
            alt="Some trees"
            src={`https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336490/sample.jpg`}
            width={864}
            height={576}
            $minWidth={"all-spacing-19"}
          />
        }
      />{" "}
    </OakRadioGroup>
  ),
};
