import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakTertiaryInvertedButton } from "./OakTertiaryInvertedButton";

import { OakFlex } from "@/components/atoms";
import { oakColorFilterTokens } from "@/styles/theme/color";

const colorFilterControl = {
  control: "select" as const,
  options: Object.keys(oakColorFilterTokens),
};

const meta: Meta<typeof OakTertiaryInvertedButton> = {
  component: OakTertiaryInvertedButton,
  tags: ["autodocs"],
  title: "components/molecules/OakTertiaryInvertedButton",
  argTypes: {
    iconColorFilter: colorFilterControl,
    iconBorderColor: colorFilterControl,
  },
  parameters: {
    controls: {
      include: ["iconName", "iconColorFilter", "iconBorderColor"],
    },
  },
  decorators: [(Story) => <OakFlex $gap="spacing-24">{Story()}</OakFlex>],
};
export default meta;

type Story = StoryObj<typeof OakTertiaryInvertedButton>;

export const Default: Story = {
  render: (args) => (
    <OakFlex $flexWrap={"wrap"} $gap={"spacing-24"}>
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
    iconColorFilter: "black",
    iconBorderColor: "black",
  },
};

export const TertiaryButtonWithNoText: Story = {
  render: (args) => (
    <OakFlex $flexWrap={"wrap"} $gap={"spacing-24"}>
      <OakTertiaryInvertedButton {...args} />
      <OakTertiaryInvertedButton {...args} disabled />
      <OakTertiaryInvertedButton {...args} isLoading />
    </OakFlex>
  ),
  args: {
    iconName: "chevron-right",
    "aria-label": "Test",
    iconColorFilter: "black",
    iconBorderColor: "black",
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
    iconColorFilter: "black",
    iconBorderColor: "black",
  },
};
