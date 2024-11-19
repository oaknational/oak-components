import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakTimer } from "./OakTimer";

import { OakFlex } from "@/components/atoms";

const meta: Meta<typeof OakTimer> = {
  component: OakTimer,
  tags: ["autodocs"],
  title: "components/molecules/OakTimer",
  args: { timeCode: "02:03:32" },
  decorators: [
    (Story) => (
      <OakFlex $pa={"inner-padding-xl"} $flexDirection={"row"}>
        <Story />
      </OakFlex>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof OakTimer>;

export const Default: Story = {
  render: (args) => <OakTimer {...args} />,
  args: { timeCode: "03:03:54" },
};
