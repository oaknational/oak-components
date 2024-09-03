import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakLessonVideoTranscript } from "./OakLessonVideoTranscript";

import { OakP } from "@/components/atoms";
import { OakTertiaryButton } from "@/components/molecules";

const meta: Meta<typeof OakLessonVideoTranscript> = {
  component: OakLessonVideoTranscript,
  tags: ["autodocs"],

  parameters: {
    controls: {
      include: ["children", "signLanguageControl", "showTranscript", "onClick"],
    },
  },
  args: {
    children: (
      <>
        <OakP $mb="space-between-s">
          Hello, I'm Mr. Norris, and welcome to the first lesson in this topic
          on forces for year seven.
        </OakP>
        <OakP $mb="space-between-s">
          This lesson is all about what forces do. This is part of the wider big
        </OakP>
        <OakP $mb="space-between-s">
          question of how forces make things happen in the universe. Everything
          that
        </OakP>
        <OakP $mb="space-between-s">
          happens in the universe at the deepest level, any change happens,
          because
        </OakP>
        <OakP $mb="space-between-s">
          a force has acted. And that's why this is such a great, such an
          important
        </OakP>
        <OakP $mb="space-between-s">
          topic to do at the start of year seven. So let's get started.
        </OakP>
        <OakP $mb="space-between-s">
          This lesson is all about what forces do. This is part of the wider big
        </OakP>
        <OakP $mb="space-between-s">
          question of how forces make things happen in the universe. Everything
          that
        </OakP>
        <OakP $mb="space-between-s">
          happens in the universe at the deepest level, any change happens,
          because
        </OakP>
        <OakP $mb="space-between-s">
          a force has acted. And that's why this is such a great, such an
          important a force has acted. And that's why this is such a great, such
          an important a force has acted. And that's why this is such a great,
          such an important a force has acted. And that's why this is such a
          great, such an important a force has acted. And that's why this is
          such a great, such an important
        </OakP>
        <OakP $mb="space-between-s">
          topic to do at the start of year seven. So let's get started.
        </OakP>
        <OakP $mb="space-between-s">
          This lesson is all about what forces do. This is part of the wider big
        </OakP>
        <OakP $mb="space-between-s">
          question of how forces make things happen in the universe. Everything
          that
        </OakP>
        <OakP $mb="space-between-s">
          happens in the universe at the deepest level, any change happens,
          because
        </OakP>
        <OakP $mb="space-between-s">
          a force has acted. And that's why this is such a great, such an
          important
        </OakP>
        <OakP $mb="space-between-s">
          topic to do at the start of year seven. So let's get started.
        </OakP>
        <OakP $mb="space-between-s">
          This lesson is all about what forces do. This is part of the wider big
        </OakP>
        <OakP $mb="space-between-s">
          question of how forces make things happen in the universe. Everything
          that
        </OakP>
        <OakP $mb="space-between-m">
          happens in the universe at the deepest level, any change happens,
          because
        </OakP>
        <OakP $mb="space-between-s">
          a force has acted. And that's why this is such a great, such an
          important
        </OakP>
        <OakP $mb="space-between-s">
          topic to do at the start of year seven. So let's get started.
        </OakP>
        <OakP $mb="space-between-s">
          This lesson is all about what forces do. This is part of the wider big
        </OakP>
        <OakP $mb="space-between-s">
          question of how forces make things happen in the universe. Everything
          that
        </OakP>
        <OakP $mb="space-between-s">
          happens in the universe at the deepest level, any change happens,
          because
        </OakP>
        <OakP $mb="space-between-s">
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

type Story = StoryObj<typeof OakLessonVideoTranscript>;

export const Default: Story = {
  render: (args) => <OakLessonVideoTranscript {...args} />,
};

export const WithSignLanguageControl: Story = {
  render: (args) => <OakLessonVideoTranscript {...args} />,
  args: {
    signLanguageControl: (
      <OakTertiaryButton iconName="sign-language" isTrailingIcon>
        Show sign language
      </OakTertiaryButton>
    ),
  },
};

export const WithNoTranscript: Story = {
  render: (args) => <OakLessonVideoTranscript {...args} />,
  args: {
    children: null,
    signLanguageControl: (
      <OakTertiaryButton iconName="sign-language" isTrailingIcon>
        Show sign language
      </OakTertiaryButton>
    ),
  },
};
