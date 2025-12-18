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
 * Interactive theme generator - pick any color and see the full theme.
 * Use the Controls panel to change the primary and secondary colors.
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
 * Oak's default green theme.
 */
export const OakGreen: Story = {
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
      title="Oak Green Theme"
      primary={args.primary}
      secondary={args.secondary || undefined}
      showGeneratedValues={args.showGeneratedValues}
    />
  ),
};

/**
 * Two-color theme with primary and accent.
 */
export const TwoColors: Story = {
  args: {
    primary: "#287c34",
    secondary: "#7c2834",
    showGeneratedValues: true,
  },
  render: (args) => (
    <ThemeShowcase
      title="Green + Red Theme"
      primary={args.primary}
      secondary={args.secondary || undefined}
      showGeneratedValues={args.showGeneratedValues}
    />
  ),
};

/**
 * Grid showing multiple brand color options for comparison.
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
 * Interactive contrast checker - verify WCAG compliance.
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
