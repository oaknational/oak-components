import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakScaleImageButton } from "./OakScaleImageButton";

import { OakFlex } from "@/components/atoms";

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
