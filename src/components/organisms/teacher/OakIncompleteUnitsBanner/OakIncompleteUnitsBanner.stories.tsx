import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakIncompleteUnitsBanner } from "./OakIncompleteUnitsBanner";
const success = () => Promise.resolve("Success");
const failure = () => {
  throw new Error("oops");
};

const meta: Meta<typeof OakIncompleteUnitsBanner> = {
  title: "Components/Organisms/teacher/OakIncompleteUnitsBanner",
  component: OakIncompleteUnitsBanner,
  tags: ["autodocs"],
  argTypes: {
    onSubmit: {
      control: { type: "radio" },
      options: ["success", "failure"],
      mapping: {
        success,
        failure,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakIncompleteUnitsBanner>;

export const Default: Story = {
  render: (args) => <OakIncompleteUnitsBanner {...args} />,
  args: {
    onSubmit: success,
  },
};
