import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakLink } from "./OakLink";

import { oakIconNames } from "@/components/images-and-icons/OakIcon";
import { oakAllSpacingTokens } from "@/styles/theme/spacing";

const controlIconNames = [...oakIconNames].sort((a, b) => a.localeCompare(b));

const meta: Meta<typeof OakLink> = {
  component: OakLink,
  tags: ["autodocs"],
  title: "components/Navigation/OakLink",
  argTypes: {
    children: { type: "string" },
    iconName: {
      options: controlIconNames,
    },
    isTrailingIcon: { type: "boolean" },
    iconHeight: { options: Object.keys(oakAllSpacingTokens) },
    iconWidth: { options: Object.keys(oakAllSpacingTokens) },
  },
  parameters: {
    controls: {
      include: [
        "children",
        "iconName",
        "isTrailingIcon",
        "iconHeight",
        "iconWidth",
      ],
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
    element: "a",
    children: "External link with icon size props",
    isTrailingIcon: true,
    iconName: "external",
    iconHeight: "spacing-24",
    iconWidth: "spacing-24",
  },
};
