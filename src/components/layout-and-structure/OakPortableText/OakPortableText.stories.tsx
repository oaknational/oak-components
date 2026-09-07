import React from "react";
import { Meta, StoryObj } from "@storybook/nextjs";

import { OakPortableText, OakPortableTextProps } from "./OakPortableText";

import { OakP } from "@/components/typography/OakP";
import { OakSpan } from "@/components/typography/OakSpan";

const portableTextWithOnlyNewlines = [
  {
    _key: "1",
    _type: "block",
    children: [
      {
        _key: "1a",
        _type: "span",
        marks: [],
        text: "testing one",
      },
    ],
    markDefs: [],
    style: "normal",
  },
  {
    _key: "1",
    _type: "block",
    children: [
      {
        _key: "1a",
        _type: "span",
        marks: [],
        text: "testing two",
      },
    ],
    markDefs: [],
    style: "normal",
  },
  {
    _key: "1",
    _type: "block",
    children: [
      {
        _key: "1a",
        _type: "span",
        marks: [],
        text: "testing three",
      },
    ],
    markDefs: [],
    style: "normal",
  },
];

const portableTextWithMarksAndNewLines = [
  {
    _key: "1",
    _type: "block",
    children: [
      {
        _key: "1a",
        _type: "span",
        marks: [],
        text: "testing testing",
      },
    ],
    markDefs: [],
    style: "normal",
  },
  {
    _key: "1",
    _type: "block",
    children: [
      {
        _key: "1a",
        _type: "span",
        marks: [],
        text: "one",
      },
      {
        _key: "2a",
        _type: "span",
        marks: ["strong"],
        text: "two",
      },
      {
        _key: "3a",
        _type: "span",
        marks: ["em"],
        text: "three",
      },
      {
        _key: "4a",
        _type: "span",
        marks: ["em", "strong"],
        text: "three",
      },
    ],
    markDefs: [],
    style: "normal",
  },
];

const meta: Meta<OakPortableTextProps> = {
  component: OakPortableText,
  tags: ["autodocs"],
  title: "components/Layout and structure/OakPortableText",
  args: {},
  argTypes: {
    value: {
      options: ["new_lines_only", "with_marks_and_new_lines"],
      mapping: {
        new_lines_only: portableTextWithOnlyNewlines,
        with_marks_and_new_lines: portableTextWithMarksAndNewLines,
      },
      control: {
        type: "select",
        labels: {
          new_lines_only: "New lines only",
          with_marks_and_new_lines: "With marks and new lines",
        },
      },
    },
  },
  parameters: {
    controls: {
      include: ["value"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakPortableText>;

export const OnlyNewLines: Story = {
  render: (args) => {
    return <OakPortableText {...args} />;
  },
  args: {
    value: portableTextWithOnlyNewlines,
    components: {
      paragraph: ({ children }) => (
        <OakP $color={"text-primary"} $font={["body-2", "body-1", "body-1"]}>
          {children}
        </OakP>
      ),
    },
  },
};

export const NewLinesWithEmAndStrong: Story = {
  render: (args) => {
    return <OakPortableText {...args} />;
  },
  args: {
    value: portableTextWithMarksAndNewLines,
    components: {
      paragraph: ({ children }) => (
        <OakP $color={"text-primary"} $font={["body-2", "body-1", "body-1"]}>
          {children}
        </OakP>
      ),
      strong: ({ children }) => (
        <OakSpan
          as="strong"
          $color={"text-primary"}
          $font={["body-2-bold", "body-1-bold", "body-1-bold"]}
        >
          {children}
        </OakSpan>
      ),
      em: ({ children }) => (
        <OakSpan
          as="em"
          $color={"text-primary"}
          $font={["body-2", "body-1", "body-1"]}
        >
          {children}
        </OakSpan>
      ),
    },
  },
};
