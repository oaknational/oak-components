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
      include: ["disabled", "checked", "displayValue", "value", "icon"],
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
  },
  parameters: {
    controls: {
      include: ["disabled", "checked", "displayValue", "value", "icon"],
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
      include: ["disabled", "checked", "displayValue", "value", "icon"],
    },
  },
};

export const WithAriaLabel: Story = {
  args: {
    name: "radio-1",
    value: "Option 1",
    displayValue: "Art and design",
    icon: "subject-art",
  },
};

export const WithAriaLabelledBy: Story = {
  render: () => (
    <>
      <h2 id="subject-label">Choose a subject</h2>
      <OakRadioGroup name="test" aria-labelledby="subject-label">
        <OakRadioAsButton
          value="Option 1"
          displayValue="Biology"
          icon="subject-biology"
        />
        <OakRadioAsButton
          value="Option 1"
          displayValue="Biology"
          icon="subject-biology"
        />
      </OakRadioGroup>
    </>
  ),
};

export const MultipleOptions: Story = {
  render: () => (
    <OakRadioGroup
      name="subjects"
      aria-label="Choose a subject"
      $flexWrap={"wrap"}
    >
      <OakRadioAsButton
        value="art"
        displayValue="Art and design"
        icon="subject-art"
      />
      <OakRadioAsButton
        value="biology"
        displayValue="Biology"
        icon="subject-biology"
      />
      <OakRadioAsButton
        value="chemistry"
        displayValue="Chemistry"
        icon="subject-chemistry"
      />
      <OakRadioAsButton
        value="physics"
        displayValue="Physics"
        icon="subject-physics"
      />
      <OakRadioAsButton
        value="computing"
        displayValue="Computing"
        icon="subject-computing"
      />
    </OakRadioGroup>
  ),
};

export const KeepIconColor: Story = {
  render: (args) => {
    const { "aria-labelledby": _, ...restArgs } = args;
    return (
      <OakRadioGroup
        name="test"
        aria-label="Choose a subject"
        $flexWrap={"wrap"}
      >
        <OakRadioAsButton
          {...restArgs}
          displayValue="Art and design"
          icon="subject-art"
        />
        <OakRadioAsButton
          {...restArgs}
          displayValue="Biology"
          icon="subject-biology"
        />
        <OakRadioAsButton
          {...restArgs}
          displayValue="Chemistry"
          icon="subject-chemistry"
        />
        <OakRadioAsButton
          {...restArgs}
          displayValue="Physics"
          icon="subject-physics"
        />
        <OakRadioAsButton
          {...restArgs}
          displayValue="Computing"
          icon="subject-computing"
        />
      </OakRadioGroup>
    );
  },
  args: {
    value: "a test value",
    displayValue: "Lessons",
    icon: "teacher-unit",
    keepIconColor: true,
  },
  parameters: {
    controls: {
      include: ["disabled", "checked", "displayValue", "value", "icon"],
    },
  },
};
