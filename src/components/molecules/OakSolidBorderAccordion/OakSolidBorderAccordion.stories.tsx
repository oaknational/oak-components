import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSolidBorderAccordion } from "./OakSolidBorderAccordion";

const meta: Meta<typeof OakSolidBorderAccordion> = {
  component: OakSolidBorderAccordion,
  tags: ["autodocs"],
  title: "components/molecules/OakSolidBorderAccordion",
  parameters: {
    controls: {
      include: ["header", "headerAfterSlot", "children"],
    },
  },
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    header: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    id: "accordion-1",
    header: "Embedded content",
    children:
      "Any cookies required for video or other embedded learning content to work",
  },
  render: (args) => <OakSolidBorderAccordion {...args} />,
};
export default meta;

type Story = StoryObj<typeof OakSolidBorderAccordion>;

export const Default: Story = {};
