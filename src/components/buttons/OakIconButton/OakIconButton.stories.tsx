import React from "react";
import { Meta, StoryObj } from "@storybook/nextjs";

import { OakIconButton } from "./OakIconButton";

import { oakIconNames } from "@/components/images-and-icons/OakIcon";
import { generateVariantTableStory } from "@/storybook-helpers/variantTable";

const controlIconNames = [
  null,
  [...oakIconNames].sort((a, b) => a.localeCompare(b)),
].flat();

const meta: Meta<typeof OakIconButton> = {
  component: OakIconButton,
  tags: ["autodocs"],
  title: "components/Buttons/OakIconButton",
  argTypes: {
    isLoading: {
      control: "boolean",
    },
    iconName: {
      options: controlIconNames,
    },
    $colorScheme: {
      options: ["primary", "inverted"],
    },
    $size: {
      options: ["sm", "md"],
    },
    $variant: {
      options: ["primary", "secondary"],
    },
    $disabled: {
      control: "boolean",
    },
  },
  parameters: {
    controls: {
      include: [
        "isLoading",
        "iconName",
        "$colorScheme",
        "$size",
        "$variant",
        "$disabled",
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakIconButton>;

export const Default: Story = {
  render: (args) => <OakIconButton {...args}>Primary Button</OakIconButton>,
  args: {
    iconName: "arrow-right",
    $colorScheme: "primary",
    $size: "md",
    $variant: "primary",
  },
};

export const VariantGrid = generateVariantTableStory({
  component: OakIconButton,
  defaultProps: {
    iconName: "arrow-right",
  },
  states: [
    { name: "default", props: {} },
    { name: "disabled", props: { $disabled: true } },
    { name: "loading", props: { isLoading: true } },
  ],
  variants: [
    { $colorScheme: "primary", $size: "md", $variant: "primary" },
    { $colorScheme: "primary", $size: "sm", $variant: "primary" },
    { $colorScheme: "inverted", $size: "md", $variant: "primary" },
    { $colorScheme: "inverted", $size: "sm", $variant: "primary" },
    { $colorScheme: "primary", $size: "md", $variant: "secondary" },
    { $colorScheme: "primary", $size: "sm", $variant: "secondary" },
  ],
});
