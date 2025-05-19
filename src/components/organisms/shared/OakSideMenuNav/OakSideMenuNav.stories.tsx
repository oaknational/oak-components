import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import OakSideMenuNav from "./OakSideMenuNav";

import { OakGrid, OakGridArea } from "@/components/atoms";

const meta: Meta<typeof OakSideMenuNav> = {
  component: OakSideMenuNav,
  tags: ["autodocs"],
  argTypes: {
    heading: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakSideMenuNav>;

export const Default: Story = {
  render: (args) => (
    <OakGrid $background="pink" $width="100%" $height="100vh">
      <OakGridArea $colSpan={[12, 2]}>
        <OakSideMenuNav {...args} />
      </OakGridArea>
    </OakGrid>
  ),
  args: {
    heading: "Test Heading",
    menuItems: [
      {
        heading: "Test Item 1",
        subheading: "Test Subheading 1",
        href: "#test1",
      },
      {
        heading: "Test Item 2",
        subheading: "Test Subheading 2",
        href: "#test2",
      },
      {
        heading: "Test Item 3",
        subheading: "Test Subheading 3",
        href: "#test3",
      },
      {
        heading: "Test Item 4",
        subheading: "Test Subheading 4",
        href: "#test4",
      },
    ],
  },
};
