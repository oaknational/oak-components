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
    },
    variant: {
      options: ["informative", "success", "error"],
      control: { type: "radio" },
    },
    colorScheme: {
      options: ["primary", "inverted"],
      control: { type: "radio" },
    },
    backgroundColor: {
      options: oakUiBackgroundTokens,
      control: { type: "select" },
    },
    isAutoDismiss: {
      control: { type: "boolean" },
    },
    autoDismissDuration: {
      control: { type: "number" },
    },
    hasIcon: {
      control: { type: "boolean" },
    },
    id: {
      control: { type: "number" },
    },
    onClose: { action: "onClose" },
  },
};

export default meta;

type Story = StoryObj<typeof OakToastNew>;

export const InformativeVariant: Story = {
  render: (args) => <OakToastNew {...args} />,
  args: {
    children: "This is a toast message",
    isAutoDismiss: false,
    hasIcon: true,
    variant: "informative",
    colorScheme: "primary",
  },
};

export const InformativeVariantWithAutoDismissAndNoIcon: Story = {
  render: (args) => <OakToastNew {...args} />,
  args: {
    children: "This is a toast message",
    isAutoDismiss: true,
    hasIcon: false,
    variant: "informative",
    colorScheme: "primary",
  },
};

export const SuccessVariant: Story = {
  render: (args) => <OakToastNew {...args} />,
  args: {
    variant: "success",
    isAutoDismiss: false,
    hasIcon: true,
  },
};

export const ErrorVariant: Story = {
  render: (args) => <OakToastNew {...args} />,
  args: {
    variant: "error",
    isAutoDismiss: false,
    hasIcon: true,
  },
};
