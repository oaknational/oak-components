import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakGrid } from "./OakGrid";

import { OakGridArea } from "@/components/atoms/OakGridArea";
import { marginCtl } from "@/storybook-helpers/spacingStyleHelpers";

const meta: Meta<typeof OakGrid> = {
  component: OakGrid,
  tags: ["autodocs"],
  title: "components/atoms/OakGrid",
  argTypes: {
    $rg: marginCtl,
    $cg: marginCtl,
    $gridAutoRows: {
      control: "text",
    },
    $gridTemplateAreas: {
      control: "text",
    },
    $gridTemplateColumns: {
      control: "text",
    },
    $gridTemplateRows: {
      control: "text",
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
      <OakGridArea $background={"amber"} $colSpan={6} $pa="spacing-24">
        6 columns
      </OakGridArea>
      <OakGridArea $background={"mint"} $colSpan={4} $pa="spacing-24">
        4 columns
      </OakGridArea>
      <OakGridArea $background={"lemon"} $colSpan={2} $pa="spacing-24">
        2 columns
      </OakGridArea>
      <OakGridArea $background={"teal"} $colSpan={12} $pa="spacing-24">
        12 columns
      </OakGridArea>
    </OakGrid>
  ),
  args: {
    $rg: "spacing-24",
    $cg: "spacing-24",
  },
};
