import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSecondaryButtonWithDropdown } from "./OakSecondaryButtonWithDropdown";

import { OakBox, OakFlex, OakIcon, OakSpan } from "@/components/atoms";
import { OakPrimaryInvertedButton } from "@/components/molecules";

// Generic Dropdown Navigation Button Stories
const dropdownNavMeta: Meta<typeof OakSecondaryButtonWithDropdown> = {
  component: OakSecondaryButtonWithDropdown,
  tags: ["autodocs"],
  title: "components/molecules/OakSecondaryButtonWithDropdown",
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
      <OakPrimaryInvertedButton
        element="a"
        href="#"
        isTrailingIcon
        iconName="external"
      >
        Button 4
      </OakPrimaryInvertedButton>
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

type DropdownNavStory = StoryObj<typeof OakSecondaryButtonWithDropdown>;

export const ButtonWithDropDown: DropdownNavStory = {
  render: (args) => (
    <OakBox $height={"all-spacing-19"}>
      <OakFlex $gap="space-between-m">
        <OakSecondaryButtonWithDropdown {...args} />
        <OakSecondaryButtonWithDropdown
          {...args}
          primaryActionText="Disabled"
          disabled
        />
        <OakSecondaryButtonWithDropdown
          {...args}
          primaryActionText="Loading"
          isLoading
        />
      </OakFlex>
    </OakBox>
  ),
};

export const leadingButtonIconCustomFooter: DropdownNavStory = {
  render: (args) => (
    <OakBox $height={"all-spacing-19"}>
      <OakSecondaryButtonWithDropdown {...args} />
    </OakBox>
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
        <OakSpan $font="body-2">{"New"}</OakSpan>
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
        <OakPrimaryInvertedButton
          element="a"
          href="https://www.oaknationalacademy.com/ai"
          target="_blank"
          $whiteSpace={"normal"}
        >
          <OakFlex $font={"body-2"} $flexDirection={"column"}>
            <OakSpan>Learn more about Aila, Oak's AI </OakSpan>
            <OakFlex $font={"body-2"} $alignItems={"center"}>
              <OakSpan>lesson assistant </OakSpan>
              <OakIcon iconHeight="all-spacing-6" iconName="external" />
            </OakFlex>
          </OakFlex>
        </OakPrimaryInvertedButton>
      </>
    ),
    ariaLabel: "Teaching resources hub",
  },
};
