import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakPreviousLessonsHeading } from "./OakPreviousLessonsHeading";

const meta: Meta<typeof OakPreviousLessonsHeading> = {
  title: "Components/organisms/pupil/OakPreviousLessonsHeading",
  component: OakPreviousLessonsHeading,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    controls: {
      include: [
        "numberOfLessons",
        "yearDescription",
        "subjectTitle",
        "tierDescription",
        "examBoardDescription",
      ],
    },
  },
  args: {
    numberOfLessons: 5,
    yearDescription: "Year 7",
    subjectTitle: "Maths",
    tierDescription: "Higher",
  },
};

export default meta;

type Story = StoryObj<typeof OakPreviousLessonsHeading>;

export const Default: Story = {
  render: (args) => <OakPreviousLessonsHeading {...args} />,
  args: {},
};
