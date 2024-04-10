import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakPupilJourneyLayout } from "./OakPupilJourneyLayout";

import { OakBox, OakFlex, OakP } from "@/components/atoms";
import { OakTertiaryButton } from "@/components/molecules";

const meta: Meta<typeof OakPupilJourneyLayout> = {
  component: OakPupilJourneyLayout,
  tags: ["autodocs"],
  title: "components/organisms/pupil/OakPupilJourneyLayout",
  decorators: [(Story) => <Story />],
  parameters: {
    controls: {
      include: ["lessonSectionName"],
    },
    layout: "fullscreen",
  },
  args: {
    phase: "primary",
  },
};
export default meta;

type Story = StoryObj<typeof OakPupilJourneyLayout>;

export const Default: Story = {
  render: ({ sectionName, ...args }) => (
    <OakPupilJourneyLayout
      {...args}
      topNavSlot={
        <OakTertiaryButton iconName="arrow-left" href={"#"} element="a">
          View all units
        </OakTertiaryButton>
      }
      sectionName={sectionName}
      titleSlot={
        <OakFlex>
          <OakP>hello</OakP>
        </OakFlex>
      }
    >
      <OakBox
        $height="all-spacing-24"
        $ba="border-solid-xl"
        $borderColor="black"
      >
        <p>Section content</p>
      </OakBox>
    </OakPupilJourneyLayout>
  ),
};
