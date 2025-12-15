import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { OakHamburgerMenu } from "./OakHamburgerMenu";

import { OakP } from "@/components/atoms";

const meta: Meta<typeof OakHamburgerMenu> = {
  component: OakHamburgerMenu,
  tags: ["autodocs"],
  title: "components/molecules/OakHamburgerMenu",
  argTypes: {
    children: {
      control: "text",
    },
  },
  parameters: {
    controls: {
      include: ["children"],
    },
  },
  args: {
    children: <OakP>Menu content goes here</OakP>,
  },
};

export default meta;

type Story = StoryObj<typeof OakHamburgerMenu>;

export const Default: Story = {};
