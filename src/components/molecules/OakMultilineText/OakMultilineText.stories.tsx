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
  },
};

export const ChangeHeight: Story = {
  render: (args) => <OakMultilineText {...args} />,
  args: {
    placeholder: "Start typing answer...",
    charLimit: 200,
    disabled: false,
    $height: ["all-spacing-20"],
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
  },
};

export const WithManagedState: Story = {
  render: (args) => {
    const WithManagedState: React.FC = () => {
      const [value, setValue] = useState("");

      return (
        <OakMultilineText
          {...args}
          value={value}
          onTextAreaChange={(newValue) => setValue(newValue)}
        />
      );
    };
    return <WithManagedState />;
  },
  args: {
    placeholder: "Start typing answer...",
    charLimit: 1000,
    disabled: false,
  },
};
