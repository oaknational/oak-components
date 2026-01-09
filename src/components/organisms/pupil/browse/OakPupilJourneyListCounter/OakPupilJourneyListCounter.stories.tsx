import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakPupilJourneyListCounter } from "./OakPupilJourneyListCounter";

const meta: Meta<typeof OakPupilJourneyListCounter> = {
  component: OakPupilJourneyListCounter,
  tags: ["autodocs"],
  title: "OWA (❌ to be moved out)/pupil/browse/OakPupilJourneyListCounter",
  argTypes: {},
  parameters: {
    controls: {
      include: ["count", "countHeader"],
    },
  },
  args: {
    count: 5,
    countHeader: "Lessons",
    tag: "h2",
  },
};

export default meta;

type Story = StoryObj<typeof OakPupilJourneyListCounter>;

export const Default: Story = {
  render: (args) => <OakPupilJourneyListCounter {...args} />,
  args: {},
};
