import React from "react";
import { StoryObj, Meta } from "@storybook/nextjs";

import { OakSubjectIconButton } from "./OakSubjectIconButton";

const meta: Meta<typeof OakSubjectIconButton> = {
  component: OakSubjectIconButton,
  tags: ["autodocs"],
  title: "OWA/OakSubjectIconButton",
  argTypes: {
    colorScheme: {
      control: { type: "radio" },
      options: ["primary", "secondary", "non-curriculum"],
    },
    subjectIconName: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
    subjectText: { control: { type: "text" } },
    variant: {
      control: { type: "radio" },
      options: ["vertical", "horizontal"],
    },
    element: {
      control: { type: "radio" },
      options: ["button", "a"],
    },
    isSelected: {
      control: "boolean",
    },
  },
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
    colorScheme: "primary",
    subjectIconName: "subject-english",
    disabled: false,
    subjectText: "English",
    variant: "vertical",
    isSelected: false,
  },
};

export const Disabled: Story = {
  render: (args) => (
    <OakSubjectIconButton {...args}>{args.subjectText}</OakSubjectIconButton>
  ),
  args: {
    disabled: true,
    subjectIconName: "subject-english",
    colorScheme: "primary",
    subjectText: "English",
    variant: "vertical",
    isSelected: false,
  },
};
