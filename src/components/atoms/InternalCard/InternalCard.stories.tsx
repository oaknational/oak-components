import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import {
  InternalCard,
  InternalCardProps,
  internalCardDefaults,
} from "./InternalCard";

const meta: Meta<typeof InternalCard> = {
  component: InternalCard,
  tags: ["autodocs"],
  title: "components/atoms/InternalCard",
  args: internalCardDefaults,
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
