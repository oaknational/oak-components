import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakUnitListOptionalityItem } from "./OakUnitListOptionalityItem";

import { OakBox, OakFlex, OakHeading, OakP } from "@/components/atoms";

const meta: Meta<typeof OakUnitListOptionalityItem> = {
  title: "components/organisms/teacher/OakUnitListOptionalityItem",
  component: OakUnitListOptionalityItem,
  tags: ["autodocs"],
  args: {
    nullTitle: "British Empire in India and Africa",
    index: 1,
    href: "#",
    yearTitle: "Year 10",
    lessonCount: 10,
    isLegacy: false,
    optionalityUnits: [
      {
        title:
          "Migration: What do sources tell us about the British Empire in India and Africa?",

        href: "#",
        lessonCount: 10,
      },
      {
        title: "Migration: What do sources tell us about the ",

        href: "#",
        lessonCount: 10,
      },
      {
        title: "Migration: What do sources tell us ?",

        href: "#",

        lessonCount: 10,
      },
      {
        title:
          "Migration: What do sources tell us about the British Empire in India and Africa?",

        href: "#",
        lessonCount: 10,
      },
    ],
  },
  argTypes: {
    title: { control: { type: "text" } },
    yearTitle: { control: { type: "text" } },
    index: { control: { type: "number" } },
    nullTitle: { control: { type: "text" } },
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
          <OakBox>
            <OakHeading tag="h3" $font={"heading-4"}>
              Maths Unit
            </OakHeading>
            <OakP>
              Brand-new teaching resources, thoughtfully crafted by teachers for
              classroom needs.
            </OakP>
          </OakBox>
          {Story()}
          <OakUnitListOptionalityItem
            nullTitle={"Numerals 1-10 (Legacy example) this is a long tite"}
            index={2}
            isLegacy={true}
            yearTitle="Year 10"
            disabled={true}
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
            ]}
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
