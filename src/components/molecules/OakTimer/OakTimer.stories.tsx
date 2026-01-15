import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakTimer } from "./OakTimer";

import { OakFlex } from "@/components/atoms";

const meta: Meta<typeof OakTimer> = {
  component: OakTimer,
  tags: ["autodocs"],
  title: "components/molecules/OWA (❌ to be moved out)/OakTimer",
  args: { timeCode: 6534.23 },
  decorators: [
    (Story) => (
      <OakFlex $pa={"spacing-24"} $flexDirection={"row"}>
        <Story />
      </OakFlex>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof OakTimer>;

export const Default: Story = {
  render: (args) => <OakTimer {...args} />,
  args: { timeCode: 657.23 },
};
