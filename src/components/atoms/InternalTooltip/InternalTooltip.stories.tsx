import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakBox } from "../OakBox";

import { InternalTooltip } from "./InternalTooltip";

import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";
import { typographyArgTypes } from "@/storybook-helpers/typographyStyleHelpers";

const meta: Meta<typeof InternalTooltip> = {
  component: InternalTooltip,
  tags: ["autodocs"],
  title: "components/atoms/InternalTooltip",
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    ...colorArgTypes,
    ...spacingArgTypes,
    ...borderArgTypes,
    ...typographyArgTypes,
  },
  parameters: {
    controls: {
      include: [
        "children",
        "tooltipPosition",
        ...Object.keys(colorArgTypes),
        ...Object.keys(spacingArgTypes),
        ...Object.keys(borderArgTypes),
        ...Object.keys(typographyArgTypes),
      ],
    },
  },
  decorators: [
    (Story) => (
      <OakBox $ma="space-between-xxl">
        <Story />
      </OakBox>
    ),
  ],
  args: {
    children: "Hello there",
    tooltipPosition: "bottom-left",
  },
};
export default meta;

type Story = StoryObj<typeof InternalTooltip>;

export const Default: Story = {
  render: (args) => <InternalTooltip {...args} />,
};

export const WithStyling: Story = {
  render: (args) => (
    <InternalTooltip
      {...args}
      $background="lemon50"
      $ph="inner-padding-xl"
      $pv="inner-padding-m"
      $color="text-primary"
      $borderRadius="border-radius-m"
      $font="heading-light-7"
      $mb="space-between-xs"
    />
  ),
};
