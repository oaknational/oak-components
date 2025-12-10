import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import {
  InternalCard,
  InternalCardProps,
  internalCardDefaults,
} from "./InternalCard";

import { flexArgTypes } from "@/storybook-helpers/flexStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { buildArgTypes } from "@/storybook-helpers/buildArgTypes";

const meta: Meta<typeof InternalCard> = {
  component: InternalCard,
  tags: ["autodocs"],
  title: "components/atoms/InternalCard",
  argTypes: buildArgTypes(
    [flexArgTypes, spacingArgTypes],
    internalCardDefaults,
  ),
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
