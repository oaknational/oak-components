import React, { useState } from "react";
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
  },
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof OakTabs>;

export const Default: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState("Unit sequence");

    return (
      <OakTabs
        {...args}
        onTabClick={(tab) => setActiveTab(tab)}
        activeTab={activeTab}
      />
    );
  },
  args: {
    sizeVariant: "default",
    colorVariant: "black",
    tabs: ["Unit sequence", "Explainer", "Download"],
  },
};
