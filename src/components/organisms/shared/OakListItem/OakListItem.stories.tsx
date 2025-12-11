import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakListItem } from "./OakListItem";

import { OakBox, OakFlex, OakHeading, OakP } from "@/components/atoms";
import { OakUiRoleToken } from "@/styles";

const unitItems = [
  {
    title:
      "Migration: What do sources tell us about the British Empire in India and Africa?",
    index: 1,
    unavailable: false,
    isLegacy: false,
  },
  {
    title: "Numerals 1-10 (Legacy example)",
    index: 2,
    isLegacy: true,
  },
  {
    title: "'The Three Billy Goats Gruff': reading and writing",
    index: 3,
    unavailable: true,
    isLegacy: false,
  },
  {
    title: "Test Unit",
    index: 4,
    isLegacy: false,
    middleSlot: <OakP>Preview</OakP>,
    endSlot: <OakP>More info</OakP>,
  },
  {
    title: "Apple",
    index: 5,
    isLegacy: false,
    isExpanded: true,
    expandedContent: (
      <OakFlex $flexDirection={"column"}>
        <OakHeading tag="h4" $font={"heading-2"}>
          Hello
        </OakHeading>
        <OakP>World</OakP>
      </OakFlex>
    ),
  },
  {
    title: "Alt colours",
    index: 6,
    unavailable: false,
    isLegacy: false,
    indexBgColour: "bg-decorative3-main" as OakUiRoleToken,
    indexHoverBgColour: "bg-decorative3-main" as OakUiRoleToken,
    hoverBgColour: "bg-decorative3-subdued" as OakUiRoleToken,
  },
];

const meta: Meta<typeof OakListItem> = {
  component: OakListItem,
  tags: ["autodocs"],
  args: {
    title:
      "Migration: What do sources tell us about the British Empire in India and Africa?",
    index: 1,
    isLegacy: false,
    onClick: () => console.log("onClick!"),
  },
  argTypes: {
    title: { control: { type: "text" } },
    index: { control: { type: "number" } },
    unavailable: { control: { type: "boolean" } },
    isLegacy: { control: { type: "boolean" } },
  },
  decorators: [
    (Story) => {
      return (
        <OakFlex
          $flexDirection="column"
          $gap="spacing-24"
          $background={"bg-decorative4-very-subdued"}
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

type Story = StoryObj<typeof OakListItem>;

export const Default: Story = {
  render: () => (
    <>
      {unitItems.map((item, index) => (
        <OakListItem
          key={index}
          {...item}
          onClick={() => console.log("onClick!")}
        ></OakListItem>
      ))}
    </>
  ),
  args: {},
};

export const Selectable: Story = {
  render: () => (
    <>
      {unitItems.map((item, index) => (
        <OakListItem
          key={index}
          {...item}
          onClick={() => console.log("onClick!")}
          onCheckedChange={console.log}
        ></OakListItem>
      ))}
    </>
  ),
  args: {},
};
