import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakFieldset } from "./OakFieldset";

import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { spacingArgTypes } from "@/storybook-helpers/spacingStyleHelpers";
import { typographyArgTypes } from "@/storybook-helpers/typographyStyleHelpers";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";
import { positionArgTypes } from "@/storybook-helpers/positionStyleHelpers";
import { OakBox } from "@/components/atoms/OakBox";
import { OakLabel } from "@/components/atoms/OakLabel";
import { OakHeading } from "@/components/atoms/OakHeading";

const meta: Meta<typeof OakFieldset> = {
  title: "Components/atoms/OakFieldset",
  component: OakFieldset,
  tags: ["autodocs"],
  argTypes: {
    ...colorArgTypes,
    ...sizeArgTypes,
    ...spacingArgTypes,
    ...typographyArgTypes,
    ...borderArgTypes,
    ...positionArgTypes,
  },
  parameters: {
    controls: {
      include: [
        ...Object.keys(typographyArgTypes),
        "$overflow",
        "$ba",
        "$ph",
        "$pv",
        ...Object.keys(colorArgTypes),
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakFieldset>;

export const Default: Story = {
  render: (args) => (
    <OakFieldset {...args}>
      <OakHeading as={"legend"} $font={"body-2-bold"} tag="h3">
        Legend
      </OakHeading>
      <OakBox>
        <OakLabel htmlFor="input1">Input 1</OakLabel>
        <input type="text" id="input1" />
      </OakBox>
      <OakBox>
        <OakLabel htmlFor="input2">Input 2</OakLabel>
        <input type="text" id="input2" />
      </OakBox>
    </OakFieldset>
  ),
  args: {
    $pa: "spacing-12",
  },
};
