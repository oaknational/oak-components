import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakCopyLinkButton } from "./OakCopyLinkButton";

const meta: Meta<typeof OakCopyLinkButton> = {
  component: OakCopyLinkButton,
  tags: ["autodocs"],
  title: "components/molecules/OWA (❌ to be moved out)/OakCopyLinkButton",

  parameters: {
    controls: {
      include: ["onClick"],
    },
  },
  args: {
    href: "/copy-this-link",
  },
};
export default meta;

type Story = StoryObj<typeof OakCopyLinkButton>;

export const Default: Story = {
  render: (args) => <OakCopyLinkButton {...args} />,
};
