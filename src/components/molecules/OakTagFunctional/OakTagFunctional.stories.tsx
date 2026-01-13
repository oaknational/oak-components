import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakTagFunctional } from "./OakTagFunctional";

import { OakFlex, oakIconNames } from "@/components/atoms";
const controlIconNames = [
  null,
  [...oakIconNames].sort((a, b) => a.localeCompare(b)),
].flat();

const meta: Meta<typeof OakTagFunctional> = {
  component: OakTagFunctional,
  tags: ["autodocs"],
  title: "components/Messaging and feedback/OakTagFunctional",
  argTypes: {
    label: { control: "text" },
    iconName: { options: controlIconNames },
  },
  parameters: {
    controls: {
      include: ["iconName", "label"],
    },
  },
  decorators: [
    (Story) => (
      <OakFlex $pa={"spacing-24"} $flexDirection={"row"}>
        <Story />
      </OakFlex>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof OakTagFunctional>;

export const Default: Story = {
  render: (args) => {
    const iconName = args.iconName ? args.iconName : "arrow-right";
    return (
      <OakFlex $gap="spacing-24">
        <OakTagFunctional
          label={args.label ? args.label : "No icon"}
          $background="bg-decorative1-main"
        />
        <OakTagFunctional
          label={args.label ? args.label : "With icon"}
          iconName={iconName}
          $background="bg-decorative4-main"
        />
        <OakTagFunctional
          label={args.label ? args.label : "Trailing icon"}
          iconName={iconName}
          isTrailingIcon
          $background="bg-decorative3-main"
        />
      </OakFlex>
    );
  },
  args: { $background: "bg-neutral", $color: "text-subdued" },
};

export const Span: Story = {
  render: (args) => <OakTagFunctional {...args} />,
  args: {
    $background: "bg-neutral",
    $color: "text-subdued",
    useSpan: true,
    label: "Span Tag",
  },
};
