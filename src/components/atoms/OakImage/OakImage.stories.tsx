import React from "react";
import { Meta, StoryObj } from "@storybook/react";

// @ts-expect-error:  this is an image
import testPic from "../../../../assets/oak-national-academy-logo-512.png";

import { OakImage, OakImageProps } from "./OakImage";

import { OakFlex } from "@/components/atoms/OakFlex";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { colorFilterArgTypes } from "@/storybook-helpers/colorFilterStyleHelpers";

const meta: Meta<typeof OakImage> = {
  component: OakImage,
  tags: ["autodocs"],
  title: "components/atoms/OakImage",
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
  $height: "spacing-120",
};

export const RemoteImage: Story = (args: OakImageProps) => (
  <OakFlex $flexDirection="column" $gap="spacing-16">
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
  $height: "spacing-120",
};

export const ClickableImage: Story = (args: OakImageProps) => (
  <OakImage {...args} />
);

ClickableImage.args = {
  alt: "Test image",
  src: testPic,
  onClick: () => alert("clicked"),
  $height: "spacing-120",
};

export const SVGImage: Story = {
  render: (args) => <OakImage {...args} />,
  args: {
    alt: "Image of a cat",
    src: `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1699887218/icons/gvqxjxcw07ei2kkmwnes.svg`,
    $height: "spacing-120",
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
    $minWidth: "spacing-120",
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
