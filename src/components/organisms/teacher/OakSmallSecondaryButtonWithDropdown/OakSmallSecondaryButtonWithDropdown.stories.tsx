import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakSmallSecondaryButtonWithDropdown } from "./OakSmallSecondaryButtonWithDropdown";

import { OakBox, OakFlex, OakIcon, OakSpan } from "@/components/atoms";
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
          <OakFlex $flexDirection="column" $gap={"space-between-ssx"}>
            <OakSmallPrimaryInvertedButton
              element="button"
              role="menuitem"
              aria-label="Button 1"
              textAlign={"left"}
            >
              Button 1
            </OakSmallPrimaryInvertedButton>

            <OakSmallPrimaryInvertedButton
              element="button"
              role="menuitem"
              aria-label="Longer button 2"
            >
              Longer button 2
            </OakSmallPrimaryInvertedButton>

            <OakSmallPrimaryInvertedButton
              element="button"
              role="menuitem"
              aria-label="Button 3"
            >
              Button 3
            </OakSmallPrimaryInvertedButton>
          </OakFlex>

          {/* Divider Line */}
          <OakBox
            $height="all-spacing-0"
            $width="100%"
            $bt="border-solid-s"
            $borderColor="border-neutral-lighter"
            $mb="space-between-ssx"
            $mt="space-between-xs"
            aria-hidden="true"
          />

          <OakSmallPrimaryInvertedButton
            element="a"
            href="#"
            isTrailingIcon
            iconName="external"
          >
            Button 4
          </OakSmallPrimaryInvertedButton>
        </OakSmallSecondaryButtonWithDropdown>

        <OakSmallSecondaryButtonWithDropdown
          {...args}
          primaryActionText="Disabled"
          disabled
        >
          <OakFlex $flexDirection="column" $gap={"space-between-ssx"}>
            <OakSmallPrimaryInvertedButton
              element="button"
              role="menuitem"
              aria-label="Button 1"
              width={"100%"}
            >
              Button 1
            </OakSmallPrimaryInvertedButton>

            <OakSmallPrimaryInvertedButton
              element="button"
              role="menuitem"
              aria-label="Longer button 2"
            >
              Longer button 2
            </OakSmallPrimaryInvertedButton>

            <OakSmallPrimaryInvertedButton
              element="button"
              role="menuitem"
              aria-label="Button 3"
            >
              Button 3
            </OakSmallPrimaryInvertedButton>
          </OakFlex>

          {/* Divider Line */}
          <OakBox
            $height="all-spacing-0"
            $width="100%"
            $bt="border-solid-s"
            $borderColor="border-neutral-lighter"
            $mb="space-between-ssx"
            $mt="space-between-xs"
            aria-hidden="true"
          />

          <OakSmallPrimaryInvertedButton
            element="a"
            href="#"
            isTrailingIcon
            iconName="external"
          >
            Button 4
          </OakSmallPrimaryInvertedButton>
        </OakSmallSecondaryButtonWithDropdown>

        <OakSmallSecondaryButtonWithDropdown
          {...args}
          primaryActionText="Loading"
          isLoading
        >
          <OakFlex $flexDirection="column" $gap={"space-between-ssx"}>
            <OakSmallPrimaryInvertedButton
              element="button"
              role="menuitem"
              aria-label="Button 1"
            >
              Button 1
            </OakSmallPrimaryInvertedButton>

            <OakSmallPrimaryInvertedButton
              element="button"
              role="menuitem"
              aria-label="Longer button 2"
            >
              Longer button 2
            </OakSmallPrimaryInvertedButton>

            <OakSmallPrimaryInvertedButton
              element="button"
              role="menuitem"
              aria-label="Button 3"
            >
              Button 3
            </OakSmallPrimaryInvertedButton>
          </OakFlex>

          {/* Divider Line */}
          <OakBox
            $height="all-spacing-0"
            $width="100%"
            $bt="border-solid-s"
            $borderColor="border-neutral-lighter"
            $mb="space-between-ssx"
            $mt="space-between-xs"
            aria-hidden="true"
          />

          <OakSmallPrimaryInvertedButton
            element="a"
            href="#"
            isTrailingIcon
            iconName="external"
          >
            Button 4
          </OakSmallPrimaryInvertedButton>
        </OakSmallSecondaryButtonWithDropdown>
      </OakFlex>
    </OakFlex>
  ),
};

export const leadingButtonIcon: DropdownNavStory = {
  render: (args) => (
    <OakFlex $height={"all-spacing-19"}>
      <OakSmallSecondaryButtonWithDropdown {...args}>
        <OakFlex
          $flexDirection="column"
          $gap={"space-between-ssx"}
          $mb="space-between-xs"
        >
          <OakFlex $width={"100%"}>
            <OakSmallPrimaryInvertedButton
              element="button"
              iconName="external"
              isTrailingIcon
              role="menuitem"
              aria-label="Glossary"
            >
              Glossary
            </OakSmallPrimaryInvertedButton>
          </OakFlex>
          <OakFlex $width={"100%"}>
            <OakSmallPrimaryInvertedButton
              element="button"
              iconName="external"
              isTrailingIcon
              role="menuitem"
              aria-label="Comprehension task"
            >
              Comprehension task
            </OakSmallPrimaryInvertedButton>
          </OakFlex>
          <OakFlex $width={"100%"}>
            <OakSmallPrimaryInvertedButton
              element="button"
              iconName="external"
              isTrailingIcon
              role="menuitem"
              aria-label="More starter quiz questions"
            >
              More starter quiz questions
            </OakSmallPrimaryInvertedButton>
          </OakFlex>
          <OakFlex $width={"100%"}>
            <OakSmallPrimaryInvertedButton
              element="button"
              iconName="external"
              isTrailingIcon
              role="menuitem"
              aria-label="More exit quiz questions"
            >
              More exit quiz questions
            </OakSmallPrimaryInvertedButton>
          </OakFlex>
        </OakFlex>

        {/* Divider Line */}
        <OakBox
          $height="all-spacing-0"
          $width="100%"
          $bt="border-solid-s"
          $borderColor="border-neutral-lighter"
          $mb="space-between-ssx"
          aria-hidden="true"
        />

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
