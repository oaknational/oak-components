import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakInfoButton } from "./OakInfoButton";

import { OakBox } from "@/components/atoms";

const meta: Meta<typeof OakInfoButton> = {
  component: OakInfoButton,
  tags: ["autodocs"],

  argTypes: {
    onClick: { action: "clicked" },
    isLoading: {
      control: {
        type: "boolean",
      },
    },
    isOpen: {
      control: {
        type: "boolean",
      },
    },
  },
  decorators: [
    (Story) => (
      <OakBox $mt="space-between-xxl">
        <Story />
      </OakBox>
    ),
  ],
  args: {
    onClick: () => console.log("clicked"),
  },
};
export default meta;

type Story = StoryObj<typeof OakInfoButton>;

export const Default: Story = {
  render: (args) => <OakInfoButton {...args} />,
};
