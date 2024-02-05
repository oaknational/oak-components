import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakTextInput } from "./OakTextInput";

import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";

const meta: Meta<typeof OakTextInput> = {
  component: OakTextInput,
  tags: ["autodocs"],
  title: "components/ui/OakTextInput",
  argTypes: {
    wrapperWidth: sizeArgTypes["$width"],
    wrapperMaxWidth: sizeArgTypes["$width"],
  },
  parameters: {
    controls: {
      include: [
        "placeholder",
        "value",
        "validity",
        "disabled",
        "readOnly",
        "wrapperWidth",
        "wrapperMaxWidth",
        "iconName",
        "isTrailingIcon",
      ],
    },
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

export const WithIcon: Story = {
  render: (args) => (
    <OakTextInput {...args} value="A fine text value" iconName="search" />
  ),
};

export const WithTrailingIcon: Story = {
  render: (args) => (
    <OakTextInput
      {...args}
      value="A fine text value"
      iconName="search"
      isTrailingIcon
    />
  ),
};

export const WithStyling: Story = {
  render: (args) => <OakTextInput {...args} />,
  args: {
    value: "a test value",
    background: "aqua",
    color: "blue",
    borderColor: "blue",
    hoverBackground: "aqua110",
    focusRingDropShadows: ["drop-shadow-wide-lemon"],
  },
};

export const Disabled: Story = {
  render: () => <OakTextInput disabled value="A fine text value" />,
};

export const ReadOnly: Story = {
  render: () => <OakTextInput readOnly value="A fine text value" />,
};

export const Valid: Story = {
  render: () => <OakTextInput validity="valid" value="A fine text value" />,
};

export const Invalid: Story = {
  render: () => <OakTextInput validity="invalid" value="A fine text value" />,
};

export const ValidWithIcon: Story = {
  render: () => (
    <OakTextInput validity="valid" value="A fine text value" iconName="tick" />
  ),
};

export const InvalidWithIcon: Story = {
  render: () => (
    <OakTextInput
      validity="invalid"
      value="A fine text value"
      iconName="warning"
    />
  ),
};

export const ReadOnlyValidWithIcon: Story = {
  render: () => (
    <OakTextInput
      validity="valid"
      value="A fine text value"
      iconName="tick"
      readOnly
    />
  ),
};

export const ReadOnlyInvalidTrailingIcon: Story = {
  render: (args) => (
    <OakTextInput
      {...args}
      validity="invalid"
      value="A fine text value"
      iconName="warning"
      isTrailingIcon
      readOnly
    />
  ),
};
