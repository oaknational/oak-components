import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakQuizMatch } from "./OakQuizMatch";

const meta: Meta<typeof OakQuizMatch> = {
  component: OakQuizMatch,
  tags: ["autodocs"],
  title: "OWA (❌ to be moved out)/pupil/quiz/OakQuizMatch",

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
      { id: "1", label: "Comma", announcement: "Comma" },
      { id: "2", label: "Apostrophe", announcement: "Apostrophe" },
      { id: "3", label: "Question mark", announcement: "Question mark" },
      { id: "4", label: "Full stop", announcement: "Full stop" },
      { id: "5", label: "Exclamation mark", announcement: "Exclamation mark" },
    ],
    initialSlots: [
      {
        id: "1",
        label: "conveys intense emotion",
        announcement: "conveys intense emotion",
      },
      { id: "2", label: "poses a question", announcement: "poses a question" },
      {
        id: "3",
        label: "ends a declarative sentence",
        announcement: "ends a declarative sentence",
      },
      {
        id: "4",
        label: "separates a main clause and a subordinate clause",
        announcement: "Subordinate",
      },
      { id: "5", label: "shows belonging", announcement: "Belonging" },
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
      { id: "1", label: "Book", announcement: "Book" },
      { id: "2", label: "Bicycle", announcement: "Bicycle" },
      { id: "3", label: "Guitar", announcement: "Guitar" },
      { id: "4", label: "Camera", announcement: "Camera" },
      { id: "5", label: "Paintbrush", announcement: "Paintbrush" },
      { id: "6", label: "Football", announcement: "Football" },
      { id: "7", label: "Cooking pot", announcement: "Cooking pot" },
      { id: "8", label: "Telescope", announcement: "Telescope" },
      { id: "9", label: "Headphones", announcement: "Headphones" },
      { id: "10", label: "Passport", announcement: "Passport" },
    ],
    initialSlots: [
      {
        id: "1",
        label: "a source of knowledge and adventure",
        announcement: "a source of knowledge and adventure",
      },
      {
        id: "2",
        label: "a mode of transportation and exercise",
        announcement: "a mode of transportation and exercise",
      },
      {
        id: "3",
        label: "a musical instrument for creating melodies and rhythms",
        announcement: "a musical instrument for creating melodies and rhythms",
      },
      {
        id: "4",
        label: "captures memories and moments in time",
        announcement: "captures memories and moments in time",
      },
      {
        id: "5",
        label: "used to express creativity on canvas",
        announcement: "used to express creativity on canvas",
      },
      {
        id: "6",
        label: "a tool for teamwork and athletic skill",
        announcement: "a tool for teamwork and athletic skill",
      },
      {
        id: "7",
        label: "essential for preparing delicious meals",
        announcement: "essential for preparing delicious meals",
      },
      {
        id: "8",
        label: "explores the wonders of the cosmos",
        announcement: "explores the wonders of the cosmos",
      },
      {
        id: "9",
        label: "provides immersive audio experiences",
        announcement: "provides immersive audio experiences",
      },
      {
        id: "10",
        label: "gateway to new destinations and cultural experiences",
        announcement: "gateway to new destinations and cultural experiences",
      },
    ],
  },
};
