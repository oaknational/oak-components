import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { OakInformativeModalFooter } from "./OakInformativeModalFooter";

import { OakSecondaryButton } from "@/components/molecules/OakSecondaryButton";
import { OakPrimaryButton } from "@/components/molecules/OakPrimaryButton";

const meta: Meta<typeof OakInformativeModalFooter> = {
  component: OakInformativeModalFooter,
  tags: ["autodocs"],
  title: "components/molecules/OakInformativeModal/OakInformativeModalFooter",
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
