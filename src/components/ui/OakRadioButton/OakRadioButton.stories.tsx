import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakRadioButton } from "./OakRadioButton";

import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { typographyArgTypes } from "@/storybook-helpers/typographyStyleHelpers";
import { radioInputArgTypes } from "@/storybook-helpers/radioInputHelpers";
import { flexArgTypes } from "@/storybook-helpers/flexStyleHelpers";

/**
 *
 * OakRadioGroup allow users to select a single item from a list of mutually exclusive options .
 * OakRadioGroup consists of a set of OakRadioButtons, and a label. Each radio includes a label and a visual selection indicator. A single radio button within the group can be selected at a time. Users may click or touch a radio button to select it, or use the Tab key to navigate to the group, the arrow keys to navigate within the group, and the Space key to select an option.
 * ## Usage
 *
 *
 */

const meta: Meta<typeof OakRadioButton> = {
  component: OakRadioButton,
  tags: ["autodocs"],
  title: "components/ui/OakRadioButton",
  argTypes: {
    ...flexArgTypes,
    ...colorArgTypes,
    ...typographyArgTypes,
    ...radioInputArgTypes,
  },
  parameters: {
    controls: {
      include: [
        ...Object.keys(flexArgTypes),
        ...Object.keys(typographyArgTypes),
        ...Object.keys(radioInputArgTypes),
        ...Object.keys(colorArgTypes),
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakRadioButton>;

export const Default: Story = {
  render: (args) => {
    return <OakRadioButton {...args} />;
  },
  args: {
    label: "Option 1",
    value: "1",
    $inputCheckedColor: "black",
    $inputHoverColor: "lemon",
  },
};
