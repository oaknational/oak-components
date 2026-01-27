import type { Meta, StoryObj } from "@storybook/react";

import { SubCarouselPositionIndicator } from "./SubCarouselPositionIndicator";

const meta: Meta<typeof SubCarouselPositionIndicator> = {
  component: SubCarouselPositionIndicator,
  title: "components/Presentational/OakCarousel/SubCarouselPositionIndicator",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SubCarouselPositionIndicator>;

export const Default: Story = {
  args: {
    numberOfItems: 3,
    activeIndex: 1,
  },
};
