import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakRadioTile } from "./OakRadioTile";

const meta: Meta<typeof OakRadioTile> = {
  title: "Components/molecules/OakRadioTile",
  component: OakRadioTile,
  tags: ["autodocs"],
  argTypes: {
    isChecked: { control: "boolean" },
    isFocussed: { control: "boolean" },
  },
  parameters: {
    controls: {
      include: ["isChecked", "isFocussed"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakRadioTile>;

export const Default: Story = {
  render: (args) => <OakRadioTile {...args} />,
  args: {
    isChecked: false,
    isFocussed: false,
    tileItem: { id: "id", label: "Radio tile" },
    id: "id",
    onChange: () => {},
    onFocus: () => {},
  },
};
