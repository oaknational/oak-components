import React, { ElementType } from "react";

import { oakButtonVariantConfig, oakButtonSizeConfig } from "./oakButtonConfig";

import {
  InternalShadowRectButton,
  InternalShadowRectButtonProps,
} from "@/components/internal-components/InternalShadowRectButton";
import {
  InternalShadowRoundButton,
  InternalShadowRoundButtonProps,
} from "@/components/internal-components/InternalShadowRoundButton";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";
import { OakSizeToken } from "@/styles/theme/spacing";
import { OakColorSchemeToken } from "@/styles/theme/color";

export const oakButtonVariants = ["primary", "secondary", "tertiary"] as const;
export type OakButtonVariant = (typeof oakButtonVariants)[number];

export const oakButtonColorSchemes: OakColorSchemeToken[] = [
  "primary",
  "inverted",
  "transparent",
] as const;
export type OakButtonColorScheme = (typeof oakButtonColorSchemes)[number];

export const oakButtonSizes: OakSizeToken[] = ["sm", "md"] as const;
export type OakButtonSize = (typeof oakButtonSizes)[number];

type OmittedPropsForAllUnderlyingComponents =
  | "defaultTextColor"
  | "defaultBackground"
  | "defaultBorderColor"
  | "defaultIconColor"
  | "defaultIconBackground"
  | "defaultIconBorderColor"
  | "hoverTextColor"
  | "hoverBackground"
  | "hoverBorderColor"
  | "hoverIconColor"
  | "hoverIconBackground"
  | "disabledTextColor"
  | "disabledBackground"
  | "disabledBorderColor"
  | "disabledIconColor"
  | "disabledIconBackground"
  | "disabledIconBorderColor"
  | "hoverShadow"
  | "iconBackgroundSize"
  | "iconSize";

export type OakButtonProps = (
  | Omit<InternalShadowRectButtonProps, OmittedPropsForAllUnderlyingComponents>
  | Omit<InternalShadowRoundButtonProps, OmittedPropsForAllUnderlyingComponents>
) & {
  /**
   * Predefined variants which map to specific styles defined in the `oakButtonVariantConfig` object. The variant determines the overall style of the button, while the color scheme determines the specific colors used within that style.
   */
  variant: OakButtonVariant;
  /**
   * Determines the color scheme of the button, which maps to specific colors in the theme. The available color schemes depend on the variant chosen.
   */
  colorScheme?: OakButtonColorScheme;
  /**
   * Determines the size of the button, which maps to specific values defined in the `oakButtonSizeConfig` object.
   */
  size?: OakButtonSize;
};

/**
 *
 * `OakButton` is a button component that supports multiple variants, color schemes, and sizes. The `OakButton` component takes care of mapping
 * the variant and color scheme props to the appropriate styles defined in the `oakButtonVariants` configuration object.
 * It also allows for polymorphic behavior through the `element` prop, enabling it to render as different HTML elements as needed.
 *
 * We currently support the following variants, each with a subset of color schemes:
 * - `primary`, color schemes: `primary` and `inverted`
 * - `secondary`, color schemes: `primary`
 * - `tertiary`, color schemes: `primary`, `inverted` and `transparent`
 *
 * There are currently two sizes available across all variants: `sm` and `md`
 */
export const OakButton = <C extends ElementType = "button">({
  element,
  variant,
  colorScheme = "primary",
  size = "md",
  children,
  ...rest
}: OakButtonProps & PolymorphicPropsWithoutRef<C>) => {
  const variantConfig = oakButtonVariantConfig[variant];
  const colorSchemeConfig = variantConfig.colorSchemes[colorScheme];
  const sizeConfig = oakButtonSizeConfig[size];

  if (!colorSchemeConfig) {
    throw new Error(
      `Color scheme "${colorScheme}" is not available fo the "${variant}" variant`,
    );
  }

  if (!sizeConfig) {
    throw new Error(`Invalid size: ${size}`);
  }

  const sharedSizeProps = {
    font: sizeConfig.font,
    pv: sizeConfig.pv,
    ph: sizeConfig.ph,
    loadingSpinnerSize: sizeConfig.loadingSpinnerSize,
    iconGap: children ? sizeConfig.iconGap : "spacing-0",
    iconSize: sizeConfig.iconSize,
  };

  switch (variant) {
    case "primary":
    case "secondary":
      return (
        <InternalShadowRectButton
          element={element ?? "button"}
          defaultTextColor={colorSchemeConfig.defaultTextColor}
          defaultBackground={colorSchemeConfig.defaultBackground}
          defaultBorderColor={colorSchemeConfig.defaultBorderColor}
          hoverTextColor={colorSchemeConfig.hoverTextColor}
          hoverBackground={colorSchemeConfig.hoverBackground}
          hoverBorderColor={colorSchemeConfig.hoverBorderColor}
          disabledTextColor={colorSchemeConfig.disabledTextColor}
          disabledBackground={colorSchemeConfig.disabledBackground}
          disabledBorderColor={colorSchemeConfig.disabledBorderColor}
          hoverShadow={colorSchemeConfig.hoverShadow}
          hoverUnderline
          {...sharedSizeProps}
          {...rest}
        >
          {children}
        </InternalShadowRectButton>
      );
    case "tertiary":
      return (
        <InternalShadowRoundButton
          element={element ?? "button"}
          defaultTextColor={colorSchemeConfig.defaultTextColor}
          defaultIconColor={colorSchemeConfig.defaultIconColor}
          defaultIconBackground={colorSchemeConfig.defaultIconBackground}
          defaultIconBorderColor={colorSchemeConfig.defaultIconBorderColor}
          hoverTextColor={colorSchemeConfig.hoverTextColor}
          hoverIconBackground={colorSchemeConfig.hoverIconBackground}
          hoverIconBorderColor={colorSchemeConfig.hoverIconBorderColor}
          disabledTextColor={colorSchemeConfig.disabledTextColor}
          disabledIconColor={colorSchemeConfig.disabledIconColor}
          disabledIconBackground={colorSchemeConfig.disabledIconBackground}
          disabledIconBorderColor={colorSchemeConfig.disabledIconBorderColor}
          iconBackgroundSize={sizeConfig.iconBackgroundSize}
          hoverDropShadow={colorSchemeConfig.hoverShadow}
          {...sharedSizeProps}
          {...rest}
        >
          {children}
        </InternalShadowRoundButton>
      );
  }
};
