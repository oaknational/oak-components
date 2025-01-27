import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakUnitsHeader } from "./OakUnitsHeader";

const meta: Meta<typeof OakUnitsHeader> = {
  component: OakUnitsHeader,
  tags: ["autodocs"],
  argTypes: {
    isLegacy: { type: "boolean" },
    subject: { type: "string" },
    phase: { type: "string" },
    href: {
      control: {
        type: "radio",
      },
      options: ["Url", "Null"],
      mapping: { Url: "https://www.thenational.academy", Null: null },
    },
  },
  parameters: {
    controls: {
      include: ["isLegacy", "subject", "phase", "href"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakUnitsHeader>;

export const Default: Story = {
  render: (args) => <OakUnitsHeader {...args} />,
  args: {
    isLegacy: false,
    subject: "maths",
    phase: "secondary",
    href: "Url",
  },
};
