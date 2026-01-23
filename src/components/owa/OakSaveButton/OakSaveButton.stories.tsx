import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSaveButton, OakSaveButtonProps } from "./OakSaveButton";

const meta: Meta<OakSaveButtonProps> = {
  component: OakSaveButton,
  title: "OWA/OakSaveButton",
  argTypes: {
    isLoading: { control: "boolean" },
    unavailable: { control: "boolean" },
    isSaved: { control: "boolean" },
  },
  parameters: {
    controls: {
      include: ["isSaved", "isLoading", "unavailable"],
    },
  },
};

export default meta;

type Story = StoryObj<OakSaveButtonProps>;

export const Default: Story = {
  render: (args) => <OakSaveButton {...args} />,
  args: {
    isSaved: false,
    isLoading: false,
    onSave: () => console.log("Save action triggered"),
    unavailable: false,
    saveButtonId: "save-button",
    title: "Save this unit",
  },
};
