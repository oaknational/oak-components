import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakPrimaryNavItem } from "./OakPrimaryNavItem";

import { OakFlex } from "@/components/base";

const meta: Meta<typeof OakPrimaryNavItem> = {
  component: OakPrimaryNavItem,
  tags: ["autodocs"],
  title: "components/integrated/OakPrimaryNavItem",
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

type Story = StoryObj<typeof OakPrimaryNavItem>;

export const Default: Story = {
  render: (args) => (
    <OakFlex $gap="space-between-m">
      <OakFlex>
        <OakPrimaryNavItem {...args} />
      </OakFlex>
    </OakFlex>
  ),
  args: {
    href: "/",
    shallow: true,
    label: "Primary nav item",
  },
};

export const Current: Story = {
  render: (args) => (
    <OakFlex $gap="space-between-m">
      <OakFlex>
        <OakPrimaryNavItem {...args} />
      </OakFlex>
    </OakFlex>
  ),
  args: {
    isCurrent: true,
    href: "/",
    shallow: true,
    label: "Primary current nav item",
  },
};
