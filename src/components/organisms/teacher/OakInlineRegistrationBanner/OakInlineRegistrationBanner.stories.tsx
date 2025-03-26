import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakInlineRegistrationBanner } from "./OakInlineRegistrationBanner";

import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";
const success = () => Promise.resolve("Success");
const failure = () => {
  throw new Error("oops");
};

const meta: Meta<typeof OakInlineRegistrationBanner> = {
  title: "Components/Organisms/teacher/OakInlineRegistrationBanner",
  component: OakInlineRegistrationBanner,
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
    ...colorArgTypes,
    ...borderArgTypes,
  },
};

export default meta;

type Story = StoryObj<typeof OakInlineRegistrationBanner>;

export const Default: Story = {
  render: (args) => <OakInlineRegistrationBanner {...args} />,
  args: {
    onSubmit: success,
  },
};
