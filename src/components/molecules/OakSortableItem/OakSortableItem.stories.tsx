import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSortableItem } from "./OakSortableItem";

const meta: Meta<typeof OakSortableItem> = {
  component: OakSortableItem,
  tags: ["autodocs"],
  title: "components/molecules/OakSortableItem",
  argTypes: {
    children: { type: "string" },
  },
  args: {
    children: "A bunch of balloons landed on the moon.",
  },
  parameters: {
    controls: {
      include: ["isActive", "isGhost", "children"],
    },
    backgrounds: {
      default: "light",
    },
  },
  render: (args) => <OakSortableItem {...args} tabIndex={0} />,
};
export default meta;

type Story = StoryObj<typeof OakSortableItem>;

export const Default: Story = {};

export const Active: Story = {
  args: {
    isActive: true,
  },
};

export const Ghost: Story = {
  args: {
    isGhost: true,
  },
};
