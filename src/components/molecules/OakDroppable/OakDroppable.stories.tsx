import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakDraggable } from "../OakDraggable";

import { OakDroppable } from "./OakDroppable";

const meta: Meta<typeof OakDroppable> = {
  component: OakDroppable,
  tags: ["autodocs"],
  title: "components/molecules/OakDroppable",
  argTypes: {
    children: { type: "string" },
    labelSlot: { type: "string" },
    isOver: { type: "boolean" },
  },
  parameters: {
    controls: {
      include: ["children", "labelSlot", "isOver"],
    },
    backgrounds: {
      default: "light",
    },
  },
  render: (args) => <OakDroppable {...args} />,
};
export default meta;

type Story = StoryObj<typeof OakDroppable>;

export const Default: Story = {};

/**
 * A draggable has entered the droppable so it has entered an active state
 */
export const DraggingOver: Story = {
  args: {
    isOver: true,
  },
};

export const Occupied: Story = {
  args: {
    children: <OakDraggable>Elephant</OakDraggable>,
  },
};

export const WithSlotLabel: Story = {
  args: {
    labelSlot: "never forgets",
  },
};

export const OccupiedWithSlotLabel: Story = {
  args: {
    labelSlot: "never forgets",
    children: <OakDraggable>Elephant</OakDraggable>,
  },
};
/**
 * A draggable has entered the droppable so it has entered an active state
 */
export const DraggingOverWithSlotLabel: Story = {
  args: {
    isOver: true,
    labelSlot: "never forgets",
  },
};

export const WithLongSlotLabel: Story = {
  args: {
    labelSlot:
      "which animal never forgets and is the largest land animal on earth?",
  },
};

export const WithAVeryLongSlotLabel: Story = {
  args: {
    labelSlot:
      "which animal is the largest land mammal with a long trunk, large ears, and tusks? Known for intelligence and social behavior, it symbolizes strength and conservation efforts worldwide.",
  },
};
