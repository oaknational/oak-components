import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakUnitsContainer } from "./OakUnitsContainer";
import { OakBox } from "@/components/atoms";

const meta: Meta<typeof OakUnitsContainer> = {
  title: "Components/organisms/teacher/OakUnitsContainer",
  component: OakUnitsContainer,
  tags: ["autodocs"],
  argTypes: {
    isLegacy: { type: "boolean" },
    showHeader: { type: "boolean" },
    subject: { type: "string" },
    phase: { type: "string" },
    curriculumHref: { type: "string" },
  },
  parameters: {
    controls: {
      include: ["isLegacy", "showHeader", "subject", "phase", "curriculumHref"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakUnitsContainer>;

export const Default: Story = {
  render: (args) => <OakUnitsContainer {...args} />,
  args: {
    isLegacy: false,
    showHeader: true,
    unitCards: [
      <OakBox $background="white" $width="100%">
        Unit 1{" "}
      </OakBox>,
      <OakBox $background="white" $width="100%">
        Unit 2{" "}
      </OakBox>,
      <OakBox $background="white" $width="100%">
        Unit 3{" "}
      </OakBox>,
      <OakBox $background="white" $width="100%">
        Unit 4{" "}
      </OakBox>,
    ],
    subject: "maths",
    phase: "secondary",
    curriculumHref: "https://www.thenational.academy",
  },
};
