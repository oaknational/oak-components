import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakPupilJourneySubjectButton } from "./OakPupilJourneySubjectButton";

const meta: Meta<typeof OakPupilJourneySubjectButton> = {
  component: OakPupilJourneySubjectButton,
  tags: ["autodocs"],
  argTypes: {
    phase: { control: { type: "radio" }, options: ["primary", "secondary"] },
    subjectIconName: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
  },
  parameters: {
    controls: {
      include: ["phase", "subjectIconName", "disabled"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakPupilJourneySubjectButton>;

export const Default: Story = {
  render: (args) => (
    <OakPupilJourneySubjectButton {...args}>
      Subject
    </OakPupilJourneySubjectButton>
  ),
  args: {
    phase: "primary",
    subjectIconName: "subject-english",
    disabled: false,
  },
};

export const Disabled: Story = {
  render: (args) => (
    <OakPupilJourneySubjectButton {...args}>
      Subject
    </OakPupilJourneySubjectButton>
  ),
  args: { disabled: true },
};
