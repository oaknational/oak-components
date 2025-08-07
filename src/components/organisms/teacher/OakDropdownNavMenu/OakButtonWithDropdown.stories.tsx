import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakButtonWithDropdown } from "./OakButtonWithDropdown";

import { OakFlex, OakIcon, OakSpan } from "@/components/atoms";
import { OakSmallPrimaryInvertedButton } from "@/components/molecules";

// Generic Dropdown Navigation Button Stories
const dropdownNavMeta: Meta<typeof OakButtonWithDropdown> = {
  component: OakButtonWithDropdown,
  tags: ["autodocs"],
  title: "components/organisms/teacher/OakButtonWithDropdown",
  parameters: {
    controls: {
      include: [
        "primaryActionText",
        "primaryActionIcon",
        "onPrimaryAction",
        "items",
        "footer",
        "isPrimaryActionLoading",
        "isPrimaryActionDisabled",
        "containerWidth",
        "ariaLabel",
        "ariaDescription",
      ],
    },
  },
  args: {
    primaryActionText: "Additional Materials",

    items: [
      { label: "Glossary" },
      { label: "Comprehension task" },
      { label: "Lesson narrative" },
      { label: "More starter quiz questions" },
      { label: "More exit quiz questions" },
    ],
    footer: (
      <OakFlex $flexDirection="column" $gap="space-between-xs">
        <OakSpan $ph={"inner-padding-xs"} $color="text-primary">
          Need help with lesson planning?
        </OakSpan>
        <OakSmallPrimaryInvertedButton
          element="a"
          href="#"
          isTrailingIcon
          iconName="external"
        >
          Get support
        </OakSmallPrimaryInvertedButton>
      </OakFlex>
    ),
    isPrimaryActionLoading: false,
    isPrimaryActionDisabled: false,
    ariaLabel: "Additional teaching materials",
    ariaDescription: "Access additional teaching resources and materials",
  },
  argTypes: {
    onPrimaryAction: {
      action: "Primary action clicked",
    },
  },
};

export default dropdownNavMeta;

type DropdownNavStory = StoryObj<typeof OakButtonWithDropdown>;

export const ButtonWithDropDown: DropdownNavStory = {
  render: (args) => (
    <OakFlex $height={"all-spacing-19"}>
      <OakButtonWithDropdown {...args} />
    </OakFlex>
  ),
  args: {
    primaryActionText: "Create New Resource",
    items: [
      { label: "Lesson Plans", iconName: "worksheet" },
      { label: "Assessment Tools", iconName: "quiz" },
      { label: "Student Worksheets", iconName: "worksheet-3" },
    ],

    ariaLabel: "Teaching resources hub",
  },
};

export const Loading: DropdownNavStory = {
  render: (args) => (
    <OakFlex>
      <OakButtonWithDropdown {...args} />
    </OakFlex>
  ),
  args: {
    primaryActionText: "Create New Resource",
    isPrimaryActionLoading: true,
    items: [
      { label: "Lesson Plans", iconName: "worksheet" },
      { label: "Assessment Tools", iconName: "quiz" },
      { label: "Student Worksheets", iconName: "worksheet-3" },
    ],

    ariaLabel: "Teaching resources hub",
  },
};

export const Disabled: DropdownNavStory = {
  render: (args) => (
    <OakFlex>
      <OakButtonWithDropdown {...args} />
    </OakFlex>
  ),
  args: {
    primaryActionText: "Create New Resource",
    isPrimaryActionDisabled: true,
    items: [
      { label: "Lesson Plans", iconName: "worksheet" },
      { label: "Assessment Tools", iconName: "quiz" },
      { label: "Student Worksheets", iconName: "worksheet-3" },
    ],

    ariaLabel: "Teaching resources hub",
  },
};

export const footerButtons: DropdownNavStory = {
  render: (args) => (
    <OakFlex $height={"all-spacing-19"}>
      <OakButtonWithDropdown {...args} />
    </OakFlex>
  ),
  args: {
    primaryActionText: "Create New Resource",
    primaryActionIcon: "edit",
    items: [
      { label: "Lesson Plans", iconName: "worksheet" },
      { label: "Assessment Tools", iconName: "quiz" },
      { label: "Student Worksheets", iconName: "worksheet-3" },
    ],
    footer: (
      <OakFlex $flexDirection="column" $gap="space-between-xs">
        <OakSmallPrimaryInvertedButton
          element="a"
          href="#"
          isTrailingIcon
          iconName="external"
        >
          Button 1
        </OakSmallPrimaryInvertedButton>
        <OakSmallPrimaryInvertedButton
          isTrailingIcon
          element="a"
          href="#"
          iconName="external"
        >
          Button 2
        </OakSmallPrimaryInvertedButton>
      </OakFlex>
    ),
    ariaLabel: "Teaching resources hub",
  },
};

export const leadingButtonIcon: DropdownNavStory = {
  render: (args) => (
    <OakFlex $height={"all-spacing-19"}>
      <OakButtonWithDropdown {...args} />
    </OakFlex>
  ),
  args: {
    primaryActionText: "Create more with AI",

    leadingButtonIcon: (
      <OakFlex
        $borderRadius={"border-radius-s"}
        $ph={"inner-padding-ssx"}
        $mr={"space-between-ssx"}
        $background={"lemon"}
        $alignItems={"center"}
        $justifyContent={"center"}
        $pr={"inner-padding-ssx"}
      >
        <OakIcon
          $height={"all-spacing-4"}
          $width={"all-spacing-4"}
          iconName={"ai"}
        />
        <OakSpan $font="body-3">{"New"}</OakSpan>
      </OakFlex>
    ),
    items: [
      { label: "Glossary", iconName: "external" },
      { label: "Comprehension task", iconName: "external" },
      { label: "More starter quiz questions", iconName: "external" },
      { label: "More exit quiz questions", iconName: "external" },
    ],
    footer: (
      <>
        <OakSmallPrimaryInvertedButton
          element="a"
          href="https://www.oaknationalacademy.com/ai"
          target="_blank"
          $whiteSpace={"normal"}
        >
          <OakFlex $font={"body-3"} $flexDirection={"column"}>
            <OakSpan>Learn more about Aila, Oak's AI </OakSpan>
            <OakFlex $font={"body-3"} $alignItems={"center"}>
              <OakSpan>lesson assistant </OakSpan>
              <OakIcon iconHeight="all-spacing-6" iconName="external" />
            </OakFlex>
          </OakFlex>
        </OakSmallPrimaryInvertedButton>
      </>
    ),
    ariaLabel: "Teaching resources hub",
  },
};
