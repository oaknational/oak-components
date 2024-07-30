import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakPupilJourneyLayout } from "./OakPupilJourneyLayout";

import { OakBox } from "@/components/atoms";
import { OakTertiaryButton } from "@/components/molecules";

const meta: Meta<typeof OakPupilJourneyLayout> = {
  component: OakPupilJourneyLayout,
  tags: ["autodocs"],

  decorators: [(Story) => <Story />],
  argTypes: {
    phase: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
    sectionName: {
      control: {
        type: "select",
        options: [
          "tier-listing",
          "unit-listing",
          "lesson-listing",
          "subject-listing",
          "year-listing",
        ],
      },
    },
  },
  parameters: {
    controls: {
      include: ["phase", "sectionName"],
    },
    layout: "fullscreen",
  },
  args: {
    phase: "primary",
    sectionName: "lesson-listing",
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
    >
      <OakBox
        $background={"bg-neutral"}
        $width={["100%", "100%", "all-spacing-23"]}
        $minHeight={"all-spacing-24"}
        $mb="space-between-m"
      >
        <p>Section content</p>
      </OakBox>
    </OakPupilJourneyLayout>
  ),
};

export const NoTopNav: Story = {
  render: ({ sectionName, ...args }) => (
    <OakPupilJourneyLayout {...args} sectionName={sectionName}>
      <OakBox $background={"bg-neutral"} $minHeight={"all-spacing-20"}>
        <p>Section content</p>
      </OakBox>
    </OakPupilJourneyLayout>
  ),
  args: {
    sectionName: "subject-listing",
  },
};
