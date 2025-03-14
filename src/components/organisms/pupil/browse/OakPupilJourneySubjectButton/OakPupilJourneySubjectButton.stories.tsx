import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakPupilJourneySubjectButton } from "./OakPupilJourneySubjectButton";

const meta: Meta<typeof OakPupilJourneySubjectButton> = {
  component: OakPupilJourneySubjectButton,
  tags: ["autodocs"],
  argTypes: {
    phase: {
      control: { type: "radio" },
      options: ["primary", "secondary", "non-curriculum"],
    },
    subjectIconName: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
    subjectText: { control: { type: "text" } },
  },
  parameters: {
    controls: {
      include: ["phase", "subjectIconName", "disabled", "subjectText"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakPupilJourneySubjectButton>;

export const Default: Story = {
  render: (args) => (
    <OakPupilJourneySubjectButton {...args}>
      {args.subjectText}
    </OakPupilJourneySubjectButton>
  ),
  args: {
    phase: "primary",
    subjectIconName: "subject-english",
    disabled: false,
    subjectText: "English",
  },
};

export const Disabled: Story = {
  render: (args) => (
    <OakPupilJourneySubjectButton {...args}>
      {args.subjectText}
    </OakPupilJourneySubjectButton>
  ),
  args: {
    disabled: true,
    subjectIconName: "subject-english",
    phase: "primary",
    subjectText: "English",
  },
};
