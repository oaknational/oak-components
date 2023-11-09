import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSpan, OakSpanProps } from "./OakSpan";

import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { opacityArgTypes } from "@/storybook-helpers/opacityStyleHelpers";

/**
 *
 * OakSpan applies the Oak typography styles to the text content in addition to color, opacity, margin, padding and border styles.
 *
 */

const meta: Meta<typeof OakSpan> = {
  component: OakSpan,
  tags: ["autodocs"],
  title: "components/base/OakSpan",
  argTypes: {
    ...colorArgTypes,
    ...sizeArgTypes,
    ...spacingArgTypes,
    ...opacityArgTypes,
  },
  parameters: {
    controls: {
      include: [
        ...Object.keys(colorArgTypes),
        ...Object.keys(sizeArgTypes),
        ...Object.keys(spacingArgTypes),
        ...Object.keys(opacityArgTypes), // TODO:  add typography controls once they are implemented
      ],
      sort: "none",
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakSpan>;

export const DefaultOakSpan: Story = (args: Partial<OakSpanProps>) => (
  <OakSpan data-testId="OakSpan-id" {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Id semper risus in
    hendrerit gravida rutrum quisque non tellus. Nibh praesent tristique magna
    sit. A arcu cursus vitae congue mauris rhoncus aenean. Turpis egestas
    maecenas pharetra convallis posuere morbi leo. Faucibus pulvinar elementum
    integer enim neque volutpat ac tincidunt. Vitae suscipit tellus mauris a
    diam maecenas.
  </OakSpan>
);

DefaultOakSpan.args = {};
