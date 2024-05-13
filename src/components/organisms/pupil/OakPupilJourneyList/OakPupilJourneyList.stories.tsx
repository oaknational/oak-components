import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakPupilJourneyList } from "./OakPupilJourneyList";

import { OakPupilJourneyListItem } from "@/components/organisms/pupil/OakPupilJourneyListItem";
import { OakPupilJourneyHeader } from "@/components/organisms/pupil/OakPupilJourneyHeader";

const meta: Meta<typeof OakPupilJourneyList> = {
  component: OakPupilJourneyList,
  tags: ["autodocs"],
  title: "components/organisms/pupil/OakPupilJourneyList",
  argTypes: {
    phase: { control: { options: ["primary", "secondary"] } },
  },
  parameters: {
    controls: {
      include: ["phase", "titleSlot", "counterSlot"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakPupilJourneyList>;

export const Default: Story = {
  render: (args) => (
    <OakPupilJourneyList
      {...args}
      titleSlot={
        <OakPupilJourneyHeader
          title="Primary Lessons"
          iconName="subject-maths"
          breadcrumbs={["first", "second", "third"]}
        />
      }
      counterSlot={<div>Counter Slot Here</div>}
    >
      <OakPupilJourneyListItem title="Lesson 1" index={1} href="#" />
      <OakPupilJourneyListItem title="Lesson 2" index={2} href="#" />
      <OakPupilJourneyListItem title="Lesson 3" index={3} href="#" />
    </OakPupilJourneyList>
  ),

  args: {
    phase: "primary",
  },
};

export const NoTitle: Story = {
  render: (args) => (
    <OakPupilJourneyList {...args} counterSlot={<div>Counter Slot Here</div>}>
      <OakPupilJourneyListItem title="Lesson 1" index={1} href="#" />
      <OakPupilJourneyListItem title="Lesson 2" index={2} href="#" />
      <OakPupilJourneyListItem title="Lesson 3" index={3} href="#" />
    </OakPupilJourneyList>
  ),

  args: {
    phase: "primary",
  },
};
