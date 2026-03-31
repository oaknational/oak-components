import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakBreadcrumbs } from "./OakBreadcrumbs";

const meta: Meta<typeof OakBreadcrumbs> = {
  component: OakBreadcrumbs,
  tags: ["autodocs"],
  title: "components/Navigation/OakBreadcrumbs",
  argTypes: {},
  parameters: {},
  args: {
    breadcrumbs: [
      {
        text: "Test 1",
        href: "#text1",
      },
      {
        text: "Test 2",
        href: "#text2",
      },
      {
        text: "Test 3",
        href: "#text3",
      },
      {
        text: "Test 4",
        href: "#text4",
      },
      {
        text: "Test 5",
        href: "#text5",
      },
      {
        text: "Test 6",
      },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof OakBreadcrumbs>;

export const Default: Story = {
  render: (args) => <OakBreadcrumbs {...args} />,
};

export const WithLongTextTruncation: Story = {
  args: {
    breadcrumbs: [
      {
        text: "Home",
        href: "#1",
      },
      {
        text: "Something really, really, really long to show off text truncate",
        href: "#2",
      },
      {
        text: "Hello world",
      },
    ],
  },
  render: (args) => <OakBreadcrumbs {...args} />,
};
