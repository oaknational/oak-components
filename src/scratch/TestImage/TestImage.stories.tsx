import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import TestImage from "./TestImage";

const meta: Meta<typeof TestImage> = {
  component: TestImage,
  title: "scratch/TestImage",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TestImage>;

export const Primary: Story = () => <TestImage />;
Primary.args = {};