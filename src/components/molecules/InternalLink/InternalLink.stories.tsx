import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalLink } from "./InternalLink";

const meta: Meta<typeof InternalLink> = {
  component: InternalLink,
  tags: ["autodocs"],
  title: "components/molecules/InternalLink",
  argTypes: {
    children: { type: "string" },
    element: { type: "string" },
  },
  parameters: {
    controls: {
      exclude: ["ref"],
    },
  },
  args: {
    children: "Link",
    color: "text-link-active",
    hoverColor: "text-link-hover",
    activeColor: "text-link-pressed",
    disabledColor: "text-disabled",
    visitedColor: "text-link-visited",
  },
  render: (args) => <InternalLink {...args} />,
};
export default meta;

type Story = StoryObj<typeof InternalLink>;

export const Default: Story = {
  args: {
    href: `#${Math.random()}`,
  },
};

export const AsAButton: Story = {
  args: {
    element: "button",
  },
};

export const WithIcon: Story = {
  args: {
    href: `#${Math.random()}`,
    iconName: "chevron-left",
  },
};

export const WithTrailingIcon: Story = {
  args: {
    href: `#${Math.random()}`,
    iconName: "chevron-right",
    isTrailingIcon: true,
  },
};

export const Disabled: Story = {
  args: {
    element: "button",
    disabled: true,
    iconName: "chevron-left",
  },
};

export const Loading: Story = {
  args: {
    element: "button",
    children: "Loading...",
    isLoading: true,
  },
};

export const WithoutUnderline: Story = {
  args: {
    textDecoration: "none",
  },
};
