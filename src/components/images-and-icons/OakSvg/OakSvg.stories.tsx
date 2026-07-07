import React from "react";
import { Meta, StoryObj } from "@storybook/nextjs";

import { OakSvg, OakSvgProps } from "./OakSvg";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { HeaderUnderline as HeaderUnderlineComponent } from "@/svgs";

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
  args: { $color: "text-primary", svg: <HeaderUnderlineComponent /> },
  parameters: {
    controls: {
      include: ["name", "$width", "$height", ...Object.keys(colorArgTypes)],
      sort: "none",
    },
  },
};
