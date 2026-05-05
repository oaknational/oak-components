import React from "react";
import { Meta, StoryObj } from "@storybook/nextjs";

import { UnstyledChevronAccordion } from "./UnstyledChevronAccordion";

import { OakSmallSecondaryButtonWithDropdown } from "@/components/buttons/OakSmallSecondaryButtonWithDropdown";
import { OakBox } from "@/components/layout-and-structure/OakBox";
import { OakP } from "@/components/typography/OakP";
import { flexArgTypes } from "@/storybook-helpers/flexStyleHelpers";

const meta: Meta<typeof UnstyledChevronAccordion> = {
  component: UnstyledChevronAccordion,
  tags: ["autodocs"],
  title: "components/Unstyled/UnstyledChevronAccordion",
  parameters: {
    controls: {
      include: ["header", "subheader", "content", "initialOpen", "$gap"],
    },
  },
  argTypes: {
    ...flexArgTypes,
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
    isInitiallyOpen: {
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
    isInitiallyOpen: false,
    subheader: (
      <OakBox $background={"bg-decorative5-very-subdued"}>
        Subheader goes here
      </OakBox>
    ),
    $gap: "spacing-0",
  },
  render: (args) => <UnstyledChevronAccordion {...args} />,
};
export default meta;

type Story = StoryObj<typeof UnstyledChevronAccordion>;

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
