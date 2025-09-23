import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakTextArea } from "./OakTextArea";

const meta: Meta<typeof OakTextArea> = {
  //  "title" is the title of the story and where to look for component in the storybook
  title: "Components/atoms/OakTextArea",
  component: OakTextArea,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    controls: {
      include: [],
    },
    backgrounds: {
      default: "light",
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakTextArea>;

export const Default: Story = {
  render: (args) => <OakTextArea {...args} />,
  args: {
    // Define your component's default props here
  },
};
