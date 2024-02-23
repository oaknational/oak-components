import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalButton } from "./InternalButton";

import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";

const meta: Meta<typeof InternalButton> = {
  component: InternalButton,
  tags: ["autodocs"],
  title: "components/atoms/InternalButton",
  argTypes: {
    ...colorArgTypes,
    ...spacingArgTypes,
    ...borderArgTypes,
  },
  parameters: {
    controls: {
      include: [
        ...Object.keys(colorArgTypes),
        ...Object.keys(spacingArgTypes),
        ...Object.keys(borderArgTypes),
        "type",
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof InternalButton>;

export const Default: Story = {
  render: (args) => <InternalButton {...args}>Click Me!</InternalButton>,
  args: {
    $background: "bg-btn-primary",
    $color: "white",
    $ba: "border-solid-s",
    $pa: "inner-padding-s",
    $borderRadius: "border-radius-m",
  },
};

export const LinkStyledAsButton: Story = {
  render: (args) => (
    <InternalButton {...args}>Click Me, I'm a link!</InternalButton>
  ),
  args: {
    element: "a",
    href: "/",
    $background: "bg-btn-primary",
    $color: "white",
    $ba: "border-solid-s",
    $pa: "inner-padding-s",
    $borderRadius: "border-radius-m",
  },
};
