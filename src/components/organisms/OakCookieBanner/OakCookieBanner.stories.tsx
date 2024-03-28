import { Meta, StoryObj } from "@storybook/react";

import { OakCookieBanner } from "./OakCookieBanner";

const meta: Meta<typeof OakCookieBanner> = {
  component: OakCookieBanner,
  tags: ["autodocs"],
  title: "components/organisms/OakCookieBanner",
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
