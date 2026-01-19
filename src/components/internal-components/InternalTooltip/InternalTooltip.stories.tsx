import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalTooltip } from "./InternalTooltip";

import { OakBox } from "@/components/layout-and-structure/OakBox";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";
import { typographyArgTypes } from "@/storybook-helpers/typographyStyleHelpers";

const meta: Meta<typeof InternalTooltip> = {
  component: InternalTooltip,
  tags: ["autodocs"],
  title: "internal components/InternalTooltip",
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
      <OakBox $ma="spacing-72">
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
      $background="bg-decorative5-subdued"
      $ph="spacing-24"
      $pv="spacing-16"
      $color="text-primary"
      $borderRadius="border-radius-m"
      $font="heading-light-7"
      $mb="spacing-12"
    />
  ),
};
