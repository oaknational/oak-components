import React, { useState } from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakMultilineText } from "./OakMultilineText";

import { OakFlex } from "@/components/atoms";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";

const meta: Meta<typeof OakMultilineText> = {
  title: "Components/molecules/OakMultilineText",
  component: OakMultilineText,
  tags: ["autodocs"],
  argTypes: {
    charLimit: { control: "number" },
    initialValue: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    errors: { control: "object" },
    label: { control: "text" },
    $height: sizeArgTypes.$height,
    $overflowX: { control: "select", options: ["clip", "auto", null] },
    $overflowY: { control: "select", options: ["clip", "auto", null] },
  },
  parameters: {
    controls: {
      include: [
        "charLimit",
        "placeholder",
        "initialValue",
        "disabled",
        "errors",
        "label",
        "$height",
        "$overflowX",
        "$overflowY",
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
    initialValue: "Test",
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
    errors: ["This is an error", "This is another error"],
    id: "errors",
    label: "Errors",
  },
};

export const Controlled: Story = {
  render: () => <ControlledOakMultilineText />,
};

const ControlledOakMultilineText = () => {
  const [value, setValue] = useState("");

  return (
    <OakMultilineText
      charLimit={200}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
