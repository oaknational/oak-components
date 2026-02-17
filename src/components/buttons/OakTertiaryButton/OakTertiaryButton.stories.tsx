import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakTertiaryButton } from "./OakTertiaryButton";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";

const meta: Meta<typeof OakTertiaryButton> = {
  component: OakTertiaryButton,
  tags: ["autodocs"],
  title: "components/Buttons/OakTertiaryButton (deprecated)",
  argTypes: {},
  parameters: {
    controls: {
      include: ["iconName"],
    },
  },
  decorators: [(Story) => <OakFlex $gap="spacing-24">{Story()}</OakFlex>],
};
export default meta;

type Story = StoryObj<typeof OakTertiaryButton>;

export const Default: Story = {
  render: (args) => (
    <OakFlex $flexWrap={"wrap"} $gap={"spacing-24"}>
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

export const TertiaryButtonWithNoText: Story = {
  render: (args) => (
    <OakFlex $flexWrap={"wrap"} $gap={"spacing-24"}>
      <OakTertiaryButton {...args} />
      <OakTertiaryButton {...args} disabled />
      <OakTertiaryButton {...args} isLoading />
    </OakFlex>
  ),
  args: {
    iconName: "chevron-right",
    ariaLabel: "test",
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
