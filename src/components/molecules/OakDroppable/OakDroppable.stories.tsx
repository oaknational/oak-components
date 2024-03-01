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
    isOver: { type: "boolean" },
  },
  parameters: {
    controls: {
      include: ["children", "isOver"],
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

export const ADraggableHasEnteredTheDroppable: Story = {
  args: {
    isOver: true,
  },
};

export const Occupied: Story = {
  args: {
    children: <OakDraggable>Elephant</OakDraggable>,
  },
};
