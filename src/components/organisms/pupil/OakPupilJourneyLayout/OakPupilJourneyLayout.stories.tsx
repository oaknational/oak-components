import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakPupilJourneyHeader } from "../OakPupilJourneyHeader";

import { OakPupilJourneyLayout } from "./OakPupilJourneyLayout";

import { OakBox, OakFlex } from "@/components/atoms";
import { OakTertiaryButton } from "@/components/molecules";

const meta: Meta<typeof OakPupilJourneyLayout> = {
  component: OakPupilJourneyLayout,
  tags: ["autodocs"],
  title: "components/organisms/pupil/OakPupilJourneyLayout",
  decorators: [(Story) => <Story />],
  argTypes: {
    phase: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
  },
  parameters: {
    controls: {
      include: ["phase"],
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
          <OakPupilJourneyHeader
            iconBackground={args.phase}
            iconName="subject-science"
            alt="icon"
            breadcrumbs={["first", "second", "third", "fourth"]}
            title="Pupil Journey Header"
          />
        </OakFlex>
      }
    >
      <OakBox $background={"bg-neutral"}>
        <p>Section content</p>
      </OakBox>
    </OakPupilJourneyLayout>
  ),
};
