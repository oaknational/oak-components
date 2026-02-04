import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakIcon, OakIconProps, oakIconNames } from "./OakIcon";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakTypography } from "@/components/typography/OakTypography";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { colorFilterArgTypes } from "@/storybook-helpers/colorFilterStyleHelpers";

const controlIconNames = [...oakIconNames].sort((a, b) => a.localeCompare(b));

const meta: Meta<typeof OakIcon> = {
  component: OakIcon,
  tags: ["autodocs"],
  title: "components/Images and icons/OakIcon",
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
    <OakFlex $flexDirection={"column"} $gap="spacing-12">
      {oakIconNames.map((iconName) => {
        return (
          <OakFlex key={iconName} $gap={"spacing-16"}>
            <OakIcon {...args} iconName={iconName} alt="" />
            <OakTypography>{iconName}</OakTypography>
          </OakFlex>
        );
      })}
    </OakFlex>
  ),
  args: { $colorFilter: "icon-primary" },
  parameters: {
    controls: {
      include: Object.keys(colorFilterArgTypes),
      sort: "none",
    },
  },
};

export const PickIcon: Story = {
  render: (args: OakIconProps) => <OakIcon {...args} />,
  args: {
    iconName: "home",
    $width: "spacing-360",
    $height: "spacing-360",
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
