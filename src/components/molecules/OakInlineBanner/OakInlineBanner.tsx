import React, { ReactNode } from "react";

import { InternalShadowRoundButton } from "@/components/molecules/InternalShadowRoundButton";
import {
  OakBox,
  OakBoxProps,
  OakFlex,
  OakFlexProps,
  OakHeading,
  OakHeadingProps,
  OakIcon,
  OakIconName,
  OakIconProps,
} from "@/components/atoms";
import { OakCombinedColorToken } from "@/styles";
import { OakColorFilterToken } from "@/styles/theme/color";
import { PaddingStyleProps } from "@/styles/utils/spacingStyle";
import { FlexStyleProps } from "@/styles/utils/flexStyle";

export type OakInlineBannerTypes =
  | "info"
  | "neutral"
  | "success"
  | "alert"
  | "error"
  | "warning";

export type OakInlineBannerVariants = "regular" | "large";

export type OakInlineBannerProps = OakFlexProps & {
  /**
   * If true the modal will be open, if false it will be closed
   */
  isOpen: boolean;
  /**
   * The optional title to display in the banner
   */
  title?: string;
  /**
   * The message to display in the banner
   */
  message: string | ReactNode;
  /**
   * The type of banner to display
   */
  type?: OakInlineBannerTypes;
  /**
   * The icon to display in the banner
   */
  icon?: OakIconName;
  /**
   * The color filter to apply to the icon
   */
  iconColorFilter?: OakColorFilterToken;
  /**
   * The optional call to action to display in the banner
   */
  cta?: ReactNode;
  /**
   * If true the banner can be dismissed (show close icon)
   */
  canDismiss?: boolean;
  /**
   * The function to call when the banner is dismissed
   */
  onDismiss?: () => void;
  /**
   * Props to override the close button
   */
  closeButtonOverrideProps?: Partial<typeof InternalShadowRoundButton>;
  /**
   * The variant of an Inline Banner to display
   */
  variant?: OakInlineBannerVariants;
  titleTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export type BannerTypes = {
  [key in OakInlineBannerTypes]: {
    icon: OakIconName;
    iconColorFilter: OakColorFilterToken;
    backgroundColour: OakCombinedColorToken;
    borderColour: OakCombinedColorToken;
  };
};

export const bannerTypes: BannerTypes = {
  info: {
    icon: "info",
    iconColorFilter: "black",
    backgroundColour: "bg-decorative3-very-subdued",
    borderColour: "border-decorative3",
  },
  neutral: {
    icon: "info",
    iconColorFilter: "black",
    backgroundColour: "bg-neutral",
    borderColour: "border-neutral-lighter",
  },
  success: {
    icon: "success",
    iconColorFilter: "black",
    backgroundColour: "bg-decorative1-very-subdued",
    borderColour: "border-decorative1-stronger",
  },
  alert: {
    icon: "bell",
    iconColorFilter: "black",
    backgroundColour: "bg-decorative5-very-subdued",
    borderColour: "border-decorative5",
  },
  warning: {
    icon: "warning",
    iconColorFilter: "amber",
    backgroundColour: "bg-decorative6-very-subdued",
    borderColour: "border-decorative6",
  },
  error: {
    icon: "error",
    iconColorFilter: "red",
    backgroundColour: "bg-incorrect",
    borderColour: "border-error",
  },
};

export type OakInlineBannerVariantProps = {
  [key in OakInlineBannerVariants]: {
    icon: Partial<OakIconProps>;
    heading: Partial<OakHeadingProps>;
    closeButtonWrapper?: Partial<OakBoxProps>;
    ctaWrapper?: Partial<OakBoxProps>;
    flexDirection: FlexStyleProps["$flexDirection"];
    bannerPadding: PaddingStyleProps["$pa"];
    textContentGap?: FlexStyleProps["$gap"];
  };
};

export const bannerVariants: OakInlineBannerVariantProps = {
  regular: {
    icon: {
      $width: "spacing-32",
      $height: "spacing-32",
    },
    heading: {
      $font: ["heading-7"],
    },
    ctaWrapper: {
      $mt: "spacing-12",
    },
    flexDirection: "row",
    bannerPadding: "spacing-16",
    textContentGap: "spacing-4",
  },
  large: {
    icon: {
      $width: "spacing-40",
      $height: "spacing-40",
    },
    heading: {
      $font: ["heading-6"],
    },
    ctaWrapper: {
      $mt: "spacing-8",
    },
    closeButtonWrapper: {
      $position: "absolute",
      $top: "spacing-0",
      $right: "spacing-0",
    },
    flexDirection: "column",
    bannerPadding: "spacing-24",
    textContentGap: "spacing-16",
  },
};

/**
 * A inline banner that can be used to display important information to the user.
 *
 * ## Props
 *
 * - **isOpen** \-                      If true the banner will be displayed
 * - **title?** \-                      Optional title to display in the banner, without this the banner will be more compact
 * - **message** \-                     Message to display in the banner
 * - **type?** \-                       Optional type of banner to display (info, neutral, success, alert, error, warning) (default: info)
 * - **icon?** \-                       Optional icon to display in the banner
 * - **iconColorFilter?** \-            Optional color filter to apply to the icon
 * - **cta?** \-                        Optional call to action to display in the banner (ReactNode)
 * - **canDismiss?** \-                 If true the banner can be dismissed (show close icon) (default: false)
 * - **onDismiss?** \-                  Function called when the banner is dismissed
 * - **closeButtonOverrideProps?** \-   Props to override the close button (aria-label, etc)
 * - **variant?** \-                    The variant of the inline banner to display (regular, large) (default: regular)
 * - **...rest** \-                     Other props to be passed to the wrapper OakFlex component (can be used to override styles of the banner)
 */
export const OakInlineBanner = ({
  isOpen,
  title,
  message,
  type = "info",
  cta,
  canDismiss = false,
  onDismiss = () => {},
  icon,
  iconColorFilter,
  closeButtonOverrideProps,
  variant = "regular",
  titleTag = "h1",
  ...props
}: OakInlineBannerProps) => {
  const iconResult = icon || bannerTypes[type]?.icon;
  const iconColorFilterResult =
    iconColorFilter || bannerTypes[type]?.iconColorFilter;

  return (
    <OakFlex
      data-testid="oak-inline-banner"
      $alignItems={title ? "start" : "end"}
      $display={isOpen ? "flex" : "none"}
      $background={bannerTypes[type]?.backgroundColour}
      $pa={bannerVariants[variant].bannerPadding}
      $borderRadius={"border-radius-m"}
      $ba="border-solid-s"
      $borderStyle={"solid"}
      $borderColor={bannerTypes[type]?.borderColour}
      $flexDirection={"column"}
      {...props}
    >
      <OakFlex
        $position={"relative"}
        $flexDirection={bannerVariants[variant].flexDirection}
        $justifyContent={"space-between"}
        $alignItems={title || variant === "large" ? "start" : "center"}
        $gap={"spacing-12"}
        $width={"100%"}
      >
        <OakBox>
          <OakIcon
            iconName={iconResult || "info"}
            $colorFilter={iconColorFilterResult}
            {...bannerVariants[variant].icon}
            data-testid="inline-banner-icon"
          />
        </OakBox>
        {canDismiss && (
          <OakFlex $order={2} {...bannerVariants[variant].closeButtonWrapper}>
            <InternalShadowRoundButton
              aria-label={"Dismiss banner"}
              defaultIconBackground="transparent"
              defaultIconColor="icon-primary"
              defaultTextColor="transparent"
              hoverTextColor="transparent"
              disabledTextColor="transparent"
              hoverIconBackground="icon-primary"
              hoverIconColor="icon-main"
              disabledIconBackground="transparent"
              iconBackgroundSize="spacing-24"
              iconSize="spacing-24"
              iconName="cross"
              data-testid="inline-banner-close-button"
              onClick={onDismiss}
              {...closeButtonOverrideProps}
            />
          </OakFlex>
        )}
        <OakFlex
          $order={1}
          $width={"100%"}
          $flexDirection={title ? "column" : "row"}
          $justifyContent={title ? "center" : "space-between"}
          $alignItems={title ? "start" : "center"}
          $gap={bannerVariants[variant].textContentGap}
        >
          {title && (
            <OakHeading
              data-testid="inline-banner-title"
              tag={titleTag}
              {...bannerVariants[variant].heading}
            >
              {title}
            </OakHeading>
          )}
          <OakBox $font={"body-2"} data-testid="inline-banner-message">
            {message}
          </OakBox>
          {cta && (
            <OakFlex {...(title ? bannerVariants[variant].ctaWrapper : {})}>
              {cta}
            </OakFlex>
          )}
        </OakFlex>
      </OakFlex>
    </OakFlex>
  );
};
