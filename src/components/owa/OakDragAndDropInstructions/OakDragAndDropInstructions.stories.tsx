import React from "react";
import { Meta, StoryObj } from "@storybook/nextjs";

import { OakDragAndDropInstructions } from "./OakDragAndDropInstructions";

const meta: Meta<typeof OakDragAndDropInstructions> = {
  component: OakDragAndDropInstructions,
  tags: ["autodocs"],
  title: "OWA/OakDragAndDropInstructions",
  parameters: {
    controls: {
      include: [],
    },
    backgrounds: {
      default: "light",
    },
  },
  render: (args) => <OakDragAndDropInstructions {...args} />,
};
export default meta;

type Story = StoryObj<typeof OakDragAndDropInstructions>;

export const Default: Story = {};
