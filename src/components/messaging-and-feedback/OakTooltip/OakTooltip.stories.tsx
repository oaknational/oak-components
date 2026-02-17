import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakTooltip } from "./OakTooltip";

import { OakButton } from "@/components/buttons/OakButton";
import { OakBox } from "@/components/layout-and-structure/OakBox";

const meta: Meta<typeof OakTooltip> = {
  component: OakTooltip,
  tags: ["autodocs"],
  title: "components/Messaging and feedback/OakTooltip",
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
      <OakBox $ma="spacing-72">
        <Story />
      </OakBox>
    ),
  ],
  args: {
    isOpen: true,
    tooltip: "Hello there",
    tooltipPosition: "bottom-left",
    children: <OakButton variant="tertiary">Target</OakButton>,
  },
};
export default meta;

type Story = StoryObj<typeof OakTooltip>;

export const Default: Story = {
  render: (args) => <OakTooltip {...args} />,
};

export const FixedPosition: Story = {
  render: (args) => (
    <>
      <OakBox $position="fixed" $top="spacing-8">
        <OakTooltip {...args} />
      </OakBox>
      <OakBox $position="fixed" $bottom="spacing-8">
        <OakTooltip {...args} tooltipPosition="top-left" />
      </OakBox>
      <OakBox style={{ height: "1000px" }} />
    </>
  ),
};

export const WithinAScrollingContainer: Story = {
  render: (args) => (
    <OakBox $overflow="scroll" $height="spacing-360">
      <OakTooltip {...args} />
      <OakBox style={{ height: "1000px" }} />
    </OakBox>
  ),
};
