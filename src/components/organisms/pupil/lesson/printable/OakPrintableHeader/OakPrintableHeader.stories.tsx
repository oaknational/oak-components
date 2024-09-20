import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakPrintableHeader } from "./OakPrintableHeader";

const meta: Meta<typeof OakPrintableHeader> = {
  component: OakPrintableHeader,
  tags: ["autodocs"],
  argTypes: {
    iconName: {},
  },
  parameters: {
    controls: {
      include: ["iconBackground", "iconName", "alt", "breadcrumbs", "title"],
    },
  },
  args: {
    iconName: "subject-science",
    alt: "icon",
    breadcrumbs: ["first", "second", "third", "fourth"],
    worksheetDownloaded: true,
    videoPercentage: 80,
  },
};

export default meta;

type Story = StoryObj<typeof OakPrintableHeader>;

export const Default: Story = {
  render: (args) => <OakPrintableHeader {...args} />,
  args: {},
};

export const WithOptionality: Story = {
  render: (args) => <OakPrintableHeader {...args} />,
  args: { optionalityTitle: "Optional title" },
};
