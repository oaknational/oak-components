import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakQuizMatch } from "./OakQuizMatch";

const meta: Meta<typeof OakQuizMatch> = {
  component: OakQuizMatch,
  tags: ["autodocs"],
  title: "components/organisms/pupil/OakQuizMatch",
  parameters: {
    controls: {
      include: [],
    },
    backgrounds: {
      default: "light",
    },
  },
  args: {
    initialOptions: [
      { id: "1", label: "Comma" },
      { id: "2", label: "Apostrophe" },
      { id: "3", label: "Question mark" },
      { id: "4", label: "Full stop" },
      { id: "5", label: "Exclamation mark" },
    ],
    initialSlots: [
      { id: "1", label: "conveys intense emotion" },
      { id: "2", label: "poses a question" },
      { id: "3", label: "ends a declarative sentence" },
      { id: "4", label: "separates a main clause and a subordinate clause" },
      { id: "5", label: "shows belonging" },
    ],
  },
  render: (args) => <OakQuizMatch {...args} />,
};
export default meta;

type Story = StoryObj<typeof OakQuizMatch>;

export const Default: Story = {};

export const Highlighted: Story = {
  args: {
    isHighlighted: true,
  },
};

export const WithManyOptions: Story = {
  args: {
    initialOptions: [
      { id: "1", label: "Book" },
      { id: "2", label: "Bicycle" },
      { id: "3", label: "Guitar" },
      { id: "4", label: "Camera" },
      { id: "5", label: "Paintbrush" },
      { id: "6", label: "Football" },
      { id: "7", label: "Cooking pot" },
      { id: "8", label: "Telescope" },
      { id: "9", label: "Headphones" },
      { id: "10", label: "Passport" },
    ],
    initialSlots: [
      { id: "1", label: "a source of knowledge and adventure" },
      { id: "2", label: "a mode of transportation and exercise" },
      {
        id: "3",
        label: "a musical instrument for creating melodies and rhythms",
      },
      { id: "4", label: "captures memories and moments in time" },
      { id: "5", label: "used to express creativity on canvas" },
      { id: "6", label: "a tool for teamwork and athletic skill" },
      { id: "7", label: "essential for preparing delicious meals" },
      { id: "8", label: "explores the wonders of the cosmos" },
      { id: "9", label: "provides immersive audio experiences" },
      {
        id: "10",
        label: "gateway to new destinations and cultural experiences",
      },
    ],
  },
};
