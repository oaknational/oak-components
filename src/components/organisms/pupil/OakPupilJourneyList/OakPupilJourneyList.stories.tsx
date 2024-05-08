import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakPupilJourneyList } from "./OakPupilJourneyList";

import { OakPupilJourneyListItem } from "@/components/organisms/pupil/OakPupilJourneyListItem";

const meta: Meta<typeof OakPupilJourneyList> = {
  component: OakPupilJourneyList,
  tags: ["autodocs"],
  title: "components/organisms/pupil/OakPupilJourneyList",
  argTypes: {
    phase: { control: { options: ["primary", "secondary"] } },
  },
  parameters: {
    controls: {
      include: ["phase"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakPupilJourneyList>;

export const Default: Story = {
  render: (args) => (
    <OakPupilJourneyList {...args}>
      <OakPupilJourneyListItem title="Lesson 1" index={1} href="#" />
      <OakPupilJourneyListItem title="Lesson 2" index={2} href="#" />
      <OakPupilJourneyListItem title="Lesson 3" index={3} href="#" />
    </OakPupilJourneyList>
  ),
  args: {
    phase: "primary",
  },
};
