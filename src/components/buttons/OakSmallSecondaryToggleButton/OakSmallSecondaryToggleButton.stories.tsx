import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSmallSecondaryToggleButton } from "./OakSmallSecondaryToggleButton";

import { oakIconNames } from "@/components/images-and-icons/OakIcon";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakBox } from "@/index";

const controlIconNames = [
  null,
  [...oakIconNames].sort((a, b) => a.localeCompare(b)),
].flat();

const meta: Meta<typeof OakSmallSecondaryToggleButton> = {
  component: OakSmallSecondaryToggleButton,
  tags: ["autodocs"],
  title: "OWA/OakSmallSecondaryToggleButton",
  argTypes: {
    toggleOn: {
      control: "boolean",
    },
    iconName: {
      options: controlIconNames,
    },
    isTrailingIcon: {
      control: "boolean",
    },
    isLoading: {
      control: "boolean",
    },
  },
  parameters: {
    controls: {
      include: ["toggleOn", "iconName", "isTrailingIcon", "isLoading"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakSmallSecondaryToggleButton>;

export const Default: Story = {
  render: (args) => (
    <OakFlex $gap="spacing-24">
      <OakSmallSecondaryToggleButton {...args}>
        Secondary Button
      </OakSmallSecondaryToggleButton>
      <OakSmallSecondaryToggleButton {...args} disabled>
        Disabled Button
      </OakSmallSecondaryToggleButton>
      <OakSmallSecondaryToggleButton {...args} isLoading>
        Loading Button
      </OakSmallSecondaryToggleButton>
    </OakFlex>
  ),
  args: {
    toggleOn: false,
  },
};

export const GoogleClassroom: Story = {
  render: (args) => (
    <OakFlex $gap="spacing-24">
      <OakSmallSecondaryToggleButton {...args}>
        Secondary Button
      </OakSmallSecondaryToggleButton>
      <OakSmallSecondaryToggleButton {...args} disabled>
        Disabled Button
      </OakSmallSecondaryToggleButton>
      <OakSmallSecondaryToggleButton {...args} isLoading>
        Loading Button
      </OakSmallSecondaryToggleButton>
    </OakFlex>
  ),
  args: {
    toggleOn: false,
    iconName: "dot",
    defaultBackgroundToggleOn: "bg-primary",
    defaultTextColorToggleOn: "text-primary",
    iconOverrideToggleOn: (
      <OakBox
        $borderRadius={"border-radius-circle"}
        $background={"icon-success"}
        $ba={"border-solid-m"}
        $borderColor={"text-primary"}
        $pa={"spacing-0"}
        $width={"spacing-24"}
        $height={"spacing-24"}
      ></OakBox>
    ),
    iconOverrideToggleOff: (
      <OakBox
        $borderRadius={"border-radius-circle"}
        $background={"bg-primary"}
        $ba={"border-solid-m"}
        $borderColor={"text-primary"}
        $pa={"spacing-0"}
        $width={"spacing-24"}
        $height={"spacing-24"}
      ></OakBox>
    ),
  },
};
