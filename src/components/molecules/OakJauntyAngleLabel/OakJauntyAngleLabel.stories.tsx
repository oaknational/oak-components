import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakJauntyAngleLabel } from "./OakJauntyAngleLabel";

import { OakFlex } from "@/components/atoms";

const meta: Meta<typeof OakJauntyAngleLabel> = {
  component: OakJauntyAngleLabel,
  tags: ["autodocs"],
  title: "components/molecules/OakJauntyAngleLabel",
  args: { label: "Select one answer" },
  decorators: [
    (Story) => (
      <OakFlex $pa={"inner-padding-xl"} $flexDirection={"row"}>
        <Story />
      </OakFlex>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof OakJauntyAngleLabel>;

export const Default: Story = {
  render: (args) => <OakJauntyAngleLabel {...args} />,
  args: { $background: "bg-decorative1-main" },
};
