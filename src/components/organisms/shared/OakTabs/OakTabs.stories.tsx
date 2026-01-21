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
    colourVariant: {
      control: { type: "radio" },
      options: ["white", "black"],
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
    colourVariant: "black",
    tabs: ["Unit sequence", "Explainer", "Download"],
  },
};
