import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSmallSecondaryButtonWithDropdown } from "./OakSmallSecondaryButtonWithDropdown";

import { OakFlex, OakIcon, OakSpan } from "@/components/atoms";
import { OakSmallPrimaryInvertedButton } from "@/components/molecules/OakSmallPrimaryInvertedButton";

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
        "children",
        "isLoading",
        "disabled",
        "ariaLabel",
        "ariaDescription",
      ],
    },
  },
  args: {
    primaryActionText: "Trigger",
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
        <OakSmallSecondaryButtonWithDropdown {...args}>
          <OakSmallSecondaryButtonWithDropdown.Item aria-label="Button 1">
            Button 1
          </OakSmallSecondaryButtonWithDropdown.Item>

          <OakSmallSecondaryButtonWithDropdown.Item aria-label="Longer button 2">
            Longer button 2
          </OakSmallSecondaryButtonWithDropdown.Item>

          <OakSmallSecondaryButtonWithDropdown.Item aria-label="Button 3">
            Button 3
          </OakSmallSecondaryButtonWithDropdown.Item>

          <OakSmallSecondaryButtonWithDropdown.Divider />

          <OakSmallSecondaryButtonWithDropdown.Item
            element="a"
            href="#"
            aria-label="Button 4"
            iconName="external"
          >
            Button 4
          </OakSmallSecondaryButtonWithDropdown.Item>
        </OakSmallSecondaryButtonWithDropdown>

        <OakSmallSecondaryButtonWithDropdown
          {...args}
          primaryActionText="Disabled"
          disabled
        >
          <OakSmallSecondaryButtonWithDropdown.Item aria-label="Button 1">
            Button 1
          </OakSmallSecondaryButtonWithDropdown.Item>
        </OakSmallSecondaryButtonWithDropdown>

        <OakSmallSecondaryButtonWithDropdown
          {...args}
          primaryActionText="Loading"
          isLoading
        >
          <OakSmallSecondaryButtonWithDropdown.Item aria-label="Button 1">
            Button 1
          </OakSmallSecondaryButtonWithDropdown.Item>
        </OakSmallSecondaryButtonWithDropdown>
      </OakFlex>
    </OakFlex>
  ),
};

export const leadingButtonIcon: DropdownNavStory = {
  render: (args) => (
    <OakFlex $height={"all-spacing-19"}>
      <OakSmallSecondaryButtonWithDropdown {...args}>
        <OakSmallSecondaryButtonWithDropdown.Item
          iconName="external"
          aria-label="Glossary"
        >
          Glossary
        </OakSmallSecondaryButtonWithDropdown.Item>
        <OakSmallSecondaryButtonWithDropdown.Item
          iconName="external"
          aria-label="Comprehension task"
        >
          Comprehension task
        </OakSmallSecondaryButtonWithDropdown.Item>
        <OakSmallSecondaryButtonWithDropdown.Item
          iconName="external"
          aria-label="More starter quiz questions"
        >
          More starter quiz questions
        </OakSmallSecondaryButtonWithDropdown.Item>
        <OakSmallSecondaryButtonWithDropdown.Item
          iconName="external"
          aria-label="More exit quiz questions"
        >
          More exit quiz questions
        </OakSmallSecondaryButtonWithDropdown.Item>

        <OakSmallSecondaryButtonWithDropdown.Divider />

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
      </OakSmallSecondaryButtonWithDropdown>
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
    ariaLabel: "Teaching resources hub",
  },
};
