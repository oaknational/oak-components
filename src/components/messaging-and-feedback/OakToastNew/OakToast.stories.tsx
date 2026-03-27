import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakToastNew } from "./OakToastNew";

import { oakUiBackgroundTokens } from "@/styles/theme/color";

const meta: Meta<typeof OakToastNew> = {
  tags: ["autodocs"],
  title: "components/Messaging and feedback/OakToastNew",
  component: OakToastNew,
  argTypes: {
    children: {
      control: { type: "text" },
      description: "The content of the toast notification.",
    },
    variant: {
      options: ["informative", "success", "error"],
      control: { type: "radio" },
      description: "The semantic variant of the toast.",
    },
    colorScheme: {
      options: ["primary", "inverted"],
      control: { type: "radio" },
      description: "The color scheme for the toast (informative only).",
    },
    backgroundColor: {
      options: oakUiBackgroundTokens,
      control: { type: "select" },
      description: "Custom background color override.",
    },
    isAutoDismiss: {
      control: { type: "boolean" },
      description: "If true, the toast will automatically dismiss.",
    },
    autoDismissDuration: {
      control: { type: "number" },
      description: "Duration in ms before auto-dismiss.",
    },
    hasIcon: {
      control: { type: "boolean" },
      description: "If true, shows the icon for the variant.",
    },
    id: {
      control: { type: "number" },
      description: "Optional id for the toast instance.",
    },
    onClose: { action: "onClose" },
  },
};

export default meta;

type Story = StoryObj<typeof OakToastNew>;

export const Informative: Story = {
  render: (args) => <OakToastNew {...args} />,
  args: {
    children: "This is a toast message",
    isAutoDismiss: false,
    hasIcon: true,
    variant: "informative",
    colorScheme: "primary",
  },
};

export const InformativeWithAutoDismissAndNoIcon: Story = {
  render: (args) => <OakToastNew {...args} />,
  args: {
    children: "This is a toast message",
    isAutoDismiss: true,
    hasIcon: false,
    variant: "informative",
    colorScheme: "primary",
  },
};

export const Success: Story = {
  render: (args) => <OakToastNew {...args} />,
  args: {
    variant: "success",
    isAutoDismiss: false,
    hasIcon: true,
  },
};

export const Error: Story = {
  render: (args) => <OakToastNew {...args} />,
  args: {
    variant: "error",
    isAutoDismiss: false,
    hasIcon: true,
  },
};