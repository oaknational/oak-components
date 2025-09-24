import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakMultilineText } from "./OakMultilineText";

const meta: Meta<typeof OakMultilineText> = {
  //  "title" is the title of the story and where to look for component in the storybook
  title: "Components/molecules/OakMultilineText",
  component: OakMultilineText,
  tags: ["autodocs"],
  argTypes: {
    charLimit: { control: "number" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
  parameters: {
    controls: {
      include: ["charLimit", "placeholder", "disabled"],
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
