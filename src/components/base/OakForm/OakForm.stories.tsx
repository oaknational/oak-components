import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakForm, OakFormProps } from "./OakForm";

import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { positionArgTypes } from "@/storybook-helpers/positionStyleHelpers";

/**
 *
 * OakForm extends OakBox by taking the same props and style but applying them to a form element.
 *
 */

const meta: Meta<typeof OakForm> = {
  component: OakForm,
  tags: ["autodocs"],
  title: "components/base/OakForm",
  argTypes: {
    ...colorArgTypes,
    ...sizeArgTypes,
    ...spacingArgTypes,
    ...positionArgTypes,
  },
  parameters: {
    controls: {
      include: [
        ...Object.keys(colorArgTypes),
        ...Object.keys(sizeArgTypes),
        ...Object.keys(spacingArgTypes),
        ...Object.keys(positionArgTypes),
      ],
      sort: "none",
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakForm>;

export const DefaultOakForm: Story = (args: Partial<OakFormProps>) => (
  <OakForm data-testId="OakForm-id" {...args}>
    Form elements go inside here
  </OakForm>
);

DefaultOakForm.args = {
  $pa: "inner-padding-m",
};
