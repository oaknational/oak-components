import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakPupilJourneyListCounter } from "./OakPupilJourneyListCounter";

const meta: Meta<typeof OakPupilJourneyListCounter> = {
  title: "Components/organisms/pupil/OakPupilJourneyListCounter",
  component: OakPupilJourneyListCounter,
  tags: ["autodocs"],
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
