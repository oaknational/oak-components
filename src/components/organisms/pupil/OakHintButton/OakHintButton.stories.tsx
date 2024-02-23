import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakHintButton } from "./OakHintButton";

import { OakFlex, OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

const meta: Meta<typeof OakHintButton> = {
  component: OakHintButton,
  tags: ["autodocs"],
  title: "components/organisms/pupil/OakHintButton",
  argTypes: {
    isOpen: {
      control: { type: "boolean" },
    },
  },
  parameters: {
    controls: {
      include: ["isOpen"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakHintButton>;

export const Default: Story = {
  render: (args) => (
    <OakThemeProvider theme={oakDefaultTheme}>
      <OakFlex $gap="space-between-m">
        <OakHintButton {...args} />
        <OakHintButton {...args} disabled />
        <OakHintButton {...args} isLoading />
      </OakFlex>
    </OakThemeProvider>
  ),
  args: {
    isOpen: false,
  },
};
