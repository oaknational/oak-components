import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakButtonAsRadioGroup } from "@/components/form-elements/OakButtonAsRadioGroup";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { typographyArgTypes } from "@/storybook-helpers/typographyStyleHelpers";
import { flexArgTypes } from "@/storybook-helpers/flexStyleHelpers";
import { OakSecondaryButtonAsRadio } from "@/components/form-elements/OakSecondaryButtonAsRadio";

const meta: Meta<typeof OakButtonAsRadioGroup> = {
  component: OakButtonAsRadioGroup,
  tags: ["autodocs"],
  title: "components/Form elements/OakButtonAsRadioGroup",
  argTypes: {
    ...flexArgTypes,
    ...colorArgTypes,
    ...typographyArgTypes,
    defaultValue: { control: "select", options: ["1", "2", "3"] },
    label: { control: "text" },
    name: { control: "text" },
    ariaLabel: { control: "text" },
    ariaLabelledby: { control: "text" },
  },
  parameters: {
    controls: {
      include: ["defaultValue", "ariaLabel", "ariaLabelledby", "label", "name"],
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
    ariaLabel: "test options",
  },
};
