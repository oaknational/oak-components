import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakLessonInfoCard } from "./OakLessonInfoCard";

import { OakFlex, oakIconNames } from "@/components/base";

const controlIconNames = [...oakIconNames].sort();

const meta: Meta<typeof OakLessonInfoCard> = {
  component: OakLessonInfoCard,
  tags: ["autodocs"],
  title: "components/integrated/OakLessonInfoCard",
  argTypes: {
    iconName: {
      options: controlIconNames,
      control: { type: "select" },
    },
  },
  args: {
    iconName: "supervision-level",
    infoCardTitle: "Lesson 1",
    infoCardDescription:
      "This is a description This is a description This is a description This is a description This is a description This is a description ",
    tag: "h1",
  },
  decorators: [
    (Story) => (
      <OakFlex $background={"bg-decorative1-main"} $pa={"inner-padding-xl"}>
        <Story />
      </OakFlex>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof OakLessonInfoCard>;

export const Default: Story = {
  render: (args) => <OakLessonInfoCard {...args} />,
};
