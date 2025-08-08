import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakHoverLink } from "./OakHoverLink";

import { oakIconNames } from "@/components/atoms";
import { oakAllSpacingTokens } from "@/styles/theme/spacing";

const controlIconNames = [...oakIconNames].sort((a, b) => a.localeCompare(b));

const meta: Meta<typeof OakHoverLink> = {
  component: OakHoverLink,
  tags: ["autodocs"],
  title: "components/molecules/OakHoverLink",
  argTypes: {
    displayDisabled: { type: "boolean" },
    children: { type: "string" },
    iconName: {
      options: controlIconNames,
    },
    isTrailingIcon: { type: "boolean" },
    iconHeight: { options: [...Object.keys(oakAllSpacingTokens)] },
    iconWidth: { options: [...Object.keys(oakAllSpacingTokens)] },
  },
  parameters: {
    controls: {
      include: [
        "children",
        "iconName",
        "isTrailingIcon",
        "iconHeight",
        "iconWidth",
        "displayDisabled",
      ],
    },
  },
  args: {
    children: "Link",
  },
  render: (args) => <OakHoverLink href="#" {...args} disabled={true} />,
};
export default meta;

type Story = StoryObj<typeof OakHoverLink>;

export const Default: Story = {
  args: {
    href: `#test`,
  },
};

export const AsAButton: Story = {
  args: {
    element: "button",
  },
};

export const WithIcon: Story = {
  args: {
    href: `#test`,
    iconName: "chevron-left",
  },
};

export const WithTrailingIcon: Story = {
  args: {
    href: `#test`,
    iconName: "chevron-right",
    isTrailingIcon: true,
  },
};

export const DisplayDisabled: Story = {
  args: {
    element: "button",
    displayDisabled: true,
    iconName: "chevron-left",
  },
};

export const WithIconSizeProps: Story = {
  args: {
    element: "a",
    children: "External link with icon size props",
    isTrailingIcon: true,
    iconName: "external",
    iconHeight: "all-spacing-6",
    iconWidth: "all-spacing-6",
  },
};
