import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakScaleImageButton } from "./OakScaleImageButton";

import { OakCloudinaryImage, OakFlex } from "@/components/atoms";

const meta: Meta<typeof OakScaleImageButton> = {
  component: OakScaleImageButton,
  tags: ["autodocs"],
  title: "components/molecules/OakScaleImageButton",
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
      $width={"all-spacing-7"}
      $height={"all-spacing-7"}
      $pointerEvents={"auto"}
    >
      <OakScaleImageButton {...args} />
    </OakFlex>
  ),
};

export const withImageScaleCallback: Story = {
  render: (args) => {
    const [scaled, setScale] = useState<boolean>(false);
    return (
      <OakFlex
        $width={"all-spacing-7"}
        $height={"all-spacing-7"}
        $pointerEvents={"auto"}
      >
        <OakCloudinaryImage
          alt={""}
          cloudinaryId="v1705942058/test-images/Cat_August_2010-4_lklxsr.jpg"
          width={scaled ? 7280 : 3640}
          height={scaled ? 4452 : 2226}
          $minWidth={scaled ? "all-spacing-22" : "all-spacing-11"}
        />
        <OakScaleImageButton
          {...args}
          onImageScaleCallback={() => {
            setScale(!scaled);
          }}
          isExpanded={scaled}
        />
      </OakFlex>
    );
  },
  args: {},
  parameters: {
    controls: {
      include: [],
    },
  },
};
