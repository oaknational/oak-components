import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakRadioGroup } from "../OakRadioGroup";

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
    iconName: "book-steps",
    value: "a test value",
    titleSlot: "Fancy presentation",
    formatSlot: "PPTX",
  },
};

export const WithFileSize: Story = {
  render: (args) => <OakDownloadCheckBox {...args} />,
  args: {
    iconName: "book-steps",
    value: "a test value",
    titleSlot: "Fancy presentation",
    formatSlot: "PPTX",
    fileSizeSlot: "200kb",
  },
};

export const AsRadio: Story = {
  render: (args) => {
    const [value, setValue] = useState("one");

    return (
      <OakRadioGroup
        name={"test"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <OakDownloadCheckBox {...args} value="one" />
        <OakDownloadCheckBox {...args} value="two" />
      </OakRadioGroup>
    );
  },
  args: {
    iconName: "book-steps",
    titleSlot: "Fancy presentation",
    formatSlot: "PPTX",
    fileSizeSlot: "200kb",
    asRadio: true,
  },
};

export const AsRadioDisabled: Story = {
  render: (args) => (
    <OakRadioGroup name={"test"} value="one" disabled={true}>
      <OakDownloadCheckBox {...args} value="one" />
      <OakDownloadCheckBox {...args} value="two" />
    </OakRadioGroup>
  ),
  args: {
    iconName: "book-steps",
    value: "a test value",
    titleSlot: "Fancy presentation",
    formatSlot: "PPTX",
    fileSizeSlot: "200kb",
    asRadio: true,
  },
};

export const Disabled: Story = {
  render: (args) => <OakDownloadCheckBox {...args} />,
  args: {
    iconName: "book-steps",
    value: "a test value",
    titleSlot: "Fancy presentation",
    formatSlot: "PPTX",
    fileSizeSlot: "200kb",
    disabled: true,
    checked: true,
  },
};
