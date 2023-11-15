import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakIcon, OakIconProps, oakIconNames } from "./OakIcon";

import { OakFlex, OakTypography } from "@/components/base";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";

/**
 * A wrapper around OakImage which uses the image-map.json file to map icon names to image paths.
 */

const controlIconNames = [...oakIconNames].sort();

const meta: Meta<typeof OakIcon> = {
  component: OakIcon,
  tags: ["autodocs"],
  title: "components/ui/OakIcon",
  argTypes: {
    iconName: {
      options: controlIconNames,
      control: { type: "select" },
    },
    ...sizeArgTypes,
  },
  parameters: {
    controls: {
      include: ["iconName", "$width", "$height"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakIcon>;

export const AllIcons: Story = {
  render: (args: OakIconProps) => (
    <OakFlex $flexDirection={"column"} $gap="space-between-xs">
      {oakIconNames.map((iconName) => {
        return (
          <OakFlex $gap={"space-between-s"}>
            <OakIcon {...args} iconName={iconName} />
            <OakTypography>{iconName}</OakTypography>
          </OakFlex>
        );
      })}
    </OakFlex>
  ),
  args: {},
  parameters: {
    controls: {
      include: [],
    },
  },
};

export const PickIcon: Story = {
  render: (args: OakIconProps) => <OakIcon {...args} />,
  args: {
    iconName: "home",
  },
  parameters: {
    controls: {
      include: ["iconName", "$width", "$height"],
    },
  },
};
