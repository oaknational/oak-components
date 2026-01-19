import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakAspectRatio, OakAspectRatioProps } from "./OakAspectRatio";

// @ts-expect-error:  this is an image
import testPic from "@/../assets/oak-national-academy-logo-512.png";
import { OakImage } from "@/components/images-and-icons/OakImage";

const meta: Meta<typeof OakAspectRatio> = {
  component: OakAspectRatio,
  tags: ["autodocs"],
  title: "components/Images and icons/OakAspectRatio (deprecated)",
  argTypes: {},
  parameters: {
    controls: {},
  },
};
export default meta;

type Story = StoryObj<typeof OakAspectRatio>;

export const LocalImage: Story = (args: OakAspectRatioProps) => (
  <OakAspectRatio {...args} ratio={args.ratio}>
    <OakImage alt={"Testimage"} src={testPic} $maxWidth={"spacing-360"} />
  </OakAspectRatio>
);

LocalImage.args = {
  ratio: ["2:3", "16:9"],
};
