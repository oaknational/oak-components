import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakDownloadCard } from "./OakDownloadCard";

import { OakRadioGroup } from "@/components/molecules/OakRadioGroup";
import { oakIconNames } from "@/components/atoms";

const meta: Meta<typeof OakDownloadCard> = {
  component: OakDownloadCard,
  tags: ["autodocs"],
  title: "components/molecules/OWA (❌ to be moved out)/OakDownloadCard",
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
    asRadio: {
      type: "boolean",
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
        "asRadio",
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakDownloadCard>;

export const Default: Story = {
  render: (args) => <OakDownloadCard {...args} />,
  args: {
    iconName: "book-steps",
    value: "a test value",
    titleSlot: "Fancy presentation",
    formatSlot: "PPTX",
  },
};

export const WithFileSize: Story = {
  render: (args) => <OakDownloadCard {...args} />,
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
        name={"as-radio-test"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <OakDownloadCard {...args} value="one" />
        <OakDownloadCard {...args} value="two" />
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
    <OakRadioGroup name={"as-radio--disabled-test"} value="one" disabled={true}>
      <OakDownloadCard {...args} value="one" />
      <OakDownloadCard {...args} value="two" />
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
  render: (args) => <OakDownloadCard {...args} />,
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

export const WrappingHeight: Story = {
  render: (args) => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
      <OakDownloadCard
        {...args}
        titleSlot="A very very very very very long title on in the card so it wraps"
      />
      <OakDownloadCard {...args} titleSlot="Short title" />
    </div>
  ),
  args: {
    iconName: "book-steps",
    value: "a test value",
    formatSlot: "PPTX",
    fileSizeSlot: "200kb",
  },
};
