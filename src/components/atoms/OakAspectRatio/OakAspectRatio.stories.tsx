import React from "react";
import { Meta, StoryObj } from "@storybook/react";

// @ts-expect-error:  this is an image
import testPic from "../../../../assets/oak-national-academy-logo-512.png";

import { OakAspectRatio, OakAspectRatioProps } from "./OakAspectRatio";

import { OakImage } from "@/components/atoms/OakImage";

const meta: Meta<typeof OakAspectRatio> = {
  component: OakAspectRatio,
  tags: ["autodocs"],
  title: "components/atoms/OakAspectRatio",
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
