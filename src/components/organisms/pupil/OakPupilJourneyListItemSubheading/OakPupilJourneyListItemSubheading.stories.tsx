import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakPupilJourneyPreviousLessons } from "./OakPupilJourneyListItemSubheading";

import { OakPupilJourneyListCounter } from "@/components/organisms";

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
    textSlot: (
      <OakPupilJourneyListCounter
        tag="h1"
        count={5}
        countHeader="Previously released lessons"
      />
    ),
    listItems: ["Year 7", "Maths", "Higher"],
  },
};

export default meta;

type Story = StoryObj<typeof OakPupilJourneyPreviousLessons>;

export const Default: Story = {
  render: (args) => <OakPupilJourneyPreviousLessons {...args} />,
  args: {},
};
