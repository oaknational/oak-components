import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakPupilJourneyList } from "./OakPupilJourneyList";

import { OakPupilJourneyListCounter } from "@/components/owa/pupil/browse/OakPupilJourneyListCounter";
import { OakPupilJourneyListItemSubheading } from "@/components/owa/pupil/browse/OakPupilJourneyListItemSubheading";
import { OakPupilJourneyListItem } from "@/components/owa/pupil/browse/OakPupilJourneyListItem";
import { OakPupilJourneyHeader } from "@/components/owa/pupil/browse/OakPupilJourneyHeader";
import { OakButtonAsRadioGroup } from "@/components/form-elements/OakButtonAsRadioGroup";
import { OakSecondaryButtonAsRadio } from "@/components/form-elements/OakSecondaryButtonAsRadio";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";

const meta: Meta<typeof OakPupilJourneyList> = {
  component: OakPupilJourneyList,
  tags: ["autodocs"],
  title: "OWA/pupil/browse/OakPupilJourneyList",

  argTypes: {
    phase: { control: { options: ["primary", "secondary"] } },
  },
  parameters: {
    controls: {
      include: ["phase", "titleSlot", "subheadingSlot"],
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
      subheadingSlot={
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
      subheadingSlot={
        <OakPupilJourneyListItemSubheading
          textSlot={
            <OakPupilJourneyListCounter
              tag="h1"
              count={10}
              countHeader="Previously released lessons"
            />
          }
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
      subheadingSlot={
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
