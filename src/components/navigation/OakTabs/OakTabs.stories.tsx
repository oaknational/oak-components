import React, { useState } from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakTabs } from "./OakTabs";

const meta: Meta<typeof OakTabs> = {
  component: OakTabs,
  title: "components/Navigation/OakTabs",
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

export const TabsAsButtons: Story = {
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
    tabs: [
      { label: "Unit sequence", type: "button" },
      { label: "Explainer", type: "button" },
      { label: "Download", type: "button" },
    ],
  },
};

export const TabsAsLinks: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState("Unit sequence");

    return (
      <OakTabs
        {...args}
        onTabClick={(tab, event) => {
          event.preventDefault();
          setActiveTab(tab);
        }}
        activeTab={activeTab}
      />
    );
  },
  args: {
    sizeVariant: "default",
    colorVariant: "black",
    tabs: [
      { label: "Unit sequence", type: "link", href: "www.google.com" },
      { label: "Explainer", type: "link", href: "www.google.com" },
      { label: "Download", type: "link", href: "www.google.com" },
    ],
  },
};
