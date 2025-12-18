import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import styled from "styled-components";

import { generateTheme } from "./generateTheme";
import { ThemePreview } from "./ThemePreview";
import type { GeneratedTheme, BasePalette } from "./themeTypes";

import { OakBox } from "@/components/atoms/OakBox";
import { OakFlex } from "@/components/atoms/OakFlex";
import { OakHeading } from "@/components/atoms/OakHeading";
import { OakP } from "@/components/atoms/OakP";

/**
 * Interactive button demo with real hover, active, and focus states.
 */
const DemoButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  background: var(--custom-interactive-primary);
  color: var(--custom-text-inverse);

  &:hover {
    background: var(--custom-interactive-hover);
  }

  &:active {
    background: var(--custom-interactive-hover);
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 3px solid var(--custom-interactive-focus);
    outline-offset: 2px;
  }
`;

/**
 * Colour swatch for displaying palette colours.
 */
const Swatch = styled.div<{ $color: string }>`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background: ${(props) => props.$color};
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

/**
 * Token Set card showing all 16 tokens in compact form.
 */
function TokenSetCard({
  theme,
  mode,
  contrast,
  label,
}: {
  theme: GeneratedTheme;
  mode: "light" | "dark";
  contrast: "normal" | "high" | "low";
  label: string;
}) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <ThemePreview theme={theme} mode={mode} contrast={contrast}>
      <OakBox $pa="spacing-8" aria-label={`${label} token demonstration`}>
        <OakP
          $font="body-3-bold"
          style={{ color: "var(--custom-text-primary)", marginBottom: 4 }}
        >
          {label}
        </OakP>

        {/* Surfaces */}
        <OakFlex $gap="spacing-4" $mb="spacing-4" $flexWrap="wrap">
          <OakBox
            $pa="spacing-4"
            $borderRadius="border-radius-s"
            style={{ background: "var(--custom-surface-secondary)" }}
            aria-label="Surface secondary"
          >
            <OakP
              $font="body-3"
              style={{ color: "var(--custom-text-primary)", fontSize: 10 }}
            >
              Sec
            </OakP>
          </OakBox>
          <OakBox
            $pa="spacing-4"
            $borderRadius="border-radius-s"
            style={{ background: "var(--custom-surface-accent)" }}
            aria-label="Surface accent"
          >
            <OakP
              $font="body-3"
              style={{ color: "var(--custom-text-primary)", fontSize: 10 }}
            >
              Acc
            </OakP>
          </OakBox>
        </OakFlex>

        {/* Text samples */}
        <OakBox $mb="spacing-4">
          <OakP
            $font="body-3"
            style={{ color: "var(--custom-text-primary)", fontSize: 10 }}
          >
            Primary text
          </OakP>
          <OakP
            $font="body-3"
            style={{ color: "var(--custom-text-muted)", fontSize: 10 }}
          >
            Muted text
          </OakP>
          <OakP
            $font="body-3"
            style={{ color: "var(--custom-text-accent)", fontSize: 10 }}
          >
            Accent text
          </OakP>
        </OakBox>

        {/* Borders */}
        <OakFlex $gap="spacing-4" $mb="spacing-4">
          <OakBox
            $pa="spacing-4"
            style={{
              border: "1px solid var(--custom-border-subtle)",
              borderRadius: 2,
            }}
            aria-label="Subtle border"
          >
            <OakP
              $font="body-3"
              style={{ color: "var(--custom-text-primary)", fontSize: 9 }}
            >
              Sub
            </OakP>
          </OakBox>
          <OakBox
            $pa="spacing-4"
            style={{
              border: "2px solid var(--custom-border-accent)",
              borderRadius: 2,
            }}
            aria-label="Accent border"
          >
            <OakP
              $font="body-3"
              style={{ color: "var(--custom-text-primary)", fontSize: 9 }}
            >
              Acc
            </OakP>
          </OakBox>
        </OakFlex>

        {/* Interactive */}
        <OakFlex $gap="spacing-4" $mb="spacing-4" $flexWrap="wrap">
          <DemoButton type="button" aria-label="Hover to see hover state">
            Hover
          </DemoButton>
          <DemoButton
            type="button"
            onClick={() => setIsClicked(!isClicked)}
            style={isClicked ? { transform: "scale(0.98)" } : undefined}
            aria-label="Click me to see active state"
          >
            Click me
          </DemoButton>
        </OakFlex>

        {/* Shadow demo */}
        <OakFlex $gap="spacing-4">
          <OakBox
            $pa="spacing-4"
            $borderRadius="border-radius-s"
            style={{
              background: "var(--custom-surface-primary)",
              boxShadow: "var(--custom-shadow-subtle)",
            }}
            aria-label="Subtle shadow"
          >
            <OakP
              $font="body-3"
              style={{ color: "var(--custom-text-primary)", fontSize: 9 }}
            >
              Shd
            </OakP>
          </OakBox>
        </OakFlex>
      </OakBox>
    </ThemePreview>
  );
}

/**
 * Palette display showing the 3-colour base.
 */
function PaletteDisplay({
  palette,
  inputLabel,
}: {
  palette: BasePalette;
  inputLabel: string;
}) {
  return (
    <OakBox $mb="spacing-8">
      <OakP $font="body-3" $color="grey60" $mb="spacing-4">
        {inputLabel}
      </OakP>
      <OakFlex $gap="spacing-4" $alignItems="center">
        <Swatch
          $color={palette.primary}
          aria-label={`Primary: ${palette.primary}`}
        />
        <Swatch
          $color={palette.secondary}
          aria-label={`Secondary: ${palette.secondary}`}
        />
        <Swatch
          $color={palette.tertiary}
          aria-label={`Tertiary: ${palette.tertiary}`}
        />
      </OakFlex>
    </OakBox>
  );
}

/**
 * Theme column showing all 6 Token Sets for one theme configuration.
 */
function ThemeColumn({
  title,
  primary,
  secondary,
  colorBlindSafe,
}: {
  title: string;
  primary: string;
  secondary?: string;
  colorBlindSafe?: boolean;
}) {
  const result = generateTheme({ primary, secondary }, { colorBlindSafe });
  const inputLabel = secondary
    ? `Input: ${primary}, ${secondary}`
    : colorBlindSafe
      ? `Input: ${primary} (CBS)`
      : `Input: ${primary}`;

  return (
    <OakFlex
      $flexDirection="column"
      $gap="spacing-4"
      style={{ minWidth: 200, flex: 1 }}
    >
      <OakHeading tag="h3" $font="heading-6">
        {title}
      </OakHeading>

      <PaletteDisplay palette={result.basePalette} inputLabel={inputLabel} />

      {/* All 6 Token Sets */}
      <TokenSetCard
        theme={result.theme}
        mode="light"
        contrast="normal"
        label="Light"
      />
      <TokenSetCard
        theme={result.theme}
        mode="dark"
        contrast="normal"
        label="Dark"
      />
      <TokenSetCard
        theme={result.theme}
        mode="light"
        contrast="high"
        label="HC Light"
      />
      <TokenSetCard
        theme={result.theme}
        mode="dark"
        contrast="high"
        label="HC Dark"
      />
      <TokenSetCard
        theme={result.theme}
        mode="light"
        contrast="low"
        label="LC Light"
      />
      <TokenSetCard
        theme={result.theme}
        mode="dark"
        contrast="low"
        label="LC Dark"
      />
    </OakFlex>
  );
}

/**
 * Story args interface for interactive controls.
 */
interface ThemeShowcaseArgs {
  oneColourPrimary: string;
  twoColourPrimary: string;
  twoColourSecondary: string;
  colorBlindSafePrimary: string;
}

const meta: Meta<ThemeShowcaseArgs> = {
  title: "Custom Themes/Theme Generator",
  argTypes: {
    oneColourPrimary: {
      control: "color",
      description: "Primary colour for single-colour theme",
      table: {
        category: "One Colour",
        defaultValue: { summary: "#287c34" },
      },
    },
    twoColourPrimary: {
      control: "color",
      description: "Primary colour for two-colour theme",
      table: {
        category: "Two Colours",
        defaultValue: { summary: "#1e40af" },
      },
    },
    twoColourSecondary: {
      control: "color",
      description: "Secondary colour for two-colour theme",
      table: {
        category: "Two Colours",
        defaultValue: { summary: "#ea580c" },
      },
    },
    colorBlindSafePrimary: {
      control: "color",
      description: "Primary colour for colour-blind safe theme",
      table: {
        category: "Colour-Blind Safe",
        defaultValue: { summary: "#287c34" },
      },
    },
  },
  args: {
    oneColourPrimary: "#287c34",
    twoColourPrimary: "#1e40af",
    twoColourSecondary: "#ea580c",
    colorBlindSafePrimary: "#287c34",
  },
  parameters: {
    docs: {
      description: {
        component: `
Generate accessible themes from 1-2 brand colours using colour theory.

## Features

- **Triadic derivation** (one colour): 120° hue rotations for 3-colour palette
- **Split-complementary** (two colours): honours secondary hue, derives tertiary
- **6 Token Sets per Full Theme**: light/dark × normal/high/low contrast
- **Colour-blind safe mode**: avoids red-green confusion

## Contrast Requirements

| Mode | Minimum |
|------|---------|
| Normal | WCAG 2.2 AA (4.5:1) |
| High | WCAG 2.2 AAA (7:1) |
| Low | WCAG 2.2 AA (4.5:1) |
| CBS | WCAG 2.2 AAA (7:1) |
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<ThemeShowcaseArgs>;

/**
 * **Theme Showcase**
 *
 * Compares four theme generation approaches:
 * 1. One colour — triadic derivation
 * 2. Two colours — split-complementary
 * 3. Festive 2025 — named theme example
 * 4. Colour-blind safe — adjusted for vision deficiency
 *
 * Each column shows all 6 Token Sets.
 */
export const ThemeShowcase: Story = {
  render: (args) => (
    <OakFlex
      $gap="spacing-16"
      $flexWrap="wrap"
      style={{ alignItems: "flex-start" }}
    >
      <ThemeColumn title="One Colour" primary={args.oneColourPrimary} />
      <ThemeColumn
        title="Two Colours"
        primary={args.twoColourPrimary}
        secondary={args.twoColourSecondary}
      />
      <ThemeColumn title="Festive 2025" primary="#c41e3a" secondary="#228b22" />
      <ThemeColumn
        title="Colour-Blind Safe"
        primary={args.colorBlindSafePrimary}
        colorBlindSafe
      />
    </OakFlex>
  ),
};

/**
 * **Single Theme Interactive**
 *
 * Explore a single theme with full controls.
 */
export const Interactive: Story = {
  argTypes: {
    twoColourPrimary: { table: { disable: true } },
    twoColourSecondary: { table: { disable: true } },
    colorBlindSafePrimary: { table: { disable: true } },
  },
  render: (args) => (
    <ThemeColumn title="Interactive Preview" primary={args.oneColourPrimary} />
  ),
};
