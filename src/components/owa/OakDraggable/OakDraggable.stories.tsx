import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakDraggable } from "./OakDraggable";

const meta: Meta<typeof OakDraggable> = {
  component: OakDraggable,
  tags: ["autodocs"],
  title: "OWA/OakDraggable",
  argTypes: {
    children: { type: "string" },
    isDragging: { type: "boolean" },
    isDisabled: { type: "boolean" },
  },
  args: {
    children: "A bunch of balloons landed on the moon.",
  },
  parameters: {
    controls: {
      include: ["isDragging", "isDisabled", "children"],
    },
    backgrounds: {
      default: "light",
    },
  },
  render: (args) => <OakDraggable {...args} tabIndex={0} />,
};
export default meta;

type Story = StoryObj<typeof OakDraggable>;

export const Default: Story = {};

export const Dragging: Story = {
  args: {
    isDragging: true,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    isReadOnly: true,
  },
};

export const WithColors: Story = {
  args: {
    color: "text-inverted",
    background: "bg-btn-primary",
    iconColor: "icon-main",
  },
};
