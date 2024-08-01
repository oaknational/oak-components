import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakQuizResultItem } from "./OakQuizResultItem";

const meta: Meta<typeof OakQuizResultItem> = {
  component: OakQuizResultItem,
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

type Story = StoryObj<typeof OakQuizResultItem>;

export const Default: Story = {
  render: (args) => <OakQuizResultItem {...args} />,
  args: {
    standardText: "Matched answer",
    boldPrefixText: "Match item",
  },
};

export const WithImage: Story = {
  render: (args) => <OakQuizResultItem {...args} />,
  args: {
    standardText: "Matched answer",
    boldPrefixText: "Match item",
    imageURL:
      "https://oaknationalacademy-res.cloudinary.com/image/upload/v1687374653/Trees.jpg",
    imageAlt: "Some trees",
  },
};
