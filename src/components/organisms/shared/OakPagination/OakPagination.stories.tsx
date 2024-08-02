import React, { useState } from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakPagination, OakPaginationProps } from "./OakPagination";

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

const PaginationComponent = (args: OakPaginationProps) => {
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
};

export const Default: Story = {
  render: (args) => (
    <PaginationComponent
      initialPage={1}
      totalPages={args.totalPages}
      paginationHref="#"
      pageName={args.pageName}
      onPageChange={() => {}}
    />
  ),
};
