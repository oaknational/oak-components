import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakPupilJourneyOptionalityButton } from "./OakPupilJourneyOptionalityButton";

import { OakFlex } from "@/components/atoms";

const meta: Meta<typeof OakPupilJourneyOptionalityButton> = {
  component: OakPupilJourneyOptionalityButton,
  tags: ["autodocs"],
  title:
    "OWA (❌ to be moved out)/pupil/browse/OakPupilJourneyOptionalityButton",
  args: {
    title: "Lesson 1",
    numberOfLessons: 7,
    href: "#",
  },
  argTypes: {
    title: { control: { type: "text" } }, // type: "text" is the default
    numberOfLessons: { control: { type: "number" } },
    disabled: { control: { type: "boolean" } },
    unavailable: { control: { type: "boolean" } },
  },
  decorators: [
    (Story) => {
      return (
        <OakFlex $flexDirection="column" $gap="spacing-24" $pa={"spacing-24"}>
          {Story()}
        </OakFlex>
      );
    },
  ],
  parameters: {
    controls: {
      include: ["title", "numberOfLessons", "disabled", "unavailable"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakPupilJourneyOptionalityButton>;

export const Default: Story = {
  render: (args) => <OakPupilJourneyOptionalityButton {...args} />,
};

export const ReallyLongTitle: Story = {
  render: (args) => <OakPupilJourneyOptionalityButton {...args} />,
  args: {
    title:
      "This is a really long title that should wrap around to the next line",
    numberOfLessons: 6,
  },
};

export const Disabled: Story = {
  render: (args) => <OakPupilJourneyOptionalityButton {...args} />,
  args: {
    disabled: true,
  },
};

export const Unavailable: Story = {
  render: (args) => <OakPupilJourneyOptionalityButton {...args} />,
  args: {
    disabled: true,
    unavailable: true,
  },
};
