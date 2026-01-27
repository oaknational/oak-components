import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakForm, OakFormProps } from "./OakForm";

import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";

const meta: Meta<typeof OakForm> = {
  component: OakForm,
  tags: ["autodocs"],
  title: "components/Form elements/OakForm (deprecated)",
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
  $pa: "spacing-16",
};
