import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakIcon, OakIconProps, oakIconNames } from "./OakIcon";

import { OakFlex, OakTypography } from "@/components/base";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { colorFilterArgTypes } from "@/storybook-helpers/colorFilterStyleHelpers";

/**
 * A wrapper around OakImage which uses the image-map.json file to map icon names to image paths.
 */

const controlIconNames = [...oakIconNames].sort();

const meta: Meta<typeof OakIcon> = {
  component: OakIcon,
  tags: ["autodocs"],
  title: "components/base/OakIcon",
  argTypes: {
    iconName: {
      options: controlIconNames,
      control: { type: "select" },
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
            <OakIcon {...args} iconName={iconName} />
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
