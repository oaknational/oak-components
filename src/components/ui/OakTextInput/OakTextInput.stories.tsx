import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakTextInput } from "./OakTextInput";

import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";

const meta: Meta<typeof OakTextInput> = {
  component: OakTextInput,
  tags: ["autodocs"],
  title: "components/ui/OakTextInput",
  argTypes: {
    $width: sizeArgTypes["$width"],
    $maxWidth: sizeArgTypes["$maxWidth"],
  },
  args: {
    placeholder: "Placeholder text",
  },
};
export default meta;

type Story = StoryObj<typeof OakTextInput>;

export const Default: Story = {
  render: (args) => <OakTextInput {...args} />,
};

export const WithStyling: Story = {
  render: (args) => <OakTextInput {...args} />,
  args: {
    value: "a test value",
    $background: "aqua",
    $color: "blue",
    $borderColor: "blue",
    $hoverBackground: "aqua110",
    $focusRingDropShadows: ["drop-shadow-wide-yellow"],
  },
};

export const Disabled: Story = {
  render: (args) => (
    <OakTextInput {...args} disabled value="A fine text value" />
  ),
};

export const ReadOnly: Story = {
  render: (args) => (
    <OakTextInput {...args} readOnly value="A fine text value" />
  ),
};

export const Valid: Story = {
  render: (args) => (
    <OakTextInput {...args} validity="valid" value="A fine text value" />
  ),
};

export const Invalid: Story = {
  render: (args) => (
    <OakTextInput {...args} validity="invalid" value="A fine text value" />
  ),
};
