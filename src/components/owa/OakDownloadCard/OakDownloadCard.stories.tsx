import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";

import { OakDownloadCard } from "./OakDownloadCard";

import { OakRadioGroup } from "@/components/form-elements/OakRadioGroup";
import { oakIconNames } from "@/components/images-and-icons/OakIcon";
import { OakFlex, OakGrid } from "@/index";

const meta: Meta<typeof OakDownloadCard> = {
  component: OakDownloadCard,
  tags: ["autodocs"],
  title: "components/OWA/OakDownloadCard",
  args: { onBlur: fn(), onChange: fn(), onFocus: fn(), onHovered: fn() },
  argTypes: {
    checked: { control: { type: "boolean" } },
    defaultChecked: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
    fileSize: { control: { type: "text" } },
    format: { control: { type: "text" } },
    iconName: { options: oakIconNames, control: { type: "select" } },
    id: { control: { type: "text" } },
    isRadio: { control: { type: "boolean" } },
    isEditable: { control: { type: "boolean" } },
    name: { control: { type: "text" } },
    "aria-label": { control: { type: "text" } },
    "aria-labelledby": { control: { type: "text" } },
    "data-testid": { control: { type: "text" } },
    title: { control: { type: "text" } },
    value: { control: { type: "text" } },
    onBlur: { control: false },
    onChange: { control: false },
    onFocus: { control: false },
    onHovered: { control: false },
  },
};
export default meta;

type Story = StoryObj<typeof OakDownloadCard>;

export const Default: Story = {
  render: (args) => <OakDownloadCard {...args} />,
  args: {
    iconName: "book-steps",
    id: "download-card-default",
    value: "a test value",
    title: "Fancy presentation",
    format: "PPTX",
  },
};

export const WithFileSize: Story = {
  render: (args) => <OakDownloadCard {...args} />,
  args: {
    iconName: "book-steps",
    id: "download-card-file-size",
    value: "a test value",
    title: "Fancy presentation",
    format: "PPTX",
    fileSize: "200KB",
  },
};

export const IsEditable: Story = {
  render: (args) => <OakDownloadCard {...args} />,
  args: {
    iconName: "book-steps",
    id: "download-card-file-size",
    value: "a test value",
    title: "Fancy presentation",
    format: "PPTX",
    fileSize: "200KB",
    isEditable: true,
  },
};

export const MultipleIcons: Story = {
  render: (args) => <OakDownloadCard {...args} />,
  argTypes: { iconName: { control: { type: "object" } } },
  args: {
    iconName: ["quiz", "video", "worksheet", "quiz"],
    id: "download-card-multiple-icons",
    value: "a test value",
    title: "Resource bundle",
    format: ["PPTX", "PDF", "XLSX"],
    fileSize: "1.4MB",
  },
};

export const RadioGroup: Story = {
  render: (args) => {
    const [value, setValue] = useState("one");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      args.onChange?.(event);
      setValue(event.target.value);
    };

    return (
      <OakRadioGroup
        name={"download-card-radio-test"}
        value={value}
        onChange={handleChange}
      >
        <OakDownloadCard {...args} id="download-card-radio-one" value="one" />
        <OakDownloadCard {...args} id="download-card-radio-two" value="two" />
      </OakRadioGroup>
    );
  },
  args: {
    iconName: "book-steps",
    title: "Fancy presentation",
    format: "PPTX",
    fileSize: "200KB",
    isRadio: true,
  },
};

export const DisabledRadioGroup: Story = {
  render: (args) => (
    <OakRadioGroup
      name={"download-card-radio-disabled-test"}
      value="one"
      disabled={true}
    >
      <OakDownloadCard {...args} id="download-card-disabled-one" value="one" />
      <OakDownloadCard {...args} id="download-card-disabled-two" value="two" />
    </OakRadioGroup>
  ),
  args: {
    iconName: "book-steps",
    title: "Fancy presentation",
    format: "PPTX",
    fileSize: "200KB",
    isRadio: true,
  },
};

export const DisabledCheckbox: Story = {
  render: (args) => <OakDownloadCard {...args} />,
  args: {
    iconName: "book-steps",
    id: "download-card-disabled",
    value: "a test value",
    title: "Fancy presentation",
    format: "PPTX",
    fileSize: "200KB",
    disabled: true,
    checked: true,
  },
};

export const WrappingHeight: Story = {
  render: (args) => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
      <OakDownloadCard
        {...args}
        id="download-card-wrapping-long"
        title="A very very very very very long title on in the card so it wraps"
      />
      <OakDownloadCard
        {...args}
        id="download-card-wrapping-short"
        title="Short title"
      />
    </div>
  ),
  args: {
    iconName: "book-steps",
    value: "a test value",
    format: "PPTX",
    fileSize: "200KB",
  },
};

export const SharePage: Story = {
  render: (args) => (
    <OakGrid
      $display="grid"
      $gridTemplateColumns={["1fr", "1fr 1fr"]}
      $cg="spacing-16"
      $rg="spacing-32"
    >
      <OakFlex
        $flexDirection={"row"}
        $gap={"spacing-16"}
        $justifyContent={"stretch"}
      >
        <OakDownloadCard
          {...args}
          iconName={["quiz", "video", "worksheet", "quiz"]}
          title="Full online lesson"
          id="download-card-wrapping-long"
          fileSize="Best for homework, revision, or when pupils are learning independently"
        />
      </OakFlex>
      <OakFlex $flexDirection={"column"} $gap={"spacing-32"}>
        <OakDownloadCard
          {...args}
          iconName={"quiz"}
          id="download-card-wrapping-short"
          title="Prior knowledge starter quiz"
          fileSize="Check prior knowledge (6 questions)"
        />
        <OakDownloadCard
          {...args}
          iconName={"video"}
          id="download-card-wrapping-short"
          title="Lesson video"
          fileSize="Support independent learning (38 mins)"
        />
        <OakDownloadCard
          {...args}
          iconName={"quiz"}
          id="download-card-wrapping-short"
          title="Assessment exit quiz"
          fileSize="Check understanding (6 questions)"
        />
      </OakFlex>
    </OakGrid>
  ),
  parameters: { controls: { disable: true } },
};
