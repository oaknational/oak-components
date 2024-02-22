import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakCloudinaryImage } from "./OakCloudinaryImage";

import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { colorFilterArgTypes } from "@/storybook-helpers/colorFilterStyleHelpers";

const meta: Meta<typeof OakCloudinaryImage> = {
  component: OakCloudinaryImage,
  tags: ["autodocs"],
  title: "components/atoms/OakCloudinaryImage",
  argTypes: {
    ...sizeArgTypes,
    ...colorFilterArgTypes,
  },
  parameters: {
    controls: {
      include: [...Object.keys(sizeArgTypes)],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakCloudinaryImage>;

export const Default: Story = {
  render: (args) => (
    <OakCloudinaryImage
      {...args}
      cloudinaryId="v1705942058/test-images/Cat_August_2010-4_lklxsr.jpg"
    />
  ),
  args: {
    width: 3640,
    height: 2226,
    $minWidth: "all-spacing-22",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
};
