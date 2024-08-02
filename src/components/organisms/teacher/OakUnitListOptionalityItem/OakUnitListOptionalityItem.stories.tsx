import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakUnitListOptionalityItem } from "./OakUnitListOptionalityItem";

import { OakFlex } from "@/components/atoms";

const meta: Meta<typeof OakUnitListOptionalityItem> = {
  title: "components/organisms/teacher/OakUnitListOptionalityItem",
  component: OakUnitListOptionalityItem,
  tags: ["autodocs"],
  args: {
    nullTitle: "British Empire in India and Africa",
    index: 1,
    yearTitle: "Year 10",
    firstItemRef: undefined,
    optionalityUnits: [
      {
        title:
          "Migration: What do sources tell us about the British Empire in India and Africa?",
        href: "#",
        lessonCount: 10,
        onClick: () => console.log("onClick!"),
      },
      {
        title: "Migration: What do sources tell us about the ",
        href: "#",
        lessonCount: 10,
        onClick: () => console.log("onClick!"),
      },
      {
        title: "Migration: What do sources tell us ?",
        onClick: () => console.log("onClick!"),
        href: "#",
        lessonCount: 10,
      },
      {
        title:
          "Migration: What do sources tell us about the British Empire in India and Africa?",
        onClick: () => console.log("onClick!"),
        href: "#",
        lessonCount: 10,
      },
    ],
  },
  argTypes: {
    yearTitle: { control: { type: "text" } },
    index: { control: { type: "number" } },
    nullTitle: { control: { type: "text" } },
    unavailable: { control: { type: "boolean" } },
  },
  decorators: [
    (Story) => {
      return (
        <OakFlex
          $flexDirection="column"
          $gap="space-between-l"
          $background={"grey20"}
          $pa={"inner-padding-xl"}
          role="list"
        >
          {Story()}
          <OakUnitListOptionalityItem
            nullTitle={
              "Numerals 1-10 this is a very long title (unavailable example) "
            }
            index={2}
            yearTitle="Year 10"
            unavailable={true}
            optionalityUnits={[
              {
                title:
                  "Migration: What do sources tell us about the British Empire in India and Africa?",

                href: "#",
                lessonCount: 10,
              },
              {
                title:
                  "Migration: What do sources tell us about the British Empire in India and Africa?",

                href: "#",
                lessonCount: 10,
              },
              {
                title:
                  "Migration: What do sources tell us about the British Empire in India and Africa?",

                href: "#",
                lessonCount: 10,
              },
            ]}
            firstItemRef={undefined}
          />
        </OakFlex>
      );
    },
  ],
  parameters: {
    controls: {
      include: [
        "nullTitle",
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
