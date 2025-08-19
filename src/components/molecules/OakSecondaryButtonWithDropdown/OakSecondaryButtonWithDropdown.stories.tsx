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
    <OakBox $height={"all-spacing-19"}>
      <OakFlex $gap="space-between-m">
        <OakSecondaryButtonWithDropdown {...args}>
          <OakFlex $flexDirection="column" $gap={"space-between-ssx"}>
            <OakPrimaryInvertedButton
              element="button"
              role="menuitem"
              aria-label="Button 1"
            >
              Button 1
            </OakPrimaryInvertedButton>
            <OakPrimaryInvertedButton
              element="button"
              role="menuitem"
              aria-label="Longer button 2"
            >
              Longer button 2
            </OakPrimaryInvertedButton>
            <OakPrimaryInvertedButton
              element="button"
              role="menuitem"
              aria-label="Button 3"
            >
              Button 3
            </OakPrimaryInvertedButton>
          </OakFlex>

          {/* Divider Line */}
          <OakBox
            $height="all-spacing-0"
            $width="100%"
            $bt="border-solid-s"
            $borderColor="border-neutral-lighter"
            $mb="space-between-ssx"
            $mt="space-between-xs"
            role="separator"
            aria-hidden="true"
          />

          <OakPrimaryInvertedButton
            element="a"
            href="#"
            isTrailingIcon
            iconName="external"
          >
            Button 4
          </OakPrimaryInvertedButton>
        </OakSecondaryButtonWithDropdown>

        <OakSecondaryButtonWithDropdown
          {...args}
          primaryActionText="Disabled"
          disabled
        >
          <OakFlex $flexDirection="column" $gap={"space-between-ssx"}>
            <OakPrimaryInvertedButton
              element="button"
              role="menuitem"
              aria-label="Button 1"
            >
              Button 1
            </OakPrimaryInvertedButton>
            <OakPrimaryInvertedButton
              element="button"
              role="menuitem"
              aria-label="Longer button 2"
            >
              Longer button 2
            </OakPrimaryInvertedButton>
            <OakPrimaryInvertedButton
              element="button"
              role="menuitem"
              aria-label="Button 3"
            >
              Button 3
            </OakPrimaryInvertedButton>
          </OakFlex>

          {/* Divider Line */}
          <OakBox
            $height="all-spacing-0"
            $width="100%"
            $bt="border-solid-s"
            $borderColor="border-neutral-lighter"
            $mb="space-between-ssx"
            $mt="space-between-xs"
            role="separator"
            aria-hidden="true"
          />

          <OakPrimaryInvertedButton
            element="a"
            href="#"
            isTrailingIcon
            iconName="external"
          >
            Button 4
          </OakPrimaryInvertedButton>
        </OakSecondaryButtonWithDropdown>

        <OakSecondaryButtonWithDropdown
          {...args}
          primaryActionText="Loading"
          isLoading
        >
          <OakFlex $flexDirection="column" $gap={"space-between-ssx"}>
            <OakPrimaryInvertedButton
              element="button"
              role="menuitem"
              aria-label="Button 1"
            >
              Button 1
            </OakPrimaryInvertedButton>
            <OakPrimaryInvertedButton
              element="button"
              role="menuitem"
              aria-label="Longer button 2"
            >
              Longer button 2
            </OakPrimaryInvertedButton>
            <OakPrimaryInvertedButton
              element="button"
              role="menuitem"
              aria-label="Button 3"
            >
              Button 3
            </OakPrimaryInvertedButton>
          </OakFlex>

          {/* Divider Line */}
          <OakBox
            $height="all-spacing-0"
            $width="100%"
            $bt="border-solid-s"
            $borderColor="border-neutral-lighter"
            $mb="space-between-ssx"
            $mt="space-between-xs"
            role="separator"
            aria-hidden="true"
          />

          <OakPrimaryInvertedButton
            element="a"
            href="#"
            isTrailingIcon
            iconName="external"
          >
            Button 4
          </OakPrimaryInvertedButton>
        </OakSecondaryButtonWithDropdown>
      </OakFlex>
    </OakBox>
  ),
};

export const leadingButtonIconCustomFooter: DropdownNavStory = {
  render: (args) => (
    <OakBox $height={"all-spacing-19"}>
      <OakSecondaryButtonWithDropdown {...args}>
        <OakFlex
          $flexDirection="column"
          $gap={"space-between-ssx"}
          $mb="space-between-xs"
        >
          <OakPrimaryInvertedButton
            element="button"
            iconName="external"
            isTrailingIcon
            role="menuitem"
            aria-label="Glossary"
          >
            Glossary
          </OakPrimaryInvertedButton>
          <OakPrimaryInvertedButton
            element="button"
            iconName="external"
            isTrailingIcon
            role="menuitem"
            aria-label="Comprehension task"
          >
            Comprehension task
          </OakPrimaryInvertedButton>
          <OakPrimaryInvertedButton
            element="button"
            iconName="external"
            isTrailingIcon
            role="menuitem"
            aria-label="More starter quiz questions"
          >
            More starter quiz questions
          </OakPrimaryInvertedButton>
          <OakPrimaryInvertedButton
            element="button"
            iconName="external"
            isTrailingIcon
            role="menuitem"
            aria-label="More exit quiz questions"
          >
            More exit quiz questions
          </OakPrimaryInvertedButton>
        </OakFlex>

        {/* Divider Line */}
        <OakBox
          $height="all-spacing-0"
          $width="100%"
          $bt="border-solid-s"
          $borderColor="border-neutral-lighter"
          $mb="space-between-ssx"
          role="separator"
          aria-hidden="true"
        />

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
      </OakSecondaryButtonWithDropdown>
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
    ariaLabel: "Teaching resources hub",
  },
};
