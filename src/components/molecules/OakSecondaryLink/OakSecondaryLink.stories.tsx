import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSecondaryLink } from "./OakSecondaryLink";

const meta: Meta<typeof OakSecondaryLink> = {
  component: OakSecondaryLink,
  tags: ["autodocs"],
  title: "components/molecules/OakSecondaryLink",
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
  render: (args) => <OakSecondaryLink {...args} />,
};
export default meta;

type Story = StoryObj<typeof OakSecondaryLink>;

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
