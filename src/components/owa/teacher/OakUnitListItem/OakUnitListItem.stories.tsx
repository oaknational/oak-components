import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakUnitListItem } from "./OakUnitListItem";

import { OakBox } from "@/components/layout-and-structure/OakBox";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakHeading } from "@/components/typography/OakHeading";
import { OakP } from "@/components/typography/OakP";

const unitItems = [
  {
    title:
      "Migration: What do sources tell us about the British Empire in India and Africa?",
    lessonCount: "10 lessons",
    index: 1,
    yearTitle: "Year 10",
    unavailable: false,
    isLegacy: false,
  },
  {
    title: "Numerals 1-10 (Legacy example)",
    lessonCount: "10 lessons",
    index: 2,
    isLegacy: true,
    yearTitle: "Year 10",
    href: "",
  },
  {
    title: "'The Three Billy Goats Gruff': reading and writing",
    lessonCount: "7 lessons",
    index: 3,
    yearTitle: "Year 10",
    unavailable: true,
    isLegacy: false,
    href: "",
  },
  {
    title: "Test Unit",
    lessonCount: "8 lessons",
    index: 4,
    yearTitle: "Year 9",
    isLegacy: false,
    href: "",
  },
  {
    title: "Apple",
    lessonCount: "41 lessons",
    index: 5,
    yearTitle: "Year 9",
    isLegacy: false,
    href: "",
  },
  {
    title:
      "'The Three Billy Goats Gruff': reading and writing 'The Three Billy Goats Gruff': reading and writing",
    lessonCount: "41 lessons",
    index: 5,
    yearTitle: "Year 9",
    isLegacy: false,
    href: "",
  },
  {
    title:
      "'The Three Billy Goats Gruff': reading and writing 'The Three Billy Goats Gruff': reading and writing",
    lessonCount: "8/10 lessons",
    index: 5,
    yearTitle: "Year 9",
    isLegacy: false,
    href: "",
  },
];

const meta: Meta<typeof OakUnitListItem> = {
  component: OakUnitListItem,
  tags: ["autodocs"],
  title: "OWA/teacher/OakUnitListItem",
  args: {
    title:
      "Migration: What do sources tell us about the British Empire in India and Africa?",
    index: 1,
    href: "#",
    yearTitle: "Year 10",
    lessonCount: "10 lessons",
    isLegacy: false,
    onClick: () => console.log("onClick!"),
    isSaved: false,
    onSave: () => console.log("onSave!"),
  },
  argTypes: {
    title: { control: { type: "text" } },
    yearTitle: { control: { type: "text" } },
    index: { control: { type: "number" } },
    lessonCount: { control: { type: "number" } },
    unavailable: { control: { type: "boolean" } },
    isLegacy: { control: { type: "boolean" } },
    isSaved: { control: { type: "boolean" } },
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
        </OakFlex>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof OakUnitListItem>;

export const Default: Story = {
  render: () => (
    <>
      {unitItems.map((item, index) => (
        <OakUnitListItem
          key={index}
          {...item}
          onClick={() => console.log("onClick!")}
          href=""
        ></OakUnitListItem>
      ))}
    </>
  ),
  args: {},
};

export const WithSave: Story = {
  render: () => (
    <>
      {unitItems.map((item, index) => (
        <OakUnitListItem
          key={index}
          {...item}
          onClick={() => console.log("onClick!")}
          href=""
          isSaved={Math.random() > 0.5}
          onSave={() => console.log("onSave!")}
        ></OakUnitListItem>
      ))}
    </>
  ),
  args: {},
};

export const EditableItem: Story = {
  render: (args) => <OakUnitListItem {...args}></OakUnitListItem>,
  args: {},
};
