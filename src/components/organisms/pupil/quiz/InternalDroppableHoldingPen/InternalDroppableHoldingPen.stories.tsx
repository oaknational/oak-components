import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalDroppableHoldingPen } from "./InternalDroppableHoldingPen";

import { OakDraggable } from "@/components/molecules";

const meta: Meta<typeof InternalDroppableHoldingPen> = {
  component: InternalDroppableHoldingPen,
  tags: ["autodocs"],
  title:
    "components/organisms/OWA (❌ to be moved out)/pupil/quiz/InternalDroppableHoldingPen",

  parameters: {
    controls: {
      include: [],
    },
    backgrounds: {
      default: "light",
    },
  },
  render: (args) => <InternalDroppableHoldingPen {...args} />,
};
export default meta;

type Story = StoryObj<typeof InternalDroppableHoldingPen>;

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
    children: (
      <>
        <OakDraggable>Elephant</OakDraggable>
        <OakDraggable>Kangaroo</OakDraggable>
        <OakDraggable>Shark</OakDraggable>
      </>
    ),
  },
};
