import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakIncompleteUnitsBanner } from "./OakIncompleteUnitsBanner";

const meta: Meta<typeof OakIncompleteUnitsBanner> = {
  title: "Components/Organisms/teacher/OakIncompleteUnitsBanner",
  component: OakIncompleteUnitsBanner,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    controls: {
      include: ["type"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakIncompleteUnitsBanner>;

export const Default: Story = {
  render: (args) => <OakIncompleteUnitsBanner {...args} />,
  args: {
    onClick: (email: string) => console.log(email),
    formError: false,
  },
};
