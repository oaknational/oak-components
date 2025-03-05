import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakBasicAccordion } from "./OakBasicAccordion";

const meta: Meta<typeof OakBasicAccordion> = {
  component: OakBasicAccordion,
  tags: ["autodocs"],
  title: "components/molecules/OakBasicAccordion",
  parameters: {
    controls: {
      include: ["header", "headerAfterSlot", "children", "subheading"],
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
    subheading: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    id: "accordion-1",
    header: "Embedded content",
    subheading: "Any cookies required for...",
    children:
      "Any cookies required for video or other embedded learning content to work",
  },
  render: (args) => <OakBasicAccordion {...args} />,
};
export default meta;

type Story = StoryObj<typeof OakBasicAccordion>;

export const Default: Story = {};
