import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakUnitsHeader } from "./OakUnitsHeader";

const meta: Meta<typeof OakUnitsHeader> = {
  title: "Components/organisms/teacher/OakUnitsHeader",
  component: OakUnitsHeader,
  tags: ["autodocs"],
  argTypes: {
    isLegacy: { type: "boolean" },
    subject: { type: "string" },
  },
  parameters: {
    controls: {
      include: ["isLegacy", "subject"],
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
  },
};
