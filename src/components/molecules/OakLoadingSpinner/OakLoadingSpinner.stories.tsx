import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakLoadingSpinner, OakLoadingSpinnerProps } from "./OakLoadingSpinner";

import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";

const meta: Meta<typeof OakLoadingSpinner> = {
  component: OakLoadingSpinner,
  tags: ["autodocs"],
  title: "components/molecules/OakLoadingSpinner",
  argTypes: {
    ...sizeArgTypes,
    ...colorArgTypes,
    $delay: { control: { type: "range", min: 0, max: 5000 } },
  },
  parameters: {
    controls: {
      include: ["$width", "$color", "$background", "$delay"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakLoadingSpinner>;

export const DefaultOakLoadingSpinner: Story = (
  args: Partial<OakLoadingSpinnerProps>,
) => <OakLoadingSpinner {...args} />;

DefaultOakLoadingSpinner.args = { $width: "all-spacing-15" };
