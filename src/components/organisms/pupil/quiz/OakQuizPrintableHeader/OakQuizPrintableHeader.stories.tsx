import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakQuizPrintableHeader } from "./OakQuizPrintableHeader";

const meta: Meta<typeof OakQuizPrintableHeader> = {
  component: OakQuizPrintableHeader,
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

type Story = StoryObj<typeof OakQuizPrintableHeader>;

export const Default: Story = {
  render: (args) => <OakQuizPrintableHeader {...args} />,
  args: {},
};
