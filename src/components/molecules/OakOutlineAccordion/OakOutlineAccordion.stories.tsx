import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakOutlineAccordion } from "./OakOutlineAccordion";

const meta: Meta<typeof OakOutlineAccordion> = {
  component: OakOutlineAccordion,
  tags: ["autodocs"],
  title: "OWA/OakOutlineAccordion",
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
  render: (args) => <OakOutlineAccordion {...args} />,
};
export default meta;

type Story = StoryObj<typeof OakOutlineAccordion>;

export const Default: Story = {};
