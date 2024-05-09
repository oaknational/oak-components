import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakTertiaryOLNav, OakTertiaryOLNavProps } from "./OakTertiaryOLNav";

const items: OakTertiaryOLNavProps = {
  items: [
    {
      title: "Creating solid explanations and good modelling",
      href: "#solid-explanations",
    },
    {
      title: "Short item",
      href: "#short-item",
    },
    {
      title: "What is a lesson plan",
      href: "#lesson-plan",
    },
  ],
  ariaLabel: "navigation",
  title: "contents",
};
/**
 *
 * OakTertiaryOLNav is a styled ol list nav.
 *
 */
const meta: Meta<typeof OakTertiaryOLNav> = {
  component: OakTertiaryOLNav,
  tags: ["autodocs"],
  title: "components/organisms/teacher/OakTertiaryOLNav",
};
export default meta;

type Story = StoryObj<typeof OakTertiaryOLNav>;

export const Default: Story = {
  render: (args) => <OakTertiaryOLNav {...args} />,
  args: items,
};
