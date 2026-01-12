import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakMediaClip } from "./OakMediaClip";

import { OakFlex, OakUL } from "@/components/atoms";

const meta: Meta<typeof OakMediaClip> = {
  component: OakMediaClip,
  tags: ["autodocs"],
  title: "OWA/shared/OakMediaClip",
  args: {
    clipName: "Standard Clip Name",
    learningCycle: "Learning Cycle",
    timeCode: 657.23,
    muxPlayingState: "standard",
    imageAltText: "Image Alt Text",
    isAudioClip: false,
    disabled: false,
    thumbnailImage: `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336494/samples/landscapes/nature-mountains.jpg`,
  },
  decorators: [
    (Story) => {
      return (
        <OakFlex
          $flexDirection="column"
          $gap="spacing-24"
          $background={"bg-decorative4-main"}
          $pa={"spacing-24"}
          role="list"
        >
          {Story()}
        </OakFlex>
      );
    },
  ],
  argTypes: {
    clipName: { control: "text" },
    learningCycle: { control: "text" },
    timeCode: { control: "number" },
    muxPlayingState: {
      control: { type: "select", options: ["standard", "playing", "played"] },
    },
    imageAltText: { control: "text" },
    isAudioClip: { control: "boolean" },
    disabled: { control: "boolean" },
    thumbnailImage: { control: "text" },
  },
  parameters: {
    controls: {
      include: [
        "clipName",
        "learningCycle",
        "timeCode",
        "muxPlayingState",
        "imageAltText",
        "isAudioClip",
        "disabled",
        "thumbnailImage",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakMediaClip>;

export const Default: Story = {
  render: (args) => {
    return (
      <OakUL $reset>
        <OakMediaClip
          {...args}
          muxPlayingState={"standard"}
          onClick={() => {
            console.log(`Standard video`);
          }}
        />
        <OakMediaClip
          {...args}
          muxPlayingState={"playing"}
          onClick={() => {
            console.log(`Playing video`);
          }}
        />
        <OakMediaClip
          {...args}
          muxPlayingState={"played"}
          onClick={() => {
            console.log(`Played video`);
          }}
        />
      </OakUL>
    );
  },
  args: {
    clipName: "Standard Clip Name",
    timeCode: 657.24,
    muxPlayingState: "standard",
    imageAltText: "Image Alt Text",
    isAudioClip: false,
    disabled: false,
    thumbnailImage: `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336494/samples/landscapes/nature-mountains.jpg`,
  },
};

export const Playing: Story = {
  render: (args) => {
    return (
      <OakUL $reset>
        <OakMediaClip
          {...args}
          clipName="Playing Clip Name"
          muxPlayingState={"playing"}
          onClick={() => {
            console.log(`Playing video`);
          }}
        />
      </OakUL>
    );
  },
};

export const Played: Story = {
  render: (args) => {
    return (
      <OakUL $reset>
        <OakMediaClip
          {...args}
          clipName="Played Clip Name"
          muxPlayingState={"played"}
          onClick={() => {
            console.log(`Played video`);
          }}
        />
      </OakUL>
    );
  },
};

export const Audio: Story = {
  render: (args) => {
    return (
      <OakUL $reset>
        <OakMediaClip
          {...args}
          isAudioClip={true}
          clipName="Audio Clip Name"
          onClick={() => {
            console.log(`Audio clip`);
          }}
        />
      </OakUL>
    );
  },
};

export const Disabled: Story = {
  render: (args) => {
    return (
      <OakUL $reset>
        <OakMediaClip
          {...args}
          disabled={true}
          onClick={() => {
            console.log(`Disabled video`);
          }}
        />
      </OakUL>
    );
  },
};
