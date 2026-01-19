import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakPrimaryNavItem } from "./OakPrimaryNavItem";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";

const meta: Meta<typeof OakPrimaryNavItem> = {
  component: OakPrimaryNavItem,
  tags: ["autodocs"],
  title: "components/Navigation/OakPrimaryNavItem (deprecated)",

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
    <OakFlex $gap="spacing-24">
      <OakFlex>
        <OakPrimaryNavItem {...args}>Primary nav item</OakPrimaryNavItem>
      </OakFlex>
    </OakFlex>
  ),
  args: {
    href: "/",
    shallow: true,
  },
};

export const Current: Story = {
  render: (args) => (
    <OakFlex $gap="spacing-24">
      <OakFlex>
        <OakPrimaryNavItem {...args}>
          Primary current nav item
        </OakPrimaryNavItem>
      </OakFlex>
    </OakFlex>
  ),
  args: {
    isCurrent: true,
    href: "/",
    shallow: true,
  },
};
