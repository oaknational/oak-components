import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSecondaryButtonWithDropdown } from "./OakSecondaryButtonWithDropdown";

import { OakBox, OakFlex, OakIcon, OakSpan } from "@/components/atoms";
import { OakPrimaryInvertedButton } from "@/components/molecules";

// Generic Dropdown Navigation Button Stories
const dropdownNavMeta: Meta<typeof OakSecondaryButtonWithDropdown> = {
  component: OakSecondaryButtonWithDropdown,
  tags: ["autodocs"],
  title:
    "components/buttons/OakButtonWithDropdown (🔀 to be merged)/OakSecondaryButtonWithDropdown",
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

type DropdownNavStory = StoryObj<typeof OakSecondaryButtonWithDropdown>;

export const ButtonWithDropDown: DropdownNavStory = {
  render: (args) => (
    <OakBox $height={"spacing-240"}>
      <OakFlex $gap="spacing-24">
        <OakSecondaryButtonWithDropdown {...args}>
          <OakSecondaryButtonWithDropdown.Item>
            Button 1
          </OakSecondaryButtonWithDropdown.Item>
          <OakSecondaryButtonWithDropdown.Item aria-label="Longer button 2">
            Longer button 2
          </OakSecondaryButtonWithDropdown.Item>
          <OakSecondaryButtonWithDropdown.Item aria-label="Button 3">
            Button 3
          </OakSecondaryButtonWithDropdown.Item>
          <OakSecondaryButtonWithDropdown.Divider />
          <OakSecondaryButtonWithDropdown.Item aria-label="Button 4">
            Button 4
          </OakSecondaryButtonWithDropdown.Item>
        </OakSecondaryButtonWithDropdown>

        <OakSecondaryButtonWithDropdown
          {...args}
          primaryActionText="Disabled"
          disabled
        >
          <OakSecondaryButtonWithDropdown.Item>
            Button 1
          </OakSecondaryButtonWithDropdown.Item>
          <OakSecondaryButtonWithDropdown.Item aria-label="Longer button 2">
            Longer button 2
          </OakSecondaryButtonWithDropdown.Item>
          <OakSecondaryButtonWithDropdown.Item aria-label="Button 3">
            Button 3
          </OakSecondaryButtonWithDropdown.Item>
          <OakSecondaryButtonWithDropdown.Divider />
          <OakSecondaryButtonWithDropdown.Item aria-label="Button 4">
            Button 4
          </OakSecondaryButtonWithDropdown.Item>
        </OakSecondaryButtonWithDropdown>

        <OakSecondaryButtonWithDropdown
          {...args}
          primaryActionText="Loading"
          isLoading
        >
          <OakSecondaryButtonWithDropdown.Item>
            Button 1
          </OakSecondaryButtonWithDropdown.Item>
          <OakSecondaryButtonWithDropdown.Item aria-label="Longer button 2">
            Longer button 2
          </OakSecondaryButtonWithDropdown.Item>
          <OakSecondaryButtonWithDropdown.Item aria-label="Button 3">
            Button 3
          </OakSecondaryButtonWithDropdown.Item>
          <OakSecondaryButtonWithDropdown.Divider />
          <OakSecondaryButtonWithDropdown.Item aria-label="Button 4">
            Button 4
          </OakSecondaryButtonWithDropdown.Item>
        </OakSecondaryButtonWithDropdown>
      </OakFlex>
    </OakBox>
  ),
};

export const withIcons: DropdownNavStory = {
  render: (args) => (
    <OakBox $height={"spacing-240"}>
      <OakSecondaryButtonWithDropdown {...args}>
        <OakSecondaryButtonWithDropdown.Item
          iconName="external"
          aria-label="Glossary"
        >
          Glossary
        </OakSecondaryButtonWithDropdown.Item>
        <OakSecondaryButtonWithDropdown.Item
          iconName="external"
          aria-label="Comprehension task"
        >
          Comprehension task
        </OakSecondaryButtonWithDropdown.Item>
        <OakSecondaryButtonWithDropdown.Item
          iconName="external"
          aria-label="More starter quiz questions"
        >
          More starter quiz questions
        </OakSecondaryButtonWithDropdown.Item>
        <OakSecondaryButtonWithDropdown.Item
          iconName="external"
          aria-label="More exit quiz questions"
        >
          More exit quiz questions
        </OakSecondaryButtonWithDropdown.Item>

        <OakSecondaryButtonWithDropdown.Divider />
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
              <OakIcon iconHeight="spacing-24" iconName="external" />
            </OakFlex>
          </OakFlex>
        </OakPrimaryInvertedButton>
      </OakSecondaryButtonWithDropdown>
    </OakBox>
  ),
  args: {
    primaryActionText: "Create more with AI",
    leadingButtonIcon: (
      <OakFlex
        $borderRadius={"border-radius-s"}
        $ph={"spacing-4"}
        $mr={"spacing-8"}
        $background={"icon-promo"}
        $alignItems={"center"}
        $justifyContent={"center"}
        $pr={"spacing-4"}
      >
        <OakIcon $height={"spacing-16"} $width={"spacing-16"} iconName={"ai"} />
        <OakSpan $font="body-2">{"New"}</OakSpan>
      </OakFlex>
    ),
    ariaLabel: "Teaching resources hub",
  },
};
