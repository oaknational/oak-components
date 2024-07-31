import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakPupilJourneyUnitsFilter } from "./OakPupilJourneyUnitsFilter";

import { OakFlex } from "@/components/atoms";

const meta: Meta<typeof OakPupilJourneyUnitsFilter> = {
  component: OakPupilJourneyUnitsFilter,
  tags: ["autodocs"],
  argTypes: {
    menuItems: {
      description: "Menu items to be displayed",
      control: {
        type: "object",
      },
    },
    selected: {
      control: { type: "select" },
      options: ["all", "biology", "chemistry", "physics"],
    },
    onSelected: {
      description: "Function to be called when a menu item is selected",
      action: "selected",
    },
  },
  parameters: {
    controls: {
      include: ["menuItems", "selected", "onSelected"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakPupilJourneyUnitsFilter>;

export const Default: Story = {
  render: (args) => (
    <OakFlex>
      <OakPupilJourneyUnitsFilter {...args} />
    </OakFlex>
  ),
  args: {
    menuItems: [
      { displayText: "All", value: "all" },
      { displayText: "Biology", value: "biology" },
      { displayText: "Chemistry", value: "chemistry" },
      { displayText: "Physics", value: "physics" },
    ],
    selected: "all",
    onSelected: (menuItem) => console.log(menuItem.value),
  },
};
