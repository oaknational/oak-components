import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakCollapsibleContent } from "./OakCollapsibleContent";

import { OakTertiaryButton } from "@/components/molecules/OakTertiaryButton";
import { OakP } from "@/components/atoms";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";

const meta: Meta<typeof OakCollapsibleContent> = {
  component: OakCollapsibleContent,
  tags: ["autodocs"],
  title:
    "components/others/OakAccordion (🔀 to be merged)/OakCollapsibleContent",
  argTypes: {
    ...sizeArgTypes,
  },
  parameters: {
    controls: {
      include: ["isOpen", ...Object.keys(sizeArgTypes)],
    },
  },
  args: {
    isOpen: true,
    $maxHeight: "spacing-240",
    children: (
      <>
        <OakP $mb="spacing-24">
          Hello, I'm Mr. Norris, and welcome to the first lesson in this topic
          on forces for year seven.
        </OakP>
        <OakP $mb="spacing-24">
          This lesson is all about what forces do. This is part of the wider big
        </OakP>
        <OakP $mb="spacing-24">
          question of how forces make things happen in the universe. Everything
          that
        </OakP>
        <OakP $mb="spacing-24">
          happens in the universe at the deepest level, any change happens,
          because
        </OakP>
        <OakP $mb="spacing-24">
          a force has acted. And that's why this is such a great, such an
          important
        </OakP>
        <OakP>
          topic to do at the start of year seven. So let's get started.
        </OakP>
      </>
    ),
  },
};
export default meta;

type Story = StoryObj<typeof OakCollapsibleContent>;

export const Default: Story = {
  render: (args) => <OakCollapsibleContent {...args} />,
};

export const WithControl: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <>
        <OakTertiaryButton
          onClick={() => setIsOpen(!isOpen)}
          iconName={isOpen ? "chevron-up" : "chevron-down"}
          $mb="spacing-24"
          aria-expanded={isOpen}
          aria-controls="collapsible-content"
        >
          {isOpen ? "Close" : "Open"}
        </OakTertiaryButton>
        <OakCollapsibleContent
          id="collapsible-content"
          {...args}
          isOpen={isOpen}
        />
      </>
    );
  },
};
