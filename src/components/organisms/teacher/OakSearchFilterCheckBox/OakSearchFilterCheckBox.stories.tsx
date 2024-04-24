import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSearchFilterCheckBox } from "./OakSearchFilterCheckBox";

const meta: Meta<typeof OakSearchFilterCheckBox> = {
  component: OakSearchFilterCheckBox,
  tags: ["autodocs"],
  title: "components/organisms/teacher/OakSearchFilterCheckBox",
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
