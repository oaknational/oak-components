import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

import {
  OakDownloadsAccordion,
  OakDownloadsAccordionProps,
} from "./OakDownloadsAccordion";

import { OakFlex } from "@/components/atoms";
import { OakDownloadCard } from "@/components/molecules/OakDownloadCard";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";

const meta: Meta<typeof OakDownloadsAccordion> = {
  component: OakDownloadsAccordion,
  tags: ["autodocs"],
  title: "OWA/teacher/OakDownloadsAccordion",
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

type Story = StoryObj<typeof OakDownloadsAccordion>;

const WithState = (args: OakDownloadsAccordionProps) => {
  const [checked, setChecked] = useState(false);
  const handleChecked = () => {
    setChecked((prev) => !prev);
  };
  return (
    <OakDownloadsAccordion
      {...args}
      selectAllChecked={checked}
      handleToggleSelectAll={handleChecked}
    />
  );
};

export const Default: Story = {
  args: {
    id: "oak-downloads-accordion",
    downloadsText: "Slides, quizzes, worksheet, additional materials",
    children: (
      <OakFlex $flexDirection="column" $gap="spacing-16">
        <OakDownloadCard
          id="lesson-plan"
          value="lesson-plan"
          iconName="book-steps"
          titleSlot="Lesson plan"
          formatSlot="PDF"
          fileSizeSlot="245KB"
        />
        <OakDownloadCard
          id="presentation"
          value="presentation"
          iconName="slide-deck"
          titleSlot="Lesson presentation"
          formatSlot="PPTX"
          fileSizeSlot="1.2MB"
        />
        <OakDownloadCard
          id="worksheet"
          value="worksheet"
          iconName="worksheet"
          titleSlot="Student worksheet"
          formatSlot="PDF"
          fileSizeSlot="180KB"
        />
      </OakFlex>
    ),
    initialOpen: false,
    $width: "100%",
  },
  render: (args) => <WithState {...args} />,
};
