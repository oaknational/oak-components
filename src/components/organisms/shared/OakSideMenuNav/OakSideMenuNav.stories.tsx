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
  args: {},
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
  },
};
