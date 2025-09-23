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
      include: ["header", "subheader", "content", "initialOpen"],
    },
  },
  argTypes: {
    content: {
      control: {
        type: "text",
      },
    },
    header: {
      control: {
        type: "text",
      },
    },
    subheader: {
      control: {
        type: "text",
      },
    },
    initialOpen: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    id: "accordion-1",
    header: <OakBox $background={"amber30"}>Header goes here</OakBox>,
    content: (
      <OakBox $background={"mint30"} $height={"spacing-56"}>
        Content goes here
      </OakBox>
    ),
    initialOpen: false,
    subheader: <OakBox $background={"lemon30"}>Subheader goes here</OakBox>,
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
    subheader: <OakBox>Subheader goes here</OakBox>,
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
