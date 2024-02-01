import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakPrimaryNav } from "./OakPrimaryNav";

const meta: Meta<typeof OakPrimaryNav> = {
  component: OakPrimaryNav,
  tags: ["autodocs"],
  title: "components/integrated/OakPrimaryNav",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakPrimaryNav>;

const navItems = [
  {
    href: "/",
    children: "nav item 1",
  },
  {
    href: "/",
    isCurrent: true,
    children: "nav item 2",
  },
  {
    href: "/",
    children: "nav item 3",
  },
  {
    href: "/",
    children: "nav item 4",
  },
];

export const Default: Story = {
  render: (args) => <OakPrimaryNav {...args} />,
  args: {
    navItems,
    ariaLabel: "primary navigation",
  },
};
