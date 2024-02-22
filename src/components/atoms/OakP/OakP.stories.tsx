import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakP, OakPProps } from "./OakP";

import { typographyArgTypes } from "@/storybook-helpers/typographyStyleHelpers";

/**
 *
 * OakP is a styled p tag.
 * Use the controls to view different font styles.
 *
 */

const meta: Meta<typeof OakP> = {
  component: OakP,
  tags: ["autodocs"],
  title: "components/atoms/OakP",
  argTypes: {
    ...typographyArgTypes,
  },
  parameters: {
    controls: {
      include: [...Object.keys(typographyArgTypes)],
      sort: "none",
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakP>;

export const DefaultOakFlex: Story = (args: Partial<OakPProps>) => (
  <OakP data-testId="OakP-id" {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Id semper risus in
    hendrerit gravida rutrum quisque non tellus. Nibh praesent tristique magna
    sit. A arcu cursus vitae congue mauris rhoncus aenean. Turpis egestas
    maecenas pharetra convallis posuere morbi leo. Faucibus pulvinar elementum
    integer enim neque volutpat ac tincidunt. Vitae suscipit tellus mauris a
    diam maecenas.
  </OakP>
);

DefaultOakFlex.args = {
  $color: "black",
  $font: "body-1",
};
