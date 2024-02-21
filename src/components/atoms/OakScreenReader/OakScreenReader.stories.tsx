import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakScreenReader } from "./OakScreenReader";

import { OakSpan, OakSpanProps } from "@/components/atoms/OakSpan";

/**
 *
 * This component will visually hide its contents but will still be available
 * to screen readers, assitive technology, and scrapers.
 * ## Usage
 * Use this component in places where content shouldn't be visible, but should
 * be accessible to assistive technology.
 *
 */

const meta: Meta<typeof OakScreenReader> = {
  component: OakScreenReader,
  tags: ["autodocs"],
  title: "components/atoms/OakScreenReader",
  argTypes: {},
  parameters: {
    controls: {
      include: [],
      sort: "none",
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakScreenReader>;

export const DefaultOakSpan: Story = (args: Partial<OakSpanProps>) => (
  <OakSpan data-testId="OakScreenReader-id" {...args}>
    Use a screen reader to hear invisible text.
    <OakScreenReader>
      The screen reader reads this bit out for accessibility.
    </OakScreenReader>
  </OakSpan>
);

DefaultOakSpan.args = {};
