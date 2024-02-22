import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakRadioButton } from "@/components/molecules/OakRadioButton";
import { OakRadioGroup } from "@/components/molecules/OakRadioGroup";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { typographyArgTypes } from "@/storybook-helpers/typographyStyleHelpers";
import { flexArgTypes } from "@/storybook-helpers/flexStyleHelpers";

/**
 *
 * OakRadioGroup allow users to select a single item from a list of mutually exclusive options .
 * OakRadioGroup consists of a set of OakRadioButtons, and a label. Each radio includes a label and a visual selection indicator. A single radio button within the group can be selected at a time. Users may click or touch a radio button to select it, or use the Tab key to navigate to the group, the arrow keys to navigate within the group, and the Space key to select an option.
 * ## Usage
 *
 * use the callback onChange to get the value of the selected radio button.
 *
 */

const meta: Meta<typeof OakRadioGroup> = {
  component: OakRadioGroup,
  tags: ["autodocs"],
  title: "components/molecules/OakRadioGroup",
  argTypes: {
    ...flexArgTypes,
    ...colorArgTypes,
    ...typographyArgTypes,
    disabled: { boolean: true },
  },
  parameters: {
    controls: {
      include: [
        "disabled",
        "$flexDirection",
        "$gap",
        "$alignItems",
        "$font",
        ...Object.keys(colorArgTypes),
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakRadioGroup>;

export const Default: Story = {
  render: (args) => {
    return (
      <OakRadioGroup {...args}>
        <OakRadioButton id="radio-1" value="1" label="Option 1" />
        <OakRadioButton id="radio-2" value="2" label="Option 2" />
        <OakRadioButton id="radio-3" value="3" label="Option 3" />
      </OakRadioGroup>
    );
  },
  args: {
    name: "test",
    label: "Radio group",
  },
};
