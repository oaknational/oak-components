import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import { OakMediaClipStackListItem } from "./OakMediaClipStackListItem";

const meta: Meta<typeof OakMediaClipStackListItem> = {
  component: OakMediaClipStackListItem,
  tags: ["autodocs"],
  title:
    "components/organisms/OWA (❌ to be moved out)/shared/OakMediaClipStackListItem",
  argTypes: {
    title: { control: "text" },
    numberOfClips: { control: "number" },
    imageUrl: { control: "text" },
    imageAltText: { control: "text" },
  },
  parameters: {
    controls: {
      include: ["title", "numberOfClips", "type"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakMediaClipStackListItem>;

export const Default: Story = {
  render: (args) => <OakMediaClipStackListItem {...args} />,
  args: {
    title: "Learning cycle title",
    numberOfClips: 3,
    imageUrl: `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336494/samples/landscapes/nature-mountains.jpg`,
    imageAltText: "alt text for the image",
    href: "#",
  },
};

export const MobileAndTablet: Story = {
  render: (args) => <OakMediaClipStackListItem {...args} />,
  args: {
    title: "Learning cycle title",
    numberOfClips: 3,
    imageUrl: `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336494/samples/landscapes/nature-mountains.jpg`,
    imageAltText: "alt text for the image",
    href: "#",
  },
  parameters: {
    viewport: {
      defaultViewport: "ipad",
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export const AudioClip: Story = {
  render: (args) => <OakMediaClipStackListItem {...args} />,
  args: {
    title: "Learning cycle title",
    numberOfClips: 3,
    imageUrl: `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336494/samples/landscapes/nature-mountains.jpg`,
    imageAltText: "alt text for the image",
    href: "#",
    isAudioClip: true,
  },
};
