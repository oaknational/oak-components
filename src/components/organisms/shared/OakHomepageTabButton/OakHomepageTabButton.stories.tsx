import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakHomepageTabButton } from "./OakHomepageTabButton";

import { OakFlex } from "@/components/atoms";

const meta: Meta<typeof OakHomepageTabButton> = {
  component: OakHomepageTabButton,
  tags: ["autodocs"],

  argTypes: {
    iconName: {
      control: "select",
      options: [
        "homepage-robot-waving",
        "homepage-three-pupils",
        "homepage-teacher",
        "homepage-teacher-map",
      ],
    },
    isActive: {
      control: "boolean",
    },
    showNewIcon: {
      control: "boolean",
    },
  },
  parameters: {
    controls: {
      include: ["iconName", "isActive", "title", "showNewIcon"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakHomepageTabButton>;

export const Default: Story = {
  render: (args) => <OakHomepageTabButton {...args} />,
  args: {
    iconName: "homepage-robot-waving",
    isActive: false,
    title: "Teaching resources",
    showNewIcon: true,
  },
};

export const WordWrap: Story = {
  render: (args) => (
    <OakFlex $gap={["space-between-ssx", "space-between-s"]}>
      <OakHomepageTabButton {...args} />
      <OakHomepageTabButton {...args} />
      <OakHomepageTabButton {...args} />
      <OakHomepageTabButton {...args} />
    </OakFlex>
  ),

  args: {
    iconName: "homepage-robot-waving",
    isActive: false,
    title: "Teaching resources",
    showNewIcon: true,
  },
};

export const AsLink: Story = {
  render: (args) => <OakHomepageTabButton {...args} element={"a"} href={"/"} />,
  args: {
    iconName: "homepage-robot-waving",
    isActive: false,
    title: "Teaching resources",
    showNewIcon: true,
  },
};
