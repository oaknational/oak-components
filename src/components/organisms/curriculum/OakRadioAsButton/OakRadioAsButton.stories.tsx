import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakRadioAsButton } from "./OakRadioAsButton";

import { OakRadioGroup } from "@/components/molecules";

const meta: Meta<typeof OakRadioAsButton> = {
  component: OakRadioAsButton,
  tags: ["autodocs"],
  title: "components/organisms/OakRadioAsButton (🔀 to be refactored)",
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
  render: (args) => (
    <OakRadioGroup name="test">
      <OakRadioAsButton {...args} />
    </OakRadioGroup>
  ),
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
  render: (args) => (
    <OakRadioGroup name="test">
      <OakRadioAsButton {...args} />
    </OakRadioGroup>
  ),
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
  render: (args) => (
    <OakRadioGroup name="test">
      <OakRadioAsButton {...args} />
    </OakRadioGroup>
  ),
  args: {
    name: "radio-1",
    value: "Option 1",
    displayValue: "Art and design",
    icon: "subject-art",
    "aria-label": "Test aria label",
  },
};

export const WithAriaLabelledBy: Story = {
  render: () => (
    <>
      <h2 id="subject-label">Choose a subject</h2>
      <OakRadioGroup name="test" aria-labelledby="subject-label">
        <OakRadioAsButton
          value="option_1"
          displayValue="Biology"
          icon="subject-biology"
        />
        <OakRadioAsButton
          value="option_2"
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

export const MultipleOptionsWithInitialValueSet: Story = {
  render: () => (
    <OakRadioGroup
      name="subjects"
      aria-label="Choose a subject"
      $flexWrap={"wrap"}
      value={"physics"}
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
          value="art"
        />
        <OakRadioAsButton
          {...restArgs}
          displayValue="Biology"
          icon="subject-biology"
          value="biology"
        />
        <OakRadioAsButton
          {...restArgs}
          displayValue="Chemistry"
          icon="subject-chemistry"
          value="chemistry"
        />
        <OakRadioAsButton
          {...restArgs}
          displayValue="Physics"
          icon="subject-physics"
          value="physics"
        />
        <OakRadioAsButton
          {...restArgs}
          displayValue="Computing"
          icon="subject-computing"
          value="computing"
        />
      </OakRadioGroup>
    );
  },
  args: {
    keepIconColor: true,
  },
  parameters: {
    controls: {
      include: ["disabled", "checked", "displayValue", "value", "icon"],
    },
  },
};
