import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { checkContrast } from "./contrastUtils";
import { generateTheme } from "./generateTheme";

import { CustomThemeProvider } from "@/components/atoms/CustomThemeProvider";
import { OakBox } from "@/components/atoms/OakBox";
import { OakFlex } from "@/components/atoms/OakFlex";
import { OakHeading } from "@/components/atoms/OakHeading";
import { OakP } from "@/components/atoms/OakP";

/**
 * Showcase component for displaying a generated theme.
 * Used internally by stories.
 */
function ThemeShowcase({
  title,
  primary,
  secondary,
  showGeneratedValues,
}: {
  title: string;
  primary: string;
  secondary?: string;
  showGeneratedValues?: boolean;
}) {
  const result = generateTheme({ primary, secondary });

  return (
    <CustomThemeProvider config={result.theme}>
      <OakBox $pa="spacing-24" $background="custom-surface-primary">
        <OakHeading
          tag="h2"
          $color="custom-text-primary"
          $font="heading-5"
          $mb="spacing-16"
        >
          {title}
        </OakHeading>

        {/* Input colors display */}
        <OakFlex $gap="spacing-4" $mb="spacing-16" $alignItems="center">
          <OakBox
            $pa="spacing-8"
            $borderRadius="border-radius-s"
            style={{ backgroundColor: primary, minWidth: 60 }}
          >
            <OakP
              $font="body-3"
              style={{ color: "#fff", textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}
            >
              Primary
            </OakP>
          </OakBox>
          {secondary && (
            <OakBox
              $pa="spacing-8"
              $borderRadius="border-radius-s"
              style={{ backgroundColor: secondary, minWidth: 60 }}
            >
              <OakP
                $font="body-3"
                style={{
                  color: "#fff",
                  textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                }}
              >
                Secondary
              </OakP>
            </OakBox>
          )}
        </OakFlex>

        <OakFlex $gap="spacing-4" $flexWrap="wrap">
          {/* Surface tokens */}
          <OakBox
            $pa="spacing-16"
            $background="custom-surface-secondary"
            $borderRadius="border-radius-m"
          >
            <OakP $color="custom-text-primary" $font="body-2">
              Surface Secondary
            </OakP>
          </OakBox>

          <OakBox
            $pa="spacing-16"
            $background="custom-surface-accent"
            $borderRadius="border-radius-m"
          >
            <OakP $color="custom-text-primary" $font="body-2">
              Surface Accent
            </OakP>
          </OakBox>

          {/* Interactive tokens */}
          <OakBox
            $pa="spacing-16"
            $background="custom-interactive-primary"
            $borderRadius="border-radius-m"
          >
            <OakP $color="custom-text-inverse" $font="body-2">
              Interactive Primary
            </OakP>
          </OakBox>

          <OakBox
            $pa="spacing-16"
            $background="custom-interactive-hover"
            $borderRadius="border-radius-m"
          >
            <OakP $color="custom-text-inverse" $font="body-2">
              Interactive Hover
            </OakP>
          </OakBox>
        </OakFlex>

        {/* Text tokens */}
        <OakBox $mt="spacing-16">
          <OakP $color="custom-text-primary" $font="body-1">
            Text Primary - Main content text
          </OakP>
          <OakP $color="custom-text-muted" $font="body-2">
            Text Muted - Secondary information
          </OakP>
          <OakP $color="custom-text-accent" $font="body-2-bold">
            Text Accent - Highlighted text
          </OakP>
        </OakBox>

        {/* Border tokens */}
        <OakFlex $gap="spacing-4" $mt="spacing-16">
          <OakBox
            $pa="spacing-16"
            $borderColor="custom-border-subtle"
            $ba="border-solid-s"
            $borderRadius="border-radius-m"
          >
            <OakP $color="custom-text-primary" $font="body-3">
              Border Subtle
            </OakP>
          </OakBox>

          <OakBox
            $pa="spacing-16"
            $borderColor="custom-border-strong"
            $ba="border-solid-m"
            $borderRadius="border-radius-m"
          >
            <OakP $color="custom-text-primary" $font="body-3">
              Border Strong
            </OakP>
          </OakBox>
        </OakFlex>

        {/* Generated values display */}
        {showGeneratedValues && (
          <OakBox
            $mt="spacing-16"
            $pa="spacing-16"
            $background="custom-surface-secondary"
            $borderRadius="border-radius-m"
          >
            <OakP
              $color="custom-text-primary"
              $font="body-3-bold"
              $mb="spacing-8"
            >
              Generated Light Theme Values
            </OakP>
            <OakP $color="custom-text-muted" $font="body-3">
              interactive.primary: {result.theme.light.interactive.primary}
              <br />
              text.primary: {result.theme.light.text.primary}
              <br />
              text.accent: {result.theme.light.text.accent}
            </OakP>
          </OakBox>
        )}

        {/* Warnings */}
        {result.warnings.length > 0 && (
          <OakBox
            $mt="spacing-16"
            $pa="spacing-8"
            $background="custom-surface-accent"
          >
            <OakP $color="custom-text-primary" $font="body-3">
              ⚠️ Warnings: {result.warnings.join(", ")}
            </OakP>
          </OakBox>
        )}
      </OakBox>
    </CustomThemeProvider>
  );
}

/**
 * Story args interface for interactive controls.
 */
interface ThemeGeneratorArgs {
  primary: string;
  secondary: string;
  showGeneratedValues: boolean;
}

const meta: Meta<ThemeGeneratorArgs> = {
  title: "Custom Themes/Theme Generator",
  argTypes: {
    primary: {
      control: "color",
      description: "Primary brand color (hex)",
      table: {
        category: "Brand Colors",
        defaultValue: { summary: "#287c34" },
      },
    },
    secondary: {
      control: "color",
      description: "Optional secondary/accent color (hex)",
      table: {
        category: "Brand Colors",
        defaultValue: { summary: "undefined" },
      },
    },
    showGeneratedValues: {
      control: "boolean",
      description: "Show the generated hex values",
      table: {
        category: "Debug",
        defaultValue: { summary: "false" },
      },
    },
  },
  args: {
    primary: "#287c34",
    secondary: "",
    showGeneratedValues: false,
  },
  parameters: {
    docs: {
      description: {
        component: `
Generate accessible themes from 1-2 brand colors.

**Use the Controls panel** to pick colors and see the theme update in real-time.
The a11y addon will verify that generated colors meet WCAG contrast requirements.

### Usage

\`\`\`typescript
import { generateTheme } from '@oaknational/oak-components';

const result = generateTheme({ primary: '#287c34' });
// result.theme is ready for CustomThemeProvider
\`\`\`
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<ThemeGeneratorArgs>;

/**
 * **Interactive Playground**
 *
 * Demonstrates real-time theme generation from brand colours.
 *
 * **What it shows:**
 * - Pick any primary colour using the colour picker in Controls
 * - Optionally add a secondary/accent colour
 * - Watch all semantic tokens (surface, text, border, interactive) update live
 *
 * **Use case:** Exploring how different brand colours translate into a complete theme.
 */
export const Interactive: Story = {
  render: (args) => (
    <ThemeShowcase
      title="Generated Theme"
      primary={args.primary}
      secondary={args.secondary || undefined}
      showGeneratedValues={args.showGeneratedValues}
    />
  ),
};

/**
 * **One Brand Colour**
 *
 * Demonstrates the minimum viable input: a single hex colour.
 *
 * **What it shows:**
 * - A complete theme generated from just one brand colour
 * - All token categories (surface, text, border, interactive, shadow) are derived
 * - Secondary control is hidden as it's not relevant to this demonstration
 *
 * **Use case:** Organisations with a single primary brand colour who want
 * automatic derivation of all other theme tokens.
 */
export const OneBrandColour: Story = {
  args: {
    primary: "#287c34",
    secondary: "",
    showGeneratedValues: true,
  },
  argTypes: {
    secondary: { table: { disable: true } },
  },
  render: (args) => (
    <ThemeShowcase
      title="Single Colour Theme"
      primary={args.primary}
      secondary={args.secondary || undefined}
      showGeneratedValues={args.showGeneratedValues}
    />
  ),
};

/**
 * **Two Brand Colours**
 *
 * Demonstrates theme generation with primary and secondary brand colours.
 *
 * **What it shows:**
 * - Primary colour drives surfaces and main interactive elements
 * - Secondary colour provides accent tones for highlights and emphasis
 * - Complementary colour schemes are preserved in the generated tokens
 *
 * **Use case:** Brands with a defined primary/secondary colour palette
 * who want those relationships reflected throughout the theme.
 */
export const TwoBrandColours: Story = {
  args: {
    primary: "#287c34",
    secondary: "#7c2834",
    showGeneratedValues: true,
  },
  render: (args) => (
    <ThemeShowcase
      title="Primary + Secondary Theme"
      primary={args.primary}
      secondary={args.secondary || undefined}
      showGeneratedValues={args.showGeneratedValues}
    />
  ),
};

/**
 * **Brand Comparison**
 *
 * Demonstrates how different brand colours produce distinct themes.
 *
 * **What it shows:**
 * - Four different primary colours side-by-side
 * - How the generator adapts token derivation to each colour's characteristics
 * - Consistent structure across all themes despite different inputs
 *
 * **Use case:** Comparing potential brand colours before committing,
 * or demonstrating theme flexibility to stakeholders.
 *
 * **Note:** Controls are disabled as this is a static comparison.
 */
export const BrandComparison: Story = {
  argTypes: {
    primary: { table: { disable: true } },
    secondary: { table: { disable: true } },
    showGeneratedValues: { table: { disable: true } },
  },
  render: () => (
    <OakFlex $flexDirection="column" $gap="spacing-16">
      <ThemeShowcase title="Blue Brand" primary="#1e40af" />
      <ThemeShowcase title="Purple Brand" primary="#7c3aed" />
      <ThemeShowcase title="Orange Brand" primary="#ea580c" />
      <ThemeShowcase title="Teal Brand" primary="#0d9488" />
    </OakFlex>
  ),
};

/**
 * **Contrast Checker**
 *
 * Demonstrates WCAG contrast ratio verification for colour combinations.
 *
 * **What it shows:**
 * - Various foreground/background colour pairs
 * - Real-time contrast ratio calculation
 * - Pass/fail badges for WCAG AA (4.5:1) and AAA (7:1) standards
 *
 * **Use case:** Validating that generated or custom colour combinations
 * meet accessibility requirements before deployment.
 *
 * **Note:** Uses the Storybook a11y addon for additional contrast checks.
 */
export const ContrastChecker: Story = {
  argTypes: {
    primary: { table: { disable: true } },
    secondary: { table: { disable: true } },
    showGeneratedValues: { table: { disable: true } },
  },
  render: () => {
    const pairs = [
      { fg: "#000000", bg: "#ffffff", label: "Black on White" },
      { fg: "#287c34", bg: "#ffffff", label: "Oak Green on White" },
      { fg: "#767676", bg: "#ffffff", label: "Gray on White (AA boundary)" },
      { fg: "#ffffff", bg: "#1a1a1a", label: "White on Dark" },
      { fg: "#1e40af", bg: "#ffffff", label: "Blue on White" },
      { fg: "#7c3aed", bg: "#ffffff", label: "Purple on White" },
    ];

    return (
      <OakBox $pa="spacing-24">
        <OakHeading tag="h2" $font="heading-5" $mb="spacing-8">
          Contrast Checker
        </OakHeading>
        <OakP $font="body-2" $color="grey60" $mb="spacing-16">
          Verify color combinations meet WCAG AA (4.5:1) and AAA (7:1)
          standards.
        </OakP>

        <OakFlex $flexDirection="column" $gap="spacing-8">
          {pairs.map(({ fg, bg, label }) => {
            const result = checkContrast(fg, bg);
            return (
              <OakFlex key={label} $gap="spacing-8" $alignItems="center">
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
