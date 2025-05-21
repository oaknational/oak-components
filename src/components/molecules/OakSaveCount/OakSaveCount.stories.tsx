import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSaveCount } from "./OakSaveCount";

const meta: Meta<typeof OakSaveCount> = {
  component: OakSaveCount,
  tags: ["autodocs"],
  title: "components/molecules/OakSaveCount",
  argTypes: {
    count: {
      control: {
        type: "number",
      },
    },
    href: {
      control: {
        type: "text",
      },
    },
    loading: {
      control: {
        type: "boolean",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakSaveCount>;

export const Default: Story = {
  render: (args) => <OakSaveCount {...args} />,
  args: {
    count: 1,
    href: "#",
    loading: false,
  },
};
