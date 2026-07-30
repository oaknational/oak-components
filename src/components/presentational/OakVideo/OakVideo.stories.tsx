import React from "react";
import { StoryObj, Meta } from "@storybook/nextjs";
import { PortableTextBlock } from "@portabletext/react";

import { OakVideo } from "./OakVideo";

import { OakBox } from "@/components/layout-and-structure";

const longText: PortableTextBlock[] = new Array(20).fill(true).map(() => ({
  _key: "1",
  _type: "block",
  children: [
    {
      _key: "1a",
      _type: "span",
      marks: [],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ],
  markDefs: [],
  style: "normal",
}));

const meta: Meta<typeof OakVideo> = {
  component: OakVideo,
  title: "components/Presentational/OakVideo",
  tags: ["autodocs"],
  argTypes: {
    heading: {
      control: "text",
    },
    headingTag: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "div"],
      control: "select",
    },
    body: {
      control: "text",
    },
    showTranscript: {
      control: "boolean",
    },
    showSignLanguage: {
      control: "boolean",
    },
    showCopyLink: {
      control: "boolean",
    },
    transcript: {
      options: ["undefined", "short_text", "long_text"],
      mapping: {
        undefined: undefined,
        short_text: new Array(20).fill("Short text"),
        long_text: new Array(20).fill(longText),
      },
      control: {
        type: "select", // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          // 'labels' maps option values to string labels
          undefined: "Undefined",
          short_text: "Short text example",
          long_text: "Long text example",
        },
      },
    },
  },
  parameters: {
    controls: {
      include: [
        "transcript",
        "headingTag",
        "heading",
        "body",
        "showTranscript",
        "showSignLanguage",
        "showCopyLink",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakVideo>;

export const AllEnabled: Story = {
  render: (args) => {
    return <OakVideo {...args} />;
  },
  args: {
    videoSlot: (
      <OakBox $aspectRatio={"30/17"} $background={"bg-neutral-stronger"}>
        Placeholder
      </OakBox>
    ),
    transcript: longText,
    heading:
      "Building a research informed curriculum by adopting Oak’s foreign languages model",
    body: [
      {
        _key: "1",
        _type: "block",
        children: [
          {
            _key: "1a",
            _type: "span",
            marks: [],
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
        ],
        markDefs: [],
        style: "normal",
      },
    ],
    showTranscript: true,
    showSignLanguage: true,
    showCopyLink: true,
  },
};

export const OnlyVideo: Story = {
  render: (args) => {
    return <OakVideo {...args} />;
  },
  args: {
    videoSlot: (
      <OakBox $aspectRatio={"30/17"} $background={"bg-neutral-stronger"}>
        Placeholder
      </OakBox>
    ),
  },
};
