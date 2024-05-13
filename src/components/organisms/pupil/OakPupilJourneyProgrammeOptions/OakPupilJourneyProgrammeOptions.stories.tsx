import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakPupilJourneyYearButton } from "../OakPupilJourneyYearButton";

import { OakPupilJourneyProgrammeOptions } from "./OakPupilJourneyProgrammeOptions";

import { OakPupilJourneyHeader } from "@/components/organisms/pupil/OakPupilJourneyHeader";
import { OakHeading } from "@/components/atoms";

const meta: Meta<typeof OakPupilJourneyProgrammeOptions> = {
  component: OakPupilJourneyProgrammeOptions,
  tags: ["autodocs"],
  title: "components/organisms/pupil/OakPupilJourneyProgrammeOptions",
  argTypes: {
    phase: { control: { options: ["primary", "secondary"] } },
  },
  parameters: {
    controls: {
      include: ["phase", "titleSlot", "optionTitleSlot"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakPupilJourneyProgrammeOptions>;

export const Default: Story = {
  render: (args) => (
    <OakPupilJourneyProgrammeOptions
      {...args}
      titleSlot={
        <OakPupilJourneyHeader
          title="Primary Lessons"
          iconName="subject-maths"
          breadcrumbs={["first", "second", "third"]}
          iconBackground={args.phase}
        />
      }
      optionTitleSlot={
        <OakHeading $font={"heading-6"} tag="h3" $textAlign={"center"}>
          Choose an exam board
        </OakHeading>
      }
    >
      <OakPupilJourneyYearButton phase={args.phase}>
        AQA
      </OakPupilJourneyYearButton>
      <OakPupilJourneyYearButton phase={args.phase}>
        Edexcel
      </OakPupilJourneyYearButton>
      <OakPupilJourneyYearButton phase={args.phase}>
        Edexcel
      </OakPupilJourneyYearButton>
    </OakPupilJourneyProgrammeOptions>
  ),

  args: {
    phase: "primary",
  },
};
