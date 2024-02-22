import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakTypography, OakTypographyProps } from "./OakTypography";

import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { typographyArgTypes } from "@/storybook-helpers/typographyStyleHelpers";
import { positionArgTypes } from "@/storybook-helpers/positionStyleHelpers";

/**
 *
 *  OakTypography applies the typographyStyles to an OakBox:
 *  - The result is a component which sets a typography style context from which children
 *  inherit style properties through the cascade.
 *  - This should be the primary component to set a typography context.
 *  - Use this component whenever you want to style blocks of 'body' text.
 *
 */

const meta: Meta<typeof OakTypography> = {
  component: OakTypography,
  tags: ["autodocs"],
  title: "components/atoms/OakTypography",
  argTypes: {
    ...typographyArgTypes,
    ...colorArgTypes,
    ...sizeArgTypes,
    ...spacingArgTypes,
    ...positionArgTypes,
  },
  parameters: {
    controls: {
      include: [
        ...Object.keys(typographyArgTypes),
        "$width",
        "$height",
        "$overflow",
        "$overflowX",
        "$overflowY",
      ],
      sort: "none",
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakTypography>;

export const DefaultOakTypography: Story = (
  args: Partial<OakTypographyProps>,
) => (
  <OakTypography data-testId="OakTypography-id" {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Id semper risus in
    hendrerit gravida rutrum quisque non tellus. Nibh praesent tristique magna
    sit. A arcu cursus vitae congue mauris rhoncus aenean. Turpis egestas
    maecenas pharetra convallis posuere morbi leo. Faucibus pulvinar elementum
    integer enim neque volutpat ac tincidunt. Vitae suscipit tellus mauris a
    diam maecenas.
  </OakTypography>
);

DefaultOakTypography.args = {
  $font: "body-1",
  $overflow: null,
};
