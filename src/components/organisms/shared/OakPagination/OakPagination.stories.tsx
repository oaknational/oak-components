import React, { useState } from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakPagination, OakPaginationProps } from "./OakPagination";

const meta: Meta<typeof OakPagination> = {
  component: OakPagination,
  tags: ["autodocs"],
  title: "components/Navigation/OakPagination",
  argTypes: {
    totalPages: { type: "number" },
    paginationHref: { type: "string" },
    pageName: { type: "string" },
    currentPage: { type: "number" },
  },
  parameters: {
    controls: {
      include: ["totalPages", "paginationHref", "pageName", "type"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakPagination>;

const PaginationComponent = (args: OakPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <OakPagination
      {...args}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  );
};

export const Default: Story = {
  render: (args) => (
    <PaginationComponent
      totalPages={args.totalPages || 7}
      paginationHref="#"
      pageName={args.pageName}
      onPageChange={args.onPageChange}
      currentPage={args.currentPage}
    />
  ),
};
