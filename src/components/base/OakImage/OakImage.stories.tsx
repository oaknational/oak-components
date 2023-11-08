import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakImage, OakImageProps } from "./OakImage";

import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { positionArgTypes } from "@/storybook-helpers/positionStyleHelpers";

const meta: Meta<typeof OakImage> = {
  component: OakImage,
  tags: ["autodocs"],
  title: "components/base/OakImage",
  argTypes: {
    ...colorArgTypes,
    ...sizeArgTypes,
    ...spacingArgTypes,
    ...positionArgTypes,
  },
  parameters: {
    controls: {
      include: [
        ...Object.keys(colorArgTypes),
        ...Object.keys(sizeArgTypes),
        ...Object.keys(spacingArgTypes),
        ...Object.keys(positionArgTypes),
      ],
      sort: "none",
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakImage>;

export const DefaultImage: Story = (args: OakImageProps) => (
  <OakImage {...args} />
);

DefaultImage.args = {
  alt: "Test image",
  src: "https://oaknationalacademy-res.cloudinary.com/image/upload/v1687374653/Trees.jpg",
};
