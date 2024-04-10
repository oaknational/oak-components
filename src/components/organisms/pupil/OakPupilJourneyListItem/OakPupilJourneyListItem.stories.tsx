import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakPupilJourneyListItem } from "./OakPupilJourneyListItem";

import { OakFlex } from "@/components/atoms";

const meta: Meta<typeof OakPupilJourneyListItem> = {
  component: OakPupilJourneyListItem,
  tags: ["autodocs"],
  title: "components/organisms/pupil/OakPupilJourneyListItem",
  args: {
    title: "Lesson 1",
    index: 1,
    href: "#",
  },
  decorators: [
    (Story) => {
      return (
        <OakFlex
          $flexDirection="column"
          $gap="space-between-m"
          $background={"bg-decorative4-main"}
          $pa={"inner-padding-xl"}
        >
          {Story()}
        </OakFlex>
      );
    },
  ],
  parameters: {
    controls: {
      include: [],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakPupilJourneyListItem>;

export const Default: Story = {
  render: (args) => <OakPupilJourneyListItem {...args} />,
};

export const Lessons: Story = {
  render: (args) => <OakPupilJourneyListItem {...args} />,
  args: {
    numberOfLessons: 6,
  },
};

export const AsAButton: Story = {
  render: (args) => <OakPupilJourneyListItem {...args} as="button" />,
};

export const Disabled: Story = {
  render: (args) => <OakPupilJourneyListItem {...args} />,
  args: {
    disabled: true,
  },
};
