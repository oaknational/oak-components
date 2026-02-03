import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import {
  OakCardHeader,
  OakLessonInfoCard,
  OakStaticMessageCard,
  OakInfoCardProps,
} from "./OakLessonInfoCard";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakP } from "@/components/typography/OakP";
import { OakPrimaryInvertedButton } from "@/components/buttons/OakPrimaryInvertedButton";

const meta: Meta<typeof OakLessonInfoCard> = {
  component: OakLessonInfoCard,
  tags: ["autodocs"],
  title: "OWA/OakLessonInfoCard",
  args: {},
  decorators: [
    (Story) => (
      <OakFlex
        $background={"bg-neutral"}
        $pa={"spacing-24"}
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
  render: (args) => (
    <OakLessonInfoCard {...args}>
      <OakCardHeader tag="h1" iconName="question-mark">
        Header title
      </OakCardHeader>
      Children of the compoent goes here.
    </OakLessonInfoCard>
  ),
};

export const Supervision: Story = (args: OakInfoCardProps) => (
  <OakLessonInfoCard {...args}>
    <OakCardHeader tag="h1" iconName="supervision-level">
      Supervision
    </OakCardHeader>
    Adult supervision recommended.
  </OakLessonInfoCard>
);
Supervision.args = {};

export const Equipment: Story = (args: OakInfoCardProps) => (
  <OakLessonInfoCard {...args}>
    <OakCardHeader tag="h1" iconName="equipment-required">
      Equipment
    </OakCardHeader>
    You will need a copy of the 2017 Frances Lincoln Children's Books edition of
    ‘Emmeline Pankhurst: Little People, Big Dreams’ by Lisbeth Kaiser and Ana
    Sanfelippo for this lesson.
  </OakLessonInfoCard>
);
Equipment.args = {};

export const ContentGuidance: Story = (args: OakInfoCardProps) => (
  <OakLessonInfoCard {...args}>
    <OakCardHeader tag="h1" iconName="content-guidance">
      Content Guidance
    </OakCardHeader>
    Contains subject matter which individuals may find upsetting. Contains
    conflict or violence.
  </OakLessonInfoCard>
);
ContentGuidance.args = {};

export const Worksheet: Story = (args: OakInfoCardProps) => (
  <OakLessonInfoCard {...args}>
    <OakCardHeader tag="h1" iconName="worksheet">
      Worksheet
    </OakCardHeader>
    Optional
    <OakFlex $justifyContent={"flex-end"}>
      <OakPrimaryInvertedButton
        onClick={() => {}}
        iconName="download"
        isTrailingIcon
        $font={"heading-7"}
      >
        Download worksheet
      </OakPrimaryInvertedButton>
    </OakFlex>
  </OakLessonInfoCard>
);
Worksheet.args = {};

export const StaticMessage: Story = (args: OakInfoCardProps) => (
  <OakStaticMessageCard {...args}>
    <OakCardHeader tag="h1" iconName="question-mark">
      Are you ready to learn?
    </OakCardHeader>
    {[
      "Are you sitting in a quiet space away from distractions?",
      "Do you have all the equipment you need?",
    ].map((message) => (
      <OakP key={message}>{message}</OakP>
    ))}
  </OakStaticMessageCard>
);

StaticMessage.args = {};
