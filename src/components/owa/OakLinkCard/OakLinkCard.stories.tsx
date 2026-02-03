import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { OakTertiaryButton } from "@/components/buttons/OakTertiaryButton";
import { OakLinkCard } from "@/components/owa/OakLinkCard";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakHeading } from "@/components/typography/OakHeading";
import { oakIconNames } from "@/components/images-and-icons/OakIcon";
import { OakP } from "@/components/typography/OakP";
import {
  oakColorFilterTokens,
  oakColorTokens,
  oakUiRoleTokens,
} from "@/styles/theme/color";

const controlIconNames = [...oakIconNames].sort((a, b) => a.localeCompare(b));
const controlColorTokens = Object.keys(oakColorFilterTokens).sort((a, b) =>
  a.localeCompare(b),
);
const controlIconFillNames = [
  ...Object.keys(oakColorTokens),
  ...oakUiRoleTokens,
].sort((a, b) => a.localeCompare(b));

const meta: Meta<typeof OakLinkCard> = {
  component: OakLinkCard,
  tags: ["autodocs"],
  title: "OWA/OakLinkCard",
  argTypes: {
    iconName: {
      options: controlIconNames,
    },
    iconColor: {
      options: controlColorTokens,
    },
    iconFill: {
      options: controlIconFillNames,
    },
    narrow: {
      control: {
        type: "boolean",
      },
    },
    hasAnimation: {
      control: {
        type: "boolean",
      },
    },
  },
  parameters: {
    controls: {
      include: [
        "href",
        "iconName",
        "showNew",
        "iconColor",
        "iconFill",
        "iconAlt",
        "narrow",
      ],
    },
  },
  args: {
    mainSection: (
      <OakFlex $flexDirection="column" $gap="spacing-12">
        <OakHeading tag="h1" $font="heading-5">
          Try our new financial education lessons
        </OakHeading>
        <OakP>
          A series of lessons offering practical knowledge and skills, developed
          independently of the national curriculum.
        </OakP>
        <OakTertiaryButton iconName="chevron-right" isTrailingIcon>
          Go to new finance lessons
        </OakTertiaryButton>
      </OakFlex>
    ),
    iconName: "subject-financial-education",
    iconAlt: "Illustration of persons head with finance ideas",
    iconColor: "icon-primary",
    iconFill: "bg-decorative1-main",
    href: "https://www.example.com",
    showNew: true,
    narrow: false,
    hasAnimation: false,
  },
};

export default meta;

type Story = StoryObj<typeof OakLinkCard>;

export const Default: Story = {};

export const WithDifferentIcon: Story = {
  args: {
    iconName: "bell",
    showNew: false,
    narrow: false,
  },
};

export const WithLongText: Story = {
  args: {
    mainSection: (
      <OakFlex $flexDirection="column" $gap="spacing-12">
        <OakHeading tag="h1" $font="heading-5">
          Learn how to manage your finances, Learn how to manage your finances,
          Learn how to manage your finances
        </OakHeading>
        <OakP>
          Join our comprehensive financial literacy program. Learn how to
          budget, save, and invest your money. Get started today! Join our
          comprehensive financial literacy program. Learn how to budget, save,
          and invest your money. Get started today! Join our comprehensive
          financial literacy program. Learn how to budget, save, and invest your
          money. Get started today!
        </OakP>
        <OakTertiaryButton iconName="chevron-right" isTrailingIcon>
          Start learning
        </OakTertiaryButton>
      </OakFlex>
    ),
    iconName: "books",
    href: "https://www.example.com",
    showNew: false,
  },
};

export const WithAnimation: Story = {
  args: {
    hasAnimation: true,
    mainSection: (
      <OakFlex $flexDirection="column" $gap="spacing-12">
        <OakHeading tag="h1" $font="heading-5">
          Explore our cool animations that happen on mount
        </OakHeading>
        <OakP>
          Dive into this smooth transition from bg-decorative1-main to
          bg-primary. It eases in an out for a delightful user experience.
          Discover more subtle ways to call attention to components.
        </OakP>
        <OakTertiaryButton iconName="chevron-right" isTrailingIcon>
          Find out more
        </OakTertiaryButton>
      </OakFlex>
    ),
    iconName: "question-mark",
    iconAlt: "Illustration of interactive lessons",
    iconColor: "icon-primary",
    iconFill: "bg-decorative1-main",
    href: "https://www.example.com",
    narrow: false,
  },
};
