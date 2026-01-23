import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakPupilJourneyOptionalityItem } from "./OakPupilJourneyOptionalityItem";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakPupilJourneyOptionalityButton } from "@/components/owa/pupil/browse/OakPupilJourneyOptionalityButton";

const meta: Meta<typeof OakPupilJourneyOptionalityItem> = {
  component: OakPupilJourneyOptionalityItem,
  tags: ["autodocs"],
  title: "OWA/pupil/browse/OakPupilJourneyOptionalityItem",

  args: {
    index: 1,
  },
  argTypes: {
    index: { control: { type: "number" } },
    disabled: { control: { type: "boolean" } },
    unavailable: { control: { type: "boolean" } },
  },
  decorators: [
    (Story) => (
      <OakFlex
        $background={"bg-neutral"}
        $pa={"spacing-24"}
        $flexDirection={"column"}
      >
        <Story />
      </OakFlex>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof OakPupilJourneyOptionalityItem>;

export const Default: Story = {
  render: (args) => (
    <OakPupilJourneyOptionalityItem {...args}>
      <OakPupilJourneyOptionalityButton
        title="Unit 1"
        numberOfLessons={7}
        href="#"
        disabled={args.disabled}
        unavailable={args.unavailable}
      />
      <OakPupilJourneyOptionalityButton
        title="Unit 2"
        numberOfLessons={8}
        href="#"
        disabled={args.disabled}
        unavailable={args.unavailable}
      />
    </OakPupilJourneyOptionalityItem>
  ),
};

export const FiveOptions: Story = {
  render: (args) => (
    <OakPupilJourneyOptionalityItem {...args}>
      <OakPupilJourneyOptionalityButton
        title="Unit 1"
        numberOfLessons={7}
        href="#"
        disabled={args.disabled}
        unavailable={args.unavailable}
      />
      <OakPupilJourneyOptionalityButton
        title="Unit 2"
        numberOfLessons={8}
        href="#"
        disabled={args.disabled}
        unavailable={args.unavailable}
      />
      <OakPupilJourneyOptionalityButton
        title="Unit 3"
        numberOfLessons={7}
        href="#"
        disabled={args.disabled}
        unavailable={args.unavailable}
      />
      <OakPupilJourneyOptionalityButton
        title="Unit 4 qeqwe ewe qewewqe wqewqe  wqewq "
        numberOfLessons={7}
        href="#"
        disabled={args.disabled}
        unavailable={args.unavailable}
      />
      <OakPupilJourneyOptionalityButton
        title="Unit 5 wqedasdcqwaxerf wecrcewerewx fecfwecrtwe recwefwecr refewr"
        numberOfLessons={7}
        href="#"
        disabled={args.disabled}
        unavailable={args.unavailable}
      />
    </OakPupilJourneyOptionalityItem>
  ),
};

FiveOptions.args = {};
