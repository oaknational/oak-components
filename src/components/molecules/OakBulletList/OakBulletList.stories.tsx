import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakBulletList } from "./OakBulletList";

import { typographyArgTypes } from "@/storybook-helpers/typographyStyleHelpers";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";

const meta: Meta<typeof OakBulletList> = {
  component: OakBulletList,
  tags: ["autodocs"],
  title: "components/molecules/OWA (❌ to be moved out)/OakBulletList",
  argTypes: {
    $font: typographyArgTypes.$font,
    $color: colorArgTypes.$color,
  },
  parameters: {
    controls: {
      include: [],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakBulletList>;

export const Default: Story = {
  render: (args) => (
    <OakBulletList
      {...args}
      listItems={["first", "second", "third", "fourth"]}
    />
  ),
};

export const WithStyling: Story = {
  render: (args) => (
    <OakBulletList
      {...args}
      listItems={["first", "second", "third", "fourth"]}
    />
  ),
  args: {
    $font: "body-4",
    $color: "text-disabled",
  },
  parameters: {
    controls: {
      include: ["$font", "$color"],
    },
  },
};
