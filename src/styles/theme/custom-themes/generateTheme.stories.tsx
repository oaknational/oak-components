import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
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
  gap: 2px;
`;

const Swatch = styled.div<{ $color: string; $size?: number }>`
  width: ${(props) => props.$size ?? 24}px;
  height: ${(props) => props.$size ?? 24}px;
  border-radius: 4px;
  background: ${(props) => props.$color};
  border: 1px solid rgba(0, 0, 0, 0.15);
`;

const HexLabel = styled.span`
  font-size: 8px;
  font-family: monospace;
  color: #666;
`;

/**
 * Hover-only demo button for normal/low contrast
 * Shows hover state when hovering (lightness + transform)
 */
const NormalHoverButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  background: var(--custom-interactive-primary);
  color: var(--custom-text-inverse);
  transition: all 0.15s ease;

  &:hover {
    background: var(--custom-interactive-hover);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 3px solid var(--custom-interactive-focus);
    outline-offset: 2px;
  }
`;

/**
 * Active-only demo button for normal/low contrast
 * Shows active state when pressed (more lightness + scale)
 */
const NormalActiveButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  background: var(--custom-interactive-primary);
  color: var(--custom-text-inverse);
  transition: all 0.15s ease;

  &:active {
    background: var(--custom-interactive-hover);
    transform: translateY(1px) scale(0.98);
  }

  &:focus-visible {
    outline: 3px solid var(--custom-interactive-focus);
    outline-offset: 2px;
  }
`;

/**
 * Hover-only demo button for high contrast
 * Shows colour change to focus colour on hover
 */
const HighContrastHoverButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  background: var(--custom-interactive-primary);
  color: var(--custom-text-inverse);
  transition: all 0.15s ease;

  &:hover {
    background: var(--custom-interactive-focus);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 3px solid var(--custom-interactive-focus);
    outline-offset: 2px;
  }
`;

/**
 * Active-only demo button for high contrast
 * Shows colour change to hover colour on press
 */
const HighContrastActiveButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  background: var(--custom-interactive-primary);
  color: var(--custom-text-inverse);
  transition: all 0.15s ease;

  &:active {
    background: var(--custom-interactive-hover);
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 3px solid var(--custom-interactive-focus);
    outline-offset: 2px;
  }
`;

/**
 * Surface swatch with border for visibility against themed background
 */
const SurfaceSwatch = styled.div<{
  $surface: "primary" | "secondary" | "accent" | "inverse";
}>`
  padding: 8px;
  border-radius: 4px;
  background: ${(props) => `var(--custom-surface-${props.$surface})`};
  border: 1px solid var(--custom-border-subtle);
  font-size: 9px;
  color: ${(props) =>
    props.$surface === "inverse"
      ? "var(--custom-text-inverse)"
      : "var(--custom-text-primary)"};
`;

/**
 * Shadow demo card on surface primary background
 */
const ShadowDemoCard = styled.div<{ $shadow: "subtle" | "strong" }>`
  padding: 8px 12px;
  border-radius: 4px;
  background: var(--custom-surface-primary);
  border: 1px solid var(--custom-border-subtle);
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

const SectionLabel = styled.div`
  font-size: 11px;
  font-weight: 600;
  color: #666;
  margin-bottom: 4px;
`;

/**
 * Text sample on a surface background
 */
const TextOnSurface = styled.div<{ $bg: string; $fg: string }>`
  padding: 4px 8px;
  border-radius: 3px;
  background: var(${(props) => props.$bg});
  color: var(${(props) => props.$fg});
  font-size: 10px;
  display: inline-block;
`;

/**
 * Token grid for showing all 16 tokens in header
 */
const TokenGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-top: 8px;
`;

const TokenGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const TokenGroupLabel = styled.div`
  font-size: 9px;
  font-weight: 600;
  color: #999;
  text-transform: uppercase;
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

/**
 * Mini swatch without label (for token grids)
 */
function MiniSwatch({ color, title }: { color: string; title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      <div
        style={{
          width: 16,
          height: 16,
          borderRadius: 2,
          background: color,
          border: "1px solid rgba(0,0,0,0.1)",
        }}
        title={title}
      />
      <span style={{ fontSize: 8, color: "#666", fontFamily: "monospace" }}>
        {color.slice(0, 7)}
      </span>
    </div>
  );
}

/**
 * Display all 16 tokens from a simple theme in a grid
 */
function TokensGrid({ tokens }: { tokens: GeneratedThemeColors }) {
  return (
    <TokenGrid>
      <TokenGroup>
        <TokenGroupLabel>Surface</TokenGroupLabel>
        <MiniSwatch color={tokens.surface.primary} title="surface.primary" />
        <MiniSwatch
          color={tokens.surface.secondary}
          title="surface.secondary"
        />
        <MiniSwatch color={tokens.surface.accent} title="surface.accent" />
        <MiniSwatch color={tokens.surface.inverse} title="surface.inverse" />
      </TokenGroup>
      <TokenGroup>
        <TokenGroupLabel>Text</TokenGroupLabel>
        <MiniSwatch color={tokens.text.primary} title="text.primary" />
        <MiniSwatch color={tokens.text.muted} title="text.muted" />
        <MiniSwatch color={tokens.text.accent} title="text.accent" />
        <MiniSwatch color={tokens.text.inverse} title="text.inverse" />
      </TokenGroup>
      <TokenGroup>
        <TokenGroupLabel>Border</TokenGroupLabel>
        <MiniSwatch color={tokens.border.subtle} title="border.subtle" />
        <MiniSwatch color={tokens.border.strong} title="border.strong" />
        <MiniSwatch color={tokens.border.accent} title="border.accent" />
      </TokenGroup>
      <TokenGroup>
        <TokenGroupLabel>Interactive</TokenGroupLabel>
        <MiniSwatch
          color={tokens.interactive.primary}
          title="interactive.primary"
        />
        <MiniSwatch
          color={tokens.interactive.hover}
          title="interactive.hover"
        />
        <MiniSwatch
          color={tokens.interactive.focus}
          title="interactive.focus"
        />
      </TokenGroup>
    </TokenGrid>
  );
}

/**
 * Input and generated palette display
 */
function PaletteDisplay({
  inputColors,
  palette,
}: {
  inputColors: string[];
  palette: BasePalette;
}) {
  return (
    <OakBox>
      <SectionLabel>Input Colours</SectionLabel>
      <OakFlex $gap="spacing-8" $mb="spacing-8">
        {inputColors.map((color, i) => (
          <ColorSwatch
            key={i}
            color={color}
            label={i === 0 ? "Primary input" : "Secondary input"}
          />
        ))}
      </OakFlex>

      <SectionLabel>Generated Base Palette</SectionLabel>
      <OakFlex $gap="spacing-8">
        <ColorSwatch color={palette.primary} label="Primary" />
        <ColorSwatch color={palette.secondary} label="Secondary" />
        <ColorSwatch color={palette.tertiary} label="Tertiary" />
      </OakFlex>
    </OakBox>
  );
}

/**
 * Full Token Set display with all 16 tokens and real contrast demos
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
  const isHighContrast = contrast === "high";
  const HoverButton = isHighContrast
    ? HighContrastHoverButton
    : NormalHoverButton;
  const ActiveButton = isHighContrast
    ? HighContrastActiveButton
    : NormalActiveButton;

  return (
    <TokenCardContainer>
      <TokenCardHeader>{label}</TokenCardHeader>
      <ThemePreview theme={theme} mode={mode} contrast={contrast}>
        {/* Surfaces Row - 4 tokens with borders for visibility */}
        <TokenRow>
          <RowLabel>Surfaces (4)</RowLabel>
          <OakFlex $gap="spacing-8" $flexWrap="wrap">
            <SurfaceSwatch $surface="primary">Primary</SurfaceSwatch>
            <SurfaceSwatch $surface="secondary">Secondary</SurfaceSwatch>
            <SurfaceSwatch $surface="accent">Accent</SurfaceSwatch>
            <SurfaceSwatch $surface="inverse">Inverse</SurfaceSwatch>
          </OakFlex>
        </TokenRow>

        {/* Text Row - 4 tokens on their intended surfaces */}
        <TokenRow>
          <RowLabel>Text (4) — on intended surfaces</RowLabel>
          <OakFlex $gap="spacing-4" $flexWrap="wrap" $flexDirection="column">
            <OakFlex $gap="spacing-4" $flexWrap="wrap">
              <TextOnSurface
                $bg="--custom-surface-primary"
                $fg="--custom-text-primary"
              >
                Pri on Pri
              </TextOnSurface>
              <TextOnSurface
                $bg="--custom-surface-secondary"
                $fg="--custom-text-primary"
              >
                Pri on Sec
              </TextOnSurface>
              <TextOnSurface
                $bg="--custom-surface-accent"
                $fg="--custom-text-primary"
              >
                Pri on Acc
              </TextOnSurface>
            </OakFlex>
            <OakFlex $gap="spacing-4" $flexWrap="wrap">
              <TextOnSurface
                $bg="--custom-surface-primary"
                $fg="--custom-text-muted"
              >
                Muted on Pri
              </TextOnSurface>
              <TextOnSurface
                $bg="--custom-surface-secondary"
                $fg="--custom-text-muted"
              >
                Muted on Sec
              </TextOnSurface>
            </OakFlex>
            <OakFlex $gap="spacing-4" $flexWrap="wrap">
              <TextOnSurface
                $bg="--custom-surface-primary"
                $fg="--custom-text-accent"
              >
                Accent on Pri
              </TextOnSurface>
              <TextOnSurface
                $bg="--custom-surface-secondary"
                $fg="--custom-text-accent"
              >
                Accent on Sec
              </TextOnSurface>
            </OakFlex>
            <OakFlex $gap="spacing-4">
              <TextOnSurface
                $bg="--custom-surface-inverse"
                $fg="--custom-text-inverse"
              >
                Inverse on Inverse
              </TextOnSurface>
            </OakFlex>
          </OakFlex>
        </TokenRow>

        {/* Borders Row - 3 tokens */}
        <TokenRow>
          <RowLabel>Borders (3)</RowLabel>
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
                Subtle
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
                Strong
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
                Accent
              </OakP>
            </OakBox>
          </OakFlex>
        </TokenRow>

        {/* Interactive Row - 3 tokens with separate hover + active + focus demos */}
        <TokenRow>
          <RowLabel>Interactive (3) — hover, active, focus</RowLabel>
          <OakFlex $gap="spacing-8" $alignItems="center">
            <HoverButton type="button" aria-label="Hover to see hover state">
              Hover me
            </HoverButton>
            <ActiveButton type="button" aria-label="Click to see active state">
              Click me
            </ActiveButton>
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
                Focus
              </OakP>
            </OakBox>
          </OakFlex>
        </TokenRow>

        {/* Shadows Row - 2 tokens */}
        <TokenRow>
          <RowLabel>Shadows (2)</RowLabel>
          <OakFlex $gap="spacing-8">
            <ShadowDemoCard $shadow="subtle">Subtle</ShadowDemoCard>
            <ShadowDemoCard $shadow="strong">Strong</ShadowDemoCard>
          </OakFlex>
        </TokenRow>
      </ThemePreview>
    </TokenCardContainer>
  );
}

/**
 * Theme column for generated themes
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
  const inputColors = secondary ? [primary, secondary] : [primary];

  return (
    <OakFlex
      $flexDirection="column"
      $gap="spacing-4"
      style={{ minWidth: 280, flex: 1 }}
    >
      {/* Header section */}
      <OakBox $mb="spacing-16">
        <OakHeading tag="h3" $font="heading-6">
          {title}
        </OakHeading>
        <OakP $font="body-3" $color="grey60" style={{ marginTop: 2 }}>
          {colorTheory} derivation
        </OakP>
        <OakBox $mt="spacing-8">
          <PaletteDisplay
            inputColors={inputColors}
            palette={result.basePalette}
          />
        </OakBox>
      </OakBox>

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
 * Named theme column showing all 16 tokens in header
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
      {/* Header with all 16 tokens */}
      <OakBox $mb="spacing-16">
        <OakHeading tag="h3" $font="heading-6">
          {title}
        </OakHeading>
        <OakP $font="body-3" $color="grey60" $mt="spacing-4">
          Simple Theme ({simpleTheme.mode} mode)
        </OakP>
        <OakP $font="body-3" $color="grey60">
          16 tokens specified
        </OakP>
        <TokensGrid tokens={simpleTheme.tokens} />
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
 * Colour-Blind Safe column showing all 16 tokens
 */
function ColorBlindSafeColumn() {
  const singleTheme: GeneratedTheme = {
    light: colorBlindSafe.tokens,
    dark: colorBlindSafe.tokens,
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
      {/* Header with all 16 tokens */}
      <OakBox $mb="spacing-16">
        <OakHeading tag="h3" $font="heading-6">
          Colour-Blind Safe
        </OakHeading>
        <OakP $font="body-3" $color="grey60" $mt="spacing-4">
          Pre-computed · Single theme
        </OakP>
        <OakP $font="body-3" $color="grey60">
          AAA verified (17:1, 8.5:1, 7.3:1)
        </OakP>
        <TokensGrid tokens={colorBlindSafe.tokens} />
      </OakBox>

      {/* Single theme display - uses high contrast button behaviour */}
      <TokenCardContainer>
        <TokenCardHeader>Colour-Blind Safe (16 tokens)</TokenCardHeader>
        <ThemePreview theme={singleTheme} mode="light" contrast="high">
          {/* Surfaces */}
          <TokenRow>
            <RowLabel>Surfaces (4)</RowLabel>
            <OakFlex $gap="spacing-8" $flexWrap="wrap">
              <SurfaceSwatch $surface="primary">Primary</SurfaceSwatch>
              <SurfaceSwatch $surface="secondary">Secondary</SurfaceSwatch>
              <SurfaceSwatch $surface="accent">Accent</SurfaceSwatch>
              <SurfaceSwatch $surface="inverse">Inverse</SurfaceSwatch>
            </OakFlex>
          </TokenRow>

          {/* Text */}
          <TokenRow>
            <RowLabel>Text (4) — on intended surfaces</RowLabel>
            <OakFlex $gap="spacing-4" $flexWrap="wrap" $flexDirection="column">
              <OakFlex $gap="spacing-4" $flexWrap="wrap">
                <TextOnSurface
                  $bg="--custom-surface-primary"
                  $fg="--custom-text-primary"
                >
                  Pri on Pri
                </TextOnSurface>
                <TextOnSurface
                  $bg="--custom-surface-secondary"
                  $fg="--custom-text-primary"
                >
                  Pri on Sec
                </TextOnSurface>
              </OakFlex>
              <OakFlex $gap="spacing-4" $flexWrap="wrap">
                <TextOnSurface
                  $bg="--custom-surface-primary"
                  $fg="--custom-text-muted"
                >
                  Muted on Pri
                </TextOnSurface>
                <TextOnSurface
                  $bg="--custom-surface-primary"
                  $fg="--custom-text-accent"
                >
                  Accent on Pri
                </TextOnSurface>
              </OakFlex>
              <TextOnSurface
                $bg="--custom-surface-inverse"
                $fg="--custom-text-inverse"
              >
                Inverse on Inverse
              </TextOnSurface>
            </OakFlex>
          </TokenRow>

          {/* Borders */}
          <TokenRow>
            <RowLabel>Borders (3)</RowLabel>
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
                  Subtle
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
                  Strong
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
                  Accent
                </OakP>
              </OakBox>
            </OakFlex>
          </TokenRow>

          {/* Interactive - uses high contrast buttons for colour changes */}
          <TokenRow>
            <RowLabel>
              Interactive (3) — colour changes on hover/active
            </RowLabel>
            <OakFlex $gap="spacing-8" $alignItems="center">
              <HighContrastHoverButton type="button">
                Hover me
              </HighContrastHoverButton>
              <HighContrastActiveButton type="button">
                Click me
              </HighContrastActiveButton>
              <OakBox
                $pa="spacing-8"
                style={{
                  border: "3px solid var(--custom-interactive-focus)",
                  borderRadius: 4,
                }}
              >
                <OakP
                  $font="body-3"
                  style={{ color: "var(--custom-text-primary)", fontSize: 9 }}
                >
                  Focus
                </OakP>
              </OakBox>
            </OakFlex>
          </TokenRow>

          {/* Shadows */}
          <TokenRow>
            <RowLabel>Shadows (2)</RowLabel>
            <OakFlex $gap="spacing-8">
              <ShadowDemoCard $shadow="subtle">Subtle</ShadowDemoCard>
              <ShadowDemoCard $shadow="strong">Strong</ShadowDemoCard>
            </OakFlex>
          </TokenRow>
        </ThemePreview>
      </TokenCardContainer>
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
      description: "Triadic derivation (120° hue rotations)",
      table: {
        category: "One Colour (Triadic)",
        defaultValue: { summary: "#287c34" },
      },
    },
    twoColourPrimary: {
      control: "color",
      description: "Split-Complementary derivation",
      table: {
        category: "Two Colours (Split-Comp)",
        defaultValue: { summary: "#1e40af" },
      },
    },
    twoColourSecondary: {
      control: "color",
      description: "Secondary hint for Split-Complementary",
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

## 16 Semantic Tokens

| Category | Tokens |
|----------|--------|
| Surface | primary, secondary, accent, inverse |
| Text | primary, muted, accent, inverse |
| Border | subtle, strong, accent |
| Interactive | primary, hover, focus |
| Shadow | subtle, strong |

## Interactive Behaviour

| Theme Type | Hover | Active |
|------------|-------|--------|
| Normal / Low | Lightness + translateY | Lightness + scale |
| High Contrast | Focus colour | Hover colour |
| Colour-Blind Safe | Focus colour | Hover colour |
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
 * Demonstrates text tokens on their intended surfaces.
 * Interactive states show different behaviour for normal vs high contrast.
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
 * Single theme with full controls.
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
