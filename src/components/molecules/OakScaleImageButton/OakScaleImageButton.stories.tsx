import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakScaleImageButton } from "./OakScaleImageButton";

import { OakCloudinaryImage, OakFlex } from "@/components/atoms";

const meta: Meta<typeof OakScaleImageButton> = {
  component: OakScaleImageButton,
  tags: ["autodocs"],
  title:
    "components/buttons/OakIconButton (🔀 to be created)/OakScaleImageButton",
  argTypes: {
    onImageScaleCallback: {
      options: ["expand", "minimise"],
    },
    isExpanded: {
      control: "boolean",
    },
  },
  parameters: {
    controls: {
      include: ["onImageScaleCallback", "isExpanded"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakScaleImageButton>;

export const Default: Story = {
  render: (args) => (
    <OakFlex
      $width={"spacing-32"}
      $height={"spacing-32"}
      $pointerEvents={"auto"}
    >
      <OakScaleImageButton {...args} />
    </OakFlex>
  ),
};

export const withImage: Story = {
  render: (args) => {
    return (
      <OakFlex
        $width={"spacing-32"}
        $height={"spacing-32"}
        $pointerEvents={"auto"}
      >
        <OakCloudinaryImage
          alt={""}
          cloudinaryId="v1705942058/test-images/Cat_August_2010-4_lklxsr.jpg"
          width={3640}
          height={2226}
          $minWidth={"spacing-480"}
        />
        <OakScaleImageButton {...args} />
      </OakFlex>
    );
  },
};
