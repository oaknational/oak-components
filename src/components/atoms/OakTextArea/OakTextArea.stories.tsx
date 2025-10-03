import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakTextArea } from "./OakTextArea";

const meta: Meta<typeof OakTextArea> = {
  component: OakTextArea,
  tags: ["autodocs"],
  argTypes: {
    allowCarriageReturn: { control: "boolean" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
  parameters: {
    controls: {
      include: ["allowCarriageReturn", "placeholder", "disabled"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakTextArea>;

export const Default: Story = {
  render: (args) => <OakTextArea {...args} />,
  args: {
    allowCarriageReturn: true,
    placeholder: "Start typing answer...",
    disabled: false,
  },
};
