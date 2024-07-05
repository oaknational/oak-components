import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakButtonAsRadioGroup } from "@/components/molecules/OakButtonAsRadioGroup";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { typographyArgTypes } from "@/storybook-helpers/typographyStyleHelpers";
import { flexArgTypes } from "@/storybook-helpers/flexStyleHelpers";
import { OakSecondaryButtonAsRadio } from "@/components/molecules/OakSecondaryButtonAsRadio";

const meta: Meta<typeof OakButtonAsRadioGroup> = {
  component: OakButtonAsRadioGroup,
  tags: ["autodocs"],
  title: "components/molecules/OakButtonAsRadioGroup",
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

type Story = StoryObj<typeof OakButtonAsRadioGroup>;

export const Default: Story = {
  render: (args) => {
    return (
      <OakButtonAsRadioGroup {...args}>
        <OakSecondaryButtonAsRadio value="1">
          Option 1
        </OakSecondaryButtonAsRadio>
        <OakSecondaryButtonAsRadio value="2">
          Option 2
        </OakSecondaryButtonAsRadio>
        <OakSecondaryButtonAsRadio value="3">
          Option 3
        </OakSecondaryButtonAsRadio>
      </OakButtonAsRadioGroup>
    );
  },
  args: {
    name: "test",
  },
};
