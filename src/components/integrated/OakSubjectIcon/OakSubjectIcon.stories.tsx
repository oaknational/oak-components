import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSubjectIcon } from "./OakSubjectIcon";

import { drawingArgTypes } from "@/storybook-helpers/drawingStyleHelpers";
import { colorFilterArgTypes } from "@/storybook-helpers/colorFilterStyleHelpers";

const meta: Meta<typeof OakSubjectIcon> = {
  component: OakSubjectIcon,
  tags: ["autodocs"],
  title: "components/integrated/OakSubjectIcon",
  argTypes: {
    fill: drawingArgTypes["$fill"],
    iconColor: colorFilterArgTypes["$colorFilter"],
  },
  parameters: {
    controls: {
      include: ["fill", "iconName", "iconColor", "showPromoTag"],
    },
  },
  args: {
    iconName: "subject-english",
    fill: "bg-decorative1-main",
  },
};
export default meta;

type Story = StoryObj<typeof OakSubjectIcon>;

export const Default: Story = {
  render: (args) => <OakSubjectIcon {...args} />,
};
