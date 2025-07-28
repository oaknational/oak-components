import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { OakCloseButton } from "./OakCloseButton";

const meta: Meta<typeof OakCloseButton> = {
  component: OakCloseButton,
  tags: ["autodocs"],
  title: "components/molecules/OakCloseButton",
  argTypes: {
    onClose: {
      description: "Function to be called when a button pressed",
      action: "clicked",
    },
  },
  parameters: {
    controls: {
      include: ["onClose"],
    },
  },
  args: {
    onClose: () => {},
  },
  render: (args) => {
    return (
      <>
        <OakCloseButton {...args} />
      </>
    );
  },
};

export default meta;

type Story = StoryObj<typeof OakCloseButton>;

export const Default: Story = {};
