import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalCard, InternalCardProps } from "./InternalCard";

/**
 *
 * InternalCard extends OakFlex. It has all the props of OakFlex, but applies default styles for consistency.
 *
 */

const meta: Meta<typeof InternalCard> = {
  component: InternalCard,
  tags: ["autodocs"],
  title: "components/base/InternalCard",
  parameters: {
    controls: {
      include: [],
    },
  },
};
export default meta;

type Story = StoryObj<typeof InternalCard>;

export const DefaultInternalCard: Story = (
  args: Partial<InternalCardProps>,
) => (
  <InternalCard data-testId="InternalCard-id" {...args}>
    Card contents go here
  </InternalCard>
);

DefaultInternalCard.args = {};
