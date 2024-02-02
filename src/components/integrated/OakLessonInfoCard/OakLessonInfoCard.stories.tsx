import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import {
  LessonInfoCardProps,
  OakLessonInfoCard,
  OakStaticMessageCard,
} from "./OakLessonInfoCard";

import { OakFlex, oakIconNames } from "@/components/base";
import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";

const controlIconNames = [...oakIconNames].sort();

const meta: Meta<typeof OakLessonInfoCard> = {
  component: OakLessonInfoCard,
  tags: ["autodocs"],
  title: "components/integrated/OakLessonInfoCard",
  argTypes: {
    iconName: {
      options: controlIconNames,
      control: { type: "select" },
    },
    ...colorArgTypes,
  },
  args: {
    iconName: "supervision-level",
    infoCardTitle: "Supervision",
    infoCardDescription: "Adult supervision recommended.",
    tag: "h1",
  },
  decorators: [
    (Story) => (
      <OakFlex
        $background={"grey10"}
        $pa={"inner-padding-xl"}
        $flexDirection={"column"}
      >
        <Story />
      </OakFlex>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof OakLessonInfoCard>;

export const Default: Story = {
  render: (args) => <OakLessonInfoCard {...args} />,
};

export const Supervision: Story = (args: LessonInfoCardProps) => (
  <OakLessonInfoCard {...args} />
);
Supervision.args = {
  iconName: "supervision-level",
  infoCardTitle: "Supervision",
  infoCardDescription: "Adult supervision recommended.",
  tag: "h1",
};

export const Equipment: Story = (args: LessonInfoCardProps) => (
  <OakLessonInfoCard {...args} />
);
Equipment.args = {
  iconName: "equipment-required",
  infoCardTitle: "Equipment",
  infoCardDescription:
    "You will need a copy of the 2017 Frances Lincoln Children's Books edition of ‘Emmeline Pankhurst: Little People, Big Dreams’ by Lisbeth Kaiser and Ana Sanfelippo for this lesson.",
  tag: "h1",
};

export const ContentGuidance: Story = (args: LessonInfoCardProps) => (
  <OakLessonInfoCard {...args} />
);
ContentGuidance.args = {
  iconName: "content-guidance",
  infoCardTitle: "Content Guidance",
  infoCardDescription:
    "Contains subject matter which individuals may find upsetting. Contains conflict or violence.",
  tag: "h1",
};

export const Worksheet: Story = (args: LessonInfoCardProps) => (
  <OakLessonInfoCard {...args} />
);
Worksheet.args = {
  iconName: "worksheet",
  infoCardTitle: "Worksheet",
  infoCardDescription: "Optional.",
  downloadLabel: "Download worksheet",
  tag: "h1",
};

export const StaticMessage: Story = (args: LessonInfoCardProps) => (
  <OakStaticMessageCard {...args} />
);

StaticMessage.args = {
  iconName: "question-mark",
  infoCardTitle: "Are you ready to learn?",
  infoCardDescription: [
    "Are you sitting in a quiet space away from distractions?",
    "Do you have all the equipment you need?",
  ],
  tag: "h1",
};

// StaticMessage.decorators = (Story) => (
//   <OakFlex
//     $background={"white"}
//     $pa={"inner-padding-xl"}
//     $flexDirection={"column"}
//   >
//     <Story />
//   </OakFlex>
// );
