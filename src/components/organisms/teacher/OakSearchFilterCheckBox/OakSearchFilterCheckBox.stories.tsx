import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSearchFilterCheckBox } from "./OakSearchFilterCheckBox";

const meta: Meta<typeof OakSearchFilterCheckBox> = {
  component: OakSearchFilterCheckBox,
  tags: ["autodocs"],

  parameters: {
    backgrounds: {
      default: "light",
    },
    controls: {
      include: ["disabled", "defaultChecked", "displayValue", "value", "icon"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakSearchFilterCheckBox>;

export const Default: Story = {
  render: (args) => <OakSearchFilterCheckBox {...args} />,
  args: {
    id: "checkbox-test-default",
    value: "a test value",
    displayValue: "Art and design",
    icon: "subject-art",
    "aria-label": "Art and design",
  },
  parameters: {
    controls: {
      include: ["disabled", "defaultChecked", "displayValue", "value", "icon"],
    },
  },
};

export const NoIcon: Story = {
  render: (args) => <OakSearchFilterCheckBox {...args} />,
  args: {
    id: "checkbox-test-default",
    value: "a test value",
    displayValue: "Art and design",
    "aria-label": "Art and design",
  },
  parameters: {
    controls: {
      include: ["disabled", "defaultChecked", "displayValue", "value", "icon"],
    },
  },
};

export const KeepIconColor: Story = {
  render: (args) => <OakSearchFilterCheckBox {...args} />,
  args: {
    id: "checkbox-test-default",
    value: "a test value",
    displayValue: "Lessons",
    "aria-label": "Art and design",
    icon: "teacher-unit",
    keepIconColor: true,
  },
  parameters: {
    controls: {
      include: ["disabled", "defaultChecked", "displayValue", "value", "icon"],
    },
  },
};
