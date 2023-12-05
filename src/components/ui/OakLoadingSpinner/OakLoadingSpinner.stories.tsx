import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakLoadingSpinner, OakLoadingSpinnerProps } from "./OakLoadingSpinner";

import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";

/**
 *
 * A loading spinner of variable size.
 *
 */

const meta: Meta<typeof OakLoadingSpinner> = {
  component: OakLoadingSpinner,
  tags: ["autodocs"],
  title: "components/ui/OakLoadingSpinner",
  argTypes: {
    ...sizeArgTypes,
    ...colorArgTypes,
  },
  parameters: {
    controls: {
      include: ["$width", "$color", "$background"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakLoadingSpinner>;

export const DefaultOakLoadingSpinner: Story = (
  args: Partial<OakLoadingSpinnerProps>,
) => <OakLoadingSpinner {...args} />;

DefaultOakLoadingSpinner.args = { $width: "all-spacing-15" };
