import React from "react";
import { Meta, StoryObj } from "@storybook/react";

// @ts-expect-error:  this is an svg
import lightbulbOutlineIconSvg from "../../../../assets/light-bulb-outline.svg";
// @ts-expect-error:  this is an svg
import lightbulbWhiteOutlineSvg from "../../../../assets/light-bulb-with-white-outline.svg";

import { OakRoundIcon } from "./OakRoundIcon";

import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { colorFilterArgTypes } from "@/storybook-helpers/colorFilterStyleHelpers";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";

const meta: Meta<typeof OakRoundIcon> = {
  component: OakRoundIcon,
  tags: ["autodocs"],
  title: "components/molecules/OakRoundIcon",
  argTypes: {
    ...sizeArgTypes,
    ...colorFilterArgTypes,
    ...colorArgTypes,
  },
  parameters: {
    controls: {
      include: ["iconName", "$background", "$colorFilter", "$width", "$height"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakRoundIcon>;

export const IconFromLibrary: Story = {
  render: (args) => <OakRoundIcon {...args} />,
  args: {
    iconName: "home",
  },
};

export const WithImageSrc: Story = {
  render: (args) => <OakRoundIcon {...args} />,
  args: {
    src: lightbulbOutlineIconSvg.src,
  },
  parameters: {
    controls: {
      include: ["src"],
    },
  },
};

export const StyledWithImageSrc: Story = {
  render: (args) => <OakRoundIcon {...args} />,
  args: {
    $background: "icon-inverted",
    src: lightbulbWhiteOutlineSvg.src,
  },
  parameters: {
    controls: {
      include: [
        "src",
        "$background",
        "$colorFilter",
        "$pa",
        "$width",
        "$height",
      ],
    },
  },
};

export const StyledWithIconFromLibrary: Story = {
  render: (args) => <OakRoundIcon {...args} />,
  args: {
    $background: "icon-success",
    $colorFilter: "white",
    $pa: "spacing-0",
    $width: "spacing-24",
    $height: "spacing-24",
    iconName: "tick",
  },
  parameters: {
    controls: {
      include: [
        "iconName",
        "$background",
        "$colorFilter",
        "$pa",
        "$width",
        "$height",
      ],
    },
  },
};
