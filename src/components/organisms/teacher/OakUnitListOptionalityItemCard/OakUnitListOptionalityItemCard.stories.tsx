import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakUnitListOptionalityItemCard } from "./OakUnitListOptionalityItemCard";

import { OakFlex } from "@/components/atoms";

const meta: Meta<typeof OakUnitListOptionalityItemCard> = {
  title: "components/organisms/teacher/OakUnitListOptionalityItemCard",
  component: OakUnitListOptionalityItemCard,
  tags: ["autodocs"],
  args: {
    title:
      "Migration: What do sources tell us about the British Empire in India and Africa?",
    index: 1,
    href: "#",
    yearTitle: "Year 10",
    lessonCount: 10,
    isLegacy: false,
  },
  argTypes: {
    title: { control: { type: "text" } },
    yearTitle: { control: { type: "text" } },
    index: { control: { type: "number" } },
    lessonCount: { control: { type: "number" } },
    disabled: { control: { type: "boolean" } },
    unavailable: { control: { type: "boolean" } },
    isLegacy: { control: { type: "boolean" } },
  },
  decorators: [
    (Story) => {
      return (
        <OakFlex $background={"grey10"} $pa={"inner-padding-xl"} role="list">
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
