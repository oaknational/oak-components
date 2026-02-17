import React, { ElementType } from "react";

import {
  InternalShadowRectButton,
  InternalShadowRectButtonProps,
} from "@/components/internal-components/InternalShadowRectButton";
import {
  InternalShadowRoundButton,
  InternalShadowRoundButtonProps,
} from "@/components/internal-components/InternalShadowRoundButton";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";
import {
  OakUiRoleToken,
  OakDropShadowToken,
  OakAllSpacingToken,
} from "@/styles";
import { SizeStyleProps } from "@/styles/utils/sizeStyle";
import { SpacingStyleProps } from "@/styles/utils/spacingStyle";
import { FlexStyleProps } from "@/styles/utils/flexStyle";
import { TypographyStyleProps } from "@/styles/utils/typographyStyle";
import { OakSizeToken } from "@/styles/theme/spacing";
import { OakColorSchemeToken } from "@/styles/theme/color";

export const oakButtonVariants = ["primary", "secondary", "tertiary"] as const;
export type OakButtonVariant = (typeof oakButtonVariants)[number];

export const oakButtonColorSchemes: OakColorSchemeToken[] = [
  "primary",
  "inverted",
] as const;
type OakButtonColorScheme = (typeof oakButtonColorSchemes)[number];

export const oakButtonSizes: OakSizeToken[] = ["sm", "md"] as const;
type OakButtonSize = (typeof oakButtonSizes)[number];

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

type OakButtonVariantsConfig = {
  [key in OakButtonVariant]: {
    hasRoundIcon: boolean;
    colorSchemes: {
      [key in OakButtonColorScheme]: {
        // default styles
        defaultTextColor: OakUiRoleToken;
        defaultBackground: OakUiRoleToken;
        defaultBorderColor: OakUiRoleToken;
        defaultIconColor: OakUiRoleToken;
        defaultIconBackground: OakUiRoleToken;
        defaultIconBorderColor: OakUiRoleToken;
        // hover styles
        hoverTextColor: OakUiRoleToken;
        hoverBackground: OakUiRoleToken;
        hoverBorderColor: OakUiRoleToken;
        hoverIconColor: OakUiRoleToken;
        hoverIconBackground: OakUiRoleToken;
        hoverIconBorderColor: OakUiRoleToken;
        // disabled styles
        disabledTextColor: OakUiRoleToken;
        disabledBackground: OakUiRoleToken;
        disabledBorderColor: OakUiRoleToken;
        disabledIconColor: OakUiRoleToken;
        disabledIconBackground: OakUiRoleToken;
        disabledIconBorderColor: OakUiRoleToken;
        // hover shadow
        hoverShadow: OakDropShadowToken | null;
      };
    };
  };
};

type OakLoadingSpinnerTokenSubset = Extract<
  OakAllSpacingToken,
  "spacing-20" | "spacing-24"
>;

type OakButtonSizeConfig = {
  [key in OakButtonSize]: {
    font: TypographyStyleProps["$font"];
    pv: SpacingStyleProps["$pv"];
    ph: SpacingStyleProps["$ph"];
    loadingSpinnerSize: OakLoadingSpinnerTokenSubset;
    iconGap: FlexStyleProps["$gap"];
    iconBackgroundSize: SizeStyleProps["$width"];
    iconSize: SizeStyleProps["$width"];
  };
};

const oakButtonVariantConfig: OakButtonVariantsConfig = {
  primary: {
    hasRoundIcon: false,
    colorSchemes: {
      primary: {
        // default styles
        defaultTextColor: "text-inverted",
        defaultBackground: "bg-btn-primary",
        defaultBorderColor: "border-primary",
        defaultIconColor: "icon-inverted",
        defaultIconBackground: "bg-btn-primary",
        defaultIconBorderColor: "border-primary",
        // hover styles
        hoverTextColor: "text-inverted",
        hoverBackground: "bg-btn-primary-hover",
        hoverBorderColor: "border-neutral-stronger",
        hoverIconColor: "icon-inverted",
        hoverIconBackground: "transparent",
        hoverIconBorderColor: "transparent",
        // disabled styles
        disabledTextColor: "text-inverted",
        disabledBackground: "bg-btn-primary-disabled",
        disabledBorderColor: "text-disabled",
        disabledIconColor: "icon-inverted",
        disabledIconBackground: "transparent",
        disabledIconBorderColor: "transparent",
        // other styles
        hoverShadow: "drop-shadow-lemon",
      },
      inverted: {
        // default styles
        defaultTextColor: "text-primary",
        defaultBackground: "bg-btn-secondary",
        defaultBorderColor: "border-inverted",
        defaultIconColor: "icon-primary",
        defaultIconBackground: "transparent",
        defaultIconBorderColor: "transparent",
        // hover styles
        hoverTextColor: "text-primary",
        hoverBackground: "bg-btn-secondary-hover",
        hoverBorderColor: "bg-btn-secondary-hover",
        hoverIconColor: "icon-primary",
        hoverIconBackground: "transparent",
        hoverIconBorderColor: "transparent",
        // disabled styles
        disabledTextColor: "text-disabled",
        disabledBackground: "bg-btn-secondary",
        disabledBorderColor: "border-inverted",
        disabledIconColor: "icon-disabled",
        disabledIconBackground: "transparent",
        disabledIconBorderColor: "transparent",
        // other styles
        hoverShadow: null,
      },
    },
  },
  secondary: {
    hasRoundIcon: false,
    colorSchemes: {
      primary: {
        // default styles
        defaultTextColor: "text-primary",
        defaultBackground: "bg-btn-secondary",
        defaultBorderColor: "border-primary",
        defaultIconColor: "icon-primary",
        defaultIconBackground: "transparent",
        defaultIconBorderColor: "transparent",
        // hover styles
        hoverTextColor: "text-primary",
        hoverBackground: "bg-btn-secondary-hover",
        hoverBorderColor: "border-primary",
        hoverIconColor: "icon-primary",
        hoverIconBackground: "transparent",
        hoverIconBorderColor: "transparent",
        // disabled styles
        disabledTextColor: "text-disabled",
        disabledBackground: "bg-btn-secondary-disabled",
        disabledBorderColor: "border-neutral",
        disabledIconColor: "icon-disabled",
        disabledIconBackground: "transparent",
        disabledIconBorderColor: "transparent",
        // hover shadow
        hoverShadow: "drop-shadow-lemon",
      },
      inverted: {
        // default styles
        defaultTextColor: "text-primary",
        defaultBackground: "bg-btn-secondary",
        defaultBorderColor: "border-primary",
        defaultIconColor: "icon-primary",
        defaultIconBackground: "transparent",
        defaultIconBorderColor: "transparent",
        // hover styles
        hoverTextColor: "text-primary",
        hoverBackground: "bg-btn-secondary-hover",
        hoverBorderColor: "border-primary",
        hoverIconColor: "icon-primary",
        hoverIconBackground: "transparent",
        hoverIconBorderColor: "transparent",
        // disabled styles
        disabledTextColor: "text-disabled",
        disabledBackground: "bg-btn-secondary-disabled",
        disabledBorderColor: "border-neutral",
        disabledIconColor: "icon-disabled",
        disabledIconBackground: "transparent",
        disabledIconBorderColor: "transparent",
        // hover shadow
        hoverShadow: "drop-shadow-lemon",
      },
    },
  },
  tertiary: {
    hasRoundIcon: true,
    colorSchemes: {
      primary: {
        // default styles
        defaultTextColor: "text-primary",
        defaultBackground: "transparent",
        defaultBorderColor: "transparent",
        defaultIconColor: "icon-inverted",
        defaultIconBackground: "bg-inverted",
        defaultIconBorderColor: "border-primary",
        // hover styles
        hoverTextColor: "text-subdued",
        hoverBackground: "transparent",
        hoverBorderColor: "transparent",
        hoverIconColor: "icon-inverted",
        hoverIconBackground: "bg-btn-primary-hover",
        hoverIconBorderColor: "border-neutral-stronger",
        // disabled styles
        disabledTextColor: "text-disabled",
        disabledBackground: "transparent",
        disabledBorderColor: "transparent",
        disabledIconColor: "icon-inverted",
        disabledIconBackground: "bg-inverted-semi-transparent",
        disabledIconBorderColor: "bg-inverted-semi-transparent",
        // hover shadow
        hoverShadow: "drop-shadow-lemon",
      },
      inverted: {
        // default styles
        defaultTextColor: "text-primary",
        defaultBackground: "bg-primary",
        defaultBorderColor: "border-primary",
        defaultIconColor: "icon-primary",
        defaultIconBackground: "bg-btn-secondary",
        defaultIconBorderColor: "border-primary",
        // hover styles
        hoverTextColor: "text-subdued",
        hoverBackground: "bg-primary",
        hoverBorderColor: "border-primary",
        hoverIconColor: "icon-primary",
        hoverIconBackground: "bg-btn-secondary",
        hoverIconBorderColor: "border-primary",
        // disabled styles
        disabledTextColor: "text-disabled",
        disabledBackground: "transparent",
        disabledBorderColor: "transparent",
        disabledIconColor: "icon-disabled",
        disabledIconBackground: "bg-btn-secondary-disabled",
        disabledIconBorderColor: "border-neutral",
        // hover shadow
        hoverShadow: "drop-shadow-lemon",
      },
    },
  },
};

const oakButtonSizeConfig: OakButtonSizeConfig = {
  sm: {
    font: "body-3-bold",
    pv: "spacing-4",
    ph: "spacing-8",
    loadingSpinnerSize: "spacing-20",
    iconGap: "spacing-4",
    iconBackgroundSize: "spacing-24",
    iconSize: "spacing-20",
  },
  md: {
    font: "heading-7",
    pv: "spacing-12",
    ph: "spacing-16",
    loadingSpinnerSize: "spacing-24",
    iconGap: "spacing-8",
    iconBackgroundSize: "spacing-32",
    iconSize: "spacing-24",
  },
};

/**
 *
 * `OakButton` is a button component that supports multiple variants, color schemes, and sizes. The `OakButton` component takes care of mapping
 * the variant and color scheme props to the appropriate styles defined in the `oakButtonVariants` configuration object.
 * It also allows for polymorphic behavior through the `element` prop, enabling it to render as different HTML elements as needed.
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
      `Invalid variant or colorScheme: ${variant}, ${colorScheme}`,
    );
  }

  if (!sizeConfig) {
    throw new Error(`Invalid size: ${size}`);
  }

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
          font={sizeConfig.font}
          pv={sizeConfig.pv}
          ph={sizeConfig.ph}
          loadingSpinnerSize={sizeConfig.loadingSpinnerSize}
          iconGap={children ? sizeConfig.iconGap : "spacing-0"}
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
          iconSize={sizeConfig.iconSize}
          font={sizeConfig.font}
          pv={sizeConfig.pv}
          ph={sizeConfig.ph}
          loadingSpinnerSize={sizeConfig.loadingSpinnerSize}
          iconGap={children ? sizeConfig.iconGap : "spacing-0"}
          {...rest}
        >
          {children}
        </InternalShadowRoundButton>
      );
  }
};
