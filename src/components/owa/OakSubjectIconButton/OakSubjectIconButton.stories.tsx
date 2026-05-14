import React from "react";
import { StoryObj, Meta } from "@storybook/nextjs";

import { OakSubjectIconButton } from "./OakSubjectIconButton";

const meta: Meta<typeof OakSubjectIconButton> = {
  component: OakSubjectIconButton,
  tags: ["autodocs"],
  title: "OWA/OakSubjectIconButton",
  parameters: {
    controls: {
      include: [
        "phase",
        "subjectIconName",
        "disabled",
        "subjectText",
        "variant",
        "element",
        "selected",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakSubjectIconButton>;

export const Default: Story = {
  render: (args) => (
    <OakSubjectIconButton {...args}>{args.subjectText}</OakSubjectIconButton>
  ),
  args: {
    phase: "primary",
    subjectIconName: "subject-english",
    disabled: false,
    subjectText: "English",
    variant: "vertical",
  },
};

export const Disabled: Story = {
  render: (args) => (
    <OakSubjectIconButton {...args}>{args.subjectText}</OakSubjectIconButton>
  ),
  args: {
    disabled: true,
    subjectIconName: "subject-english",
    phase: "primary",
    subjectText: "English",
    variant: "vertical",
  },
};
