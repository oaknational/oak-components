import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TestButton } from "./TestButton";

const meta: Meta<typeof TestButton> = {
  component: TestButton,
  title: "OakComponents/TestButton",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TestButton>;

export const Primary: Story = (args) => (
  <TestButton data-testId="InputField-id" {...args} />
);
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};

export const Secondary: Story = (args) => (
  <TestButton data-testId="InputField-id" {...args} />
);
Secondary.args = {
  primary: false,
  disabled: false,
  text: "Secondary",
};

export const Disabled: Story = (args) => (
  <TestButton data-testId="InputField-id" {...args} />
);
Disabled.args = {
  primary: false,
  disabled: true,
  text: "Disabled",
};

export const Small: Story = (args) => (
  <TestButton data-testId="InputField-id" {...args} />
);
Small.args = {
  primary: true,
  disabled: false,
  size: "small",
  text: "Small",
};

export const Medium: Story = (args) => (
  <TestButton data-testId="InputField-id" {...args} />
);
Medium.args = {
  primary: true,
  disabled: false,
  size: "medium",
  text: "Medium",
};

export const Large: Story = (args) => (
  <TestButton data-testId="InputField-id" {...args} />
);
Large.args = {
  primary: true,
  disabled: false,
  size: "large",
  text: "Large",
};
