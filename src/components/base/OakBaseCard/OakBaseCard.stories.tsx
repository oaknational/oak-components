import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakBaseCard, OakBaseCardProps } from "./OakBaseCard";

/**
 *
 * OakBaseCard extends OakFlex. It has all the props of OakFlex, but applies default styles for consistency.
 *
 */

const meta: Meta<typeof OakBaseCard> = {
  component: OakBaseCard,
  tags: ["autodocs"],
  title: "components/base/OakBaseCard",
  parameters: {
    controls: {
      include: [],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakBaseCard>;

export const DefaultOakBaseCard: Story = (args: Partial<OakBaseCardProps>) => (
  <OakBaseCard data-testId="OakBaseCard-id" {...args}>
    Card contents go here
  </OakBaseCard>
);

DefaultOakBaseCard.args = {};
