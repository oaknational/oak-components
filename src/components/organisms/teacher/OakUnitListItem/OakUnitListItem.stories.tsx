import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakUnitListItem } from "./OakUnitListItem";

import { OakBox, OakFlex, OakHeading, OakP } from "@/components/atoms";

const meta: Meta<typeof OakUnitListItem> = {
  component: OakUnitListItem,
  tags: ["autodocs"],
  args: {
    title:
      "Migration: What do sources tell us about the British Empire in India and Africa?",
    index: 1,
    href: "#",
    yearTitle: "Year 10",
    lessonCount: 10,
    isLegacy: false,
    onClick: () => console.log("onClick!"),
  },
  argTypes: {
    title: { control: { type: "text" } },
    yearTitle: { control: { type: "text" } },
    index: { control: { type: "number" } },
    lessonCount: { control: { type: "number" } },
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
            lessonCount={10}
            index={2}
            isLegacy={true}
            yearTitle="Year 10"
            href={""}
          />
          <OakUnitListItem
            title={"'The Three Billy Goats Gruff': reading and writing"}
            lessonCount={7}
            index={3}
            yearTitle="Year 10"
            unavailable={true}
            isLegacy={false}
            href={""}
          />
          <OakUnitListItem
            title={"Test Unit"}
            lessonCount={8}
            index={4}
            yearTitle="Year 9"
            isLegacy={false}
            href={""}
          />
          <OakUnitListItem
            title={"Apple"}
            lessonCount={41}
            index={5}
            yearTitle="Year 9"
            isLegacy={false}
            href={""}
          />
          <OakUnitListItem
            title={
              "'The Three Billy Goats Gruff': reading and writing 'The Three Billy Goats Gruff': reading and writing"
            }
            lessonCount={41}
            index={5}
            yearTitle="Year 9"
            isLegacy={false}
            href={""}
          />
        </OakFlex>
      );
    },
  ],
  parameters: {
    controls: {
      include: ["title", "index", "lessonCount", "unavailable", "isLegacy"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakUnitListItem>;

export const Default: Story = {
  render: (args) => <OakUnitListItem {...args} />,
  args: {},
};
