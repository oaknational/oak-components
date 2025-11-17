import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakQuizRadioButton } from "./OakQuizRadioButton";

import { OakRadioGroup } from "@/components/molecules";
import { OakCloudinaryImage, OakFlex } from "@/components/atoms";

const meta: Meta<typeof OakQuizRadioButton> = {
  component: OakQuizRadioButton,
  tags: ["autodocs"],

  args: {
    label: "Option label",
    value: "Option 1",
  },
  parameters: {
    controls: {
      include: ["feedback", "disabled", "isHighlighted"],
    },
    backgrounds: {
      default: "light",
    },
  },
  render: (args) => (
    <OakRadioGroup name="radio-group-1" $flexDirection="column">
      <OakQuizRadioButton {...args} />
    </OakRadioGroup>
  ),
};
export default meta;

type Story = StoryObj<typeof OakQuizRadioButton>;

export const Default: Story = {};

export const Selected: Story = {
  render: (args) => (
    <OakFlex $gap="spacing-24" $flexDirection="column">
      <OakRadioGroup
        name="radio-group-2"
        value="Option 1"
        $flexDirection="column"
      >
        <OakQuizRadioButton {...args} />
      </OakRadioGroup>
      <OakRadioGroup
        name="radio-group-3"
        value="Option 1"
        $flexDirection="column"
      >
        <OakQuizRadioButton {...args} disabled label="Disabled" />
      </OakRadioGroup>
    </OakFlex>
  ),
};

export const NotSelected: Story = {
  render: (args) => (
    <OakFlex $gap="spacing-24" $flexDirection="column">
      <OakRadioGroup name="radio-group-4" value="" $flexDirection="column">
        <OakQuizRadioButton {...args} />
      </OakRadioGroup>
      <OakRadioGroup name="radio-group-5" value="" $flexDirection="column">
        <OakQuizRadioButton {...args} disabled label="Disabled" />
      </OakRadioGroup>
    </OakFlex>
  ),
};

export const Highlighted: Story = {
  args: {
    isHighlighted: true,
  },
};

export const WithFeedback: Story = {
  render: (args) => (
    <OakFlex $gap="spacing-24" $flexDirection="column">
      <OakRadioGroup
        name="radio-group-6"
        value="Option 1"
        $flexDirection="column"
      >
        <OakQuizRadioButton
          {...args}
          feedback="correct"
          label="Correctly selected"
        />
      </OakRadioGroup>
      <OakRadioGroup
        name="radio-group-7"
        value="Option 1"
        $flexDirection="column"
      >
        <OakQuizRadioButton
          {...args}
          feedback="incorrect"
          label="Incorrectly selected"
        />
      </OakRadioGroup>
      <OakRadioGroup name="radio-group-8" value="" $flexDirection="column">
        <OakQuizRadioButton
          {...args}
          feedback="incorrect"
          label="unselected correct answer"
        />
      </OakRadioGroup>
      <OakRadioGroup name="radio-group-9" value="" $flexDirection="column">
        <OakQuizRadioButton
          {...args}
          feedback="correct"
          label="unselected incorrect answer"
        />
      </OakRadioGroup>
    </OakFlex>
  ),
};

export const WithImage: Story = {
  render: (args) => (
    <OakFlex $gap="spacing-24" $flexDirection="column">
      <OakRadioGroup name="radio-group-10" $flexDirection="column">
        <OakQuizRadioButton
          {...args}
          image={
            <OakCloudinaryImage
              alt="Some trees"
              cloudinaryId={`https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336490/sample.jpg`}
              width={864}
              height={576}
              $minWidth="spacing-240"
            />
          }
        />
      </OakRadioGroup>
      <OakRadioGroup name="radio-group-11" $flexDirection="column">
        <OakQuizRadioButton
          {...args}
          feedback="correct"
          label="Image with feedback"
          image={
            <OakCloudinaryImage
              alt="Some trees"
              cloudinaryId={`https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336490/sample.jpg`}
              width={864}
              height={576}
              $minWidth="spacing-240"
            />
          }
        />
      </OakRadioGroup>
      <OakRadioGroup
        name="radio-group-12"
        value="Option 1"
        $flexDirection="column"
      >
        <OakQuizRadioButton
          {...args}
          feedback="correct"
          label="Selected image with feedback"
          image={
            <OakCloudinaryImage
              alt="Some trees"
              cloudinaryId={`https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336490/sample.jpg`}
              width={864}
              height={576}
              $minWidth="spacing-240"
            />
          }
        />
      </OakRadioGroup>
    </OakFlex>
  ),
};
