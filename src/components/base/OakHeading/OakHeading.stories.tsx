import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import OakHeading, { OakHeadingProps } from "./OakHeading";

import {
  typographyArgTypes,
  tagArgTypes,
} from "@/storybook-helpers/typographyStyleHelpers";

/**
 *
 * OakHeading can be one of the following style tags dependant on its role: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6".
 * Use the controls to view different font styles.
 *
 */

const meta: Meta<typeof OakHeading> = {
  component: OakHeading,
  tags: ["autodocs"],
  title: "components/base/OakHeading",
  argTypes: {
    ...typographyArgTypes,
    ...tagArgTypes,
  },
  parameters: {
    controls: {
      include: [
        ...Object.keys(typographyArgTypes),
        ...Object.keys(tagArgTypes),
      ],
      sort: "none",
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakHeading>;

export const DefaultOakFlex: Story = (args: Partial<OakHeadingProps>) => (
  <OakHeading data-testId="OakHeading-id" tag={"div"} {...args}>
    Heading
  </OakHeading>
);

DefaultOakFlex.args = {
  $color: "black",
  $font: "heading-1",
};
