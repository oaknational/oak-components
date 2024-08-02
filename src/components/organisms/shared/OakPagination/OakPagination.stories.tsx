import React, { useState } from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakPagination } from "./OakPagination";

const meta: Meta<typeof OakPagination> = {
  title: "Components/organisms/shared/OakPagination",
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
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.initialPage);

    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };

    return (
      <OakPagination
        {...args}
        initialPage={currentPage}
        onPageChange={handlePageChange}
      />
    );
  },
  args: {
    totalPages: 7,
    initialPage: 1,
    paginationHref: "/#",
    pageName: "test",
  },
};
