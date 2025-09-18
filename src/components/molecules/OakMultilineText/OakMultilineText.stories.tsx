import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakMultilineText } from "./OakMultilineText";

const meta: Meta<typeof OakMultilineText> = {
  //  "title" is the title of the story and where to look for component in the storybook
  title: "Components/molecules/OakMultilineText",
  component: OakMultilineText,
  tags: ["autodocs"],
  argTypes: {
    singleLine: { control: "boolean" },
    charLimit: { control: "number" },
    allowCarriageReturn: { control: "boolean" },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
  },
  parameters: {
    controls: {
      include: [
        "singleLine",
        "charLimit",
        "allowCarriageReturn",
        "disabled",
        "placeholder",
      ],
    },
    backgrounds: {
      default: "light",
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakMultilineText>;

export const Default: Story = {
  render: (args) => <OakMultilineText {...args} />,
  args: {
    // Define your component's default props here
    disabled: false,
    placeholder: "Start typing answer...",
    allowCarriageReturn: true,
  },
};
