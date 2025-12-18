import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";

import { checkContrast } from "./contrastUtils";
import { generateTheme } from "./generateTheme";
import { ThemePreview } from "./ThemePreview";
import type { GeneratedTheme } from "./themeTypes";

import { OakBox } from "@/components/atoms/OakBox";
import { OakFlex } from "@/components/atoms/OakFlex";
import { OakHeading } from "@/components/atoms/OakHeading";
import { OakP } from "@/components/atoms/OakP";

/**
 * Interactive button demo that shows actual hover, active, and focus states.
 */
const DemoButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-family: inherit;
  font-size: 14px;
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

  &[data-state="hover"] {
    background: var(--custom-interactive-hover);
  }

  &[data-state="active"] {
    background: var(--custom-interactive-hover);
    transform: scale(0.98);
  }

  &[data-state="focus"] {
    outline: 3px solid var(--custom-interactive-focus);
    outline-offset: 2px;
  }
`;

/**
 * A single theme card showing all token categories for one mode.
 */
function ThemeCard({
  theme,
  mode,
  title,
  primary,
  secondary,
}: {
  theme: GeneratedTheme;
  mode: "light" | "dark";
  title: string;
  primary: string;
  secondary?: string;
}) {
  return (
    <ThemePreview theme={theme} mode={mode}>
      <OakBox $pa="spacing-16" aria-label={`${title} - ${mode} mode`}>
        <OakP
          $font="body-3-bold"
          style={{ color: "var(--custom-text-primary)", marginBottom: 8 }}
        >
          {mode.charAt(0).toUpperCase() + mode.slice(1)} Mode
        </OakP>

        {/* Brand colour inputs */}
        <OakFlex $gap="spacing-4" $mb="spacing-8" $alignItems="center">
          <OakBox
            $pa="spacing-4"
            $borderRadius="border-radius-s"
            style={{ backgroundColor: primary }}
            aria-label={`Primary: ${primary}`}
          >
            <OakP
              $font="body-3"
              style={{ color: "#fff", textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}
            >
              P
            </OakP>
          </OakBox>
          {secondary && (
            <OakBox
              $pa="spacing-4"
              $borderRadius="border-radius-s"
              style={{ backgroundColor: secondary }}
              aria-label={`Secondary: ${secondary}`}
            >
              <OakP
                $font="body-3"
                style={{
                  color: "#fff",
                  textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                }}
              >
                S
              </OakP>
            </OakBox>
          )}
        </OakFlex>

        {/* Surface tokens */}
        <OakFlex $gap="spacing-4" $mb="spacing-8" $flexWrap="wrap">
          <OakBox
            $pa="spacing-8"
            $borderRadius="border-radius-s"
            style={{ background: "var(--custom-surface-secondary)" }}
            aria-label="Surface secondary"
          >
            <OakP
              $font="body-3"
              style={{ color: "var(--custom-text-primary)" }}
            >
              Surface
            </OakP>
          </OakBox>
          <OakBox
            $pa="spacing-8"
            $borderRadius="border-radius-s"
            style={{ background: "var(--custom-surface-accent)" }}
            aria-label="Surface accent"
          >
            <OakP
              $font="body-3"
              style={{ color: "var(--custom-text-primary)" }}
            >
              Accent
            </OakP>
          </OakBox>
        </OakFlex>

        {/* Interactive states */}
        <OakFlex $gap="spacing-4" $flexWrap="wrap">
          <DemoButton type="button" aria-label="Hover to see hover state">
            Hover me
          </DemoButton>
          <DemoButton
            type="button"
            data-state="active"
            aria-label="Active/pressed state"
          >
            Pressed
          </DemoButton>
          <DemoButton
            type="button"
            data-state="focus"
            aria-label="Focus ring demonstration"
          >
            Focused
          </DemoButton>
        </OakFlex>

        {/* Text tokens */}
        <OakBox $mt="spacing-8">
          <OakP $font="body-3" style={{ color: "var(--custom-text-primary)" }}>
            Primary text
          </OakP>
          <OakP $font="body-3" style={{ color: "var(--custom-text-muted)" }}>
            Muted text
          </OakP>
          <OakP $font="body-3" style={{ color: "var(--custom-text-accent)" }}>
            Accent text
          </OakP>
        </OakBox>

        {/* Border tokens */}
        <OakFlex $gap="spacing-4" $mt="spacing-8">
          <OakBox
            $pa="spacing-8"
            style={{
              border: "1px solid var(--custom-border-subtle)",
              borderRadius: 4,
            }}
            aria-label="Subtle border"
          >
            <OakP
              $font="body-3"
              style={{ color: "var(--custom-text-primary)" }}
            >
              Subtle
            </OakP>
          </OakBox>
          <OakBox
            $pa="spacing-8"
            style={{
              border: "2px solid var(--custom-border-accent)",
              borderRadius: 4,
            }}
            aria-label="Accent border"
          >
            <OakP
              $font="body-3"
              style={{ color: "var(--custom-text-primary)" }}
            >
              Accent
            </OakP>
          </OakBox>
        </OakFlex>
      </OakBox>
    </ThemePreview>
  );
}

/**
 * Theme column showing both light and dark modes.
 */
function ThemeColumn({
  title,
  primary,
  secondary,
}: {
  title: string;
  primary: string;
  secondary?: string;
}) {
  const result = generateTheme({ primary, secondary });

  return (
    <OakFlex $flexDirection="column" $gap="spacing-8" style={{ flex: 1 }}>
      <OakHeading tag="h3" $font="heading-6" $mb="spacing-4">
        {title}
      </OakHeading>
      <ThemeCard
        theme={result.theme}
        mode="light"
        title={title}
        primary={primary}
        secondary={secondary}
      />
      <ThemeCard
        theme={result.theme}
        mode="dark"
        title={title}
        primary={primary}
        secondary={secondary}
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
}

const meta: Meta<ThemeShowcaseArgs> = {
  title: "Custom Themes/Theme Generator",
  argTypes: {
    oneColourPrimary: {
      control: "color",
      description: "Primary colour for single-colour theme",
      table: {
        category: "One Colour Theme",
        defaultValue: { summary: "#287c34" },
      },
    },
    twoColourPrimary: {
      control: "color",
      description: "Primary colour for two-colour theme",
      table: {
        category: "Two Colour Theme",
        defaultValue: { summary: "#1e40af" },
      },
    },
    twoColourSecondary: {
      control: "color",
      description: "Secondary colour for two-colour theme",
      table: {
        category: "Two Colour Theme",
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
Generate accessible themes from 1-2 brand colours.

This showcase demonstrates:
- **One Colour Theme** — All tokens derived from a single primary colour
- **Two Colour Theme** — Secondary colour drives accent surfaces, text, and focus states  
- **Named Theme** — A custom "festive-2025" theme with explicit colour choices

Use the **Controls panel** to adjust colours and see themes update in real-time.
Both light and dark modes are shown simultaneously to verify derivation works correctly.
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
 * Compares three theme generation approaches side-by-side:
 * 1. One brand colour — minimal input, full derivation
 * 2. Two brand colours — secondary drives accents and focus
 * 3. Named theme — custom "festive-2025" with explicit colours
 *
 * Each column shows both light and dark modes for complete comparison.
 */
export const ThemeShowcase: Story = {
  render: (args) => (
    <OakFlex $gap="spacing-16" $flexWrap="wrap">
      <ThemeColumn title="One Colour" primary={args.oneColourPrimary} />
      <ThemeColumn
        title="Two Colours"
        primary={args.twoColourPrimary}
        secondary={args.twoColourSecondary}
      />
      <ThemeColumn
        title="Festive 2025"
        primary="#c41e3a" // Christmas red
        secondary="#228b22" // Forest green
      />
    </OakFlex>
  ),
};

/**
 * **Interactive Playground**
 *
 * Single theme with full controls for exploring generation.
 */
export const Interactive: Story = {
  args: {
    oneColourPrimary: "#287c34",
    twoColourPrimary: "#287c34",
    twoColourSecondary: "",
  },
  argTypes: {
    twoColourPrimary: { table: { disable: true } },
    twoColourSecondary: { table: { disable: true } },
  },
  render: (args) => {
    const result = generateTheme({ primary: args.oneColourPrimary });
    return (
      <OakFlex $gap="spacing-16">
        <ThemePreview theme={result.theme} mode="light">
          <OakBox $pa="spacing-24">
            <OakBox $mb="spacing-16">
              <OakHeading tag="h2" $font="heading-5" $color="text-primary">
                Light Mode
              </OakHeading>
            </OakBox>
            <OakFlex $gap="spacing-8" $flexWrap="wrap">
              <DemoButton type="button">Hover me</DemoButton>
              <DemoButton type="button" data-state="active">
                Pressed
              </DemoButton>
              <DemoButton type="button" data-state="focus">
                Focused
              </DemoButton>
            </OakFlex>
            <OakBox $mt="spacing-16">
              <OakP
                $font="body-2"
                style={{ color: "var(--custom-text-primary)" }}
              >
                Primary text on surface
              </OakP>
              <OakP
                $font="body-2"
                style={{ color: "var(--custom-text-accent)" }}
              >
                Accent text
              </OakP>
            </OakBox>
          </OakBox>
        </ThemePreview>
        <ThemePreview theme={result.theme} mode="dark">
          <OakBox $pa="spacing-24">
            <OakBox $mb="spacing-16">
              <OakHeading tag="h2" $font="heading-5" $color="text-primary">
                Dark Mode
              </OakHeading>
            </OakBox>
            <OakFlex $gap="spacing-8" $flexWrap="wrap">
              <DemoButton type="button">Hover me</DemoButton>
              <DemoButton type="button" data-state="active">
                Pressed
              </DemoButton>
              <DemoButton type="button" data-state="focus">
                Focused
              </DemoButton>
            </OakFlex>
            <OakBox $mt="spacing-16">
              <OakP
                $font="body-2"
                style={{ color: "var(--custom-text-primary)" }}
              >
                Primary text on surface
              </OakP>
              <OakP
                $font="body-2"
                style={{ color: "var(--custom-text-accent)" }}
              >
                Accent text
              </OakP>
            </OakBox>
          </OakBox>
        </ThemePreview>
      </OakFlex>
    );
  },
};

/**
 * **Contrast Checker**
 *
 * Demonstrates WCAG contrast ratio verification for colour combinations.
 */
export const ContrastChecker: Story = {
  argTypes: {
    oneColourPrimary: { table: { disable: true } },
    twoColourPrimary: { table: { disable: true } },
    twoColourSecondary: { table: { disable: true } },
  },
  render: () => {
    const pairs = [
      { fg: "#000000", bg: "#ffffff", label: "Black on White" },
      { fg: "#287c34", bg: "#ffffff", label: "Oak Green on White" },
      { fg: "#767676", bg: "#ffffff", label: "Gray on White (AA boundary)" },
      { fg: "#ffffff", bg: "#1a1a1a", label: "White on Dark" },
      { fg: "#1e40af", bg: "#ffffff", label: "Blue on White" },
      { fg: "#c41e3a", bg: "#ffffff", label: "Festive Red on White" },
    ];

    return (
      <OakBox $pa="spacing-24" aria-label="Contrast checker results">
        <OakHeading tag="h2" $font="heading-5" $mb="spacing-8">
          Contrast Checker
        </OakHeading>
        <OakP $font="body-2" $color="grey60" $mb="spacing-16">
          Verify colour combinations meet WCAG AA (4.5:1) and AAA (7:1)
          standards.
        </OakP>

        <OakFlex
          $flexDirection="column"
          $gap="spacing-8"
          role="list"
          aria-label="Contrast ratio results"
        >
          {pairs.map(({ fg, bg, label }) => {
            const result = checkContrast(fg, bg);
            return (
              <OakFlex
                key={label}
                $gap="spacing-8"
                $alignItems="center"
                role="listitem"
                aria-label={`${label}: ${result.ratio.toFixed(1)} to 1 ratio`}
              >
                <OakBox
                  $pa="spacing-16"
                  $borderRadius="border-radius-m"
                  $minWidth="spacing-32"
                  style={{ backgroundColor: bg }}
                >
                  <OakP style={{ color: fg }} $font="body-2-bold">
                    Sample
                  </OakP>
                </OakBox>
                <OakBox $minWidth="spacing-56">
                  <OakP $font="body-2-bold">{label}</OakP>
                  <OakP $font="body-3" $color="grey60">
                    {result.ratio.toFixed(2)}:1
                  </OakP>
                </OakBox>
                <OakFlex $gap="spacing-4">
                  <OakBox
                    $pa="spacing-4"
                    $borderRadius="border-radius-s"
                    $background={
                      result.passesAA ? "bg-correct" : "bg-incorrect"
                    }
                    aria-label={result.passesAA ? "Passes AA" : "Fails AA"}
                  >
                    <OakP $font="body-3" $color="white">
                      AA {result.passesAA ? "✓" : "✗"}
                    </OakP>
                  </OakBox>
                  <OakBox
                    $pa="spacing-4"
                    $borderRadius="border-radius-s"
                    $background={
                      result.passesAAA ? "bg-correct" : "bg-incorrect"
                    }
                    aria-label={result.passesAAA ? "Passes AAA" : "Fails AAA"}
                  >
                    <OakP $font="body-3" $color="white">
                      AAA {result.passesAAA ? "✓" : "✗"}
                    </OakP>
                  </OakBox>
                </OakFlex>
              </OakFlex>
            );
          })}
        </OakFlex>
      </OakBox>
    );
  },
};
