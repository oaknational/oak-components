import { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";

import { OakModalFooter, OakModalFooterProps } from "./OakModalFooter";

import { OakPrimaryButton } from "@/components/buttons/OakPrimaryButton";
import { OakSecondaryButton } from "@/components/buttons/OakSecondaryButton";
import { OakBox } from "@/components/layout-and-structure/OakBox";

const meta: Meta<typeof OakModalFooter> = {
  component: OakModalFooter,
  tags: ["autodocs"],
  title: "components/Messaging and feedback/OakModalFooter",
  argTypes: {
    layout: {
      control: "radio",
      options: ["horizontal", "vertical", "left", "right"],
    },
  },
  parameters: {
    controls: {
      include: ["layout"],
    },
  },
  args: {
    layout: "horizontal",
  },
  // Shown at a typical drawer width so the layouts are easy to compare
  render: (args: OakModalFooterProps) => {
    // Buttons fill the footer for horizontal / vertical, as in Figma
    const isFullWidth =
      args.layout === "horizontal" || args.layout === "vertical";
    const width = isFullWidth ? "100%" : undefined;
    return (
      <OakBox $width="spacing-480">
        <OakModalFooter {...args}>
          {isFullWidth && (
            <OakSecondaryButton width={width}>Secondary</OakSecondaryButton>
          )}
          <OakPrimaryButton width={width}>Primary</OakPrimaryButton>
        </OakModalFooter>
      </OakBox>
    );
  },
};

export default meta;

type Story = StoryObj<typeof OakModalFooter>;

export const Horizontal: Story = {};

export const Vertical: Story = {
  args: { layout: "vertical" },
};

export const Left: Story = {
  args: { layout: "left" },
};

export const Right: Story = {
  args: { layout: "right" },
};
