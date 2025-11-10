import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { OakFormInputWithLabels } from "./OakFormInputWithLabels";

import { OakBox } from "@/components/atoms";

const meta: Meta<typeof OakFormInputWithLabels> = {
  component: OakFormInputWithLabels,
  parameters: {},
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <OakBox
        $width={"100%"}
        $background={"grey10"}
        $pv={"spacing-20"}
        $ph={"spacing-12"}
      >
        <Story />
      </OakBox>
    ),
  ],
  argTypes: {
    label: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    invalid: {
      control: "boolean",
    },
    invalidText: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Email Address",
    helperText: "Please enter your email address",
    placeholder: "Enter your email",
  },
};

export const WithError: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    invalid: true,
    invalidText: "Please enter a valid email address",
  },
};

export const Disabled: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    disabled: true,
  },
};

export const DefaultValue: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    defaultValue: "test@example.com",
  },
};
