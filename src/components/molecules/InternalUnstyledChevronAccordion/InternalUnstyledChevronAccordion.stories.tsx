import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalUnstyledChevronAccordion } from "./InternalUnstyledChevronAccordion";

import { OakSmallSecondaryButtonWithDropdown } from "@/components/molecules/OakSmallSecondaryButtonWithDropdown";
import { OakBox, OakP } from "@/components/atoms";

const meta: Meta<typeof InternalUnstyledChevronAccordion> = {
  component: InternalUnstyledChevronAccordion,
  tags: ["autodocs"],
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
    header: <OakBox>Header goes here</OakBox>,
    children:
      "Any cookies required for video or other embedded learning content to work",
  },
  render: (args) => <InternalUnstyledChevronAccordion {...args} />,
};
export default meta;

type Story = StoryObj<typeof InternalUnstyledChevronAccordion>;

export const Default: Story = {};

export const MultilineHeader: Story = {
  args: {
    header: (
      <OakBox $background={"amber50"} $textAlign={"left"}>
        <OakP>Header goes here</OakP>
        <OakP>This is a multiline header</OakP>
      </OakBox>
    ),
  },
};

export const InputAsHeader: Story = {
  args: {
    header: (
      <OakBox $background={"amber50"} $textAlign={"left"}>
        <OakSmallSecondaryButtonWithDropdown primaryActionText="Click me">
          <OakSmallSecondaryButtonWithDropdown.Item>
            Action 1
          </OakSmallSecondaryButtonWithDropdown.Item>
          <OakSmallSecondaryButtonWithDropdown.Item>
            Action 2
          </OakSmallSecondaryButtonWithDropdown.Item>
          <OakSmallSecondaryButtonWithDropdown.Item>
            Action 3
          </OakSmallSecondaryButtonWithDropdown.Item>
        </OakSmallSecondaryButtonWithDropdown>
      </OakBox>
    ),
  },
};
