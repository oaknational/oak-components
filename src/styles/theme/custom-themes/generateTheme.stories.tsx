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
 * Fixed height header container - uses explicit height not min-height
 */
const HeaderSection = styled.div`
  height: 160px;
  margin-bottom: 16px;
  flex-shrink: 0;
`;

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
 * Interactive button demo - uses hover token on hover, different active states
 */
const HoverButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  background: var(--custom-interactive-primary);
  color: var(--custom-text-inverse);
  transition: background 0.15s ease;

  &:hover {
    background: var(--custom-interactive-hover);
  }

  &:focus-visible {
    outline: 3px solid var(--custom-interactive-focus);
    outline-offset: 2px;
  }
`;

/**
 * Active button demo - shows active state colour change
 * Light/Dark normal/low: lightness adjustment
 * High contrast: colour change for distinction
 */
const ActiveButton = styled.button<{ $highContrast?: boolean }>`
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
      props.$highContrast
        ? "var(--custom-interactive-focus)"
        : "var(--custom-interactive-hover)"};
  }

  &:focus-visible {
    outline: 3px solid var(--custom-interactive-focus);
    outline-offset: 2px;
  }
`;

/**
 * Shadow demo card on surface primary background
 */
const ShadowDemoCard = styled.div<{ $shadow: "subtle" | "strong" }>`
  padding: 8px 12px;
  border-radius: 4px;
  background: var(--custom-surface-primary);
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

  return (
    <TokenCardContainer>
      <TokenCardHeader>{label}</TokenCardHeader>
      <ThemePreview theme={theme} mode={mode} contrast={contrast}>
        {/* Surfaces Row - 4 tokens */}
        <TokenRow>
          <RowLabel>Surfaces (4)</RowLabel>
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

        {/* Text Row - 4 tokens on their intended surfaces */}
        <TokenRow>
          <RowLabel>Text (4) — shown on intended surfaces</RowLabel>
          <OakFlex $gap="spacing-4" $flexWrap="wrap" $flexDirection="column">
            {/* Primary text on multiple surfaces */}
            <OakFlex $gap="spacing-4" $flexWrap="wrap">
              <TextOnSurface
                $bg="--custom-surface-primary"
                $fg="--custom-text-primary"
              >
                Primary on Pri
              </TextOnSurface>
              <TextOnSurface
                $bg="--custom-surface-secondary"
                $fg="--custom-text-primary"
              >
                Primary on Sec
              </TextOnSurface>
              <TextOnSurface
                $bg="--custom-surface-accent"
                $fg="--custom-text-primary"
              >
                Primary on Acc
              </TextOnSurface>
            </OakFlex>
            {/* Muted text on surfaces */}
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
            {/* Accent text on surfaces (not on accent) */}
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
            {/* Inverse text on inverse surface */}
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

        {/* Interactive Row - 3 tokens with hover + active + focus demos */}
        <TokenRow>
          <RowLabel>Interactive (3) — hover, click, focus</RowLabel>
          <OakFlex $gap="spacing-8" $alignItems="center">
            <HoverButton type="button" aria-label="Hover to see hover state">
              Hover me
            </HoverButton>
            <ActiveButton
              $highContrast={isHighContrast}
              type="button"
              aria-label="Click to see active state"
            >
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

        {/* Shadows Row - 2 tokens on surface.primary background */}
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
      {/* Fixed height header section */}
      <HeaderSection>
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
      </HeaderSection>

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
      {/* Fixed height header section */}
      <HeaderSection>
        <OakHeading tag="h3" $font="heading-6">
          {title}
        </OakHeading>
        <OakP $font="body-3" $color="grey60" $mt="spacing-4">
          Input: Simple Theme ({simpleTheme.name})
        </OakP>
        <OakP $font="body-3" $color="grey60">
          Fully specified 16 tokens, {simpleTheme.mode} mode
        </OakP>
      </HeaderSection>

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
      {/* Fixed height header section */}
      <HeaderSection>
        <OakHeading tag="h3" $font="heading-6">
          Colour-Blind Safe
        </OakHeading>
        <OakP $font="body-3" $color="grey60" $mt="spacing-4">
          Pre-computed Named Theme
        </OakP>
        <OakP $font="body-3" $color="grey60">
          WCAG AAA (verified: 17:1, 8.5:1, 7.3:1)
        </OakP>
        <OakP $font="body-3" $color="grey60">
          Blue-Orange axis · Single theme
        </OakP>
      </HeaderSection>

      {/* Single theme display */}
      <TokenSetCard
        theme={singleTheme}
        mode="light"
        contrast="normal"
        label="Colour-Blind Safe (16 tokens)"
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

## Contrast Targets

| Mode | Target | Active State |
|------|--------|--------------|
| Normal | AA (4.5:1) | Lightness change |
| High | ≥9:1 | Colour change |
| Low | AA (4.5–5:1) | Lightness change |
| Colour-Blind Safe | AAA | Colour change |
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
 * Demonstrates text tokens on their intended surfaces to show real contrast ratios.
 * Interactive states: Hover shows hover token, Click shows active behaviour.
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
