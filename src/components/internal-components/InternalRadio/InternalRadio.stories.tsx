import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/nextjs";

import {
  InternalRadio,
  InternalRadioHover,
  InternalRadioFocus,
  InternalRadioHoverFocus,
  internalRadioDefaults,
} from "./InternalRadio";

import { OakBox } from "@/components/layout-and-structure/OakBox";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";

const meta: Meta<typeof InternalRadio> = {
  component: InternalRadio,
  tags: ["autodocs"],
  title: "internal components/InternalRadio",
  args: internalRadioDefaults,
  argTypes: {
    ...sizeArgTypes,
    ...borderArgTypes,
    ...colorArgTypes,
    ...spacingArgTypes,
    disabled: {
      control: "boolean",
    },
    $checkedBackground: colorArgTypes.$color,
  },
  parameters: {
    controls: {
      include: [
        "disabled",
        "defaultChecked",
        "$width",
        "$height",
        "$ba",
        "$borderRadius",
        "$borderColor",
        "$hoverBorderRadius",
        "$checkedBackground",
      ],
    },
  },
};
export default meta;

export const Default: StoryObj<typeof InternalRadio> = {
  render: (args) => <InternalRadio {...args} />,
  args: {
    id: "checkbox-test-default-1",
    value: "a test value",
    $width: "spacing-24",
    $height: "spacing-24",
  },
};

export const Hover: StoryObj<typeof InternalRadioHover> = {
  render: (args) => (
    <OakBox $position="relative" $width={args.$width} $height={args.$height}>
      <InternalRadioHover {...args} />
    </OakBox>
  ),
  args: {
    id: "checkbox-test-default-2",
    value: "a test value",
    $width: "spacing-24",
    $height: "spacing-24",
  },
};

export const Focus: StoryObj<typeof InternalRadioFocus> = {
  render: (args) => (
    <OakBox $position="relative" $width={args.$width} $height={args.$height}>
      <InternalRadioFocus {...args} />
    </OakBox>
  ),
  args: {
    id: "checkbox-test-default-3",
    value: "a test value",
    $width: "spacing-24",
    $height: "spacing-24",
  },
};

export const HoverFocus: StoryObj<typeof InternalRadioHoverFocus> = {
  render: (args) => (
    <OakBox $position="relative" $width={args.$width} $height={args.$height}>
      <InternalRadioHoverFocus {...args} />
    </OakBox>
  ),
  args: {
    id: "checkbox-test-default-4",
    value: "a test value",
    $width: "spacing-24",
    $height: "spacing-24",
  },
};

const HoverDurationDemo = () => {
  const [hoverDuration, setHoverDuration] = useState<number | null>(null);

  return (
    <>
      <OakBox $position="relative" $width="spacing-24" $height="spacing-24">
        <InternalRadioHoverFocus
          id="hover-duration-radio"
          value="hover-duration-option"
          $width="spacing-24"
          $height="spacing-24"
          $hoverBorderRadius="border-radius-xs"
          onHovered={(_value, _id, duration) => setHoverDuration(duration)}
          aria-label="Hover duration demonstration radio"
        />
      </OakBox>
      <p aria-live="polite">
        {hoverDuration === null
          ? "Hover over the radio and move away to measure the duration."
          : `Last hover duration: ${hoverDuration} ms`}
      </p>
    </>
  );
};

export const HoverDuration: StoryObj<typeof InternalRadioHoverFocus> = {
  render: () => <HoverDurationDemo />,
  parameters: {
    controls: { disable: true },
  },
};
