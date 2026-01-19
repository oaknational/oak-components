import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakVideoTranscript } from "./OakVideoTranscript";

import { OakSignLanguageButton } from "@/components/owa/OakSignLanguageButton";
import { OakCopyLinkButton } from "@/components/owa/OakCopyLinkButton";
import { OakP } from "@/components/typography/OakP";

const meta: Meta<typeof OakVideoTranscript> = {
  component: OakVideoTranscript,
  tags: ["autodocs"],
  title: "OWA/shared/OakVideoTranscript",

  parameters: {
    controls: {
      include: ["children"],
    },
  },
  args: {
    children: (
      <>
        <OakP $mb="spacing-16">
          Hello, I'm Mr. Norris, and welcome to the first lesson in this topic
          on forces for year seven.
        </OakP>
        <OakP $mb="spacing-16">
          This lesson is all about what forces do. This is part of the wider big
        </OakP>
        <OakP $mb="spacing-16">
          question of how forces make things happen in the universe. Everything
          that
        </OakP>
        <OakP $mb="spacing-16">
          happens in the universe at the deepest level, any change happens,
          because
        </OakP>
        <OakP $mb="spacing-16">
          a force has acted. And that's why this is such a great, such an
          important
        </OakP>
        <OakP $mb="spacing-16">
          topic to do at the start of year seven. So let's get started.
        </OakP>
        <OakP $mb="spacing-16">
          This lesson is all about what forces do. This is part of the wider big
        </OakP>
        <OakP $mb="spacing-16">
          question of how forces make things happen in the universe. Everything
          that
        </OakP>
        <OakP $mb="spacing-16">
          happens in the universe at the deepest level, any change happens,
          because
        </OakP>
        <OakP $mb="spacing-16">
          a force has acted. And that's why this is such a great, such an
          important a force has acted. And that's why this is such a great, such
          an important a force has acted. And that's why this is such a great,
          such an important a force has acted. And that's why this is such a
          great, such an important a force has acted. And that's why this is
          such a great, such an important
        </OakP>
        <OakP $mb="spacing-16">
          topic to do at the start of year seven. So let's get started.
        </OakP>
        <OakP $mb="spacing-16">
          This lesson is all about what forces do. This is part of the wider big
        </OakP>
        <OakP $mb="spacing-16">
          question of how forces make things happen in the universe. Everything
          that
        </OakP>
        <OakP $mb="spacing-16">
          happens in the universe at the deepest level, any change happens,
          because
        </OakP>
        <OakP $mb="spacing-16">
          a force has acted. And that's why this is such a great, such an
          important
        </OakP>
        <OakP $mb="spacing-16">
          topic to do at the start of year seven. So let's get started.
        </OakP>
        <OakP $mb="spacing-16">
          This lesson is all about what forces do. This is part of the wider big
        </OakP>
        <OakP $mb="spacing-16">
          question of how forces make things happen in the universe. Everything
          that
        </OakP>
        <OakP $mb="spacing-24">
          happens in the universe at the deepest level, any change happens,
          because
        </OakP>
        <OakP $mb="spacing-16">
          a force has acted. And that's why this is such a great, such an
          important
        </OakP>
        <OakP $mb="spacing-16">
          topic to do at the start of year seven. So let's get started.
        </OakP>
        <OakP $mb="spacing-16">
          This lesson is all about what forces do. This is part of the wider big
        </OakP>
        <OakP $mb="spacing-16">
          question of how forces make things happen in the universe. Everything
          that
        </OakP>
        <OakP $mb="spacing-16">
          happens in the universe at the deepest level, any change happens,
          because
        </OakP>
        <OakP $mb="spacing-16">
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

type Story = StoryObj<typeof OakVideoTranscript>;

export const Default: Story = {
  render: (args) => <OakVideoTranscript {...args} />,
};

export const WithSignLanguageControl: Story = {
  render: (args) => <OakVideoTranscript {...args} />,
  args: {
    signLanguageControl: (
      <OakSignLanguageButton
        onClick={() => console.log("Sign language clicked")}
      />
    ),
  },
};

export const WithCopyLinkControl: Story = {
  render: (args) => <OakVideoTranscript {...args} />,
  args: {
    copyLinkControl: <OakCopyLinkButton href="/copy-this-link" />,
  },
};

export const WithSignLanguageAndCopyLinkControl: Story = {
  render: (args) => <OakVideoTranscript {...args} />,
  args: {
    copyLinkControl: <OakCopyLinkButton href="/copy-this-link" />,
    signLanguageControl: (
      <OakSignLanguageButton
        onClick={() => console.log("Sign language clicked")}
      />
    ),
  },
};

export const WithNoTranscript: Story = {
  render: (args) => <OakVideoTranscript {...args} />,
  args: {
    children: null,
    signLanguageControl: (
      <OakSignLanguageButton
        onClick={() => console.log("Sign language clicked")}
      />
    ),
    copyLinkControl: <OakCopyLinkButton href="/copy-this-link" />,
  },
};
