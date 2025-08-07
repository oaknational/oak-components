import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakDropdownNavMenu } from "./OakDropdownNavMenu";

import { OakFlex, OakIcon, OakSpan } from "@/components/atoms";
import { OakSmallPrimaryInvertedButton } from "@/components/molecules";

// Generic Dropdown Navigation Button Stories
const dropdownNavMeta: Meta<typeof OakDropdownNavMenu> = {
  component: OakDropdownNavMenu,
  tags: ["autodocs"],
  title: "components/organisms/teacher/OakDropdownNavMenu",
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
    primaryActionIcon: "chevron-down",
    items: [
      { label: "Glossary" },
      { label: "Comprehension task" },
      { label: "Lesson narrative" },
      { label: "More starter quiz questions" },
      { label: "More exit quiz questions" },
    ],
    footer: (
      <OakFlex
        $flexDirection="column"
        $alignItems="center"
        $gap="space-between-xs"
      >
        <OakSpan $font="heading-light-7" $color="text-primary">
          Learn more about our materials
        </OakSpan>
        <OakSmallPrimaryInvertedButton element="a" href="#" iconName="external">
          Learn more
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

type DropdownNavStory = StoryObj<typeof OakDropdownNavMenu>;

export const CustomTeacherResources: DropdownNavStory = {
  render: (args) => (
    <OakFlex $height={"all-spacing-19"}>
      <OakDropdownNavMenu {...args} />
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
    ariaLabel: "Teaching resources hub",
  },
};

export const footerButtons: DropdownNavStory = {
  render: (args) => (
    <OakFlex $height={"all-spacing-19"}>
      <OakDropdownNavMenu {...args} />
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
      <OakDropdownNavMenu {...args} />
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
      <OakFlex $flexDirection="column" $gap="space-between-xs">
        <OakSpan $ph={"inner-padding-xs"} $color="text-primary">
          Learn more about
        </OakSpan>
        <OakSmallPrimaryInvertedButton
          isTrailingIcon
          element="a"
          href="#"
          iconName="external"
        >
          Aila, Oak's AI lesson assistant
        </OakSmallPrimaryInvertedButton>
      </OakFlex>
    ),
    ariaLabel: "Teaching resources hub",
  },
};
