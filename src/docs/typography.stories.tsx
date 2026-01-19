import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakSpan } from "@/components/typography/OakSpan";
import { OakFontToken, oakFontTokens } from "@/styles/theme/typography";

/**
 *
 * OakSpan applies the Oak typography styles to the text content in addition to color, opacity, margin, padding and border styles.
 *
 */

const meta: Meta<typeof OakFlex> = {
  component: OakFlex,
  tags: ["autodocs"],
  title: "style tokens/Font tokens",
};
export default meta;

type Story = StoryObj<typeof OakFlex>;

export const AllFonts: Story = {
  render: (args) => (
    <OakFlex $flexDirection={"column"} $gap="spacing-24" {...args}>
      {Object.keys(oakFontTokens).map((fontToken) => (
        <OakSpan key={fontToken} $font={fontToken as OakFontToken}>
          {fontToken}
        </OakSpan>
      ))}
    </OakFlex>
  ),
  parameters: {
    controls: {
      include: [],
    },
  },
  args: {},
};
