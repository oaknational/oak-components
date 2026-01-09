import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakKbd } from "@/components/atoms/OakKbd";

const meta: Meta<typeof OakKbd> = {
  component: OakKbd,
  tags: ["autodocs"],
  title: "components/accessibility/OakKbd",
  args: {
    children: "Tab",
  },
  argTypes: {
    children: {
      type: { name: "string" },
    },
  },
  parameters: {
    controls: {
      include: ["children"],
    },
    backgrounds: {
      default: "light",
    },
  },
  render: (args) => <OakKbd {...args} />,
};
export default meta;

type Story = StoryObj<typeof OakKbd>;

export const Default: Story = {};

export const ArrowKeys: Story = {
  render: () => {
    return (
      <>
        <OakKbd>←</OakKbd> <OakKbd>↑</OakKbd> <OakKbd>↓</OakKbd>{" "}
        <OakKbd>→</OakKbd>
      </>
    );
  },
};
