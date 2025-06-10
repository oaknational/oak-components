import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakTagFunctional } from "./OakTagFunctional";

import { OakFlex } from "@/components/atoms";

const meta: Meta<typeof OakTagFunctional> = {
  component: OakTagFunctional,
  tags: ["autodocs"],
  title: "components/molecules/OakTagFunctional",
  args: { label: "Played" },
  argTypes: {
    useSpan: {
      control: "boolean",
      description:
        "Whether to use a span element or default label element for label text",
    },
  },
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

export const Span: Story = {
  render: (args) => <OakTagFunctional {...args} />,
  args: { $background: "bg-neutral", $color: "text-subdued", useSpan: true },
};
