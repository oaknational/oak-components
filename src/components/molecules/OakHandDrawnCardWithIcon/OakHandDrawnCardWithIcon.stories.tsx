import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakHandDrawnCardWithIcon } from "./OakHandDrawnCardWithIcon";

import { drawingArgTypes } from "@/storybook-helpers/drawingStyleHelpers";
import { colorFilterArgTypes } from "@/storybook-helpers/colorFilterStyleHelpers";

const meta: Meta<typeof OakHandDrawnCardWithIcon> = {
  component: OakHandDrawnCardWithIcon,
  tags: ["autodocs"],
  title:
    "components/image/OakSubjectIcon (🔀 to be merged)/OakHandDrawnCardWithIcon",
  argTypes: {
    fill: drawingArgTypes["$fill"],
    iconColor: colorFilterArgTypes["$colorFilter"],
  },
  parameters: {
    controls: {
      include: ["fill", "iconName", "iconColor", "alt"],
    },
  },
  args: {
    fill: "bg-decorative1-main",
    iconName: "worksheet-3",
  },
};
export default meta;

type Story = StoryObj<typeof OakHandDrawnCardWithIcon>;

export const Default: Story = {
  render: (args) => <OakHandDrawnCardWithIcon {...args} />,
};
