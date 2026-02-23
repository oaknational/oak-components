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
        href: "#text6",
      },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof OakBreadcrumbs>;

export const Default: Story = {
  render: (args) => <OakBreadcrumbs {...args} />,
};

export const SomeWithHrefs: Story = {
  args: {
    breadcrumbs: [
      {
        text: "Home",
      },
      {
        text: "Ceramics",
        href: "#ceramics",
      },
      {
        text: "Chicken Jugs",
        href: "#chicken-jugs",
      },
    ],
  },
  render: (args) => <OakBreadcrumbs {...args} />,
};
