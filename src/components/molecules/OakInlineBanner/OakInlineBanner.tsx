import React, { ReactNode } from "react";

import { InternalShadowRoundButton } from "@/components/molecules/InternalShadowRoundButton";
import {
  OakBox,
  OakFlex,
  OakFlexProps,
  OakHeading,
  OakIcon,
  OakIconName,
} from "@/components/atoms";
import { OakColorToken } from "@/styles";
import { OakColorFilterToken } from "@/styles/theme/color";

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
  type?: "info" | "neutral" | "success" | "alert" | "error";
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
};

export type BannerTypes = {
  [key: string]: {
    icon: OakIconName;
    iconColorFilter: OakColorFilterToken;
    backgroundColour: OakColorToken;
    borderColour: OakColorToken;
  };
};

export const bannerTypes: BannerTypes = {
  info: {
    icon: "info",
    iconColorFilter: "black",
    backgroundColour: "lavender30",
    borderColour: "lavender",
  },
  neutral: {
    icon: "info",
    iconColorFilter: "black",
    backgroundColour: "grey20",
    borderColour: "grey40",
  },
  success: {
    icon: "success",
    iconColorFilter: "black",
    backgroundColour: "mint30",
    borderColour: "mint110",
  },
  alert: {
    icon: "warning",
    iconColorFilter: "black",
    backgroundColour: "lemon30",
    borderColour: "lemon50",
  },
  error: {
    icon: "error",
    iconColorFilter: "red",
    backgroundColour: "red30",
    borderColour: "red",
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
 * - **type?** \-                       Optional type of banner to display (info, neutral, success, alert, error) (default: info)
 * - **icon?** \-                       Optional icon to display in the banner
 * - **iconColorFilter?** \-            Optional color filter to apply to the icon
 * - **cta?** \-                        Optional call to action to display in the banner (ReactNode)
 * - **canDismiss?** \-                 If true the banner can be dismissed (show close icon) (default: false)
 * - **onDismiss?** \-                  Function called when the banner is dismissed
 * - **closeButtonOverrideProps?** \-   Props to override the close button (aria-label, etc)
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
  ...props
}: OakInlineBannerProps) => {
  const iconResult = icon || bannerTypes[type]?.icon;
  const iconColorFilterResult =
    iconColorFilter || bannerTypes[type]?.iconColorFilter;

  return (
    <OakFlex
      data-testid="oak-inline-banner"
      $alignItems="end"
      $display={isOpen ? "flex" : "none"}
      $background={bannerTypes[type]?.backgroundColour}
      $pa={"inner-padding-m"}
      $borderRadius={"border-radius-m"}
      $borderStyle={"solid"}
      $borderColor={bannerTypes[type]?.borderColour}
      $flexDirection={"column"}
      {...props}
    >
      <OakFlex
        $flexDirection={"row"}
        $justifyContent={"space-between"}
        $alignItems={title ? "start" : "center"}
        $gap={"space-between-xs"}
        $width={"100%"}
      >
        <OakBox>
          <OakIcon
            iconName={iconResult || "info"}
            $colorFilter={iconColorFilterResult}
            $width="all-spacing-7"
            $height="all-spacing-7"
            data-testid="inline-banner-icon"
          />
        </OakBox>
        <OakFlex
          $width={"100%"}
          $flexDirection={title ? "column" : "row"}
          $justifyContent={title ? "center" : "space-between"}
          $alignItems={title ? "start" : "center"}
          $gap={"space-between-sssx"}
        >
          {title && (
            <OakHeading
              $font={["heading-7"]}
              data-testid="inline-banner-title"
              tag="h1"
            >
              {title}
            </OakHeading>
          )}
          <OakBox $font={"body-2"} data-testid="inline-banner-message">
            {message}
          </OakBox>
          {!title && cta}
        </OakFlex>
        {canDismiss && (
          <OakBox>
            <InternalShadowRoundButton
              aria-label={"Dismiss banner"}
              defaultIconBackground="transparent"
              defaultIconColor="black"
              defaultTextColor="transparent"
              hoverTextColor="transparent"
              disabledTextColor="transparent"
              hoverIconBackground="black"
              hoverIconColor="white"
              disabledIconBackground="transparent"
              iconBackgroundSize="all-spacing-6"
              iconSize="all-spacing-6"
              iconName="cross"
              data-testid="inline-banner-close-button"
              onClick={onDismiss}
              {...closeButtonOverrideProps}
            />
          </OakBox>
        )}
      </OakFlex>
      {title && cta}
    </OakFlex>
  );
};
