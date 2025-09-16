import type { Meta, StoryObj } from "@storybook/react";

import { SubCarouselPositionControl } from "./SubCarouselPositionControl";

const meta: Meta<typeof SubCarouselPositionControl> = {
  title: "Components/molecules/OakCarousel/Subcomponents/Position Control",
  component: SubCarouselPositionControl,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SubCarouselPositionControl>;
export const Controls: Story = {
  args: {
    disableFwd: false,
    disableBack: false,
  },
  argTypes: {
    disableFwd: { control: "boolean" },
    disableBack: { control: "boolean" },
    fwdLabel: { control: "text" },
    backLabel: { control: "text" },
  },
};
export const Default: Story = {
  args: {
    fwdLabel: "SubCarouselPositionControl",
    backLabel: "SubCarouselPositionControl",
  },
};
