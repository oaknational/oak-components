import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSvg, OakSvgProps } from "./OakSvg";

import { OakFlex } from "@/components/atoms/OakFlex";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";

const meta: Meta<typeof OakSvg> = {
  component: OakSvg,
  tags: ["autodocs"],
  title: "components/Images and icons/OakSvg",
  argTypes: {
    ...colorArgTypes,
    ...sizeArgTypes,
  },
  parameters: {
    controls: {
      include: ["$width", "$height", ...Object.keys(colorArgTypes)],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakSvg>;

export const HeaderUnderline: Story = {
  render: (args: OakSvgProps) => (
    <OakFlex $flexDirection={"column"} $gap="spacing-12">
      <OakSvg {...args} />
    </OakFlex>
  ),
  args: { $color: "text-primary", name: "header-underline" },
  parameters: {
    controls: {
      include: ["name", "$width", "$height", ...Object.keys(colorArgTypes)],
      sort: "none",
    },
  },
};
