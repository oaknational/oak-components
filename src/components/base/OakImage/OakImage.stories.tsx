import React from "react";
import { Meta, StoryObj } from "@storybook/react";

// @ts-expect-error:  this is an image
import testPic from "../../../../assets/oak-national-academy-logo-512.png";
import { OakFlex } from "../OakFlex";

import { OakImage, OakImageProps } from "./OakImage";

import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { colorFilterArgTypes } from "@/storybook-helpers/colorFilterStyleHelpers";

/**
 *
 * - A wrapper for NextJs's Image component.
 * - Use this for all image types as well as icons.
 * - Can accept remote urls provided they are whitelisted in next.config.js and relative urls for local images provided they begin with a "/".
 * - Set the width and height of the image through the `$width` and `$height` props when the aspect ratio is not known. This will letterbox the image to avoid stretching.
 * - Alternatively pass `width` and `height` props when the aspect ratio is known and use $minWidth to set the rendered width, avoiding letter-boxing.
 * - NB. for letterboxed images, $background controls the color of the letterbox not the image.
 * - `positionStyle` and `spacingStyle` props are also exposed for container.
 * - sizes is exposed for further optimisation read Next docs for more info.
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
  <OakFlex $flexDirection="column" $gap="space-between-s">
    <OakImage
      {...args}
      src={`https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336494/samples/animals/cat.jpg`}
    />
    <OakImage
      {...args}
      src={
        "https://oaknationalacademy-res.cloudinary.com/image/upload/v1687374653/Trees.jpg"
      }
    />
  </OakFlex>
);

RemoteImage.args = {
  alt: "Image of a cat",
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
  render: (args) => <OakImage {...args} />,
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

export const SVGImageResponsive: Story = {
  render: (args) => <OakImage {...args} />,
  args: {
    alt: "Image of a cat",
    src: `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1699887218/icons/gvqxjxcw07ei2kkmwnes.svg`,
    $minWidth: "all-spacing-16",
    sizes: "100vw",
    width: 100,
    height: 100,
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
