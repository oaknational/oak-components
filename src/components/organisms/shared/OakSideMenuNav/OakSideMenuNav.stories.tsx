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

const generateTestItems = (count: number) => {
  return Array.from({ length: count }, (_, index) => ({
    heading: `Test Item ${index + 1}`,
    subheading: `Test Subheading ${index + 1}`,
    href: `#test${index + 1}`,
  }));
};

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
    menuItems: generateTestItems(4),
  },
};

export const LongList: Story = {
  render: (args) => (
    <OakGrid
      $background="pink"
      $width="100%"
      $maxHeight="all-spacing-20"
      $height="100vh"
    >
      <OakGridArea $colSpan={[12, 2]} $overflow="auto">
        <OakSideMenuNav {...args} />
      </OakGridArea>
    </OakGrid>
  ),
  args: {
    heading: "Test Heading",
    menuItems: generateTestItems(20),
  },
};
