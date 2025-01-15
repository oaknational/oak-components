import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakRadioAsButton } from "./OakRadioAsButton";

import { OakRadioGroup } from "@/components/molecules";

const meta: Meta<typeof OakRadioAsButton> = {
  component: OakRadioAsButton,
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

type Story = StoryObj<typeof OakRadioAsButton>;

export const Default: Story = {
  render: (args) => <OakRadioAsButton {...args} />,
  args: {
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
  render: (args) => <OakRadioAsButton {...args} />,
  args: {
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
  render: (args) => {
    return (
      <OakRadioGroup name="test" $flexWrap={"wrap"}>
        <OakRadioAsButton
          {...args}
          aria-label="Art and design"
          displayValue="Art and design"
          icon="subject-art"
        />
        <OakRadioAsButton
          {...args}
          aria-label="Biology"
          displayValue="Biology"
          icon="subject-biology"
        />
        <OakRadioAsButton
          {...args}
          aria-label="Chemistry"
          displayValue="Chemistry"
          icon="subject-chemistry"
        />
        <OakRadioAsButton
          {...args}
          aria-label="Physics"
          displayValue="Physics"
          icon="subject-physics"
        />
        <OakRadioAsButton
          {...args}
          aria-label="Computing"
          displayValue="Computing"
          icon="subject-computing"
        />
      </OakRadioGroup>
    );
  },
  args: {
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
