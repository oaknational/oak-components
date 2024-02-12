import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakGrid } from "./OakGrid";

import { OakGridArea } from "@/components/base/OakGridArea";
import { marginCtl } from "@/storybook-helpers/spacingStyleHelpers";

const meta: Meta<typeof OakGrid> = {
  component: OakGrid,
  tags: ["autodocs"],
  title: "components/base/OakGrid",
  argTypes: {
    $rg: marginCtl,
    $cg: marginCtl,
    $gridAutoRows: {
      control: { type: "text" },
    },
    $gridTemplateAreas: {
      control: { type: "text" },
    },
    $gridTemplateColumns: {
      control: { type: "text" },
    },
    $gridTemplateRows: {
      control: { type: "text" },
    },
  },
  parameters: {
    controls: {
      include: [
        "$rg",
        "$cg",
        "$gridAutoRows",
        "$gridTemplateAreas",
        "$gridTemplateColumns",
        "$gridTemplateRows",
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakGrid>;

export const Default: Story = {
  render: (args) => (
    <OakGrid {...args}>
      <OakGridArea $background={"amber"} $colSpan={6} $pa="inner-padding-xl">
        6 columns
      </OakGridArea>
      <OakGridArea $background={"mint"} $colSpan={4} $pa="inner-padding-xl">
        4 columns
      </OakGridArea>
      <OakGridArea $background={"lemon"} $colSpan={2} $pa="inner-padding-xl">
        2 columns
      </OakGridArea>
      <OakGridArea $background={"teal"} $colSpan={12} $pa="inner-padding-xl">
        12 columns
      </OakGridArea>
    </OakGrid>
  ),
  args: {
    $rg: "space-between-m",
    $cg: "space-between-m",
  },
};
