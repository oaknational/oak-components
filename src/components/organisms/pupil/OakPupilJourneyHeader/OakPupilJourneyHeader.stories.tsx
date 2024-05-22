import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakPupilJourneyHeader } from "./OakPupilJourneyHeader";

const meta: Meta<typeof OakPupilJourneyHeader> = {
  title: "Components/organisms/pupil/OakPupilJourneyHeader",
  component: OakPupilJourneyHeader,
  tags: ["autodocs"],
  argTypes: {
    iconBackground: {},
    iconName: {},
  },
  parameters: {
    controls: {
      include: ["iconBackground", "iconName", "alt", "breadcrumbs", "title"],
    },
  },
  args: {
    iconBackground: "primary",
    iconName: "subject-science",
    alt: "icon",
    breadcrumbs: ["first", "second", "third", "fourth"],
    title: "Pupil Journey Header",
  },
};

export default meta;

type Story = StoryObj<typeof OakPupilJourneyHeader>;

export const Default: Story = {
  render: (args) => <OakPupilJourneyHeader {...args} />,
  args: {},
};

export const WithOptionality: Story = {
  render: (args) => <OakPupilJourneyHeader {...args} />,
  args: { optionalityTitle: "Optional title" },
};
