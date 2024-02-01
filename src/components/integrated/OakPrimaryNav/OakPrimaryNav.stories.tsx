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
    isCurrent: false,
    label: "nav item 1",
  },
  {
    href: "/",
    isCurrent: true,
    label: "nav item 2",
  },
  {
    href: "/",
    isCurrent: false,
    label: "nav item 3",
  },
  {
    href: "/",
    isCurrent: false,
    label: "nav item 4",
  },
];

export const Default: Story = {
  render: (args) => <OakPrimaryNav {...args} />,
  args: {
    navItems,
    ariaLabel: "primary navigation",
  },
};
