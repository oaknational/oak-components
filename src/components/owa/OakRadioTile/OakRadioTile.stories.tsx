import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakRadioTile } from "./OakRadioTile";

const meta: Meta<typeof OakRadioTile> = {
  component: OakRadioTile,
  tags: ["autodocs"],
  title: "OWA/OakRadioTile",
  argTypes: {
    isChecked: { control: "boolean" },
  },
  parameters: {
    controls: {
      include: ["isChecked"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakRadioTile>;

export const Default: Story = {
  render: (args) => <OakRadioTile {...args} />,
  args: {
    isChecked: false,
    tileItem: { id: "id", label: "Radio tile" },
    id: "id",
    onChange: () => {},
  },
};
