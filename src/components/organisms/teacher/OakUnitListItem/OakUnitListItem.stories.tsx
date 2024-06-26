import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakUnitListItem } from "./OakUnitListItem";

import { OakBox, OakFlex, OakHeading, OakP } from "@/components/atoms";

const meta: Meta<typeof OakUnitListItem> = {
  title: "components/organisms/teacher/OakUnitListItem",
  component: OakUnitListItem,
  tags: ["autodocs"],
  args: {
    title:
      "Migration: What do sources tell us about the British Empire in India and Africa?",
    index: 1,
    href: "#",
    yearGroup: "Year 10",
    numberOfLessons: 10,
    isLegacy: false,
  },
  argTypes: {
    title: { control: { type: "text" } },
    yearGroup: { control: { type: "text" } },
    index: { control: { type: "number" } },
    numberOfLessons: { control: { type: "number" } },
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
          <OakUnitListItem
            title={"Numerals 1-10 (Legacy example)"}
            numberOfLessons={10}
            index={2}
            isLegacy={true}
            yearGroup="Year 10"
          />
          <OakUnitListItem
            title={"'The Three Billy Goats Gruff': reading and writing"}
            numberOfLessons={7}
            index={3}
            yearGroup="Year 10"
            disabled={true}
          />
          <OakUnitListItem
            title={"Test Unit"}
            numberOfLessons={8}
            index={4}
            yearGroup="Year 9"
          />
          <OakUnitListItem
            title={"Apple"}
            numberOfLessons={41}
            index={5}
            yearGroup="Year 9"
          />
          <OakUnitListItem
            title={
              "'The Three Billy Goats Gruff': reading and writing 'The Three Billy Goats Gruff': reading and writing"
            }
            numberOfLessons={41}
            index={5}
            yearGroup="Year 9"
          />
        </OakFlex>
      );
    },
  ],
  parameters: {
    controls: {
      include: [
        "title",
        "index",
        "numberOfLessons",
        "disabled",
        "unavailable",
        "isLegacy",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakUnitListItem>;

export const Default: Story = {
  render: (args) => <OakUnitListItem {...args} />,
  args: {},
};
