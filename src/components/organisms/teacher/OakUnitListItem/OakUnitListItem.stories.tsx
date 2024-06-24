import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakUnitListItem } from "./OakUnitListItem";

import { OakFlex, OakHeading } from "@/components/atoms";

const meta: Meta<typeof OakUnitListItem> = {
  //  "title" is the title of the story and where to look for compoent in the storybook
  title: "Components/OakUnitListItem",
  component: OakUnitListItem,
  tags: ["autodocs"],
  args: {
    title: "Lesson 1",
    index: 1,
    href: "#",
    yearGroup: "Year 1",
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
          <OakHeading tag="h3">Unit</OakHeading>
          {Story()}
        </OakFlex>
      );
    },
  ],
  parameters: {
    controls: {
      include: ["title", "index", "numberOfLessons", "disabled", "unavailable"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakUnitListItem>;

export const Default: Story = {
  render: (args) => <OakUnitListItem {...args} />,
  args: {
    // Define your component's default props here
    //   $background: "bg-btn-primary",
    //   $color: "white",
    //   $ba: "border-solid-s",
    //   $pa: "inner-padding-s",
    //   $borderRadius: "border-radius-m",
  },
};
