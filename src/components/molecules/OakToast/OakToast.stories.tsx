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
    autoDismiss: {
      control: {
        type: "boolean",
      },
    },
    autoDismissDuration: {
      control: {
        type: "number",
      },
    },
    showIcon: {
      control: {
        type: "boolean",
      },
    },
    variant: {
      options: [
        "green",
        "yellow",
        "pink",
        "blue",
        "aqua",
        "light",
        "dark",
        "error",
        "success",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakToast>;

export const Default: Story = {
  render: (args) => <OakToast {...args} />,
  args: {
    message: "this is a toast message",
    autoDismiss: false,
    showIcon: true,
    variant: "green",
    onClose: () => console.log("Toast closed"),
  },
};

export const LongElaborateMessage: Story = {
  render: (args) => <OakToast {...args} />,
  args: {
    message: (
      <span>
        "Lorem ipsum dolor sit amet, <b>consectetur adipiscing elit</b>. Sed do
        eiusmod <i>tempor incididunt</i> ut labore et dolore magna <b>aliqua</b>
        ."
      </span>
    ),
    autoDismiss: false,
    showIcon: true,
    variant: "pink",
    onClose: () => console.log("Toast closed"),
  },
};
