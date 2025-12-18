import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import styled from "styled-components";

import { generateTheme } from "./generateTheme";
import { ThemePreview } from "./ThemePreview";
import { expandSimpleTheme } from "./expandSimpleTheme";
import { festive2025, colorBlindSafe } from "./namedThemes";
import type {
  GeneratedTheme,
  BasePalette,
  GeneratedThemeColors,
} from "./themeTypes";

import { OakBox } from "@/components/atoms/OakBox";
import { OakFlex } from "@/components/atoms/OakFlex";
import { OakHeading } from "@/components/atoms/OakHeading";
import { OakP } from "@/components/atoms/OakP";

// ─────────────────────────────────────────────────────────────────────────────
// Styled Components
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Colour swatch with hex label underneath
 */
const SwatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const Swatch = styled.div<{ $color: string; $size?: number }>`
  width: ${(props) => props.$size ?? 32}px;
  height: ${(props) => props.$size ?? 32}px;
  border-radius: 4px;
  background: ${(props) => props.$color};
  border: 1px solid rgba(0, 0, 0, 0.15);
`;

const HexLabel = styled.span`
  font-size: 10px;
  font-family: monospace;
  color: #666;
`;

/**
 * Demo button with no hover styling, colour change on click only
 */
const DemoButton = styled.button<{ $mode: "light" | "dark" }>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  background: var(--custom-interactive-primary);
  color: var(--custom-text-inverse);
  transition: background 0.1s ease;

  &:active {
    background: ${(props) =>
      props.$mode === "light"
        ? "var(--custom-interactive-hover)"
        : "var(--custom-interactive-focus)"};
  }

  &:focus-visible {
    outline: 3px solid var(--custom-interactive-focus);
    outline-offset: 2px;
  }
`;

/**
 * Card with shadow for context display
 */
const ShadowCard = styled.div<{ $shadow: "subtle" | "strong" }>`
  padding: 8px 12px;
  border-radius: 4px;
  background: var(--custom-surface-secondary);
  box-shadow: ${(props) =>
    props.$shadow === "subtle"
      ? "var(--custom-shadow-subtle)"
      : "var(--custom-shadow-strong)"};
  font-size: 10px;
  color: var(--custom-text-primary);
`;

/**
 * Token Set card with border
 */
const TokenCardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 8px;
`;

const TokenCardHeader = styled.div`
  padding: 8px 12px;
  background: #f5f5f5;
  border-bottom: 1px solid #ccc;
  font-weight: 600;
  font-size: 12px;
`;

const TokenRow = styled.div`
  padding: 8px 12px;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const RowLabel = styled.div`
  font-size: 10px;
  font-weight: 600;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
`;

// ─────────────────────────────────────────────────────────────────────────────
// Helper Components
// ─────────────────────────────────────────────────────────────────────────────

function ColorSwatch({ color, label }: { color: string; label: string }) {
  return (
    <SwatchContainer>
      <Swatch $color={color} aria-label={label} />
      <HexLabel>{color}</HexLabel>
    </SwatchContainer>
  );
}

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
      <OakFlex $gap="spacing-8">
        <ColorSwatch color={palette.primary} label="Primary" />
        <ColorSwatch color={palette.secondary} label="Secondary" />
        <ColorSwatch color={palette.tertiary} label="Tertiary" />
      </OakFlex>
    </OakBox>
  );
}

/**
 * Full Token Set display organized by role
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
    <TokenCardContainer>
      <TokenCardHeader>{label}</TokenCardHeader>
      <ThemePreview theme={theme} mode={mode} contrast={contrast}>
        {/* Surfaces Row */}
        <TokenRow>
          <RowLabel>Surfaces</RowLabel>
          <OakFlex $gap="spacing-8" $flexWrap="wrap">
            <SwatchContainer>
              <OakBox
                $pa="spacing-8"
                style={{
                  background: "var(--custom-surface-primary)",
                  borderRadius: 4,
                }}
              >
                <OakP
                  $font="body-3"
                  style={{ color: "var(--custom-text-primary)", fontSize: 9 }}
                >
                  Primary
                </OakP>
              </OakBox>
            </SwatchContainer>
            <SwatchContainer>
              <OakBox
                $pa="spacing-8"
                style={{
                  background: "var(--custom-surface-secondary)",
                  borderRadius: 4,
                }}
              >
                <OakP
                  $font="body-3"
                  style={{ color: "var(--custom-text-primary)", fontSize: 9 }}
                >
                  Secondary
                </OakP>
              </OakBox>
            </SwatchContainer>
            <SwatchContainer>
              <OakBox
                $pa="spacing-8"
                style={{
                  background: "var(--custom-surface-accent)",
                  borderRadius: 4,
                }}
              >
                <OakP
                  $font="body-3"
                  style={{ color: "var(--custom-text-primary)", fontSize: 9 }}
                >
                  Accent
                </OakP>
              </OakBox>
            </SwatchContainer>
            <SwatchContainer>
              <OakBox
                $pa="spacing-8"
                style={{
                  background: "var(--custom-surface-inverse)",
                  borderRadius: 4,
                }}
              >
                <OakP
                  $font="body-3"
                  style={{ color: "var(--custom-text-inverse)", fontSize: 9 }}
                >
                  Inverse
                </OakP>
              </OakBox>
            </SwatchContainer>
          </OakFlex>
        </TokenRow>

        {/* Text Row */}
        <TokenRow>
          <RowLabel>Text</RowLabel>
          <OakFlex $gap="spacing-16" $flexWrap="wrap">
            <OakP
              $font="body-3"
              style={{ color: "var(--custom-text-primary)", fontSize: 11 }}
            >
              Primary Text
            </OakP>
            <OakP
              $font="body-3"
              style={{ color: "var(--custom-text-muted)", fontSize: 11 }}
            >
              Muted Text
            </OakP>
            <OakP
              $font="body-3"
              style={{ color: "var(--custom-text-accent)", fontSize: 11 }}
            >
              Accent Text
            </OakP>
          </OakFlex>
        </TokenRow>

        {/* Borders Row */}
        <TokenRow>
          <RowLabel>Borders</RowLabel>
          <OakFlex $gap="spacing-8">
            <OakBox
              $pa="spacing-8"
              style={{
                border: "1px solid var(--custom-border-subtle)",
                borderRadius: 4,
              }}
            >
              <OakP
                $font="body-3"
                style={{ color: "var(--custom-text-primary)", fontSize: 9 }}
              >
                Subtle Border
              </OakP>
            </OakBox>
            <OakBox
              $pa="spacing-8"
              style={{
                border: "2px solid var(--custom-border-strong)",
                borderRadius: 4,
              }}
            >
              <OakP
                $font="body-3"
                style={{ color: "var(--custom-text-primary)", fontSize: 9 }}
              >
                Strong Border
              </OakP>
            </OakBox>
            <OakBox
              $pa="spacing-8"
              style={{
                border: "2px solid var(--custom-border-accent)",
                borderRadius: 4,
              }}
            >
              <OakP
                $font="body-3"
                style={{ color: "var(--custom-text-primary)", fontSize: 9 }}
              >
                Accent Border
              </OakP>
            </OakBox>
          </OakFlex>
        </TokenRow>

        {/* Interactive Row */}
        <TokenRow>
          <RowLabel>Interactive</RowLabel>
          <OakFlex $gap="spacing-8" $alignItems="center">
            <DemoButton
              $mode={mode}
              type="button"
              onClick={() => setIsClicked(!isClicked)}
              aria-label="Click to see active state"
            >
              Click me
            </DemoButton>
            <OakBox
              $pa="spacing-8"
              style={{
                border: "3px solid var(--custom-interactive-focus)",
                borderRadius: 4,
                background: "transparent",
              }}
            >
              <OakP
                $font="body-3"
                style={{ color: "var(--custom-text-primary)", fontSize: 9 }}
              >
                Focus Ring
              </OakP>
            </OakBox>
          </OakFlex>
        </TokenRow>

        {/* Shadows Row */}
        <TokenRow>
          <RowLabel>Shadows</RowLabel>
          <OakFlex $gap="spacing-8">
            <ShadowCard $shadow="subtle">Subtle Shadow</ShadowCard>
            <ShadowCard $shadow="strong">Strong Shadow</ShadowCard>
          </OakFlex>
        </TokenRow>
      </ThemePreview>
    </TokenCardContainer>
  );
}

/**
 * Theme column for generated themes (with expansion)
 */
function GeneratedThemeColumn({
  title,
  primary,
  secondary,
  colorTheory,
}: {
  title: string;
  primary: string;
  secondary?: string;
  colorTheory: "Triadic" | "Split-Complementary";
}) {
  const result = generateTheme({ primary, secondary });
  const inputLabel = secondary
    ? `Inputs: ${primary}, ${secondary}`
    : `Input: ${primary}`;

  return (
    <OakFlex
      $flexDirection="column"
      $gap="spacing-4"
      style={{ minWidth: 280, flex: 1 }}
    >
      <OakHeading tag="h3" $font="heading-6">
        {title}
      </OakHeading>
      <OakP $font="body-3" $color="grey60" style={{ marginTop: -4 }}>
        {colorTheory} derivation
      </OakP>

      <PaletteDisplay palette={result.basePalette} inputLabel={inputLabel} />

      {/* All 6 Token Sets */}
      <TokenSetCard
        theme={result.theme}
        mode="light"
        contrast="normal"
        label="Light (Normal)"
      />
      <TokenSetCard
        theme={result.theme}
        mode="dark"
        contrast="normal"
        label="Dark (Normal)"
      />
      <TokenSetCard
        theme={result.theme}
        mode="light"
        contrast="high"
        label="Light (High Contrast)"
      />
      <TokenSetCard
        theme={result.theme}
        mode="dark"
        contrast="high"
        label="Dark (High Contrast)"
      />
      <TokenSetCard
        theme={result.theme}
        mode="light"
        contrast="low"
        label="Light (Low Contrast)"
      />
      <TokenSetCard
        theme={result.theme}
        mode="dark"
        contrast="low"
        label="Dark (Low Contrast)"
      />
    </OakFlex>
  );
}

/**
 * Named theme column (from Simple Theme)
 */
function NamedThemeColumn({
  title,
  simpleTheme,
}: {
  title: string;
  simpleTheme: {
    name: string;
    mode: "light" | "dark";
    tokens: GeneratedThemeColors;
  };
}) {
  const fullTheme = expandSimpleTheme(simpleTheme);

  return (
    <OakFlex
      $flexDirection="column"
      $gap="spacing-4"
      style={{ minWidth: 280, flex: 1 }}
    >
      <OakHeading tag="h3" $font="heading-6">
        {title}
      </OakHeading>

      <OakBox $mb="spacing-8">
        <OakP $font="body-3" $color="grey60" $mb="spacing-4">
          Input: Simple Theme ({simpleTheme.name})
        </OakP>
        <OakP $font="body-3" $color="grey60">
          Fully specified 16 tokens, {simpleTheme.mode} mode
        </OakP>
      </OakBox>

      {/* All 6 Token Sets */}
      <TokenSetCard
        theme={fullTheme}
        mode="light"
        contrast="normal"
        label="Light (Normal)"
      />
      <TokenSetCard
        theme={fullTheme}
        mode="dark"
        contrast="normal"
        label="Dark (Normal)"
      />
      <TokenSetCard
        theme={fullTheme}
        mode="light"
        contrast="high"
        label="Light (High Contrast)"
      />
      <TokenSetCard
        theme={fullTheme}
        mode="dark"
        contrast="high"
        label="Dark (High Contrast)"
      />
      <TokenSetCard
        theme={fullTheme}
        mode="light"
        contrast="low"
        label="Light (Low Contrast)"
      />
      <TokenSetCard
        theme={fullTheme}
        mode="dark"
        contrast="low"
        label="Dark (Low Contrast)"
      />
    </OakFlex>
  );
}

/**
 * Colour-Blind Safe column (single theme, no expansion)
 */
function ColorBlindSafeColumn() {
  // Wrap the single token set as a "theme" for ThemePreview
  const singleTheme: GeneratedTheme = {
    light: colorBlindSafe.tokens,
    dark: colorBlindSafe.tokens, // Same tokens
    highContrastLight: colorBlindSafe.tokens,
    highContrastDark: colorBlindSafe.tokens,
    lowContrastLight: colorBlindSafe.tokens,
    lowContrastDark: colorBlindSafe.tokens,
  };

  return (
    <OakFlex
      $flexDirection="column"
      $gap="spacing-4"
      style={{ minWidth: 280, flex: 1 }}
    >
      <OakHeading tag="h3" $font="heading-6">
        Colour-Blind Safe
      </OakHeading>

      <OakBox $mb="spacing-8">
        <OakP $font="body-3" $color="grey60" $mb="spacing-4">
          Pre-computed Named Theme
        </OakP>
        <OakP $font="body-3" $color="grey60">
          WCAG AAA · Blue-Orange axis · No expansion
        </OakP>
      </OakBox>

      {/* Single theme display */}
      <TokenSetCard
        theme={singleTheme}
        mode="light"
        contrast="normal"
        label="Colour-Blind Safe (Single)"
      />
    </OakFlex>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Story Meta
// ─────────────────────────────────────────────────────────────────────────────

interface ThemeShowcaseArgs {
  oneColourPrimary: string;
  twoColourPrimary: string;
  twoColourSecondary: string;
}

const meta: Meta<ThemeShowcaseArgs> = {
  title: "Custom Themes/Theme Generator",
  argTypes: {
    oneColourPrimary: {
      control: "color",
      description:
        "Primary colour for single-colour theme (Triadic derivation: 120° hue rotations)",
      table: {
        category: "One Colour (Triadic)",
        defaultValue: { summary: "#287c34" },
      },
    },
    twoColourPrimary: {
      control: "color",
      description:
        "Primary colour for two-colour theme (Split-Complementary derivation)",
      table: {
        category: "Two Colours (Split-Comp)",
        defaultValue: { summary: "#1e40af" },
      },
    },
    twoColourSecondary: {
      control: "color",
      description: "Secondary colour hint for Split-Complementary palette",
      table: {
        category: "Two Colours (Split-Comp)",
        defaultValue: { summary: "#ea580c" },
      },
    },
  },
  args: {
    oneColourPrimary: "#287c34",
    twoColourPrimary: "#1e40af",
    twoColourSecondary: "#ea580c",
  },
  parameters: {
    docs: {
      description: {
        component: `
Generate accessible themes from brand colours using colour theory.

## Contrast Targets

| Mode | Target |
|------|--------|
| Normal | WCAG AA (4.5:1) |
| High | Exceeds AAA (≥9:1) |
| Low | Close to AA (4.5–5:1), muted tones |
| Colour-Blind Safe | AAA, blue-orange axis |
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
 * 3. Festive 2025 — from fully specified Simple Theme
 * 4. Colour-blind safe — pre-computed, no expansion
 */
export const ThemeShowcase: Story = {
  render: (args) => (
    <OakFlex
      $gap="spacing-24"
      $flexWrap="wrap"
      style={{ alignItems: "flex-start" }}
    >
      <GeneratedThemeColumn
        title="One Colour"
        primary={args.oneColourPrimary}
        colorTheory="Triadic"
      />
      <GeneratedThemeColumn
        title="Two Colours"
        primary={args.twoColourPrimary}
        secondary={args.twoColourSecondary}
        colorTheory="Split-Complementary"
      />
      <NamedThemeColumn title="Festive 2025" simpleTheme={festive2025} />
      <ColorBlindSafeColumn />
    </OakFlex>
  ),
};

/**
 * **Interactive**
 *
 * Explore a single theme with full controls.
 */
export const Interactive: Story = {
  argTypes: {
    twoColourPrimary: { table: { disable: true } },
    twoColourSecondary: { table: { disable: true } },
  },
  render: (args) => (
    <GeneratedThemeColumn
      title="Interactive Preview"
      primary={args.oneColourPrimary}
      colorTheory="Triadic"
    />
  ),
};
