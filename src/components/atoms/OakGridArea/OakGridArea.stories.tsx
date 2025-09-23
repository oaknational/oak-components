import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakGridArea } from "./OakGridArea";

import { OakGrid } from "@/components/atoms/OakGrid";

const colRowSpanCtl = { control: { type: "range" as const, min: 0, max: 12 } };

const meta: Meta<typeof OakGridArea> = {
  component: OakGridArea,
  tags: ["autodocs"],
  title: "components/atoms/OakGridArea",
  argTypes: {
    $colSpan: colRowSpanCtl,
    $rowSpan: colRowSpanCtl,
    $order: colRowSpanCtl,
    $colStart: colRowSpanCtl,
    $colEnd: colRowSpanCtl,
    $rowStart: colRowSpanCtl,
  },
  parameters: {
    docs: {
      inlineStories: false,
    },
    controls: {
      include: [
        "$colSpan",
        "$rowSpan",
        "$order",
        "$colStart",
        "$colEnd",
        "$rowStart",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakGridArea>;

export const SpanningColumns: Story = {
  render: (args) => (
    <OakGrid>
      <OakGridArea
        {...args}
        $background={"amber"}
        $colSpan={6}
        $pa="spacing-24"
      >
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
  parameters: { controls: { include: [] } },
};

export const SpanningRows: Story = {
  render: (args) => (
    <OakGrid>
      <OakGridArea
        {...args}
        $background={"amber"}
        $colSpan={6}
        $rowSpan={2}
        $pa="spacing-24"
      >
        6 columns, 2 rows
      </OakGridArea>
      <OakGridArea $background={"mint"} $colSpan={6} $pa="spacing-24">
        6 columns, 1 row
      </OakGridArea>
      <OakGridArea $background={"lemon"} $colSpan={3} $pa="spacing-24">
        3 columns, 1 row
      </OakGridArea>
      <OakGridArea $background={"teal"} $colSpan={3} $pa="spacing-24">
        3 columns, 1 row
      </OakGridArea>
    </OakGrid>
  ),
  parameters: { controls: { include: [] } },
};

export const StartCol: Story = {
  render: (args) => (
    <OakGrid>
      <OakGridArea
        {...args}
        $background={"amber"}
        $colSpan={3}
        $pa="spacing-24"
        $colStart={3}
      >
        Col start 3
      </OakGridArea>
      <OakGridArea
        $background={"lemon"}
        $colSpan={3}
        $colStart={4}
        $pa="spacing-24"
      >
        Col start 4
      </OakGridArea>
      <OakGridArea
        $background={"teal"}
        $colSpan={3}
        $colStart={5}
        $pa="spacing-24"
      >
        Col Start 5
      </OakGridArea>
    </OakGrid>
  ),
  parameters: { controls: { include: [] } },
};

export const EndCol: Story = {
  render: (args) => (
    <OakGrid>
      <OakGridArea
        {...args}
        $background={"amber"}
        $colSpan={3}
        $pa="spacing-24"
        $colEnd={4}
      >
        Col end 4
      </OakGridArea>
      <OakGridArea
        $background={"lemon"}
        $colSpan={3}
        $colEnd={5}
        $pa="spacing-24"
      >
        Col end 5
      </OakGridArea>
      <OakGridArea
        $background={"teal"}
        $colSpan={3}
        $colEnd={6}
        $pa="spacing-24"
      >
        Col end 6
      </OakGridArea>
    </OakGrid>
  ),
  parameters: { controls: { include: [] } },
};
