import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { PupilJourneyUnitsFilter } from "./PupilJourneyUnitsFilter";

const meta: Meta<typeof PupilJourneyUnitsFilter> = {
  title: "Components/organisms/pupil/PupilJourneyUnitsFilter",
  component: PupilJourneyUnitsFilter,
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

type Story = StoryObj<typeof PupilJourneyUnitsFilter>;

export const Default: Story = {
  render: (args) => <PupilJourneyUnitsFilter {...args} />,
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
