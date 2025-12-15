import { Meta, StoryObj } from "@storybook/react";
import React, { Fragment } from "react";

import { OakHamburgerMenu } from "./OakHamburgerMenu";

import { OakP, OakLI, OakUL } from "@/components/atoms";

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
      include: ["children", "triggerLabel"],
    },
  },
  args: {
    children: (
      <>
        <OakP>Menu content goes here</OakP>
        <OakUL>
          <OakLI>Menu item 1</OakLI>
          <OakLI>Menu item 2</OakLI>
          <OakLI>Menu item 3</OakLI>
        </OakUL>
      </>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof OakHamburgerMenu>;

export const Default: Story = {};

export const CustomTriggerLabel: Story = {
  args: {},
};

export const WithScrollingContent: Story = {
  args: {
    children: (
      <>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <Fragment key={i}>
            <OakP $mb="spacing-16">
              This is menu item {i}. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </OakP>
          </Fragment>
        ))}
      </>
    ),
  },
};
