import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakLink } from "./OakLink";

const meta: Meta<typeof OakLink> = {
  component: OakLink,
  tags: ["autodocs"],
  title: "components/molecules/OakLink",
  argTypes: {
    children: { type: "string" },
  },
  parameters: {
    controls: {
      include: ["children", "iconName"],
    },
  },
  args: {
    children: "Link",
  },
  render: (args) => <OakLink {...args} />,
};
export default meta;

type Story = StoryObj<typeof OakLink>;

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

export const WithIconSizeProps: Story = {
  args: {
    element: "button",
    children: "External link with smaller icon",
    isTrailingIcon: true,
    iconName: "external",
    iconHeight: "all-spacing-4",
    iconWidth: "all-spacing-4",
  },
};
