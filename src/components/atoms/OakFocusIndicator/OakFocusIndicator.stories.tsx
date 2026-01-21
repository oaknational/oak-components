import React, { ReactNode } from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakFocusIndicator } from "./OakFocusIndicator";

import { OakBox } from "@/components/atoms/OakBox";
import { oakDropShadowTokens, oakUiRoleTokens } from "@/styles";

const meta: Meta<typeof OakFocusIndicator> = {
  component: OakFocusIndicator,
  tags: ["autodocs"],
  title: "components/atoms/OakFocusIndicator",
  argTypes: {
    hoverBackground: { options: [...Object.keys(oakUiRoleTokens), null] },
    dropShadow: { options: [...Object.keys(oakDropShadowTokens), null] },
    hoverDropShadow: { options: [...Object.keys(oakDropShadowTokens), null] },
    activeDropShadow: { options: [...Object.keys(oakDropShadowTokens), null] },
  },
  parameters: {
    controls: {
      include: [
        "hoverBackground",
        "dropShadow",
        "hoverDropShadow",
        "activeDropShadow",
      ],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: "flex" }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof OakFocusIndicator>;

function UnStyledButton({ children }: { children: ReactNode }) {
  return (
    <button
      style={{
        background: "transparent",
        border: "none",
        fontSize: "larger",
        outline: "none",
      }}
    >
      {children}
    </button>
  );
}

export const Square: Story = {
  render: (args) => (
    <OakFocusIndicator {...args}>
      <OakBox $overflow={"hidden"} $ba={"border-solid-m"} {...args}>
        <UnStyledButton>Test</UnStyledButton>
      </OakBox>
    </OakFocusIndicator>
  ),
  args: {
    $borderRadius: "border-radius-none",
  },
};

export const Rounded: Story = {
  render: (args) => (
    <OakFocusIndicator {...args}>
      <OakBox $overflow={"hidden"} $ba={"border-solid-m"} {...args}>
        <UnStyledButton>Test</UnStyledButton>
      </OakBox>
    </OakFocusIndicator>
  ),
  args: {
    $borderRadius: "border-radius-m",
  },
};

export const ChangeHoverBackgroundAndHover: Story = {
  render: (args) => (
    <OakFocusIndicator {...args}>
      <OakBox $overflow={"hidden"} $ba={"border-solid-m"} {...args}>
        <UnStyledButton>Test</UnStyledButton>
      </OakBox>
    </OakFocusIndicator>
  ),
  args: {
    hoverBackground: "pink",
    $borderRadius: "border-radius-m",
  },
};

export const FakingFocus: Story = {
  render: (args) => (
    <OakFocusIndicator {...args}>
      <OakBox $overflow={"hidden"} $ba={"border-solid-m"} {...args}>
        <UnStyledButton>Test</UnStyledButton>
      </OakBox>
    </OakFocusIndicator>
  ),
  args: {
    dropShadow: "drop-shadow-centered-grey",
    hoverDropShadow: "drop-shadow-centered-grey",
    activeDropShadow: "drop-shadow-none",
    $borderRadius: "border-radius-m",
  },
};
