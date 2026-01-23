import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakSecondaryButtonAsRadio } from "./OakSecondaryButtonAsRadio";

const meta: Meta<typeof OakSecondaryButtonAsRadio> = {
  component: OakSecondaryButtonAsRadio,
  tags: ["autodocs"],
  title: "components/Form elements/OakSecondaryButtonAsRadio",
  argTypes: {},
  parameters: {
    controls: {
      include: ["type"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakSecondaryButtonAsRadio>;

export const Default: Story = {
  render: () => (
    <OakSecondaryButtonAsRadio value="option-1">
      Option 1
    </OakSecondaryButtonAsRadio>
  ),
};
