import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { InternalUnstyledChevronAccordion } from "./InternalUnstyledChevronAccordion";

import { OakSmallSecondaryButtonWithDropdown } from "@/components/buttons/OakSmallSecondaryButtonWithDropdown";
import { OakBox } from "@/components/layout-and-structure/OakBox";
import { OakP } from "@/components/typography/OakP";

const meta: Meta<typeof InternalUnstyledChevronAccordion> = {
  component: InternalUnstyledChevronAccordion,
  tags: ["autodocs"],
  title: "internal components/InternalUnstyledChevronAccordion",
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
    header: (
      <OakBox $background={"bg-decorative6-very-subdued"}>
        Header goes here
      </OakBox>
    ),
    content: (
      <OakBox
        $background={"bg-decorative1-very-subdued"}
        $height={"spacing-56"}
      >
        Content goes here
      </OakBox>
    ),
    initialOpen: false,
    subheader: (
      <OakBox $background={"bg-decorative5-very-subdued"}>
        Subheader goes here
      </OakBox>
    ),
  },
  render: (args) => <InternalUnstyledChevronAccordion {...args} />,
};
export default meta;

type Story = StoryObj<typeof InternalUnstyledChevronAccordion>;

export const Default: Story = {};

export const MultilineHeader: Story = {
  args: {
    header: (
      <OakBox $background={"bg-decorative6-subdued"} $textAlign={"left"}>
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
      <OakBox $background={"bg-decorative6-subdued"} $textAlign={"left"}>
        <OakSmallSecondaryButtonWithDropdown primaryActionText="Click me">
          <OakSmallSecondaryButtonWithDropdown.Item
            variant="primary"
            colorScheme="inverted"
          >
            Action 1
          </OakSmallSecondaryButtonWithDropdown.Item>
          <OakSmallSecondaryButtonWithDropdown.Item
            variant="primary"
            colorScheme="inverted"
          >
            Action 2
          </OakSmallSecondaryButtonWithDropdown.Item>
          <OakSmallSecondaryButtonWithDropdown.Item
            variant="primary"
            colorScheme="inverted"
          >
            Action 3
          </OakSmallSecondaryButtonWithDropdown.Item>
        </OakSmallSecondaryButtonWithDropdown>
      </OakBox>
    ),
  },
};
