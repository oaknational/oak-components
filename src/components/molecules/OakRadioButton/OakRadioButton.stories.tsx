import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakRadioGroup } from "@/components/molecules/OakRadioGroup";
import { OakRadioButton } from "@/components/molecules/OakRadioButton";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { typographyArgTypes } from "@/storybook-helpers/typographyStyleHelpers";
import { flexArgTypes } from "@/storybook-helpers/flexStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";

const meta: Meta<typeof OakRadioButton> = {
  component: OakRadioButton,
  tags: ["autodocs"],
  title: "components/forms/OakRadioButton",
  argTypes: {
    ...colorArgTypes,
    ...typographyArgTypes,
    ...spacingArgTypes,
    ...borderArgTypes,
    $labelGap: flexArgTypes.$gap,
    $labelAlignItems: flexArgTypes.$alignItems,
  },
  parameters: {
    controls: {
      include: [
        "$font",
        "$labelGap",
        "$labelAlignItems",
        ...Object.keys(colorArgTypes),
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakRadioButton>;

export const Default: Story = {
  render: (args) => {
    return (
      <OakRadioGroup name="test">
        <OakRadioButton
          {...args}
          id="option-1"
          label={"Option 1"}
          value={"1"}
        />
        <OakRadioButton
          {...args}
          id="option-2"
          label={"Option 2"}
          value={"2"}
        />
        <OakRadioButton
          {...args}
          id="option-3"
          label={"Option 3"}
          value={"3"}
        />
      </OakRadioGroup>
    );
  },
  args: {},
};

export const WithStyling: Story = {
  render: (args) => {
    return (
      <OakRadioGroup
        name="test"
        $flexDirection={"column"}
        $gap={"spacing-24"}
        $alignItems={"flex-start"}
      >
        <OakRadioButton
          {...args}
          id="option-1"
          label={"Option 1"}
          value={"1"}
        />
        <OakRadioButton
          {...args}
          id="option-2"
          label={"Option 2"}
          value={"2"}
        />
        <OakRadioButton
          {...args}
          id="option-3"
          label={"Option 3"}
          value={"3"}
        />
      </OakRadioGroup>
    );
  },
  parameters: {
    controls: {
      include: [
        "$font",
        "$labelGap",
        "$labelAlignItems",
        ...Object.keys(colorArgTypes),
        "$ph",
        "$pv",
        "$ba",
        "$borderRadius",
      ],
    },
  },
  args: {
    $pv: "spacing-12",
    $ph: "spacing-20",
    $ba: "border-solid-s",
    $borderRadius: "border-radius-s",
    $background: "bg-decorative2-subdued",
  },
};

export const Disabled: Story = {
  render: (args) => {
    return (
      <OakRadioGroup name="test">
        <OakRadioButton
          {...args}
          id="option-1"
          label={"Disabled option 1"}
          value={"1"}
          disabled
        />
        <OakRadioButton
          {...args}
          id="option-2"
          label={"Option 2"}
          value={"2"}
        />
        <OakRadioButton
          {...args}
          id="option-3"
          label={"Option 3"}
          value={"3"}
        />
      </OakRadioGroup>
    );
  },
  args: {},
};

export const Required: Story = {
  render: (args) => {
    return (
      <OakRadioGroup name="test">
        <OakRadioButton
          {...args}
          id="option-1"
          label={"Required option 1"}
          value={"1"}
          required
        />
        <OakRadioButton
          {...args}
          id="option-2"
          label={"Option 2"}
          value={"2"}
        />
      </OakRadioGroup>
    );
  },
};
