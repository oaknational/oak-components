import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakBaseCard } from "@/components/base/OakBaseCard";
import {
  OakAnchorTarget,
  OakAnchorTargetProps,
} from "@/components/base/OakAnchorTarget";

/**
 *
 *  AnchorTarget is a component to enable in-page linking to a particular section
 *
 *
 * Drop AnchorTarget inside a relative or absolulely positioned element without content, passing
 * it a unique 'id'. Then link it elsewhere using `<a href='#${id}' />`.
 *
 */

const meta: Meta<typeof OakAnchorTarget> = {
  component: OakAnchorTarget,
  tags: ["autodocs"],
  title: "components/base/OakAnchorTarget",
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
  <OakBaseCard data-testId="OakBaseCard-id" {...args}>
    This card has an anchor target component inside it
    <OakAnchorTarget id="anchor-target" />
  </OakBaseCard>
);

DefaultOakAnchorTarget.args = {};
