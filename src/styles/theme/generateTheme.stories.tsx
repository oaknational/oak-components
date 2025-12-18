import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { checkContrast } from "./contrastUtils";
import { generateTheme } from "./generateTheme";

import { CustomThemeProvider } from "@/components/atoms/CustomThemeProvider";
import { OakBox } from "@/components/atoms/OakBox";
import { OakFlex } from "@/components/atoms/OakFlex";
import { OakHeading } from "@/components/atoms/OakHeading";
import { OakP } from "@/components/atoms/OakP";

const meta: Meta = {
  title: "styles/theme/generateTheme",
  parameters: {
    docs: {
      description: {
        component: `
Generate accessible themes from 1-2 brand colors.

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

/**
 * Showcase component for displaying a generated theme.
 */
function ThemeShowcase({
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

type Story = StoryObj<typeof meta>;

/**
 * Generate a theme from a single brand color (Oak Green).
 */
export const SingleColor: Story = {
  render: () => <ThemeShowcase title="Oak Green Theme" primary="#287c34" />,
};

/**
 * Generate a theme with two colors for primary and accent.
 */
export const TwoColors: Story = {
  render: () => (
    <ThemeShowcase
      title="Green + Red Theme"
      primary="#287c34"
      secondary="#7c2834"
    />
  ),
};

/**
 * Different brand colors showing the flexibility of the generator.
 */
export const BrandVariations: Story = {
  render: () => (
    <OakFlex $flexDirection="column" $gap="spacing-16">
      <ThemeShowcase title="Blue Brand" primary="#1e40af" />
      <ThemeShowcase title="Purple Brand" primary="#7c3aed" />
      <ThemeShowcase title="Orange Brand" primary="#ea580c" />
    </OakFlex>
  ),
};

/**
 * Interactive contrast checker demo.
 */
export const ContrastChecker: Story = {
  render: () => {
    const pairs = [
      { fg: "#000000", bg: "#ffffff", label: "Black on White" },
      { fg: "#287c34", bg: "#ffffff", label: "Oak Green on White" },
      { fg: "#767676", bg: "#ffffff", label: "Gray on White" },
      { fg: "#ffffff", bg: "#1a1a1a", label: "White on Dark" },
    ];

    return (
      <OakBox $pa="spacing-24">
        <OakHeading tag="h2" $font="heading-5" $mb="spacing-16">
          Contrast Checker Demo
        </OakHeading>

        <OakFlex $flexDirection="column" $gap="spacing-4">
          {pairs.map(({ fg, bg, label }) => {
            const result = checkContrast(fg, bg);
            return (
              <OakFlex key={label} $gap="spacing-4" $alignItems="center">
                <OakBox
                  $pa="spacing-16"
                  $width="spacing-16"
                  $borderRadius="border-radius-m"
                  style={{ backgroundColor: bg }}
                >
                  <OakP style={{ color: fg }} $font="body-2-bold">
                    Sample
                  </OakP>
                </OakBox>
                <OakBox>
                  <OakP $font="body-2-bold">{label}</OakP>
                  <OakP $font="body-3">
                    Ratio: {result.ratio.toFixed(2)}:1 | AA:{" "}
                    {result.passesAA ? "✓" : "✗"} | AAA:{" "}
                    {result.passesAAA ? "✓" : "✗"}
                  </OakP>
                </OakBox>
              </OakFlex>
            );
          })}
        </OakFlex>
      </OakBox>
    );
  },
};
