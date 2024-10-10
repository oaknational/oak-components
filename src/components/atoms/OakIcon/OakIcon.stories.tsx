import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakIcon, OakIconProps, oakIconNames } from "./OakIcon";

import { OakFlex, OakTypography } from "@/components/atoms";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { colorFilterArgTypes } from "@/storybook-helpers/colorFilterStyleHelpers";

const controlIconNames = [...oakIconNames].sort((a, b) => a.localeCompare(b));

const meta: Meta<typeof OakIcon> = {
  component: OakIcon,
  tags: ["autodocs"],
  title: "components/atoms/OakIcon",
  argTypes: {
    iconName: {
      options: controlIconNames,
    },
    ...sizeArgTypes,
    ...colorFilterArgTypes,
  },
  parameters: {
    controls: {
      include: [
        "iconName",
        "$width",
        "$height",
        ...Object.keys(colorFilterArgTypes),
      ],
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
          <OakFlex key={iconName} $gap={"space-between-s"}>
            <OakIcon {...args} iconName={iconName} alt="" />
            <OakTypography>{iconName}</OakTypography>
          </OakFlex>
        );
      })}
    </OakFlex>
  ),
  args: { $colorFilter: "black" },
  parameters: {
    controls: {
      include: [...Object.keys(colorFilterArgTypes)],
      sort: "none",
    },
  },
};

export const PickIcon: Story = {
  render: (args: OakIconProps) => <OakIcon {...args} />,
  args: {
    iconName: "home",
    $width: "all-spacing-20",
    $height: "all-spacing-20",
  },
  parameters: {
    controls: {
      include: [
        "iconName",
        "$width",
        "$height",
        ...Object.keys(colorFilterArgTypes),
      ],
    },
  },
};
