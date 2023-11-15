import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakIcon, OakIconProps, oakIconNames } from "./OakIcon";

import { OakFlex, OakTypography } from "@/components/base";

/**
 * OakIcon
 */

const meta: Meta<typeof OakIcon> = {
  component: OakIcon,
  tags: ["autodocs"],
  title: "components/ui/OakIcon",
  argTypes: {},
  parameters: {
    controls: {
      include: [],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakIcon>;

export const HomeIcon: Story = (args: OakIconProps) => (
  <OakFlex $flexDirection={"column"}>
    {oakIconNames.map((iconName) => {
      return (
        <OakFlex $gap={"space-between-s"}>
          <OakIcon {...args} iconName={iconName} $filter={"red"} />
          <OakTypography>{iconName}</OakTypography>
        </OakFlex>
      );
    })}
  </OakFlex>
);

HomeIcon.args = {
  //   iconName: "home",
  //   alt: "Home Icon",
};
