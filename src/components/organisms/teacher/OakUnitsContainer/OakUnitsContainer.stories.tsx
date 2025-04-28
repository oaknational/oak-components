import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakUnitListItem } from "../OakUnitListItem";
import { OakUnitListOptionalityItem } from "../OakUnitListOptionalityItem";

import { OakUnitsContainer } from "./OakUnitsContainer";

import { OakInlineBanner } from "@/components";

const meta: Meta<typeof OakUnitsContainer> = {
  component: OakUnitsContainer,
  tags: ["autodocs"],
  argTypes: {
    isLegacy: { type: "boolean" },
    showHeader: { type: "boolean" },
    subject: { type: "string" },
    phase: { type: "string" },
    curriculumHref: {
      control: {
        type: "radio",
      },
      options: ["Url", "Null"],
      mapping: { Url: "https://www.thenational.academy", Null: null },
    },
    isCustomUnit: { type: "boolean" },
    customHeadingText: { type: "string" },
    banner: {
      control: {
        type: "select",
      },
      options: ["show", "hide"],
      mapping: {
        empty: [],
        show: (
          <OakInlineBanner
            isOpen={true}
            message={"Example banner text"}
            type="neutral"
            $width={"100%"}
          />
        ),
        hide: null,
      },
    },
  },
  parameters: {
    controls: {
      include: [
        "isLegacy",
        "showHeader",
        "subject",
        "phase",
        "curriculumHref",
        "isCustomUnit",
        "customHeadingText",
        "banner",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakUnitsContainer>;

export const Default: Story = {
  render: (args) => <OakUnitsContainer {...args} />,
  args: {
    isLegacy: false,
    showHeader: true,
    unitCards: [
      <OakUnitListItem
        index={1}
        title={"Lesson 1"}
        lessonCount={"4 lessons"}
        isLegacy={false}
        yearTitle={"Year 10"}
        href={"#"}
      />,

      <OakUnitListOptionalityItem
        nullTitle={
          "Numerals 1-10 this is a very long title (unavailable example) "
        }
        index={2}
        yearTitle="Year 11"
        optionalityUnits={[
          {
            title:
              "Migration: What do sources tell us about the British Empire in India and Africa?",

            href: "#",
            lessonCount: "10 lessons",
            slug: "migration",
          },
          {
            title:
              "Migration: What do sources tell us about the British Empire in India and Africa?",

            href: "#",
            lessonCount: "10 lessons",
            slug: "migration-2",
          },
          {
            title:
              "Migration: What do sources tell us about the British Empire in India and Africa?",

            href: "#",
            lessonCount: "10 lessons",
            slug: "migration-3",
          },
        ]}
        firstItemRef={undefined}
      />,
      <OakUnitListItem
        index={3}
        yearTitle={"Year 11"}
        title={"Lesson 3"}
        lessonCount={"2 lessons"}
        isLegacy={false}
        href={"#"}
      />,
      <OakUnitListItem
        index={4}
        title={
          "Lesson 4 - English  - a lesson with a longer title, a lesson with a longer title"
        }
        yearTitle={"Year 11"}
        lessonCount={"3 lessons"}
        isLegacy={false}
        href={"#"}
      />,
      <OakUnitListItem
        index={4}
        title={
          "Lesson 4 - English  - a lesson with a longer title, a lesson with a longer title"
        }
        yearTitle={"Year 11"}
        lessonCount={"1/3 lessons"}
        isLegacy={false}
        href={"#"}
      />,
    ],
    subject: "maths",
    phase: "secondary",
    curriculumHref: "Url",
  },
};
