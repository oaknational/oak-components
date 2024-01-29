import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalButton } from "./InternalButton";

import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";

/**
 *
 * An unstyled button to be used as a basis for all UI button components.
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`

 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */

const meta: Meta<typeof InternalButton> = {
  component: InternalButton,
  tags: ["autodocs"],
  title: "components/base/InternalButton",
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

export const AsLink: Story = {
  render: (args) => <InternalButton {...args}>Click Me, I'm a link!</InternalButton>,
  args: {
    as: "a",
    href: "/",
    $background: "bg-btn-primary",
    $color: "white",
    $ba: "border-solid-s",
    $pa: "inner-padding-s",
    $borderRadius: "border-radius-m",
  },
};