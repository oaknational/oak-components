import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSecondaryLink } from "./OakSecondaryLink";

import { nonCryptoRandom } from "@/storybook-helpers/random";

const meta: Meta<typeof OakSecondaryLink> = {
  component: OakSecondaryLink,
  tags: ["autodocs"],
  title: "components/Navigation/OakSecondaryLink",
  argTypes: {
    children: { type: "string" },
    displayDisabled: { type: "boolean" },
    iconName: {
      control: { type: "select" },
      options: ["chevron-left", "chevron-right", "loading"],
    },
    isTrailingIcon: { type: "boolean" },
  },
  parameters: {
    controls: {
      include: ["children", "iconName", "isTrailingIcon", "displayDisabled"],
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
    href: `#${nonCryptoRandom()}`,
  },
};

export const AsAButton: Story = {
  args: {
    element: "button",
  },
};

export const WithIcon: Story = {
  args: {
    href: `#${nonCryptoRandom()}`,
    iconName: "chevron-left",
  },
};

export const WithTrailingIcon: Story = {
  args: {
    href: `#${nonCryptoRandom()}`,
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

export const DisplayDisabled: Story = {
  args: {
    element: "a",
    displayDisabled: true,
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
