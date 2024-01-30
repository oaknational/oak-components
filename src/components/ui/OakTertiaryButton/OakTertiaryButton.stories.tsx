import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakTertiaryButton } from "./OakTertiaryButton";

import { OakFlex } from "@/components/base";

const meta: Meta<typeof OakTertiaryButton> = {
  component: OakTertiaryButton,
  tags: ["autodocs"],
  title: "components/ui/OakTertiaryButton",
  argTypes: {},
  parameters: {
    controls: {
      include: ["iconName"],
    },
  },
  decorators: [(Story) => <OakFlex $gap="space-between-m">{Story()}</OakFlex>],
};
export default meta;

type Story = StoryObj<typeof OakTertiaryButton>;

export const Default: Story = {
  render: (args) => (
    <OakFlex $flexWrap={"wrap"}>
      <OakTertiaryButton {...args}>Tertiary Button</OakTertiaryButton>
      <OakTertiaryButton {...args} disabled>
        Disabled Button
      </OakTertiaryButton>
      <OakTertiaryButton {...args} isLoading>
        Loading Button
      </OakTertiaryButton>
      <OakTertiaryButton {...args}>Leading icon</OakTertiaryButton>
      <OakTertiaryButton {...args} isTrailingIcon>
        Trailing icon
      </OakTertiaryButton>
    </OakFlex>
  ),
  args: {
    iconName: "chevron-right",
  },
};

export const LinkStyledAsButton: Story = {
  render: (args) => (
    <OakFlex $flexWrap={"wrap"}>
      <OakTertiaryButton {...args}>Tertiary Link</OakTertiaryButton>
    </OakFlex>
  ),
  args: {
    element: "a",
    href: "/",
    iconName: "chevron-right",
  },
};
