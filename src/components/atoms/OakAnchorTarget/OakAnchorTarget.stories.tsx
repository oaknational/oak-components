import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalCard } from "@/components/atoms/InternalCard";
import {
  OakAnchorTarget,
  OakAnchorTargetProps,
} from "@/components/atoms/OakAnchorTarget";

const meta: Meta<typeof OakAnchorTarget> = {
  component: OakAnchorTarget,
  tags: ["autodocs"],
  title: "components/typography/OakAnchorTarget",
  parameters: {
    controls: {
      include: [],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakAnchorTarget>;

export const DefaultOakAnchorTarget: Story = (
  args: Partial<OakAnchorTargetProps>,
) => (
  <InternalCard data-testId="InternalCard-id" {...args}>
    This card has an anchor target component inside it
    <OakAnchorTarget id="anchor-target" />
  </InternalCard>
);

DefaultOakAnchorTarget.args = {};
