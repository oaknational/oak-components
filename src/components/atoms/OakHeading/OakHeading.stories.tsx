import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakHeading, OakHeadingProps, oakHeadingTags } from "./OakHeading";

import { typographyArgTypes } from "@/storybook-helpers/typographyStyleHelpers";

const meta: Meta<typeof OakHeading> = {
  component: OakHeading,
  tags: ["autodocs"],
  title: "components/Typography/OakHeading",
  argTypes: {
    ...typographyArgTypes,
    tag: {
      options: oakHeadingTags,
      control: "select",
    },
  },
  parameters: {
    controls: {
      include: ["tag", ...Object.keys(typographyArgTypes)],
      sort: "none",
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakHeading>;

export const Default: Story = (args: Partial<OakHeadingProps>) => (
  <OakHeading data-testId="OakHeading-id" {...args} tag={args.tag ?? "div"}>
    Heading
  </OakHeading>
);

Default.args = {
  $font: "heading-1",
  tag: "h1",
};
