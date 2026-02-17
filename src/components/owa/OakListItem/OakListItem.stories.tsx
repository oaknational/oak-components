import React, { useState } from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakListItem } from "./OakListItem";

import { OakBox } from "@/components/layout-and-structure";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakHeading } from "@/components/typography/OakHeading";
import { OakP } from "@/components/typography/OakP";
import { OakUiRoleToken } from "@/styles";
import { OakRadioGroup } from "@/components/form-elements";

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
  title: "OWA/OakListItem",
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

const SelectableComponent = () => {
  const [value, setValue] = useState("0");
  return (
    <OakRadioGroup
      name={"as-radio-test"}
      value={value}
      onChange={(e) => {
        console.log("e.target.value:", e.target.value);
        setValue(e.target.value);
      }}
    >
      {unitItems.map((item, index) => (
        <OakListItem
          {...item}
          asRadio
          radioValue={item.title}
          key={index}
          onClick={() => console.log("onClick!")}
        />
      ))}
    </OakRadioGroup>
  );
};

export const Selectable: Story = {
  render: () => <SelectableComponent />,
  args: {},
};
