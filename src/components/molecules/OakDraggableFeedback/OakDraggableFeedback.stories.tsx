import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakDraggableFeedback } from "./OakDraggableFeedback";

const meta: Meta<typeof OakDraggableFeedback> = {
  component: OakDraggableFeedback,
  tags: ["autodocs"],
  title: "OWA/OakDraggableFeedback",
  argTypes: {
    children: { type: "string" },
  },
  args: {
    children: "A bunch of balloons landed on the moon.",
    feedback: "correct",
  },
  parameters: {
    controls: {
      include: ["children", "feedback"],
    },
    backgrounds: {
      default: "light",
    },
  },
  render: (args) => <OakDraggableFeedback {...args} />,
};
export default meta;

type Story = StoryObj<typeof OakDraggableFeedback>;

export const Correct: Story = {
  args: {
    feedback: "correct",
  },
};

export const Incorrect: Story = {
  args: {
    feedback: "incorrect",
  },
};
