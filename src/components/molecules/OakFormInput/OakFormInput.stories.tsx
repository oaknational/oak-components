import { Meta, StoryObj } from "@storybook/react";

import { OakFormInput } from "./OakFormInput";

import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";

const meta: Meta<typeof OakFormInput> = {
  component: OakFormInput,
  tags: ["autodocs"],
  title: "components/molecules/OakFormInput",
  argTypes: {
    wrapperWidth: sizeArgTypes["$width"],
    wrapperMaxWidth: sizeArgTypes["$width"],
  },
  parameters: {
    controls: {
      include: [
        "placeholder",
        "value",
        "invalid",
        "disabled",
        "wrapperWidth",
        "wrapperMaxWidth",
      ],
    },
  },
  args: {
    placeholder: "Placeholder text",
  },
};
export default meta;

type Story = StoryObj<typeof OakFormInput>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    value: "A fine text value",
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    value: "A wrong text value",
    invalid: true,
  },
};
