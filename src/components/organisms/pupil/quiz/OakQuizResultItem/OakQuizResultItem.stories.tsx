import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { InternalQuizResultItem } from "./OakQuizResultItem";

const meta: Meta<typeof InternalQuizResultItem> = {
  component: InternalQuizResultItem,
  tags: ["autodocs"],
  argTypes: {
    standardText: { control: "text" },
    boldPrefixText: { control: "text" },
    feedbackState: {
      control: "select",
      options: ["correct", "incorrect", null],
    },
  },
  parameters: {
    controls: {
      include: ["standardText", "boldPrefixText", "feedbackState"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof InternalQuizResultItem>;

export const Default: Story = {
  render: (args) => <InternalQuizResultItem {...args} />,
  args: {
    standardText: "Matched answer",
    boldPrefixText: "Match item",
  },
};

export const WithImage: Story = {
  render: (args) => <InternalQuizResultItem {...args} />,
  args: {
    standardText: "Matched answer",
    boldPrefixText: "Match item",
    imageURL:
      "https://oaknationalacademy-res.cloudinary.com/image/upload/v1687374653/Trees.jpg",
    imageAlt: "Some trees",
  },
};
