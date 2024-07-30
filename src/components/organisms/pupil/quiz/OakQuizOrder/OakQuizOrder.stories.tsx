import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakQuizOrder } from "./OakQuizOrder";

const meta: Meta<typeof OakQuizOrder> = {
  component: OakQuizOrder,
  tags: ["autodocs"],
  title: "components/organisms/pupil/OakQuizOrder",
  parameters: {
    controls: {
      include: [],
    },
    backgrounds: {
      default: "light",
    },
  },
  args: {
    initialItems: [
      { id: "2", label: "Grass" },
      { id: "3", label: "Sunlight" },
      { id: "4", label: "Mouse" },
      { id: "5", label: "Hawk" },
      { id: "9", label: "Grasshopper" },
    ],
  },
  render: (args) => <OakQuizOrder {...args} />,
};
export default meta;

type Story = StoryObj<typeof OakQuizOrder>;

export const Default: Story = {};

export const Highlighted: Story = {
  args: {
    isHighlighted: true,
  },
};

export const WithManyOptions: Story = {
  args: {
    initialItems: [
      { id: "1", label: "Snake" },
      { id: "2", label: "Grass" },
      { id: "3", label: "Sunlight" },
      { id: "4", label: "Mouse" },
      { id: "5", label: "Hawk" },
      { id: "6", label: "Rabbit" },
      { id: "7", label: "Bear" },
      { id: "8", label: "Fox" },
      { id: "9", label: "Grasshopper" },
      { id: "10", label: "Wolf" },
    ],
  },
};
