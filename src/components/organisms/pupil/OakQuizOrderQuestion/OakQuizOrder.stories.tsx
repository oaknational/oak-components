import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakQuizOrder } from "./OakQuizOrder";

const meta: Meta<typeof OakQuizOrder> = {
  component: OakQuizOrder,
  tags: ["autodocs"],
  title: "components/organisms/pupil/OakQuizOrderQuestion",
  args: {
    initialItems: [
      { id: "1", children: "Snake" },
      { id: "2", children: "Grass" },
      { id: "3", children: "Sunlight" },
      { id: "4", children: "Mouse" },
      { id: "5", children: "Hawk" },
      { id: "6", children: "Rabbit" },
      { id: "7", children: "Bear" },
      { id: "8", children: "Fox" },
      { id: "9", children: "Grasshopper" },
      { id: "10", children: "Wolf" },
    ],
  },
  parameters: {
    controls: {
      include: ["animation"],
    },
    backgrounds: {
      default: "light",
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakQuizOrder>;

export const Default: Story = {
  render: (args) => <OakQuizOrder {...args} />,
};
