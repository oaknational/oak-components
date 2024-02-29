import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSortableItem } from "../OakSortableItem";

import { OakSortableSlot } from "./OakSortableSlot";

const meta: Meta<typeof OakSortableSlot> = {
  component: OakSortableSlot,
  tags: ["autodocs"],
  title: "components/molecules/OakSortableSlot",
  parameters: {
    controls: {
      include: ["children", "isActive"],
    },
    backgrounds: {
      default: "light",
    },
  },
  render: (args) => <OakSortableSlot {...args} />,
};
export default meta;

type Story = StoryObj<typeof OakSortableSlot>;

export const Default: Story = {};

export const Active: Story = {
  args: {
    isActive: true,
  },
};

export const Occupied: Story = {
  args: {
    children: <OakSortableItem>Elephant</OakSortableItem>,
  },
};
