import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakTertiaryInvertedButton } from "./OakTertiaryInvertedButton";

import { OakFlex } from "@/components/atoms";

const meta: Meta<typeof OakTertiaryInvertedButton> = {
  component: OakTertiaryInvertedButton,
  tags: ["autodocs"],
  title: "components/molecules/OakTertiaryInvertedButton",
  argTypes: {},
  parameters: {
    controls: {
      include: ["iconName"],
    },
  },
  decorators: [(Story) => <OakFlex $gap="space-between-m">{Story()}</OakFlex>],
};
export default meta;

type Story = StoryObj<typeof OakTertiaryInvertedButton>;

export const Default: Story = {
  render: (args) => (
    <OakFlex $flexWrap={"wrap"} $gap={"space-between-m"}>
      <OakTertiaryInvertedButton {...args}>
        Tertiary Button
      </OakTertiaryInvertedButton>
      <OakTertiaryInvertedButton {...args} disabled>
        Disabled Button
      </OakTertiaryInvertedButton>
      <OakTertiaryInvertedButton {...args} isLoading>
        Loading Button
      </OakTertiaryInvertedButton>
      <OakTertiaryInvertedButton {...args}>
        Leading icon
      </OakTertiaryInvertedButton>
      <OakTertiaryInvertedButton {...args} isTrailingIcon>
        Trailing icon
      </OakTertiaryInvertedButton>
    </OakFlex>
  ),
  args: {
    iconName: "chevron-right",
  },
};

export const TertiaryButtonWithNoText: Story = {
  render: (args) => (
    <OakFlex $flexWrap={"wrap"} $gap={"space-between-m"}>
      <OakTertiaryInvertedButton {...args} />
      <OakTertiaryInvertedButton {...args} disabled />
      <OakTertiaryInvertedButton {...args} isLoading />
    </OakFlex>
  ),
  args: {
    iconName: "chevron-right",
    "aria-label": "Test",
  },
};

export const LinkStyledAsButton: Story = {
  render: (args) => (
    <OakFlex $flexWrap={"wrap"}>
      <OakTertiaryInvertedButton {...args}>
        Tertiary Link
      </OakTertiaryInvertedButton>
    </OakFlex>
  ),
  args: {
    element: "a",
    href: "/",
    iconName: "chevron-right",
  },
};
