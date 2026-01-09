import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakDroppable } from "./OakDroppable";

import { OakDraggable } from "@/components/molecules/OakDraggable";

const meta: Meta<typeof OakDroppable> = {
  component: OakDroppable,
  tags: ["autodocs"],
  title: "OWA (❌ to be moved out)/OakDroppable",
  argTypes: {
    children: { type: "string" },
    labelSlot: { type: "string" },
  },
  parameters: {
    controls: {
      include: [
        "children",
        "labelSlot",
        "isOver",
        "isHighlighted",
        "isDisabled",
      ],
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

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

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
    canDrop: true,
    children: <OakDraggable>Elephant</OakDraggable>,
  },
};

export const Highlighted: Story = {
  args: {
    isHighlighted: true,
  },
};

export const WithSlotLabel: Story = {
  args: {
    canDrop: true,
    labelSlot: "never forgets",
  },
};

export const OccupiedWithSlotLabel: Story = {
  args: {
    canDrop: true,
    labelSlot: "never forgets",
    children: <OakDraggable>Elephant</OakDraggable>,
  },
};
/**
 * A draggable has entered the droppable so it has entered an active state
 */
export const DraggingOverWithSlotLabel: Story = {
  args: {
    canDrop: true,
    isOver: true,
    labelSlot: "never forgets",
  },
};

export const WithLongSlotLabel: Story = {
  args: {
    canDrop: true,
    labelSlot:
      "which animal never forgets and is the largest land animal on earth?",
  },
};

export const WithAVeryLongSlotLabel: Story = {
  args: {
    canDrop: true,
    labelSlot:
      "which animal is the largest land mammal with a long trunk, large ears, and tusks? Known for intelligence and social behavior, it symbolizes strength and conservation efforts worldwide.",
  },
};
