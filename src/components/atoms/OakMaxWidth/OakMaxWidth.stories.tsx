import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import {
  OakMaxWidth,
  OakMaxWidthProps,
  oakMaxWidthDefaults,
} from "./OakMaxWidth";

import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { flexArgTypes } from "@/storybook-helpers/flexStyleHelpers";
import { buildArgTypes } from "@/storybook-helpers/buildArgTypes";
/**
 *
 * OakMaxWidth is a OakFlex with default max-width and paddings set it also exposes flexbox related props.
 * All size, color, spacing and position props are available but not displayed in the controls here.
 *
 */

const meta: Meta<typeof OakMaxWidth> = {
  component: OakMaxWidth,
  tags: ["autodocs"],
  title: "components/atoms/OakMaxWidth",
  argTypes: buildArgTypes(
    [flexArgTypes, colorArgTypes, spacingArgTypes],
    oakMaxWidthDefaults,
  ),
  parameters: {
    controls: {
      include: [...Object.keys(flexArgTypes)],
      sort: "none",
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakMaxWidth>;

export const DefaultOakMaxWidth: Story = (args: Partial<OakMaxWidthProps>) => (
  <OakMaxWidth data-testId="OakMaxWidth-id" {...args}>
    A simple flex container with pre set padding and max width
  </OakMaxWidth>
);

DefaultOakMaxWidth.args = {
  $background: "mint",
  $color: "black",
  $pa: "spacing-16",
};
