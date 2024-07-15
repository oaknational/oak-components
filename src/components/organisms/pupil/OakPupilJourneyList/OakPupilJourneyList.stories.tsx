import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakPupilJourneyListCounter } from "../OakPupilJourneyListCounter";
import { OakPupilJourneyPreviousLessons } from "../OakPupilJourneyPreviousLessons";

import { OakPupilJourneyList } from "./OakPupilJourneyList";

import { OakPupilJourneyListItem } from "@/components/organisms/pupil/OakPupilJourneyListItem";
import { OakPupilJourneyHeader } from "@/components/organisms/pupil/OakPupilJourneyHeader";
import {
  OakButtonAsRadioGroup,
  OakSecondaryButtonAsRadio,
} from "@/components/molecules";
import { OakFlex } from "@/components/atoms/OakFlex";

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
      counterSlot={
        <OakPupilJourneyListCounter
          count={10}
          countHeader="New lessons"
          tag={"h2"}
        />
      }
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
    <OakPupilJourneyList
      {...args}
      counterSlot={
        <OakPupilJourneyPreviousLessons
          numberOfLessons={10}
          listItems={["test 1", "test 2", "test 3"]}
        />
      }
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

export const WithFilter: Story = {
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
      counterSlot={
        <OakPupilJourneyListCounter
          count={10}
          countHeader="New lessons"
          tag={"h2"}
        />
      }
      filterSlot={
        <OakFlex $justifyContent={"end"}>
          <OakButtonAsRadioGroup ariaLabelledby="test" name="test">
            <OakSecondaryButtonAsRadio value="all">
              All
            </OakSecondaryButtonAsRadio>
            <OakSecondaryButtonAsRadio value="1">
              Option 1
            </OakSecondaryButtonAsRadio>
          </OakButtonAsRadioGroup>
        </OakFlex>
      }
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
