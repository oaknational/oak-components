import React from "react";
import { StoryObj, Meta } from "@storybook/nextjs";

import { OakVideo } from "./OakVideo";

import { OakBox } from "@/components/layout-and-structure";

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales ";

const ARGS = {
  videoSlot: (
    <OakBox $aspectRatio={"30/17"} $background={"bg-neutral-stronger"}>
      Placeholder
    </OakBox>
  ),
  transcript: [longText, longText, longText],
  heading:
    "Building a research informed curriculum by adopting Oak’s foreign languages model",
  body: "A couple of lines of supporting copy about the video to explain who is in the video and what they discuss.",
  showTranscript: true,
  showSignLanguage: true,
  showCopyLink: true,
};

const meta: Meta<typeof OakVideo> = {
  component: OakVideo,
  title: "components/Presentational/OakVideo",
  tags: ["autodocs"],
  argTypes: {},
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof OakVideo>;

export const OnlyVideo: Story = {
  render: (args) => {
    return <OakVideo {...args} />;
  },
  args: {
    videoSlot: ARGS.videoSlot,
  },
};

export const WithHeadingAndBody: Story = {
  render: (args) => {
    return <OakVideo {...args} />;
  },
  args: {
    videoSlot: ARGS.videoSlot,
    heading: ARGS.heading,
    body: ARGS.body,
    showTranscript: ARGS.showTranscript,
  },
};

export const WithTranscript: Story = {
  render: (args) => {
    return <OakVideo {...args} />;
  },
  args: {
    videoSlot: ARGS.videoSlot,
    heading: ARGS.heading,
    body: ARGS.body,
    transcript: ARGS.transcript,
    showTranscript: ARGS.showTranscript,
  },
};

export const WithSignLanguage: Story = {
  render: (args) => {
    return <OakVideo {...args} />;
  },
  args: {
    videoSlot: ARGS.videoSlot,
    heading: ARGS.heading,
    body: ARGS.body,
    transcript: ARGS.transcript,
    showTranscript: ARGS.showTranscript,
    showSignLanguage: ARGS.showSignLanguage,
  },
};

export const WithCopyLink: Story = {
  render: (args) => {
    return <OakVideo {...args} />;
  },
  args: {
    videoSlot: ARGS.videoSlot,
    heading: ARGS.heading,
    body: ARGS.body,
    transcript: ARGS.transcript,
    showTranscript: ARGS.showTranscript,
    showSignLanguage: ARGS.showSignLanguage,
    showCopyLink: ARGS.showCopyLink,
  },
};
