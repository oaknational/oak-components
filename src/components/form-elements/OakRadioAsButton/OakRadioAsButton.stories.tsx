import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakRadioAsButton } from "./OakRadioAsButton";

import { OakRadioGroup } from "@/components/form-elements/OakRadioGroup";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { OakGrid } from "@/components/layout-and-structure/OakGrid";
import { OakBox } from "@/components/layout-and-structure/OakBox";

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
  width: sizeArgTypes["$width"],
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
        "width",
        'onChange',
        'onFocus',
        'onBlur',
        'onHovered',
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakRadioAsButton>;

export const Playground: Story = {
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

export const StatesGrid: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    const colorSchemes = [
      "transparent",
      "primary",
      "decorative1",
      "decorative2",
      "decorative3",
      "decorative4",
      "decorative5",
      "decorative6",
    ] as const;

    const states = ["default", "checked", "disabled"] as const;

    const variants = ["icon", "radio"] as const;

    const renderCell = (opts: {
      variant: "icon" | "radio";
      colorScheme: (typeof colorSchemes)[number];
      state: (typeof states)[number];
    }) => {
      const { variant, colorScheme, state } = opts;
      const cellValue = `${variant}-${colorScheme}-${state}`;
      const groupValue = state === "checked" ? cellValue : "__none__";

      return (
        <OakRadioGroup
          name={`oak-radio-as-button-grid-${cellValue}`}
          aria-label={`OakRadioAsButton ${variant} ${colorScheme} ${state}`}
          value={groupValue}
        >
          {variant === "icon" ? (
            <OakRadioAsButton
              variant="with-icon"
              value={cellValue}
              displayValue="Label"
              aria-label={`${variant} ${colorScheme} ${state}`}
              colorScheme={colorScheme}
              disabled={state === "disabled"}
              icon="subject-art"
            />
          ) : (
            <OakRadioAsButton
              variant="with-radio"
              value={cellValue}
              displayValue="Label"
              aria-label={`${variant} ${colorScheme} ${state}`}
              colorScheme={colorScheme}
              disabled={state === "disabled"}
            />
          )}
        </OakRadioGroup>
      );
    };

    return (
      <OakGrid
        $gridTemplateColumns={`minmax(140px, auto) repeat(${colorSchemes.length}, minmax(140px, 1fr))`}
        $cg="spacing-16"
        $rg="spacing-16"
      >
        <OakBox />
        {colorSchemes.map((colorScheme) => (
          <OakBox key={colorScheme} $font="body-3-bold">
            {colorScheme}
          </OakBox>
        ))}

        {variants.flatMap((variant) =>
          states.flatMap((state) => {
            const rowKey = `${variant}-${state}`;
            return [
              <OakBox
                key={`${rowKey}-label`}
                $font="body-3-bold"
                $minHeight="spacing-40"
                style={{ display: "flex", alignItems: "center" }}
              >
                {variant} / {state}
              </OakBox>,
              ...colorSchemes.map((colorScheme) => (
                <OakBox key={`${rowKey}-${colorScheme}`}>
                  {renderCell({
                    variant,
                    colorScheme,
                    state,
                  })}
                </OakBox>
              )),
            ];
          }),
        )}
      </OakGrid>
    );
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

export const VariableWidths: Story = {
  render: (args) => {
    // This story is specifically for demonstrating `width`, so we ignore any
    // arg-driven `width`/`colorScheme`/`icon` and render one option per width.
    const {
      width: _width,
      colorScheme: _colorScheme,
      displayValue: _displayValue,
      value: _value,
      ...restArgs
    } = args;

    return (
      <OakRadioGroup
        name="radio-variant-widths"
        aria-label="Choose a subject"
        $flexDirection={"column"}
        $gap={"spacing-12"}
      >
        <OakRadioAsButton
          {...restArgs}
          variant="with-radio"
          value="w-fit"
          displayValue="fit-content (longer label to show sizing)"
          aria-label="Width fit-content"
          width="fit-content"
          colorScheme="primary"
        />
        <OakRadioAsButton
          {...restArgs}
          variant="with-radio"
          value="w-160"
          displayValue="spacing-160 (may wrap)"
          width="spacing-160"
          colorScheme="primary"
        />
        <OakRadioAsButton
          {...restArgs}
          variant="with-radio"
          value="w-240"
          displayValue="spacing-240"
          width="spacing-240"
          colorScheme="primary"
        />
        <OakRadioAsButton
          {...restArgs}
          variant="with-radio"
          value="w-responsive"
          displayValue="Responsive [spacing-160, spacing-240]"
          aria-label="Width responsive"
          width={["spacing-160", "spacing-240"]}
          colorScheme="primary"
        />
        <OakRadioAsButton
          {...restArgs}
          variant="with-icon"
          value="w-fit"
          displayValue="fit-content (longer label to show sizing)"
          aria-label="Width fit-content"
          width="fit-content"
          colorScheme="primary"
          icon="subject-art"
        />
        <OakRadioAsButton
          {...restArgs}
          variant="with-icon"
          value="w-160"
          displayValue="spacing-160 (may wrap)"
          width="spacing-160"
          colorScheme="primary"
          icon="subject-art"
        />
        <OakRadioAsButton
          {...restArgs}
          variant="with-icon"
          value="w-240"
          displayValue="spacing-240"
          width="spacing-240"
          colorScheme="primary"
          icon="subject-art"
        />
        <OakRadioAsButton
          {...restArgs}
          variant="with-icon"
          value="w-responsive"
          displayValue="Responsive [spacing-160, spacing-240]"
          aria-label="Width responsive"
          width={["spacing-160", "spacing-240"]}
          colorScheme="primary"
          icon="subject-art"
        />
      </OakRadioGroup>
    );
  },
  args: {
    variant: "default",
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
        <OakRadioAsButton value="option_1" displayValue="Biology" />
        <OakRadioAsButton value="option_2" displayValue="Biology" />
      </OakRadioGroup>
    </>
  ),
};

export const MultipleOptionsWithInitialValueSet: Story = {
  render: () => (
    <OakRadioGroup
      name="subjects"
      aria-label="Choose a subject"
      $flexWrap={"wrap"}
      defaultValue={"physics"}
    >
      <OakRadioAsButton value="art" displayValue="Art and design" />
      <OakRadioAsButton value="biology" displayValue="Biology" />
      <OakRadioAsButton value="chemistry" displayValue="Chemistry" />
      <OakRadioAsButton value="physics" displayValue="Physics" />
      <OakRadioAsButton value="computing" displayValue="Computing" />
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
        defaultValue="art"
      >
        <OakRadioAsButton
          {...restArgs}
          variant="with-icon"
          displayValue="Art and design"
          icon="subject-art"
          value="art"
        />
        <OakRadioAsButton
          {...restArgs}
          variant="with-icon"
          displayValue="Biology"
          icon="subject-biology"
          value="biology"
        />
        <OakRadioAsButton
          {...restArgs}
          variant="with-icon"
          displayValue="Chemistry"
          icon="subject-chemistry"
          value="chemistry"
        />
        <OakRadioAsButton
          {...restArgs}
          variant="with-icon"
          displayValue="Physics"
          icon="subject-physics"
          value="physics"
        />
        <OakRadioAsButton
          {...restArgs}
          variant="with-icon"
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
