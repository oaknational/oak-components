import {
  OakButtonVariant,
  OakButtonColorScheme,
  OakButtonSize,
} from "./OakButton";

import { OakUiRoleToken, OakDropShadowToken } from "@/styles";
import { SizeStyleProps } from "@/styles/utils/sizeStyle";
import { SpacingStyleProps } from "@/styles/utils/spacingStyle";
import { FlexStyleProps } from "@/styles/utils/flexStyle";
import { TypographyStyleProps } from "@/styles/utils/typographyStyle";
import { OakLoadingSpinnerTokenSubset } from "@/styles/theme/spacing";

type OakButtonVariantConfig = {
  [key in OakButtonVariant]: {
    colorSchemes: {
      [key in OakButtonColorScheme]: {
        /**
         * default styles
         */
        defaultTextColor: OakUiRoleToken;
        defaultBackground: OakUiRoleToken;
        defaultBorderColor: OakUiRoleToken;
        defaultIconColor: OakUiRoleToken;
        defaultIconBackground: OakUiRoleToken;
        defaultIconBorderColor: OakUiRoleToken;
        /**
         * hover styles
         */
        hoverTextColor: OakUiRoleToken;
        hoverBackground: OakUiRoleToken;
        hoverBorderColor: OakUiRoleToken;
        hoverIconColor: OakUiRoleToken;
        hoverIconBackground: OakUiRoleToken;
        hoverIconBorderColor: OakUiRoleToken;
        /**
         * disabled styles
         */
        disabledTextColor: OakUiRoleToken;
        disabledBackground: OakUiRoleToken;
        disabledBorderColor: OakUiRoleToken;
        disabledIconColor: OakUiRoleToken;
        disabledIconBackground: OakUiRoleToken;
        disabledIconBorderColor: OakUiRoleToken;
        /**
         * hover shadow
         */
        hoverShadow: OakDropShadowToken | null;
      };
    };
  };
};

export const oakButtonVariantConfig: OakButtonVariantConfig = {
  primary: {
    colorSchemes: {
      primary: {
        /**
         * default styles
         */
        defaultTextColor: "text-inverted",
        defaultBackground: "bg-btn-primary",
        defaultBorderColor: "border-primary",
        defaultIconColor: "icon-inverted",
        defaultIconBackground: "bg-btn-primary",
        defaultIconBorderColor: "border-primary",
        /**
         * hover styles
         */
        hoverTextColor: "text-inverted",
        hoverBackground: "bg-btn-primary-hover",
        hoverBorderColor: "border-neutral-stronger",
        hoverIconColor: "icon-inverted",
        hoverIconBackground: "transparent",
        hoverIconBorderColor: "transparent",
        /**
         * disabled styles
         */
        disabledTextColor: "text-inverted",
        disabledBackground: "bg-btn-primary-disabled",
        disabledBorderColor: "text-disabled",
        disabledIconColor: "icon-inverted",
        disabledIconBackground: "transparent",
        disabledIconBorderColor: "transparent",
        /**
         * hover shadow
         */
        hoverShadow: "drop-shadow-lemon",
      },
      inverted: {
        /**
         * default styles
         */
        defaultTextColor: "text-primary",
        defaultBackground: "bg-btn-secondary",
        defaultBorderColor: "border-inverted",
        defaultIconColor: "icon-primary",
        defaultIconBackground: "transparent",
        defaultIconBorderColor: "transparent",
        /**
         * hover styles
         */
        hoverTextColor: "text-primary",
        hoverBackground: "bg-btn-secondary-hover",
        hoverBorderColor: "bg-btn-secondary-hover",
        hoverIconColor: "icon-primary",
        hoverIconBackground: "transparent",
        hoverIconBorderColor: "transparent",
        /**
         * disabled styles
         */
        disabledTextColor: "text-disabled",
        disabledBackground: "bg-btn-secondary",
        disabledBorderColor: "border-inverted",
        disabledIconColor: "icon-disabled",
        disabledIconBackground: "transparent",
        disabledIconBorderColor: "transparent",
        /**
         * hover shadow
         */
        hoverShadow: null,
      },
    },
  },
  secondary: {
    /**
     * Secondary button has only one color scheme
     */
    colorSchemes: {
      primary: {
        /**
         * default styles
         */
        defaultTextColor: "text-primary",
        defaultBackground: "bg-btn-secondary",
        defaultBorderColor: "border-primary",
        defaultIconColor: "icon-primary",
        defaultIconBackground: "transparent",
        defaultIconBorderColor: "transparent",
        /**
         * hover styles
         */
        hoverTextColor: "text-primary",
        hoverBackground: "bg-btn-secondary-hover",
        hoverBorderColor: "border-primary",
        hoverIconColor: "icon-primary",
        hoverIconBackground: "transparent",
        hoverIconBorderColor: "transparent",
        /**
         * disabled styles
         */
        disabledTextColor: "text-disabled",
        disabledBackground: "bg-btn-secondary-disabled",
        disabledBorderColor: "border-neutral",
        disabledIconColor: "icon-disabled",
        disabledIconBackground: "transparent",
        disabledIconBorderColor: "transparent",
        /**
         * hover shadow
         */
        hoverShadow: "drop-shadow-lemon",
      },
    },
  },
  tertiary: {
    colorSchemes: {
      primary: {
        /**
         * default styles
         */
        defaultTextColor: "text-primary",
        defaultBackground: "transparent",
        defaultBorderColor: "transparent",
        defaultIconColor: "icon-inverted",
        defaultIconBackground: "bg-inverted",
        defaultIconBorderColor: "border-primary",
        /**
         * hover styles
         */
        hoverTextColor: "text-subdued",
        hoverBackground: "transparent",
        hoverBorderColor: "transparent",
        hoverIconColor: "icon-inverted",
        hoverIconBackground: "bg-btn-primary-hover",
        hoverIconBorderColor: "border-neutral-stronger",
        /**
         * disabled styles
         */
        disabledTextColor: "text-disabled",
        disabledBackground: "transparent",
        disabledBorderColor: "transparent",
        disabledIconColor: "icon-inverted",
        disabledIconBackground: "bg-inverted-semi-transparent",
        disabledIconBorderColor: "bg-inverted-semi-transparent",
        /**
         * hover shadow
         */
        hoverShadow: "drop-shadow-lemon",
      },
      inverted: {
        /**
         * default styles
         */
        defaultTextColor: "text-primary",
        defaultBackground: "bg-primary",
        defaultBorderColor: "border-primary",
        defaultIconColor: "icon-primary",
        defaultIconBackground: "bg-btn-secondary",
        defaultIconBorderColor: "border-primary",
        /**
         * hover styles
         */
        hoverTextColor: "text-subdued",
        hoverBackground: "bg-primary",
        hoverBorderColor: "border-primary",
        hoverIconColor: "icon-primary",
        hoverIconBackground: "bg-btn-secondary",
        hoverIconBorderColor: "border-primary",
        /**
         * disabled styles
         */
        disabledTextColor: "text-disabled",
        disabledBackground: "transparent",
        disabledBorderColor: "transparent",
        disabledIconColor: "icon-disabled",
        disabledIconBackground: "bg-btn-secondary-disabled",
        disabledIconBorderColor: "border-neutral",
        /**
         * hover shadow
         */
        hoverShadow: "drop-shadow-lemon",
      },
      transparent: {
        /**
         * default styles
         */
        defaultTextColor: "text-primary",
        defaultBackground: "transparent",
        defaultBorderColor: "transparent",
        defaultIconColor: "icon-primary",
        defaultIconBackground: "transparent",
        defaultIconBorderColor: "transparent",
        /**
         * hover styles
         */
        hoverTextColor: "text-primary",
        hoverBackground: "transparent",
        hoverBorderColor: "transparent",
        hoverIconColor: "icon-primary",
        hoverIconBackground: "transparent",
        hoverIconBorderColor: "transparent",
        /**
         * disabled styles
         */
        disabledTextColor: "text-disabled",
        disabledBackground: "transparent",
        disabledBorderColor: "transparent",
        disabledIconColor: "icon-disabled",
        disabledIconBackground: "transparent",
        disabledIconBorderColor: "transparent",
        /**
         * hover shadow
         */
        hoverShadow: null,
      },
    },
  },
};

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

export const oakButtonSizeConfig: OakButtonSizeConfig = {
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
