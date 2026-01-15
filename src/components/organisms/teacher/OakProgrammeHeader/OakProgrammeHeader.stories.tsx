import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakProgrammeHeader } from "./OakProgrammeHeader";

import {
  OakFlex,
  OakHeading,
  OakLI,
  OakTypography,
  OakUL,
} from "@/components/atoms";
import { OakPrimaryButton } from "@/components/molecules";
import { subjectHeroImages } from "@/image-map";

const meta: Meta<typeof OakProgrammeHeader> = {
  component: OakProgrammeHeader,
  tags: ["autodocs"],
  argTypes: {
    subject: {
      control: {
        type: "select",
      },
      options: Object.keys(subjectHeroImages),
    },
    background: {
      control: {
        type: "select",
      },
      options: [
        undefined,
        "bg-decorative1-main",
        "bg-decorative2-main",
        "bg-decorative3-main",
        "bg-decorative4-main",
        "bg-decorative5-main",
        "bg-decorative6-main",
      ],
    },
  },
  parameters: {
    controls: {
      include: ["subject", "background"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakProgrammeHeader>;

export const Default: Story = {
  render: (args) => (
    <OakProgrammeHeader {...args}>
      <OakFlex $flexDirection="column" $gap="spacing-24">
        <OakHeading tag="h1" $font="heading-4" $textWrap="balance">
          Heading
        </OakHeading>
        <OakTypography $font="body-2" $textWrap="balance">
          This is a programme header component that displays content alongside a
          large subject illustration. On mobile, the image appears above the
          content, and on desktop, the image is displayed to the right. Text
          should wrap with balance for better readability.
        </OakTypography>
        <OakUL>
          <OakLI>Item 1</OakLI>
          <OakLI>Item 2</OakLI>
          <OakLI>Item 3</OakLI>
        </OakUL>
      </OakFlex>
    </OakProgrammeHeader>
  ),
  args: {
    subject: "english",
  },
};

export const RealisticExample: Story = {
  render: (args) => (
    <OakProgrammeHeader {...args}>
      <OakHeading tag="h1" $font="heading-4" $textWrap="balance">
        Computing
      </OakHeading>
      <OakTypography $font="body-2">
        Our computing curriculum is taught through real-world contexts, helping
        pupils understand how technology works, think critically and develop
        future-ready digital skills.
      </OakTypography>
      <OakUL>
        <OakLI>National curriculum-aligned, fully sequenced</OakLI>
        <OakLI>Practical, engaging lessons</OakLI>
        <OakLI>Responsible digital citizenship</OakLI>
      </OakUL>
    </OakProgrammeHeader>
  ),
  args: {
    subject: "computing",
  },
};

export const WithBackgroundColour: Story = {
  render: (args) => (
    <OakProgrammeHeader {...args}>
      <OakHeading tag="h1" $font="heading-4" $textWrap="balance">
        Programme with background colour
      </OakHeading>
      <OakTypography $font="body-2">
        This example shows the component with a decorative background color.
      </OakTypography>
    </OakProgrammeHeader>
  ),
  args: {
    subject: "history",
    background: "bg-decorative1-main",
  },
};

export const WithLongContent: Story = {
  render: (args) => (
    <OakProgrammeHeader {...args}>
      <OakHeading tag="h1" $font="heading-4" $textWrap="balance">
        Long headings should wrap with balance for better readability
      </OakHeading>
      <OakTypography $font="body-2" $color="text-primary" as="p">
        This example demonstrates how the component handles longer content. The
        layout remains responsive and maintains proper spacing across different
        screen sizes. The subject illustration should always be prominently
        displayed.
      </OakTypography>
      <OakTypography $font="body-2" $color="text-primary" as="p">
        This is a programme header component that displays content alongside a
        large subject illustration. On mobile, the image appears above the
        content, and on desktop, the image is displayed to the right. Text
        should wrap with balance for better readability.
      </OakTypography>
      <OakUL>
        <OakLI>
          Item 1 is quite long and should wrap to the next line and be properly
          aligned with the text
        </OakLI>
        <OakLI>Item 2</OakLI>
        <OakLI>Item 3</OakLI>
      </OakUL>
    </OakProgrammeHeader>
  ),
  args: {
    subject: "geography",
    background: "bg-decorative5-main",
  },
};

export const WithHeaderAndFooterSlots: Story = {
  render: (args) => (
    <OakProgrammeHeader
      {...args}
      headerSlot={
        <OakFlex
          $pa="spacing-8"
          $alignItems="center"
          $height="spacing-32"
          $background="amber"
        >
          Breadcrumb placeholder
        </OakFlex>
      }
      footerSlot={
        <OakFlex $gap="spacing-8">
          <OakPrimaryButton>Button 1</OakPrimaryButton>
          <OakPrimaryButton>Button 2</OakPrimaryButton>
          <OakPrimaryButton>Button 3</OakPrimaryButton>
        </OakFlex>
      }
    >
      <OakHeading
        tag="h1"
        $font="heading-4"
        $color="text-primary"
        $textWrap="balance"
      >
        Programme header with header and footer
      </OakHeading>
      <OakTypography $font="body-2" $color="text-primary">
        This example demonstrates the `headerSlot` and `footerSlot` props. The
        headerSlot appears above the main content and is ideal for breadcrumbs.
        The footerSlot appears below the main content and is perfect for action
        buttons.
      </OakTypography>
      <OakUL>
        <OakLI>Item 1</OakLI>
        <OakLI>Item 2</OakLI>
        <OakLI>Item 3</OakLI>
      </OakUL>
    </OakProgrammeHeader>
  ),
  args: {
    subject: "geography",
    background: "bg-decorative5-main",
  },
};
