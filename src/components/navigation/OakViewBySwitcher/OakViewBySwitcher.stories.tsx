import React, { useState } from "react";
import { StoryObj, Meta } from "@storybook/nextjs";

import { OakViewBySwitcher } from "./OakViewBySwitcher";

import { OakFlex } from "@/index";

const meta: Meta<typeof OakViewBySwitcher> = {
  component: OakViewBySwitcher,
  title: "components/Navigation/OakViewBySwitcher",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof OakViewBySwitcher>;

const defaultTabs = [
  {
    label: "Key stage & year group",
    type: "button" as const,
    icon: "class-grouping" as const,
  },
  { label: "Strand", type: "button" as const, icon: "strand" as const },
];

export const Default: Story = {
  render: function DefaultStory(args) {
    const [activeTab, setActiveTab] = useState("Key stage & year group");
    return (
      <OakFlex $mt={"spacing-24"} $justifyContent={"center"}>
        <OakViewBySwitcher
          {...args}
          tabs={defaultTabs}
          activeTab={activeTab}
          onTabClick={(tab) => setActiveTab(tab)}
        />
      </OakFlex>
    );
  },
};

export const Compact: Story = {
  render: function CompactStory(args) {
    const [activeTab, setActiveTab] = useState("Key stage & year group");
    return (
      <OakFlex $mt={"spacing-24"} $justifyContent={"center"}>
        <OakViewBySwitcher
          {...args}
          tabs={defaultTabs}
          activeTab={activeTab}
          sizeVariant="compact"
          onTabClick={(tab) => setActiveTab(tab)}
        />
      </OakFlex>
    );
  },
};
