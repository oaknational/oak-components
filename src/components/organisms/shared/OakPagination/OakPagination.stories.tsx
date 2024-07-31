import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakPagination } from "./OakPagination";

const meta: Meta<typeof OakPagination> = {
  title: "Components/organisms/OakPagination",
  component: OakPagination,
  tags: ["autodocs"],
  argTypes: {
    totalPages: { type: "number" },
    paginationHref: { type: "string" },
    pageName: { type: "string" },
  },
  parameters: {
    controls: {
      include: ["totalPages", "paginationHref", "pageName", "type"],
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
    paginationHref: "#",
    pageName: "test",
  },
};
