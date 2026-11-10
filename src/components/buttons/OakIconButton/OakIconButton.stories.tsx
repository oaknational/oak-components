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
    $type: {
      options: ["primary", "secondary"],
    },
    disabled: {
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
        "$type",
        "disabled",
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakIconButton>;

export const Default: Story = {
  render: (args) => <OakIconButton {...args}>Primary Button</OakIconButton>,
  args: {
    iconName: "question-mark",
    $colorScheme: "primary",
    $size: "md",
    $type: "primary",
    "aria-label": "help",
  },
};

export const Disabled: Story = {
  render: (args) => <OakIconButton {...args}>Primary Button</OakIconButton>,
  args: {
    iconName: "question-mark",
    $colorScheme: "primary",
    $size: "md",
    $type: "primary",
    disabled: true,
    "aria-label": "help",
  },
};

export const VariantTable = generateVariantTableStory({
  component: OakIconButton,
  defaultProps: {
    iconName: "question-mark",
    "aria-label": "help",
  },
  states: [
    { name: "default", props: {} },
    { name: "disabled", props: { disabled: true } },
    { name: "loading", props: { isLoading: true } },
  ],
  variants: [
    { $colorScheme: "primary", $size: "md", $type: "primary" },
    { $colorScheme: "primary", $size: "sm", $type: "primary" },
    { $colorScheme: "inverted", $size: "md", $type: "primary" },
    { $colorScheme: "inverted", $size: "sm", $type: "primary" },
    { $colorScheme: "primary", $size: "md", $type: "secondary" },
    { $colorScheme: "primary", $size: "sm", $type: "secondary" },
  ],
});
