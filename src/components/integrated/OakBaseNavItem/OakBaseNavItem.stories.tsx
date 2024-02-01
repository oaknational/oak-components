import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakBaseNavItem } from "./OakBaseNavItem";

import { OakFlex } from "@/components/base";

const meta: Meta<typeof OakBaseNavItem> = {
  component: OakBaseNavItem,
  tags: ["autodocs"],
  title: "components/ui/OakBaseNavItem",
  argTypes: {
    isCurrent: { type: "boolean" },
  },
  parameters: {
    controls: {
      include: ["isCurrent"],
    },
    backgrounds: {
      default: "light",
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakBaseNavItem>;

export const Default: Story = {
  render: (args) => (
    <OakFlex $gap="space-between-m">
      <OakFlex>
        <OakBaseNavItem {...args} />
      </OakFlex>
    </OakFlex>
  ),
  args: {
    isCurrent: false,
    href: "/",
    shallow: true,
    label: "Base nav item",
  },
};

export const Current: Story = {
  render: (args) => (
    <OakFlex $gap="space-between-m">
      <OakFlex>
        <OakBaseNavItem {...args} />
      </OakFlex>
    </OakFlex>
  ),
  args: {
    isCurrent: true,
    href: "/",
    shallow: true,
    label: "Base current nav item",
  },
};
