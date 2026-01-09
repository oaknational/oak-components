import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakMediaClipListAccordion } from "./OakMediaClipListAccordion";

const meta: Meta<typeof OakMediaClipListAccordion> = {
  component: OakMediaClipListAccordion,
  tags: ["autodocs"],
  title: "OWA (❌ to be moved out)/OakMediaClipListAccordion",
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
  render: (args) => <OakMediaClipListAccordion {...args} />,
};
export default meta;

type Story = StoryObj<typeof OakMediaClipListAccordion>;

export const Default: Story = {};
