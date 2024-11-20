import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakMediaClipStackListItem } from "./OakMediaClipStackListItem";

const meta: Meta<typeof OakMediaClipStackListItem> = {
  title: "Components/organisms/teacher/OakMediaClipStackListItem",
  component: OakMediaClipStackListItem,
  tags: ["autodocs"],
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
