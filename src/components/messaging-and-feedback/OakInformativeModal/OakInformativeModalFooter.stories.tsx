import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { OakInformativeModalFooter } from "./OakInformativeModalFooter";

import { OakSecondaryButton } from "@/components/buttons/OakSecondaryButton";
import { OakPrimaryButton } from "@/components/buttons/OakPrimaryButton";

const meta: Meta<typeof OakInformativeModalFooter> = {
  component: OakInformativeModalFooter,
  tags: ["autodocs"],
  title: "components/Messaging and feedback/OakInformativeModalFooter",
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

type Story = StoryObj<typeof OakInformativeModalFooter>;

export const Default: Story = {};
