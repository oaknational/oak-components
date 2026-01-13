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
        type: "select",
      },
      options: [undefined, 0, 1, 5, 10, 50, 99, 100],
    },
    href: {
      control: {
        type: "text",
      },
    },
    label: {
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
