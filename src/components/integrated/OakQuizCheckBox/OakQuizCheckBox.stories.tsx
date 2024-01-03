import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakQuizCheckBox } from "./OakQuizCheckBox";

import { OakFlex, OakImage } from "@/components/base";

const meta: Meta<typeof OakQuizCheckBox> = {
  component: OakQuizCheckBox,
  tags: ["autodocs"],
  title: "components/integrated/OakQuizCheckBox",
  argTypes: {},
  parameters: {
    controls: {
      include: ["isFeedback", "isCorrect", "disabled", "defaultChecked"],
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
      include: ["isFeedback", "isCorrect", "disabled", "defaultChecked"],
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
    value: "a test value",
    image: (
      <OakImage
        alt="Some trees"
        src={`https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336490/sample.jpg`}
        width={864}
        height={576}
        $minWidth={"all-spacing-19"}
      />
    ),
  },
  parameters: {
    controls: {
      include: ["isFeedback", "isCorrect", "disabled"],
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
        value="a test value"
        image={
          <OakImage
            alt="Some trees"
            src={`https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336490/sample.jpg`}
            $width={"all-spacing-19"}
            $height={"all-spacing-17"}
            $background={"bg-neutral"}
          />
        }
      />
      <OakQuizCheckBox
        {...args}
        id="checkbox-test-default-3"
        value="a test value again"
        image={
          <OakImage
            alt="Some trees"
            src={`https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336526/samples/dessert-on-a-plate.jpg`}
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
      include: ["isFeedback", "isCorrect", "disabled"],
    },
  },
};

export const PreChecked: Story = {
  render: (args) => (
    <OakFlex
      $pa="inner-padding-l"
      $background={"bg-neutral"}
      $flexDirection={"column"}
      $gap={"space-between-m"}
    >
      <OakQuizCheckBox
        {...args}
        id="checkbox-test-default-4"
        defaultChecked={true}
        value="default checked"
      />
      <OakQuizCheckBox
        {...args}
        id="checkbox-test-default-5"
        defaultChecked={true}
        disabled={true}
        value="default checked disabled"
      />
      <OakQuizCheckBox
        {...args}
        id="checkbox-test-default-6"
        value="dynamic default doesn't work past first render"
      />
    </OakFlex>
  ),
  args: {
    value: "a test value",
    defaultChecked: false,
  },
  parameters: {
    controls: {
      include: ["defaultChecked"],
    },
  },
};

export const Feedback: Story = {
  render: (args) => (
    <OakFlex
      $pa="inner-padding-l"
      $background={"bg-neutral"}
      $flexDirection={"column"}
      $gap={"space-between-m"}
    >
      <OakQuizCheckBox
        {...args}
        id="checkbox-test-default-7"
        isFeedback={true}
        defaultChecked={true}
        isCorrect={true}
        value="correctly selected"
      />
      <OakQuizCheckBox
        {...args}
        id="checkbox-test-default-8"
        isFeedback={true}
        defaultChecked={true}
        value="incorrectly selected"
      />
      <OakQuizCheckBox
        {...args}
        id="checkbox-test-default-9"
        isFeedback={true}
        isCorrect={true}
        value="correctly not selected"
      />
      <OakQuizCheckBox
        {...args}
        id="checkbox-test-default-10"
        isFeedback={true}
        value="incorrectly not selected"
      />
    </OakFlex>
  ),
  args: {},
  parameters: {
    controls: {},
  },
};
