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
    <>
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
    </>
  ),
  args: {
    iconName: "chevron-right",
  },
};
