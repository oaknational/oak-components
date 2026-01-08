import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalReviewAccordion } from "./InternalReviewAccordion";

const meta: Meta<typeof InternalReviewAccordion> = {
  component: InternalReviewAccordion,
  tags: ["autodocs"],
  title:
    "components/molecules/OakAccordion (🔀 to be merged)/InternalReviewAccordion",
  parameters: {
    controls: {
      include: ["expandableLabel", "headerAfterSlot", "children"],
    },
  },
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    id: "accordion-1",
    children: "In this space we can render the quiz results component",
    initialOpen: false,
  },
  render: (args) => <InternalReviewAccordion {...args} />,
};
export default meta;

type Story = StoryObj<typeof InternalReviewAccordion>;

export const Default: Story = {};
