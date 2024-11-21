import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakMediaClipList } from "./OakMediaClipList";

const meta: Meta<typeof OakMediaClipList> = {
  title: "Components/organisms/teacher/OakMediaClipList",
  component: OakMediaClipList,
  tags: ["autodocs"],
  argTypes: {
    lessonTitle: { control: "text" },
  },
  parameters: {
    controls: {
      include: ["lessonTitle"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakMediaClipList>;

const mediaClip = {
  clipName: "Standard Clip Name",
  learningCycle: "Learning Cycle",
  timeCode: 657.23,
  imageAltText: "Image Alt Text",
  isAudioClip: false,
  disabled: false,
  thumbnailImage: `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336494/samples/landscapes/nature-mountains.jpg`,
  onClick: () => {},
};

export const Default: Story = {
  render: (args) => <OakMediaClipList {...args} />,
  args: {
    lessonTitle: "Lesson title",
    mediaClipList: [
      {
        ...mediaClip,
        muxPlayingState: "played",
      },
      {
        ...mediaClip,
        muxPlayingState: "played",
      },
      {
        ...mediaClip,
        muxPlayingState: "playing",
      },
      {
        ...mediaClip,
        muxPlayingState: "standard",
      },
      {
        ...mediaClip,
        muxPlayingState: "standard",
      },
      {
        ...mediaClip,
        muxPlayingState: "standard",
      },
      {
        ...mediaClip,
        muxPlayingState: "standard",
      },
    ],
  },
};
