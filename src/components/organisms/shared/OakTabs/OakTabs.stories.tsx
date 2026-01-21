import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakTabs } from "./OakTabs";

const meta: Meta<typeof OakTabs> = {
  component: OakTabs,
  tags: ["autodocs"],
  argTypes: {
    sizeVariant: {
      control: { type: "radio" },
      options: ["default", "compact"],
    },
    colorVariant: {
      control: { type: "radio" },
      options: ["white", "black"],
    },
    activeTab: {
      control: { type: "radio" },
      options: ["Unit sequence", "Explainer", "Download"],
    },
  },
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof OakTabs>;

export const Default: Story = {
  render: (args) => <OakTabs {...args} />,
  args: {
    sizeVariant: "default",
    colorVariant: "black",
    tabs: ["Unit sequence", "Explainer", "Download"],
    activeTab: "Unit sequence",
  },
};
