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

export const Default: Story = {
  render: function DefaultStory(args) {
    const [activeTab, setActiveTab] = useState<
      "Key stage & year group" | "Strand"
    >("Key stage & year group");
    return (
      <OakFlex $mt={"spacing-24"} $justifyContent={"center"}>
        <OakViewBySwitcher
          {...args}
          activeTab={activeTab}
          onTabClick={(tab) => setActiveTab(tab)}
        />
      </OakFlex>
    );
  },
};
