import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSortableSlot } from "./OakSortableSlot";

const meta: Meta<typeof OakSortableSlot> = {
  component: OakSortableSlot,
  tags: ["autodocs"],
  title: "components/molecules/OakSortableSlot",
  args: {
    slotName: "1",
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

type Story = StoryObj<typeof OakSortableSlot>;

export const Default: Story = {
  render: (args) => <OakSortableSlot {...args} />,
};

export const Active: Story = {
  render: (args) => <OakSortableSlot {...args} isActive />,
};
