import React from "react";
import { Meta, StoryObj } from "@storybook/nextjs";

import { OakLink } from "./OakLink";
import { variantConfig } from "./config";

import { oakIconNames } from "@/components/images-and-icons/OakIcon";

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
    variant: { options: Object.keys(variantConfig) },
  },
  parameters: {
    controls: {
      include: ["children", "iconName", "isTrailingIcon", "variant"],
    },
  },
  args: {
    children: "Link",
  },
  render: (args) => <OakLink {...args} />,
};
export default meta;

type Story = StoryObj<typeof OakLink>;

export const DefaultPrimary: Story = {
  args: {
    href: `#${Math.random()}`,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
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

export const WithFontProp: Story = {
  args: {
    element: "a",
    children: "External link with font prop",
    isTrailingIcon: true,
    variant: "secondary",
    iconName: "chevron-right",
    $font: "heading-3",
  },
};

export const WithSurroundingText: Story = {
  args: {
    iconName: "chevron-right",
    isTrailingIcon: true,
  },
  render: (args) => (
    <p>
      This is a paragraph with a wrapped link. This a paragraph with an This is
      a paragraph with a wrapped link. This is a paragraph with a wrapped link.
      This a paragraph with a wrapped link. This is a paragraph with a wrapped
      link.{" "}
      <OakLink {...args}>
        link here link here link here link here link here link here link here{" "}
        link here link here link here link here link here link here link here
      </OakLink>{" "}
      This is a paragraph with a wrapped link.{" "}
    </p>
  ),
};
