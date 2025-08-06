import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { CaptionSearch } from "./CaptionSearch";

const meta: Meta<typeof CaptionSearch> = {
  component: CaptionSearch,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "light",
    },
    controls: {},
  },
};
export default meta;

type Story = StoryObj<typeof CaptionSearch>;

export const Default: Story = {
  render: (args) => <CaptionSearch />,
  args: {},
  parameters: {
    controls: {
      include: [],
    },
  },
};
