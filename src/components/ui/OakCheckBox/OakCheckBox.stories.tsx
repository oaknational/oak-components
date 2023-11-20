import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakCheckbox } from "./OakCheckBox";

// import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
// import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
// import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";

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

const meta: Meta<typeof OakCheckbox> = {
  component: OakCheckbox,
  tags: ["autodocs"],
  title: "components/ui/OakCheckbox",
  argTypes: {
    // ...colorArgTypes,
    // ...spacingArgTypes,
    // ...borderArgTypes,
  },
  parameters: {
    controls: {
      include: [
        // ...Object.keys(colorArgTypes),
        // ...Object.keys(spacingArgTypes),
        // ...Object.keys(borderArgTypes),
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakCheckbox>;

export const Default: Story = {
  render: (args) => <OakCheckbox {...args} />,
  args: {
    // $background: "bg-btn-primary",
    // $color: "white",
    // $ba: "border-solid-s",
    // $pa: "inner-padding-s",
    // $borderRadius: "border-radius-m",
  },
};
