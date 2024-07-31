import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakPupilJourneyProgrammeOptions } from "./OakPupilJourneyProgrammeOptions";

import { OakPupilJourneyYearButton } from "@/components/organisms/pupil/browse/OakPupilJourneyYearButton";
import { OakPupilJourneyHeader } from "@/components/organisms/pupil/browse/OakPupilJourneyHeader";
import { OakHeading } from "@/components/atoms";

const meta: Meta<typeof OakPupilJourneyProgrammeOptions> = {
  component: OakPupilJourneyProgrammeOptions,
  tags: ["autodocs"],

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
        <OakHeading $font={"heading-6"} tag="h1" $textAlign={"center"}>
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
