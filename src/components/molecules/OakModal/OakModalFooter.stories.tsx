import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { OakModalFooter } from "./OakModalFooter";

import { OakSecondaryButton } from "@/components/molecules/OakSecondaryButton";
import { OakPrimaryButton } from "@/components/molecules/OakPrimaryButton";

const meta: Meta<typeof OakModalFooter> = {
  component: OakModalFooter,
  tags: ["autodocs"],
  title: "components/molecules/OakModal/OakModalFooter",
  parameters: {
    controls: {
      include: [],
    },
  },
  args: {
    children: (
      <>
        <OakSecondaryButton width="100%">Secondary action</OakSecondaryButton>
        <OakPrimaryButton width="100%">Primary action</OakPrimaryButton>
      </>
    ),
  },
};
export default meta;

type Story = StoryObj<typeof OakModalFooter>;

export const Default: Story = {};
