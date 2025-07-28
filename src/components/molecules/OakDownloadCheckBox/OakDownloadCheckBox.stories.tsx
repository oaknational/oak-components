import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakDownloadCheckBox } from "./OakDownloadCheckBox";

import { oakIconNames } from "@/components/atoms";

const meta: Meta<typeof OakDownloadCheckBox> = {
  component: OakDownloadCheckBox,
  tags: ["autodocs"],
  title: "components/molecules/OakDownloadCheckBox",
  argTypes: {
    iconName: {
      options: oakIconNames,
    },
    titleSlot: {
      type: "string",
    },
    fileSizeSlot: {
      type: "string",
    },
    formatSlot: {
      type: "string",
    },
  },
  parameters: {
    controls: {
      include: [
        "id",
        "iconName",
        "value",
        "titleSlot",
        "fileSizeSlot",
        "formatSlot",
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakDownloadCheckBox>;

export const Default: Story = {
  render: (args) => <OakDownloadCheckBox {...args} />,
  args: {
    id: "checkbox-test-default",
    iconName: "book-steps",
    value: "a test value",
    titleSlot: "Fancy presentation",
    formatSlot: "PPTX",
  },
};

export const WithFileSize: Story = {
  render: (args) => <OakDownloadCheckBox {...args} />,
  args: {
    id: "checkbox-test-default",
    iconName: "book-steps",
    value: "a test value",
    titleSlot: "Fancy presentation",
    formatSlot: "PPTX",
    fileSizeSlot: "200kb",
  },
};
