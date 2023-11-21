import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakRadioGroup } from "@/components/ui/OakRadioGroup";
import { OakRadioButton } from "@/components/ui/OakRadioButton";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { typographyArgTypes } from "@/storybook-helpers/typographyStyleHelpers";
import { flexArgTypes } from "@/storybook-helpers/flexStyleHelpers";

/**
 *

 * ## Usage
 *
 * Use within OakRadioGroup component.
 *
 *
 */

const meta: Meta<typeof OakRadioButton> = {
  component: OakRadioButton,
  tags: ["autodocs"],
  title: "components/ui/OakRadioButton",
  argTypes: {
    ...colorArgTypes,
    ...typographyArgTypes,
    ...flexArgTypes,
  },
  parameters: {
    controls: {
      include: ["$font", "$gap", ...Object.keys(colorArgTypes)],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakRadioButton>;

export const Default: Story = {
  render: (args) => {
    return (
      <OakRadioGroup name="test">
        <OakRadioButton {...args} label={"Option 1"} value={"1"} />
        <OakRadioButton {...args} label={"Option 2"} value={"2"} />
      </OakRadioGroup>
    );
  },
  args: {},
};
