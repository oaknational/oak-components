import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakPromoTag } from "./OakPromoTag";

const meta: Meta<typeof OakPromoTag> = {
  component: OakPromoTag,
  tags: ["autodocs"],
  title: "components/ui/OakPromoTag",
};
export default meta;

type Story = StoryObj<typeof OakPromoTag>;

export const Default: Story = {
  render: () => <OakPromoTag />,
};
