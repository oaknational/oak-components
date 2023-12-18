import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakQuizCheckBox } from "./OakQuizCheckBox";

import { OakFlex } from "@/components/base";

const meta: Meta<typeof OakQuizCheckBox> = {
  component: OakQuizCheckBox,
  tags: ["autodocs"],
  title: "components/integrated/OakQuizCheckBox",
  argTypes: {},
  parameters: {
    controls: {
      include: [],
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
};
