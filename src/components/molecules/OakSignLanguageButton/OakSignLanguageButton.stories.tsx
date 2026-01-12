import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSignLanguageButton } from "./OakSignLanguageButton";

const meta: Meta<typeof OakSignLanguageButton> = {
  component: OakSignLanguageButton,
  tags: ["autodocs"],
  title: "OWA/OakSignLanguageButton",
  parameters: {
    controls: {
      include: ["onClick"],
    },
  },
  args: {
    onClick: () => console.log("sign language button clicked"),
  },
};
export default meta;

type Story = StoryObj<typeof OakSignLanguageButton>;

export const Default: Story = {
  render: (args) => <OakSignLanguageButton {...args} />,
};
