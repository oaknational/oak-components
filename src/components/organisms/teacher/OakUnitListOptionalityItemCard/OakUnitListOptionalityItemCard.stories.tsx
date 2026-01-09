import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakUnitListOptionalityItemCard } from "./OakUnitListOptionalityItemCard";

import { OakFlex } from "@/components/atoms";

const meta: Meta<typeof OakUnitListOptionalityItemCard> = {
  component: OakUnitListOptionalityItemCard,
  tags: ["autodocs"],
  title: "OWA (❌ to be moved out)/teacher/OakUnitListOptionalityItemCard",
  args: {
    title:
      "Migration: What do sources tell us about the British Empire in India and Africa?",
    href: "/",
    lessonCount: "10 lessons",
    onClick: () => console.log("onClick!"),
    onSave: () => console.log("onSave!"),
    isSaved: false,
    slug: "migration",
  },
  argTypes: {
    title: { control: { type: "text" } },
    lessonCount: { control: { type: "text" } },
    unavailable: { control: { type: "boolean" } },
  },
  decorators: [
    (Story) => {
      return (
        <OakFlex $background={"bg-neutral"} $pa={"spacing-24"} role="list">
          {Story()}
        </OakFlex>
      );
    },
  ],
  parameters: {
    controls: {
      include: [
        "title",
        "index",
        "lessonCount",
        "disabled",
        "unavailable",
        "isLegacy",
        "isSaved",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakUnitListOptionalityItemCard>;

export const Default: Story = {
  render: (args) => <OakUnitListOptionalityItemCard {...args} />,
  args: {},
};
