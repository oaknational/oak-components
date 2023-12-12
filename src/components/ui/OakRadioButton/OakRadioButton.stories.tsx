import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakRadioGroup } from "@/components/ui/OakRadioGroup";
import { OakRadioButton } from "@/components/ui/OakRadioButton";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { typographyArgTypes } from "@/storybook-helpers/typographyStyleHelpers";
import { flexArgTypes } from "@/storybook-helpers/flexStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";

/**
 *

 * ## Usage
 *
 * Use within OakRadioGroup component.
 *
 *
 */

const meta: Meta<typeof OakRadioButton> = {
  component: OakRadioButton,
  tags: ["autodocs"],
  title: "components/ui/OakRadioButton",
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
        $gap={"space-between-m"}
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
    $pv: "inner-padding-s",
    $ph: "inner-padding-l",
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
