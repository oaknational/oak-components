import React from "react";
import { Meta, StoryObj } from "@storybook/react";

// @ts-expect-error:  this is an image
import testPic from "../../../../assets/oak-national-academy-logo-512.png";

import { OakImage, OakImageProps } from "./OakImage";

import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { colorFilterArgTypes } from "@/storybook-helpers/colorFilterStyleHelpers";

/**
 *
 * - A wrapper for NextJs's Image component.
 * - Use this for all image types as well as icons.
 * - Can accept remote urls provided they are whitelisted in next.config.js and relative urls for local images provided they begin with a "/".
 * - Set the width and height of the image through the `$width` and `$height` props not the `width` and `height` props.
 * - It also exposes the `positionStyle` and `spacingStyle` props.
 * - The default behaviour is auto for both width and height. Setting one only will keep the original image ratio.
 *
 */

const meta: Meta<typeof OakImage> = {
  component: OakImage,
  tags: ["autodocs"],
  title: "components/base/OakImage",
  argTypes: {
    ...sizeArgTypes,
    ...colorFilterArgTypes,
  },
  parameters: {
    controls: {
      include: [...Object.keys(sizeArgTypes)],
      sort: "none",
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakImage>;

export const LocalImage: Story = (args: OakImageProps) => (
  <OakImage {...args} />
);

LocalImage.args = {
  alt: "Test image",
  src: testPic,
  $height: "all-spacing-16",
};

export const RemoteImage: Story = (args: OakImageProps) => (
  <OakImage {...args} />
);

RemoteImage.args = {
  alt: "Image of a cat",
  src: `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336494/samples/animals/cat.jpg`,
  $height: "all-spacing-16",
};

export const ClickableImage: Story = (args: OakImageProps) => (
  <OakImage {...args} />
);

ClickableImage.args = {
  alt: "Test image",
  src: testPic,
  onClick: () => alert("clicked"),
  $height: "all-spacing-16",
};

export const SVGImage: Story = {
  render: (args: OakImageProps) => <OakImage {...args} />,
  args: {
    alt: "Image of a cat",
    src: `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1699887218/icons/gvqxjxcw07ei2kkmwnes.svg`,
    $height: "all-spacing-16",
  },
  parameters: {
    controls: {
      include: [
        ...Object.keys(sizeArgTypes),
        ...Object.keys(colorFilterArgTypes),
      ],
      sort: "none",
    },
  },
};
