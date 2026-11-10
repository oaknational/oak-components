import { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";

import { OakDialogFooter, OakDialogFooterProps } from "./OakDialogFooter";

import { OakPrimaryButton } from "@/components/buttons/OakPrimaryButton";
import { OakSecondaryButton } from "@/components/buttons/OakSecondaryButton";
import { OakBox } from "@/components/layout-and-structure/OakBox";

const meta: Meta<typeof OakDialogFooter> = {
  component: OakDialogFooter,
  tags: ["autodocs"],
  title: "components/Messaging and feedback/OakDialogFooter",
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
  // Shown at a typical dialog width so the layouts are easy to compare
  render: (args: OakDialogFooterProps) => (
    <OakBox $width="spacing-480">
      <OakDialogFooter {...args}>
        {(args.layout === "horizontal" || args.layout === "vertical") && (
          <OakSecondaryButton>Secondary</OakSecondaryButton>
        )}
        <OakPrimaryButton>Primary</OakPrimaryButton>
      </OakDialogFooter>
    </OakBox>
  ),
};

export default meta;

type Story = StoryObj<typeof OakDialogFooter>;

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
