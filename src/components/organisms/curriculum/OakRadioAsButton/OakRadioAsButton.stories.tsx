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

export const WithAriaLabel: Story = {
  args: {
    name: "radio-1",
    value: "Option 1",
    displayValue: "Art and design",
    icon: "subject-art",
    "aria-label": "Select art and design",
  },
};

export const WithAriaLabelledBy: Story = {
  render: () => (
    <>
      <h2 id="subject-label">Choose a subject</h2>
      <OakRadioAsButton
        name="radio-1"
        value="Option 1"
        displayValue="Biology"
        icon="subject-biology"
        aria-labelledby="subject-label"
      />
    </>
  ),
};

export const MultipleOptions: Story = {
  render: () => (
    <OakRadioGroup name="subjects">
      <OakRadioAsButton
        value="art"
        displayValue="Art and design"
        icon="subject-art"
        aria-label="Select art and design"
      />
      <OakRadioAsButton
        value="biology"
        displayValue="Biology"
        icon="subject-biology"
        aria-label="Select biology"
      />
      <OakRadioAsButton
        value="chemistry"
        displayValue="Chemistry"
        icon="subject-chemistry"
        aria-label="Select chemistry"
      />
      <OakRadioAsButton
        value="physics"
        displayValue="Physics"
        icon="subject-physics"
        aria-label="Select physics"
      />
      <OakRadioAsButton
        value="computing"
        displayValue="Computing"
        icon="subject-computing"
        aria-label="Select computing"
      />
    </OakRadioGroup>
  ),
};

export const KeepIconColor: Story = {
  render: (args) => {
    const { "aria-labelledby": _, ...restArgs } = args;
    return (
      <OakRadioGroup name="test" $flexWrap={"wrap"}>
        <OakRadioAsButton
          {...restArgs}
          aria-label="Art and design"
          displayValue="Art and design"
          icon="subject-art"
        />
        <OakRadioAsButton
          {...restArgs}
          aria-label="Biology"
          displayValue="Biology"
          icon="subject-biology"
        />
        <OakRadioAsButton
          {...restArgs}
          aria-label="Chemistry"
          displayValue="Chemistry"
          icon="subject-chemistry"
        />
        <OakRadioAsButton
          {...restArgs}
          aria-label="Physics"
          displayValue="Physics"
          icon="subject-physics"
        />
        <OakRadioAsButton
          {...restArgs}
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
