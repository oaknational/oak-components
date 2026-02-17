import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { OakInformativeModalFooter } from "./OakInformativeModalFooter";

import { OakButton } from "@/components/buttons/OakButton";

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
        <OakButton variant="secondary" width="100%">
          Secondary action
        </OakButton>
        <OakButton variant="primary" width="100%">
          Primary action
        </OakButton>
      </>
    ),
  },
};
export default meta;

type Story = StoryObj<typeof OakInformativeModalFooter>;

export const Default: Story = {};
