import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/nextjs";

import {
  OakResourcesAccordion,
  OakResourcesAccordionProps,
} from "./OakResourcesAccordion";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakResourceCard } from "@/components/owa/OakResourceCard";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";

const meta: Meta<typeof OakResourcesAccordion> = {
  component: OakResourcesAccordion,
  tags: ["autodocs"],
  title: "OWA/teacher/OakResourcesAccordion",
  parameters: {
    controls: {
      include: ["initialOpen"],
    },
  },
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    initialOpen: {
      control: {
        type: "boolean",
      },
    },
    ...colorArgTypes,
    ...borderArgTypes,
  },
};

export default meta;

type Story = StoryObj<typeof OakResourcesAccordion>;

const WithState = (args: OakResourcesAccordionProps) => {
  const [checked, setChecked] = useState(false);
  const handleChecked = () => {
    setChecked((prev) => !prev);
  };
  return (
    <OakResourcesAccordion
      {...args}
      selectAllChecked={checked}
      handleToggleSelectAll={handleChecked}
    />
  );
};

export const Default: Story = {
  args: {
    id: "oak-downloads-accordion",
    subheading: "Slides, quizzes, worksheet, additional materials",
    children: (
      <OakFlex $flexDirection="column" $gap="spacing-16">
        <OakResourceCard
          id="lesson-plan"
          value="lesson-plan"
          iconName="book-steps"
          title="Lesson plan"
          description="PDF"
          fileSize="245 KB"
        />
        <OakResourceCard
          id="presentation"
          value="presentation"
          iconName="slide-deck"
          title="Lesson presentation"
          description="PPTX"
          fileSize="1.2 MB"
        />
        <OakResourceCard
          id="worksheet"
          value="worksheet"
          iconName="worksheet"
          title="Student worksheet"
          description="PDF"
          fileSize="180 KB"
        />
      </OakFlex>
    ),
    initialOpen: false,
    $width: "100%",
  },
  render: (args) => <WithState {...args} />,
};
