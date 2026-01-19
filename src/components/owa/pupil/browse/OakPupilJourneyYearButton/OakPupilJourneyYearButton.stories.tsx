import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakPupilJourneyYearButton } from "./OakPupilJourneyYearButton";

const meta: Meta<typeof OakPupilJourneyYearButton> = {
  component: OakPupilJourneyYearButton,
  tags: ["autodocs"],
  title: "OWA/pupil/browse/OakPupilJourneyYearButton",
  argTypes: {
    phase: { control: { type: "radio" }, options: ["primary", "secondary"] },
    disabled: { control: { type: "boolean" } },
  },
  parameters: {
    controls: {
      include: ["phase", "disabled"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakPupilJourneyYearButton>;

export const Default: Story = {
  render: (args) => (
    <OakPupilJourneyYearButton {...args}>Year 1</OakPupilJourneyYearButton>
  ),
  args: { phase: "primary", disabled: false },
};

export const Disabled: Story = {
  render: (args) => (
    <OakPupilJourneyYearButton {...args}>Year 1</OakPupilJourneyYearButton>
  ),
  args: { disabled: true },
};
