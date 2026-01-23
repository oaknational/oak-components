import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakJauntyAngleLabel } from "./OakJauntyAngleLabel";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";

const meta: Meta<typeof OakJauntyAngleLabel> = {
  component: OakJauntyAngleLabel,
  tags: ["autodocs"],
  title: "components/Form elements/OakJauntyAngleLabel",
  args: { label: "Select one answer" },
  decorators: [
    (Story) => (
      <OakFlex $pa={"spacing-24"} $flexDirection={"row"}>
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
