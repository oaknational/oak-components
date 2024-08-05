import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakUnitListItem } from "../OakUnitListItem";
import { OakUnitListOptionalityItem } from "../OakUnitListOptionalityItem";

import { OakUnitsContainer } from "./OakUnitsContainer";

const meta: Meta<typeof OakUnitsContainer> = {
  component: OakUnitsContainer,
  tags: ["autodocs"],
  argTypes: {
    isLegacy: { type: "boolean" },
    showHeader: { type: "boolean" },
    subject: { type: "string" },
    phase: { type: "string" },
    curriculumHref: { type: "string" },
  },
  parameters: {
    controls: {
      include: ["isLegacy", "showHeader", "subject", "phase", "curriculumHref"],
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
        lessonCount={null}
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
      />,
      <OakUnitListItem
        index={3}
        yearTitle={"Year 11"}
        title={"Lesson 3"}
        lessonCount={null}
        isLegacy={false}
        href={"#"}
      />,
      <OakUnitListItem
        index={4}
        title={
          "Lesson 4 - English  - a lesson with a longer title, a lesson with a longer title"
        }
        yearTitle={"Year 11"}
        lessonCount={null}
        isLegacy={false}
        href={"#"}
      />,
    ],
    subject: "maths",
    phase: "secondary",
    curriculumHref: "https://www.thenational.academy",
  },
};
