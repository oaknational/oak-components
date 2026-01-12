import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakTextInput } from "./OakTextInput";

import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";

const meta: Meta<typeof OakTextInput> = {
  component: OakTextInput,
  tags: ["autodocs"],
  title: "components/Form elements/OakTextInput",
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
  render: (args) => <OakTextInput {...args} />,
};
export default meta;

type Story = StoryObj<typeof OakTextInput>;

export const Default: Story = {};

export const Highlighted: Story = {
  args: {
    isHighlighted: true,
  },
};

export const WithIcon: Story = {
  args: {
    value: "A fine text value",
    iconName: "search",
  },
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
  args: {
    value: "a test value",
    background: "bg-decorative2-main",
    color: "text-subdued",
    borderColor: "border-decorative2",
    hoverBackground: "bg-decorative2-subdued",
    focusRingDropShadows: ["drop-shadow-wide-lemon"],
  },
};

export const Disabled: Story = {
  args: {
    value: "A fine text value",
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    value: "A fine text value",
    readOnly: true,
  },
};

export const Valid: Story = {
  args: {
    value: "A fine text value",
    validity: "valid",
  },
};

export const Invalid: Story = {
  args: {
    value: "A fine text value",
    validity: "invalid",
  },
};

export const ValidWithIcon: Story = {
  args: {
    value: "A fine text value",
    validity: "valid",
    iconName: "tick",
  },
};

export const InvalidWithIcon: Story = {
  args: {
    value: "A fine text value",
    validity: "invalid",
    iconName: "warning",
  },
};

export const ReadOnlyValidWithIcon: Story = {
  args: {
    value: "A fine text value",
    validity: "valid",
    iconName: "tick",
    readOnly: true,
  },
};

export const ReadOnlyInvalidTrailingIcon: Story = {
  args: {
    value: "A fine text value",
    validity: "invalid",
    iconName: "warning",
    readOnly: true,
  },
};
