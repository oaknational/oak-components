import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakMediaClipList } from "./OakMediaClipList";

import { OakMediaClip } from "@/components/organisms/shared/OakMediaClip/OakMediaClip";

const meta: Meta<typeof OakMediaClipList> = {
  component: OakMediaClipList,
  tags: ["autodocs"],
  title: "OWA/shared/OakMediaClipList",
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

const mediaClipArgs = {
  clipName: "Standard Clip Name",
  learningCycle: "Learning Cycle",
  timeCode: 657.23,
  muxPlayingState: "standard",
  imageAltText: "Image Alt Text",
  isAudioClip: false,
  disabled: false,
  thumbnailImage: `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336494/samples/landscapes/nature-mountains.jpg`,
};

export const Default: Story = {
  render: (args) => <OakMediaClipList {...args} />,
  args: {
    lessonTitle: "Lesson title",
    currentClipCounter: 2,
    totalClipCounter: 6,
    children: (
      <>
        <OakMediaClip
          {...mediaClipArgs}
          muxPlayingState={"standard"}
          onClick={() => {
            console.log(`Standard video`);
          }}
        />
        <OakMediaClip
          {...mediaClipArgs}
          clipName="Played Clip Name"
          muxPlayingState={"played"}
          onClick={() => {
            console.log(`Played video`);
          }}
        />
        <OakMediaClip
          {...mediaClipArgs}
          clipName="Playing Clip Name"
          muxPlayingState={"playing"}
          onClick={() => {
            console.log(`Playing video`);
          }}
        />
        <OakMediaClip
          {...mediaClipArgs}
          muxPlayingState={"standard"}
          onClick={() => {
            console.log(`Standard video`);
          }}
        />
        <OakMediaClip
          {...mediaClipArgs}
          muxPlayingState={"standard"}
          onClick={() => {
            console.log(`Standard video`);
          }}
        />
        <OakMediaClip
          {...mediaClipArgs}
          muxPlayingState={"standard"}
          onClick={() => {
            console.log(`Standard video`);
          }}
        />
      </>
    ),
  },
};

export const WithoutScroll: Story = {
  render: (args) => <OakMediaClipList {...args} />,
  args: {
    lessonTitle: "Lesson title",
    currentClipCounter: 2,
    totalClipCounter: 6,
    children: (
      <>
        <OakMediaClip
          {...mediaClipArgs}
          muxPlayingState={"standard"}
          onClick={() => {
            console.log(`Standard video`);
          }}
        />
        <OakMediaClip
          {...mediaClipArgs}
          clipName="Played Clip Name"
          muxPlayingState={"played"}
          onClick={() => {
            console.log(`Played video`);
          }}
        />
      </>
    ),
  },
};
