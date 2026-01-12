import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakAccordion } from "./OakAccordion";

import { OakCheckBox } from "@/components/molecules/OakCheckBox";

const meta: Meta<typeof OakAccordion> = {
  component: OakAccordion,
  tags: ["autodocs"],
  title: "components/Navigation/OakAccordion",
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
    headerAfterSlot: {
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
  render: (args) => <OakAccordion {...args} />,
};
export default meta;

type Story = StoryObj<typeof OakAccordion>;

export const Default: Story = {};

export const WithHeaderAfterSlot: Story = {
  args: {
    headerAfterSlot: (
      <OakCheckBox id="check-me" value="check-me" displayValue="" />
    ),
  },
};

export const MultipleAccordions: Story = {
  parameters: {
    controls: {
      include: [],
    },
  },
  render: () => {
    return (
      <>
        <OakAccordion
          id="necessary-accordion"
          header="Strictly necessary"
          headerAfterSlot={
            <OakCheckBox
              id="necessary"
              value="necessary"
              displayValue=""
              checked
              disabled
            />
          }
        >
          Necessary for the website to function
        </OakAccordion>
        <OakAccordion
          id="embedded-accordion"
          header="Embedded content"
          headerAfterSlot={
            <OakCheckBox
              id="embedded"
              value="embedded"
              displayValue=""
              checked={false}
            />
          }
        >
          Any cookies required for video or other embedded learning content to
          work
        </OakAccordion>
        <OakAccordion
          id="statistics-accordion"
          header="Statistics"
          headerAfterSlot={
            <OakCheckBox
              id="statistics"
              value="statistics"
              displayValue=""
              checked
            />
          }
        >
          Any cookies that may be used to track website usage
        </OakAccordion>
      </>
    );
  },
};
