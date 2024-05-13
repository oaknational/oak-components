import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakPupilJourneyPreviousLessons } from "./OakPupilJourneyPreviousLessons";

const meta: Meta<typeof OakPupilJourneyPreviousLessons> = {
  title: "Components/organisms/pupil/OakPupilJourneyPreviousLessons",
  component: OakPupilJourneyPreviousLessons,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    controls: {
      include: ["numberOfLessons", "listItems"],
    },
  },
  args: {
    numberOfLessons: 5,
    listItems: ["Year 7", "Maths", "Higher"],
  },
};

export default meta;

type Story = StoryObj<typeof OakPupilJourneyPreviousLessons>;

export const Default: Story = {
  render: (args) => <OakPupilJourneyPreviousLessons {...args} />,
  args: {},
};
