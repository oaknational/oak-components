import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakRadioAsButton } from "./OakRadioAsButton";

import { OakRadioGroup } from "@/components/form-elements/OakRadioGroup";

const argTypes: Meta<typeof OakRadioAsButton>["argTypes"] = {
  variant: {
    control: { type: "select" },
    options: ["icon", "radio"],
  },
  colorScheme: {
    control: { type: "select" },
    options: [
      "primary",
      "decorative1",
      "decorative2",
      "decorative3",
      "decorative4",
      "decorative5",
      "decorative6",
      "transparent",
    ],
  },
  disabled: {
    control: { type: "boolean" },
  },
  displayValue: {
    control: { type: "text" },
  },
};

const meta: Meta<typeof OakRadioAsButton> = {
  component: OakRadioAsButton,
  tags: ["autodocs"],
  title: "components/Form elements/OakRadioAsButton",
  argTypes,
  parameters: {
    backgrounds: {
      default: "light",
    },
    controls: {
      include: [
        "variant",
        "colorScheme",
        "disabled",
        "displayValue",
        "value",
        "icon",
      ],
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
};

export const RadioVariant: Story = {
  render: (args) => {
    // This story is specifically for `variant="radio"` so we ignore any
    // arg-driven `colorScheme` and render one option per scheme instead.
    const { colorScheme: _colorScheme, icon: _icon, ...restArgs } = args;

    return (
      <OakRadioGroup
        name="radio-variant-color-schemes"
        aria-label="Choose a subject"
        $flexWrap={"wrap"}
      >
        <OakRadioAsButton
          {...restArgs}
          variant="radio"
          value="primary"
          displayValue="Primary"
          aria-label="Primary"
          colorScheme="primary"
        />
        <OakRadioAsButton
          {...restArgs}
          variant="radio"
          value="decorative1"
          displayValue="Decorative 1"
          aria-label="Decorative 1"
          colorScheme="decorative1"
        />
        <OakRadioAsButton
          {...restArgs}
          variant="radio"
          value="decorative2"
          displayValue="Decorative 2"
          aria-label="Decorative 2"
          colorScheme="decorative2"
        />
        <OakRadioAsButton
          {...restArgs}
          variant="radio"
          value="decorative3"
          displayValue="Decorative 3"
          aria-label="Decorative 3"
          colorScheme="decorative3"
        />
        <OakRadioAsButton
          {...restArgs}
          variant="radio"
          value="decorative4"
          displayValue="Decorative 4"
          aria-label="Decorative 4"
          colorScheme="decorative4"
        />
        <OakRadioAsButton
          {...restArgs}
          variant="radio"
          value="decorative5"
          displayValue="Decorative 5"
          aria-label="Decorative 5"
          colorScheme="decorative5"
        />
        <OakRadioAsButton
          {...restArgs}
          variant="radio"
          value="decorative6"
          displayValue="Decorative 6"
          aria-label="Decorative 6"
          colorScheme="decorative6"
        />
        <OakRadioAsButton
          {...restArgs}
          variant="radio"
          value="transparent"
          displayValue="Transparent"
          aria-label="Transparent"
          colorScheme="transparent"
        />
      </OakRadioGroup>
    );
  },
  args: {
    variant: "radio",
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
        variant="icon"
        displayValue="Art and design"
        icon="subject-art"
      />
      <OakRadioAsButton
        value="biology"
        variant="icon"
        displayValue="Biology"
        icon="subject-biology"
      />
      <OakRadioAsButton
        value="chemistry"
        variant="icon"
        displayValue="Chemistry"
        icon="subject-chemistry"
      />
      <OakRadioAsButton
        value="physics"
        variant="icon"
        displayValue="Physics"
        icon="subject-physics"
      />
      <OakRadioAsButton
        value="computing"
        variant="icon"
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
          variant="icon"
          displayValue="Art and design"
          icon="subject-art"
          value="art"
        />
        <OakRadioAsButton
          {...restArgs}
          variant="icon"
          displayValue="Biology"
          icon="subject-biology"
          value="biology"
        />
        <OakRadioAsButton
          {...restArgs}
          variant="icon"
          displayValue="Chemistry"
          icon="subject-chemistry"
          value="chemistry"
        />
        <OakRadioAsButton
          {...restArgs}
          variant="icon"
          displayValue="Physics"
          icon="subject-physics"
          value="physics"
        />
        <OakRadioAsButton
          {...restArgs}
          variant="icon"
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
};

export const WithDifferentBackgrounds: Story = {
  render: () => (
    <OakRadioGroup
      name="backgrounds"
      aria-label="Choose a subject"
      $flexWrap={"wrap"}
    >
      <OakRadioAsButton
        value="art-primary"
        displayValue="Primary background"
        icon="subject-art"
        colorScheme="primary"
      />
      <OakRadioAsButton
        value="biology-decorative1"
        displayValue="Decorative 1 background"
        icon="subject-biology"
        colorScheme="decorative1"
      />
      <OakRadioAsButton
        value="chemistry-decorative2"
        displayValue="Decorative 2 background"
        icon="subject-chemistry"
        colorScheme="decorative2"
      />
      <OakRadioAsButton
        value="physics-decorative3"
        displayValue="Decorative 3 background"
        icon="subject-physics"
        colorScheme="decorative3"
      />
      <OakRadioAsButton
        value="computing-decorative4"
        displayValue="Decorative 4 background"
        icon="subject-computing"
        colorScheme="decorative4"
      />
      <OakRadioAsButton
        value="english-decorative5"
        displayValue="Decorative 5 background"
        icon="subject-english"
        colorScheme="decorative5"
      />
      <OakRadioAsButton
        value="maths-decorative6"
        displayValue="Decorative 6 background"
        icon="subject-maths"
        colorScheme="decorative6"
      />
      <OakRadioAsButton
        value="transparent"
        displayValue="Transparent"
        icon="subject-history"
        colorScheme="transparent"
      />
    </OakRadioGroup>
  ),
};
