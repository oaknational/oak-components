import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakUnitListOptionalityItem } from "./OakUnitListOptionalityItem";

import { OakFlex } from "@/components/atoms";

const meta: Meta<typeof OakUnitListOptionalityItem> = {
  title: "components/organisms/teacher/OakUnitListOptionalityItem",
  component: OakUnitListOptionalityItem,
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
        <OakFlex
          $flexDirection="column"
          $gap="space-between-m"
          $background={"bg-decorative4-main"}
          $pa={"inner-padding-xl"}
          role="list"
        >
          {Story()}
          {/* <OakUnitListOptionalityItem
            title={"Numerals 1-10 (Legacy example)"}
            lessonCount={10}
            index={2}
            isLegacy={true}
            yearTitle="Year 10"
            href={""}
          /> */}
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

type Story = StoryObj<typeof OakUnitListOptionalityItem>;

export const Default: Story = {
  render: (args) => <OakUnitListOptionalityItem {...args} />,
  args: {},
};
