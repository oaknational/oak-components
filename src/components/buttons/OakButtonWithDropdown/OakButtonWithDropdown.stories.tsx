import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakButtonWithDropdown } from "./OakButtonWithDropdown";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakIcon } from "@/components/images-and-icons/OakIcon";
import { OakSpan } from "@/components/typography/OakSpan";
import { OakButton } from "@/components/buttons/OakButton";

// Generic Dropdown Navigation Button Stories
const dropdownNavMeta: Meta<typeof OakButtonWithDropdown> = {
  component: OakButtonWithDropdown,
  tags: ["autodocs"],
  title: "components/Buttons/OakButtonWithDropdown",
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
    buttonComponent: OakButton,
  },
  argTypes: {
    onPrimaryAction: {
      action: "Primary action clicked",
    },
  },
};

export default dropdownNavMeta;

type OakButtonWithDropdownStory = StoryObj<typeof OakButtonWithDropdown>;

export const ButtonWithDropdown: OakButtonWithDropdownStory = {
  render: (args) => (
    <OakFlex $height={"spacing-240"}>
      <OakFlex $gap="spacing-24">
        <OakButtonWithDropdown {...args}>
          <OakButtonWithDropdown.Item aria-label="Button 1" variant="secondary">
            Button 1
          </OakButtonWithDropdown.Item>

          <OakButtonWithDropdown.Item
            aria-label="Longer button 2"
            variant="secondary"
          >
            Longer button 2
          </OakButtonWithDropdown.Item>

          <OakButtonWithDropdown.Item aria-label="Button 3" variant="secondary">
            Button 3
          </OakButtonWithDropdown.Item>

          <OakButtonWithDropdown.Divider />

          <OakButtonWithDropdown.Item
            variant="secondary"
            element="a"
            href="#"
            aria-label="Button 4"
            iconName="external"
          >
            Button 4
          </OakButtonWithDropdown.Item>
        </OakButtonWithDropdown>

        <OakButtonWithDropdown {...args} primaryActionText="Disabled" disabled>
          <OakButtonWithDropdown.Item aria-label="Button 1" variant="secondary">
            Button 1
          </OakButtonWithDropdown.Item>
        </OakButtonWithDropdown>

        <OakButtonWithDropdown {...args} primaryActionText="Loading" isLoading>
          <OakButtonWithDropdown.Item aria-label="Button 1" variant="secondary">
            Button 1
          </OakButtonWithDropdown.Item>
        </OakButtonWithDropdown>
      </OakFlex>
    </OakFlex>
  ),
};

export const leadingButtonIcon: OakButtonWithDropdownStory = {
  render: (args) => (
    <OakFlex $height={"spacing-240"}>
      <OakButtonWithDropdown {...args}>
        <OakButtonWithDropdown.Item
          iconName="external"
          aria-label="Glossary"
          variant="secondary"
        >
          Glossary
        </OakButtonWithDropdown.Item>
        <OakButtonWithDropdown.Item
          iconName="external"
          aria-label="Comprehension task"
          variant="secondary"
        >
          Comprehension task
        </OakButtonWithDropdown.Item>
        <OakButtonWithDropdown.Item
          iconName="external"
          aria-label="More starter quiz questions"
          variant="secondary"
        >
          More starter quiz questions
        </OakButtonWithDropdown.Item>
        <OakButtonWithDropdown.Item
          iconName="external"
          aria-label="More exit quiz questions"
          variant="secondary"
        >
          More exit quiz questions
        </OakButtonWithDropdown.Item>

        <OakButtonWithDropdown.Divider />

        <OakButton
          variant="primary"
          colorScheme="inverted"
          element="a"
          href="https://www.oaknationalacademy.com/ai"
          target="_blank"
          $whiteSpace={"normal"}
        >
          <OakFlex $font={"body-3"} $flexDirection={"column"}>
            <OakSpan>Learn more about Aila, Oak's AI </OakSpan>
            <OakFlex $font={"body-3"} $alignItems={"center"}>
              <OakSpan>lesson assistant </OakSpan>
              <OakIcon iconHeight="spacing-24" iconName="external" />
            </OakFlex>
          </OakFlex>
        </OakButton>
      </OakButtonWithDropdown>
    </OakFlex>
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
        <OakSpan $font="body-3">{"New"}</OakSpan>
      </OakFlex>
    ),
    ariaLabel: "Teaching resources hub",
  },
};
