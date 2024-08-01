import { ParsedUrlQuery } from "querystring";

import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { NextRouter } from "@storybook/nextjs/router.mock";

import { OakPagination } from "./OakPagination";

const mockQuery: ParsedUrlQuery = {
  page: "1",
};
const mockRouter: NextRouter = {
  asPath: "/",
  route: "/",
  basePath: "",
  isLocaleDomain: false,
  pathname: "/",
  query: mockQuery,
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  reload: () => window.location.reload(),
  back: () => window.history.back(),
  prefetch: () => Promise.resolve(),
  beforePopState: () => null,
  events: {
    on: () => null,
    off: () => null,
    emit: () => null,
  },
  forward: () => null,
  isFallback: false,
  isReady: true,
  isPreview: false,
};

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
    nextjs: {
      router: {
        asPath: "/",
        pathname: "/",
        query: {
          page: 1,
        },
      },
    },
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
    paginationHref: "/#",
    pageName: "test",
    router: mockRouter,
  },
};
