import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakUnitListOptionalityItem } from "./OakUnitListOptionalityItem";

import { OakFlex } from "@/components/atoms";

const optionalityUnits = [
  {
    title:
      "Migration: What do sources tell us about the British Empire in India and Africa?",
    href: "#",
    lessonCount: "10 lessons",
    onClick: () => console.log("onClick!"),
    slug: "migration",
  },
  {
    title: "Migration: What do sources tell us about the ",
    href: "#",
    lessonCount: "10 lessons",
    onClick: () => console.log("onClick!"),
    slug: "migration-2",
  },
  {
    title: "Migration: What do sources tell us ?",
    onClick: () => console.log("onClick!"),
    href: "#",
    lessonCount: "10 lessons",
    slug: "migration-3",
  },
  {
    title:
      "Migration: What do sources tell us about the British Empire in India and Africa?",
    onClick: () => console.log("onClick!"),
    href: "#",
    lessonCount: "10 lessons",
    slug: "migration-4",
  },
];

const optionalityItemData = [
  {
    nullTitle: "Numerals 1-10 this is a very long title",
    index: 2,
    yearTitle: "Year 10",
    unavailable: true,
    optionalityUnits: optionalityUnits,
  },
  {
    nullTitle: "Small unit",
    index: 3,
    yearTitle: "Year 11",
    optionalityUnits: optionalityUnits,
    unavailable: false,
  },
];

const meta: Meta<typeof OakUnitListOptionalityItem> = {
  title: "components/organisms/teacher/OakUnitListOptionalityItem",
  component: OakUnitListOptionalityItem,
  tags: ["autodocs"],
  args: {
    nullTitle: "British Empire in India and Africa",
    index: 1,
    yearTitle: "Year 10",
    firstItemRef: undefined,
    optionalityUnits,
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
          $gap="spacing-48"
          $background={"bg-neutral"}
          $pa={"spacing-24"}
          role="list"
        >
          {Story()}
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
  render: (args) => (
    <>
      <OakUnitListOptionalityItem {...args} />
      {optionalityItemData.map((item, i) => (
        <OakUnitListOptionalityItem
          key={item.nullTitle + i}
          {...item}
          firstItemRef={undefined}
        />
      ))}
    </>
  ),
  args: {},
};

export const WithSave: Story = {
  render: (args) => (
    <>
      <OakUnitListOptionalityItem {...args} />
      {optionalityItemData.map((item) => (
        <OakUnitListOptionalityItem
          {...item}
          firstItemRef={undefined}
          onSave={() => console.log("onSave!")}
          getIsSaved={() => Math.random() > 0.5}
        />
      ))}
    </>
  ),
  args: {
    onSave: () => console.log("onSave!"),
    getIsSaved: () => Math.random() > 0.5,
  },
};
