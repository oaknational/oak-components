import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakPagination } from "./OakPagination";

const meta: Meta<typeof OakPagination> = {
  //  "title" is the title of the story and where to look for component in the storybook
  title: "Components/organisms/OakPagination",
  component: OakPagination,
  tags: ["autodocs"],
  argTypes: {
    totalPages: { type: "number" },
  },
  parameters: {
    controls: {
      include: ["totalPages", "type"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakPagination>;

export const Default: Story = {
  render: (args) => <OakPagination {...args} />,
  args: {
    totalPages: 7,
    currentPage: 1,
  },
};
