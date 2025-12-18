import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import {
  CustomThemeProvider,
  type CustomThemeConfig,
} from "./CustomThemeProvider";

import { OakBox } from "@/components/atoms/OakBox";
import { OakFlex } from "@/components/atoms/OakFlex";
import { OakHeading } from "@/components/atoms/OakHeading";
import { OakP } from "@/components/atoms/OakP";

const minimalConfig: CustomThemeConfig = {
  light: {
    surface: { primary: "#ffffff", secondary: "#f5f5f5" },
    text: { primary: "#1a1a1a", muted: "#666666" },
    border: { subtle: "#e0e0e0", strong: "#1a1a1a" },
    interactive: { primary: "#287c34", hover: "#1f5f28", focus: "#4a9f54" },
    shadow: { subtle: "rgba(0,0,0,0.08)", strong: "rgba(0,0,0,0.2)" },
  },
  dark: {
    surface: { primary: "#1a1a1a", secondary: "#2a2a2a" },
    text: { primary: "#f0f0f0", muted: "#999999" },
    border: { subtle: "#3a3a3a", strong: "#f0f0f0" },
    interactive: { primary: "#4a9f54", hover: "#5cb565", focus: "#287c34" },
    shadow: { subtle: "rgba(0,0,0,0.25)", strong: "rgba(0,0,0,0.5)" },
  },
};

const meta: Meta<typeof CustomThemeProvider> = {
  component: CustomThemeProvider,
  tags: ["autodocs"],
  title: "Custom Themes/CustomThemeProvider",
  argTypes: {},
  parameters: {
    controls: {
      include: [],
      sort: "none",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CustomThemeProvider>;

/**
 * Demonstrates basic usage of CustomThemeProvider with custom themed components.
 */
export const Default: Story = {
  render: () => (
    <CustomThemeProvider config={minimalConfig}>
      <OakFlex
        $flexDirection="column"
        $gap="spacing-16"
        $pa="spacing-24"
        $background="custom-surface-primary"
      >
        <OakHeading tag="h2" $color="custom-text-primary" $font="heading-5">
          Custom Themed Content
        </OakHeading>
        <OakP $color="custom-text-muted">
          This content uses custom semantic tokens that automatically adapt to
          system light/dark preferences.
        </OakP>
        <OakBox
          $background="custom-surface-secondary"
          $pa="spacing-16"
          $borderRadius="border-radius-m"
          $ba="border-solid-s"
          $borderColor="custom-border-subtle"
        >
          <OakP $color="custom-text-primary">
            Secondary surface with subtle border
          </OakP>
        </OakBox>
      </OakFlex>
    </CustomThemeProvider>
  ),
};

/**
 * Shows all custom token categories in use.
 */
export const AllTokenCategories: Story = {
  render: () => (
    <CustomThemeProvider config={minimalConfig}>
      <OakFlex
        $flexDirection="column"
        $gap="spacing-16"
        $pa="spacing-24"
        $background="custom-surface-primary"
      >
        <OakHeading tag="h2" $color="custom-text-primary" $font="heading-5">
          All Token Categories
        </OakHeading>

        <OakBox
          $background="custom-surface-secondary"
          $pa="spacing-16"
          $borderRadius="border-radius-m"
        >
          <OakP $color="custom-text-primary" $font="body-2-bold">
            Surface Tokens
          </OakP>
          <OakP $color="custom-text-muted">
            custom-surface-primary, custom-surface-secondary
          </OakP>
        </OakBox>

        <OakBox
          $background="custom-surface-secondary"
          $pa="spacing-16"
          $borderRadius="border-radius-m"
          $ba="border-solid-m"
          $borderColor="custom-border-subtle"
        >
          <OakP $color="custom-text-primary" $font="body-2-bold">
            Border Tokens
          </OakP>
          <OakP $color="custom-text-muted">
            custom-border-subtle, custom-border-strong
          </OakP>
        </OakBox>

        <OakBox
          $background="custom-interactive-primary"
          $pa="spacing-16"
          $borderRadius="border-radius-m"
        >
          <OakP $color="white" $font="body-2-bold">
            Interactive Token
          </OakP>
          <OakP $color="white">custom-interactive-primary</OakP>
        </OakBox>
      </OakFlex>
    </CustomThemeProvider>
  ),
};

/**
 * Demonstrates high-contrast mode support.
 */
export const HighContrastDemo: Story = {
  render: () => {
    const highContrastConfig: CustomThemeConfig = {
      ...minimalConfig,
      highContrastLight: {
        surface: { primary: "#ffffff", secondary: "#ffffff" },
        text: { primary: "#000000", muted: "#000000" },
        border: { subtle: "#000000", strong: "#000000" },
        interactive: { primary: "#000000" },
      },
      highContrastDark: {
        surface: { primary: "#000000", secondary: "#000000" },
        text: { primary: "#ffffff", muted: "#ffffff" },
        border: { subtle: "#ffffff", strong: "#ffffff" },
        interactive: { primary: "#ffffff" },
      },
    };

    return (
      <CustomThemeProvider config={highContrastConfig}>
        <OakFlex
          $flexDirection="column"
          $gap="spacing-16"
          $pa="spacing-24"
          $background="custom-surface-primary"
        >
          <OakHeading tag="h2" $color="custom-text-primary" $font="heading-5">
            High Contrast Mode Support
          </OakHeading>
          <OakP $color="custom-text-muted">
            This demo includes high-contrast overrides. Toggle your system
            high-contrast preference to see the difference.
          </OakP>
          <OakBox
            $background="custom-surface-secondary"
            $pa="spacing-16"
            $borderRadius="border-radius-m"
            $ba="border-solid-m"
            $borderColor="custom-border-strong"
          >
            <OakP $color="custom-text-primary">
              In high-contrast mode, all colors are maximized for 7:1 AAA
              contrast.
            </OakP>
          </OakBox>
        </OakFlex>
      </CustomThemeProvider>
    );
  },
};

/**
 * Shows a branded theme example.
 */
export const BrandedTheme: Story = {
  render: () => {
    const brandConfig: CustomThemeConfig = {
      light: {
        surface: {
          primary: "#fef7e8",
          secondary: "#fff4d9",
          accent: "#fff0c7",
        },
        text: { primary: "#3d2800", muted: "#7a5a1f" },
        border: { subtle: "#e6d5b8", strong: "#3d2800" },
        interactive: { primary: "#c4600a", hover: "#a3500a", focus: "#e67012" },
      },
      dark: {
        surface: {
          primary: "#1a1308",
          secondary: "#2a200f",
          accent: "#3d2800",
        },
        text: { primary: "#fff4d9", muted: "#c4a869" },
        border: { subtle: "#4a3a1f", strong: "#fff4d9" },
        interactive: { primary: "#e67012", hover: "#ff8a2a", focus: "#c4600a" },
      },
    };

    return (
      <CustomThemeProvider config={brandConfig}>
        <OakFlex
          $flexDirection="column"
          $gap="spacing-16"
          $pa="spacing-24"
          $background="custom-surface-primary"
        >
          <OakHeading tag="h2" $color="custom-text-primary" $font="heading-5">
            Branded Theme (Warm Amber)
          </OakHeading>
          <OakP $color="custom-text-muted">
            Custom branded colors for white-labeling applications.
          </OakP>
          <OakBox
            $background="custom-interactive-primary"
            $pa="spacing-16"
            $borderRadius="border-radius-m"
          >
            <OakP $color="white" $font="body-2-bold">
              Brand Primary Action
            </OakP>
          </OakBox>
        </OakFlex>
      </CustomThemeProvider>
    );
  },
};
