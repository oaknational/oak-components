import { Meta, StoryObj } from "@storybook/react";

import { OakCookieBanner } from "./OakCookieBanner";

import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";

const meta: Meta<typeof OakCookieBanner> = {
  component: OakCookieBanner,
  tags: ["autodocs"],
  title: "components/organisms/OakCookieBanner",

  args: {
    state: "initial",
  },
  argTypes: {
    innerMaxWidth: sizeArgTypes["$maxWidth"],
  },
};
export default meta;

type Story = StoryObj<typeof OakCookieBanner>;

export const Default: Story = {};

export const Accepted: Story = {
  args: {
    state: "accepted",
  },
};

export const Rejected: Story = {
  args: {
    state: "rejected",
  },
};
