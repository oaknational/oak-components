import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { OakTertiaryButton } from "../OakTertiaryButton";
import { OakLinkCard } from "../OakLinkCard";

import { OakFlex, OakHeading, oakIconNames, OakP } from "@/components/atoms";
import {
  oakColorFilterTokens,
  oakColorTokens,
  oakUiRoleTokens,
} from "@/styles/theme/color";

const controlIconNames = [...oakIconNames].sort((a, b) => a.localeCompare(b));
const controlColorTokens = [...Object.keys(oakColorFilterTokens)].sort((a, b) =>
  a.localeCompare(b),
);
const controlIconFillNames = [
  ...Object.keys(oakColorTokens),
  ...oakUiRoleTokens,
].sort((a, b) => a.localeCompare(b));

const meta: Meta<typeof OakLinkCard> = {
  component: OakLinkCard,
  tags: ["autodocs"],
  title: "components/molecules/OakLinkCard",
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
      ],
    },
  },
  args: {
    mainSection: (
      <OakFlex $flexDirection="column" $gap="space-between-xs">
        <OakHeading tag="h1" $font="heading-5">
          Try our new financial education lessons
        </OakHeading>
        <OakP>
          A series of lessons offering practical knowledge and skills, developed
          independently of the national curriculum.
        </OakP>
        <OakTertiaryButton
          element="a"
          href="https://www.example.com"
          iconName="chevron-right"
          isTrailingIcon
        >
          Go to new finance lessons
        </OakTertiaryButton>
      </OakFlex>
    ),
    iconName: "subject-financial-education",
    iconAlt: "Illustration of persons head with finance ideas",
    iconColor: "black",
    iconFill: "bg-decorative1-main",
    href: "https://www.example.com",
    showNew: true,
  },
};

export default meta;

type Story = StoryObj<typeof OakLinkCard>;

export const Default: Story = {};

export const WithDifferentIcon: Story = {
  args: {
    iconName: "bell",
    showNew: false,
  },
};

export const WithLongText: Story = {
  args: {
    mainSection: (
      <OakFlex $flexDirection="column" $gap="space-between-xs">
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
        <OakTertiaryButton
          element="a"
          href="https://www.example.com"
          iconName="chevron-right"
          isTrailingIcon
        >
          Start learning
        </OakTertiaryButton>
      </OakFlex>
    ),
    iconName: "books",
    href: "https://www.example.com",
    showNew: false,
  },
};
