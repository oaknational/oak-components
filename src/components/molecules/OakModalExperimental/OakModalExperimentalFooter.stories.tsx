import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { OakModalExperimentalFooter } from "./OakModalExperimentalFooter";

import { OakSecondaryButton } from "@/components/molecules/OakSecondaryButton";
import { OakPrimaryButton } from "@/components/molecules/OakPrimaryButton";

const meta: Meta<typeof OakModalExperimentalFooter> = {
  component: OakModalExperimentalFooter,
  tags: ["autodocs"],
  title: "components/molecules/OakModalExperimental/OakModalExperimentalFooter",
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

type Story = StoryObj<typeof OakModalExperimentalFooter>;

export const Default: Story = {};
