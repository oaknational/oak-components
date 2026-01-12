import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSmallSecondaryToggleButton } from "./OakSmallSecondaryToggleButton";

import { oakIconNames } from "@/components/atoms/OakIcon";
import { OakFlex } from "@/components/atoms";

const controlIconNames = [
  null,
  [...oakIconNames].sort((a, b) => a.localeCompare(b)),
].flat();

const meta: Meta<typeof OakSmallSecondaryToggleButton> = {
  component: OakSmallSecondaryToggleButton,
  tags: ["autodocs"],
  title: "OWA/OakSmallSecondaryToggleButton",
  argTypes: {
    toggleOn: {
      control: "boolean",
    },
    iconName: {
      options: controlIconNames,
    },
    isTrailingIcon: {
      control: "boolean",
    },
    isLoading: {
      control: "boolean",
    },
  },
  parameters: {
    controls: {
      include: ["toggleOn", "iconName", "isTrailingIcon", "isLoading"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakSmallSecondaryToggleButton>;

export const Default: Story = {
  render: (args) => (
    <OakFlex $gap="spacing-24">
      <OakSmallSecondaryToggleButton {...args}>
        Secondary Button
      </OakSmallSecondaryToggleButton>
      <OakSmallSecondaryToggleButton {...args} disabled>
        Disabled Button
      </OakSmallSecondaryToggleButton>
      <OakSmallSecondaryToggleButton {...args} isLoading>
        Loading Button
      </OakSmallSecondaryToggleButton>
    </OakFlex>
  ),
  args: {
    toggleOn: false,
  },
};
