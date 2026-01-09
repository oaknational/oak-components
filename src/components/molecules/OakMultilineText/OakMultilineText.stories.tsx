import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakMultilineText } from "./OakMultilineText";

import { OakFlex } from "@/components/atoms";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";

const meta: Meta<typeof OakMultilineText> = {
  tags: ["autodocs"],
  title: "components/forms/OakMultilineText",
  component: OakMultilineText,
  argTypes: {
    charLimit: { control: "number" },
    initialValue: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    invalidText: { control: "text" },
    label: { control: "text" },
    $height: sizeArgTypes.$height,
    allowCarriageReturn: { control: "boolean" },
    allowLeadingTrailingSpaces: { control: "boolean" },
    $overflowX: { control: "select", options: ["clip", "scroll", null] },
    $overflowY: { control: "select", options: ["clip", "scroll", null] },
  },
  parameters: {
    controls: {
      include: [
        "charLimit",
        "placeholder",
        "initialValue",
        "disabled",
        "invalidText",
        "label",
        "$height",
        "$overflowX",
        "$overflowY",
        "allowCarriageReturn",
        "allowLeadingTrailingSpaces",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakMultilineText>;

export const Default: Story = {
  render: (args) => <OakMultilineText {...args} />,
  args: {
    placeholder: "Start typing answer...",
    charLimit: 200,
    disabled: false,
    id: "default",
  },
};

export const InitialValue: Story = {
  render: (args) => <OakMultilineText {...args} />,
  args: {
    placeholder: "Start typing answer...",
    charLimit: 200,
    disabled: false,
    initialValue: "This is the initial value.",
  },
};

export const ChangeHeight: Story = {
  render: (args) => <OakMultilineText {...args} />,
  args: {
    placeholder: "Start typing answer...",
    charLimit: 200,
    disabled: false,
    $height: ["spacing-360"],
    id: "change-height",
    label: "Change Height",
  },
};
export const Errors: Story = {
  render: (args) => (
    <>
      <OakMultilineText {...args} />
      <OakFlex>This is some text.</OakFlex>
    </>
  ),
  args: {
    placeholder: "Start typing answer...",
    charLimit: 200,
    disabled: false,
    invalidText: "This is an error.",
    id: "errors",
    label: "Errors",
  },
};
