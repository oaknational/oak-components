import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakToast } from "./OakToast";

const meta: Meta<typeof OakToast> = {
  title: "components/molecules/OakToast",
  component: OakToast,
  tags: ["autodocs"],
  argTypes: {
    message: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakToast>;

export const Default: Story = {
  render: (args) => <OakToast {...args} />,
  args: {
    message: (
      <span>
        This is a <b>toast</b> message
      </span>
    ),
  },
};
