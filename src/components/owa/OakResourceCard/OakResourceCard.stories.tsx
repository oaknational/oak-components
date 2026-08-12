import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/nextjs";

import { OakResourceCard } from "./OakResourceCard";

import { OakRadioGroup } from "@/components/form-elements/OakRadioGroup";
import { OakFlex, OakGrid, oakIconNames } from "@/index";

const meta = {
  component: OakResourceCard,
  tags: ["autodocs"],
  title: "components/OWA/OakResourceCard",
  argTypes: {
    checked: { control: { type: "boolean" } },
    defaultChecked: { control: { type: "boolean" } },
    disabled: { control: false },
    iconName: { options: oakIconNames, control: { type: "select" } },
    isRadio: { control: { type: "boolean" } },
    isEditable: { control: { type: "boolean" } },
  },
} satisfies Meta<typeof OakResourceCard>;

export default meta;

type Story = StoryObj<typeof OakResourceCard>;

export const Default: Story = {
  render: (args) => <OakResourceCard {...args} />,
  args: {
    iconName: "book-steps",
    id: "download-card-default",
    value: "a test value",
    title: "Fancy presentation",
    description: "PPTX",
    fileSize: "1MB",
  },
};

export const WithFileSize: Story = {
  render: (args) => <OakResourceCard {...args} />,
  args: {
    iconName: "book-steps",
    id: "download-card-file-size",
    value: "a test value",
    title: "Fancy presentation",
    description: "PPTX",
    fileSize: "200KB",
  },
};

export const IsEditable: Story = {
  render: (args) => <OakResourceCard {...args} />,
  args: {
    iconName: "book-steps",
    id: "download-card-file-size",
    value: "a test value",
    title: "Fancy presentation",
    description: "PPTX",
    fileSize: "200KB",
    isEditable: true,
  },
};

export const MultipleIcons: Story = {
  render: (args) => <OakResourceCard {...args} />,
  argTypes: { iconName: { control: { type: "object" } } },
  args: {
    iconName: ["quiz", "video", "worksheet", "quiz"],
    id: "download-card-multiple-icons",
    value: "a test value",
    title: "Resource bundle",
    description: ["PPTX", "PDF", "XLSX"],
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
        <OakResourceCard {...args} id="download-card-radio-one" value="one" />
        <OakResourceCard {...args} id="download-card-radio-two" value="two" />
      </OakRadioGroup>
    );
  },
  args: {
    iconName: "book-steps",
    title: "Fancy presentation",
    description: "PPTX",
    fileSize: "200KB",
    isRadio: true,
  },
};

export const WrappingHeight: Story = {
  render: (args) => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
      <OakResourceCard
        {...args}
        id="download-card-wrapping-long"
        title="A very very very very very long title on in the card so it wraps"
      />
      <OakResourceCard
        {...args}
        id="download-card-wrapping-short"
        title="Short title"
      />
    </div>
  ),
  args: {
    iconName: "book-steps",
    value: "a test value",
    description: "PPTX",
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
        <OakResourceCard
          {...args}
          iconName={["quiz", "video", "worksheet", "quiz"]}
          title="Full online lesson"
          id="download-card-wrapping-long"
          fileSize="Best for homework, revision, or when pupils are learning independently"
        />
      </OakFlex>
      <OakFlex $flexDirection={"column"} $gap={"spacing-32"}>
        <OakResourceCard
          {...args}
          iconName={"quiz"}
          id="download-card-wrapping-short"
          title="Prior knowledge starter quiz"
          fileSize="Check prior knowledge (6 questions)"
        />
        <OakResourceCard
          {...args}
          iconName={"video"}
          id="download-card-wrapping-short"
          title="Lesson video"
          fileSize="Support independent learning (38 mins)"
        />
        <OakResourceCard
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
