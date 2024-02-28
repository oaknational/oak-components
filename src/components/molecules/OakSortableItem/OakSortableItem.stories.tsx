import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSortableItem } from "./OakSortableItem";

const meta: Meta<typeof OakSortableItem> = {
  component: OakSortableItem,
  tags: ["autodocs"],
  title: "components/molecules/OakSortableItem",
  args: {
    children: "A bunch of balloons landed on the moon.",
  },
  parameters: {
    controls: {
      include: ["children"],
    },
    backgrounds: {
      default: "light",
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakSortableItem>;

export const Default: Story = {
  render: (args) => <OakSortableItem {...args} tabIndex={0} />,
};

export const Active: Story = {
  render: (args) => <OakSortableItem {...args} tabIndex={0} isActive />,
};

export const Ghost: Story = {
  render: (args) => <OakSortableItem {...args} tabIndex={0} isGhost />,
};
