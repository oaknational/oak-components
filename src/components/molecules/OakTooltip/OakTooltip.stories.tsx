import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakTertiaryButton } from "../OakTertiaryButton";

import { OakTooltip } from "./OakTooltip";

import { OakBox } from "@/components/atoms";

const meta: Meta<typeof OakTooltip> = {
  component: OakTooltip,
  tags: ["autodocs"],
  title: "components/molecules/OakTooltip",
  argTypes: {
    tooltip: {
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    controls: {
      include: ["isOpen", "tooltip", "tooltipPosition"],
    },
  },
  decorators: [
    (Story) => (
      <OakBox $ma="space-between-xxl">
        <Story />
      </OakBox>
    ),
  ],
  args: {
    isOpen: true,
    tooltip: "Hello there",
    tooltipPosition: "bottom-left",
    children: <OakTertiaryButton>Target</OakTertiaryButton>,
  },
};
export default meta;

type Story = StoryObj<typeof OakTooltip>;

export const Default: Story = {
  render: (args) => <OakTooltip {...args} />,
};
