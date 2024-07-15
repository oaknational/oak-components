import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakPupilJourneyUnitsFilter } from "./OakPupilJourneyUnitsFilter";

const meta: Meta<typeof OakPupilJourneyUnitsFilter> = {
  title: "Components/organisms/pupil/OakPupilJourneyUnitsFilter",
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
      description: "Selected menu item",
      control: {
        type: "number",
      },
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
  render: (args) => <OakPupilJourneyUnitsFilter {...args} />,
  args: {
    menuItems: [
      { text: "All", id: 0 },
      { text: "Biology", id: 1 },
      { text: "Chemistry", id: 2 },
      { text: "Physics", id: 3 },
    ],
    selected: 2,
    onSelected: (menuItemId: number) => console.log(menuItemId),
  },
};
