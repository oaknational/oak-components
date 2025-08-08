import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSmallSecondaryButtonWithDropdown } from "./OakSmallSecondaryButtonWithDropdown";

import { OakFlex, OakIcon, OakSpan } from "@/components/atoms";
import { OakSmallPrimaryInvertedButton } from "@/components/molecules";

// Generic Dropdown Navigation Button Stories
const dropdownNavMeta: Meta<typeof OakSmallSecondaryButtonWithDropdown> = {
  component: OakSmallSecondaryButtonWithDropdown,
  tags: ["autodocs"],
  title: "components/molecules/OakSmallSecondaryButtonWithDropdown",
  parameters: {
    controls: {
      include: [
        "primaryActionText",
        "primaryActionIcon",
        "onPrimaryAction",
        "items",
        "footer",
        "isLoading",
        "disabled",
        "containerWidth",
        "ariaLabel",
        "ariaDescription",
      ],
    },
  },
  args: {
    primaryActionText: "Trigger",

    items: [
      { label: "Button 1" },
      { label: "Longer button 2" },
      { label: "Button 3" },
    ],
    footer: (
      <OakSmallPrimaryInvertedButton
        element="a"
        href="#"
        isTrailingIcon
        iconName="external"
      >
        Button 4
      </OakSmallPrimaryInvertedButton>
    ),
    isLoading: false,
    disabled: false,
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

type DropdownNavStory = StoryObj<typeof OakSmallSecondaryButtonWithDropdown>;

export const ButtonWithDropDown: DropdownNavStory = {
  render: (args) => (
    <OakFlex $height={"all-spacing-19"}>
      <OakFlex $gap="space-between-m">
        <OakSmallSecondaryButtonWithDropdown {...args} />
        <OakSmallSecondaryButtonWithDropdown
          {...args}
          primaryActionText="Disabled"
          disabled
        />
        <OakSmallSecondaryButtonWithDropdown
          {...args}
          primaryActionText="Loading"
          isLoading
        />
      </OakFlex>
    </OakFlex>
  ),
};

export const leadingButtonIconCustomFooter: DropdownNavStory = {
  render: (args) => (
    <OakFlex $height={"all-spacing-19"}>
      <OakSmallSecondaryButtonWithDropdown {...args} />
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
