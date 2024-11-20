import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakTagFunctional } from "./OakTagFunctional";

import { OakFlex } from "@/components/atoms";

const meta: Meta<typeof OakTagFunctional> = {
  component: OakTagFunctional,
  tags: ["autodocs"],
  title: "components/molecules/OakTagFunctional",
  args: { label: "Played" },
  decorators: [
    (Story) => (
      <OakFlex $pa={"inner-padding-xl"} $flexDirection={"row"}>
        <Story />
      </OakFlex>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof OakTagFunctional>;

export const Default: Story = {
  render: (args) => <OakTagFunctional {...args} />,
  args: { $background: "bg-neutral", $color: "text-subdued" },
};
