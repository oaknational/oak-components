import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakForm, OakFormProps } from "./OakForm";

import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";

/**
 *
 * OakForm extends OakBox by taking the same props and style but applying them to a form element.
 *
 */

const meta: Meta<typeof OakForm> = {
  component: OakForm,
  tags: ["autodocs"],
  title: "components/atoms/OakForm",
  argTypes: {
    ...spacingArgTypes,
  },
  parameters: {
    controls: {
      include: [],
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
