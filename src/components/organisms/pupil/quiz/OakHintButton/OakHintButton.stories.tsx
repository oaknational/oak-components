import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakHintButton } from "./OakHintButton";

import { OakFlex, OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

const meta: Meta<typeof OakHintButton> = {
  tags: ["autodocs"],
  title: "OWA (❌ to be moved out)/pupil/OakHintButton",
  component: OakHintButton,

  argTypes: {
    isOpen: {
      control: "boolean",
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
      <OakFlex $gap="spacing-24">
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
