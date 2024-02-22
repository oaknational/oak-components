import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakBackLink } from "./OakBackLink";

const meta: Meta<typeof OakBackLink> = {
  component: OakBackLink,
  tags: ["autodocs"],
  title: "components/molecules/OakBackLink",
  args: {
    href: "#",
  },
  parameters: {
    controls: {
      include: [],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakBackLink>;

export const Default: Story = {
  render: (args) => <OakBackLink {...args} />,
};

export const DisabledButton: Story = {
  render: () => <OakBackLink as="button" disabled />,
};
