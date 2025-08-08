import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakCaptionSearch } from "./OakCaptionSearch";

const meta: Meta<typeof OakCaptionSearch> = {
  component: OakCaptionSearch,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "light",
    },
    controls: {
      include: ["onSearch", "hasError", "errorText", "disabled"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakCaptionSearch>;

export const Default: Story = {
  render: () => <OakCaptionSearch />,
  args: {},
  parameters: {
    controls: {
      include: [],
    },
  },
};

export const WithError: Story = {
  render: (args) => <OakCaptionSearch {...args} />,
  args: {
    hasError: true,
    errorText: "Invalid caption ID",
  },
};

export const Loading: Story = {
  render: (args) => <OakCaptionSearch {...args} />,
  args: {
    isLoading: true,
  },
};
