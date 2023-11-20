import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakRadioButton } from "../OakRadioButton/OakRadioButton";

import { OakRadioGroup } from "./OakRadioGroup";

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
 * Add state={setValue} setState={setValue} to radio group and 'Radio' component as children for each button.
 *
 */

const meta: Meta<typeof OakRadioGroup> = {
  component: OakRadioGroup,
  tags: ["autodocs"],
  title: "components/ui/OakRadioGroup",
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

type Story = StoryObj<typeof OakRadioGroup>;

export const Default: Story = {
  render: (args) => {
    return (
      <>
        <OakRadioGroup {...args}>
          <OakRadioButton
            value="1"
            label="Option 1"
            $inputCheckedColor={"black"}
            $inputHoverColor={"lemon"}
          />
          <OakRadioButton
            value="2"
            label="Option 2"
            $inputCheckedColor={"black"}
            $inputHoverColor={"lemon"}
          />
          <OakRadioButton
            value="3"
            label="Option 3"
            $inputCheckedColor={"black"}
            $inputHoverColor={"lemon"}
          />
        </OakRadioGroup>
      </>
    );
  },
  args: {
    name: "test",
  },
};
