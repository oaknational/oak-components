import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakRadioButton } from "@/components/form-elements/OakRadioButton";
import { OakRadioGroup } from "@/components/form-elements/OakRadioGroup";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { typographyArgTypes } from "@/storybook-helpers/typographyStyleHelpers";
import { flexArgTypes } from "@/storybook-helpers/flexStyleHelpers";

const meta: Meta<typeof OakRadioGroup> = {
  component: OakRadioGroup,
  tags: ["autodocs"],
  title: "components/Form elements/OakRadioGroup",
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
