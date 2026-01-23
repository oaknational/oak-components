import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakPupilJourneyListItemSubheading } from "./OakPupilJourneyListItemSubheading";

import { OakPupilJourneyListCounter } from "@/components/owa/pupil/browse/OakPupilJourneyListCounter";

const meta: Meta<typeof OakPupilJourneyListItemSubheading> = {
  component: OakPupilJourneyListItemSubheading,
  tags: ["autodocs"],
  title: "OWA/pupil/browse/OakPupilJourneyListItemSubheading",
  argTypes: {
    textSlot: { control: { type: "text" } },
  },
  parameters: {
    controls: {
      include: ["textSlot", "listItems"],
    },
  },
  args: {
    textSlot: (
      <OakPupilJourneyListCounter
        tag="h1"
        count={5}
        countHeader="Previously released lessons"
      />
    ),
    listItems: ["Year 7", "Maths", "Higher"],
  },
};

export default meta;

type Story = StoryObj<typeof OakPupilJourneyListItemSubheading>;

export const Default: Story = {
  render: (args) => <OakPupilJourneyListItemSubheading {...args} />,
  args: {},
};
