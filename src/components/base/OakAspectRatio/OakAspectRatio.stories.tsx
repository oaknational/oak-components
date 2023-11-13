import React from "react";
import { Meta, StoryObj } from "@storybook/react";

// @ts-expect-error:  this is an image
import testPic from "../../../../assets/oak-national-academy-logo-512.png";

import { OakAspectRatio, OakAspectRatioProps } from "./OakAspectRatio";

import { OakImage } from "@/components/base/OakImage";


/**
 *
 * AspectRatio provides a container of fixed aspect ratio
 *
 * ## Usage
 * Use this component when you want to ensure a box has a certain aspect ratio.
 * Wrap with component with <code>position: relative</code> and a width or min-width
 * The 'ratio' prop is responsive, so you can pass an array e.g. <code>["3:2", "16:9"]</code>
 * which will result in different aspect ratios on different screen widths.
 * For an example usage, see the <code>CardImage</code> component.
 *
 */

const meta: Meta<typeof OakAspectRatio> = {
  component: OakAspectRatio,
  tags: ["autodocs"],
  title: "components/base/OakAspectRatio",
  argTypes: {},
  parameters: {
    controls: {},
  },
};
export default meta;

type Story = StoryObj<typeof OakAspectRatio>;

export const LocalImage: Story = (args: OakAspectRatioProps) => (
  <OakAspectRatio {...args} ratio={args.ratio}>
    <OakImage alt={"Testimage"} src={testPic} $maxWidth={"all-spacing-20"} />
  </OakAspectRatio>
);

LocalImage.args = {
  ratio: ["2:3", "16:9"],
};
