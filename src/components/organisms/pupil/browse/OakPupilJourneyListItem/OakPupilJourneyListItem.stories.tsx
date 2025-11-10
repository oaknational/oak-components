import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakPupilJourneyListItem } from "./OakPupilJourneyListItem";

import { OakFlex } from "@/components/atoms";

const meta: Meta<typeof OakPupilJourneyListItem> = {
  component: OakPupilJourneyListItem,
  tags: ["autodocs"],
  args: {
    title: "Lesson 1",
    index: 1,
    href: "#",
  },
  argTypes: {
    title: { control: { type: "text" } },
    index: { control: { type: "number" } },
    numberOfLessons: { control: { type: "number" } },
    disabled: { control: { type: "boolean" } },
    unavailable: { control: { type: "boolean" } },
  },
  decorators: [
    (Story) => {
      return (
        <OakFlex
          $flexDirection="column"
          $gap="spacing-24"
          $background={"bg-decorative4-main"}
          $pa={"spacing-24"}
          role="list"
        >
          {Story()}
        </OakFlex>
      );
    },
  ],
  parameters: {
    controls: {
      include: ["title", "index", "numberOfLessons", "disabled", "unavailable"],
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

export const ReallyLongTitle: Story = {
  render: (args) => <OakPupilJourneyListItem {...args} />,
  args: {
    title:
      "This is a really long title that should wrap around to the next line",
    numberOfLessons: 6,
  },
};

export const AsAButton: Story = {
  render: (args) => <OakPupilJourneyListItem {...args} as="button" />,
  args: {
    href: undefined,
  },
};

export const Disabled: Story = {
  render: (args) => <OakPupilJourneyListItem {...args} />,
  args: {
    disabled: true,
  },
};

export const Unavailable: Story = {
  render: (args) => <OakPupilJourneyListItem {...args} />,
  args: {
    disabled: true,
    unavailable: true,
    numberOfLessons: 14,
  },
};
