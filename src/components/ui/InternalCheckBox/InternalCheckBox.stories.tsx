import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalCheckBox } from "./InternalCheckBox";

import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";

/**
 *
 * Default checkbox which can be extended to create specialised checkboxes.
 *
 *
 * ## Events
 * The following callbacks are available for tracking focus events:
 *
 * ### onChange
 * onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
 *
 * ### onFocus
 *   onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
 *
 * ### onBlur
 *    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
 *
 * ### onHovered
 *  `onHovered?: (id, value, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 *
 *
 */

const meta: Meta<typeof InternalCheckBox> = {
  component: InternalCheckBox,
  tags: ["autodocs"],
  title: "components/ui/InternalCheckBox",
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    $size: {
      options: ["all-spacing-6", "all-spacing-7", "all-spacing-8"],
      control: { type: "select" },
    },
    $border: borderArgTypes.$ba,
    $borderRadius: borderArgTypes.$borderRadius,
    borderColor: colorArgTypes.$color,
    iconPadding: spacingArgTypes.$pa,
    hoverCenterFill: {
      control: { type: "boolean" },
    },
  },
  parameters: {
    controls: {
      include: [
        "defaultColor",
        "disabledColor",
        "checkboxSize",
        "checkboxBorder",
        "checkboxBorderRadius",
        "hoverBorderRadius",
        "iconPadding",
        "disabled",
        "hoverCenterFill",
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof InternalCheckBox>;

export const Default: Story = {
  render: (args) => <InternalCheckBox {...args} />,
  args: {
    id: "checkbox-test-default",
    value: "a test value",
  },
};
