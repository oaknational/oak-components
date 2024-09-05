import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakHomepageTabButton } from "./OakHomepageTabButton";

const meta: Meta<typeof OakHomepageTabButton> = {
  component: OakHomepageTabButton,
  tags: ["autodocs"],

  argTypes: {
    iconName: {
      control: "select",
      options: [
        "homepage-robot-waving",
        "homepage-three-pupils",
        "homepage-teacher",
        "homepage-teacher-map",
      ],
    },
    isActive: {
      control: "boolean",
    },
  },
  parameters: {
    controls: {
      include: ["iconName", "isActive"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakHomepageTabButton>;

export const Default: Story = {
  render: (args) => <OakHomepageTabButton {...args} />,
  args: {
    iconName: "homepage-robot-waving",
    isActive: false,
  },
};
