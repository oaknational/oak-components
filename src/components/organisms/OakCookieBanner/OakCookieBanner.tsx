import React from "react";

import { OakBox, OakFlex, OakSpan } from "@/components/atoms";
import {
  OakPrimaryButton,
  OakSecondaryButton,
  OakSecondaryLink,
} from "@/components/molecules";
import { OakAllSpacingToken } from "@/styles";
import { ResponsiveValues } from "@/styles/utils/responsiveStyle";

export type OakCookieBannerProps = {
  /**
   * Triggered when the user clicks the "Hide this message" button.
   */
  onHide(): void;
  /**
   * Triggered when the user clicks the "Accept all cookies" button.
   */
  onAccept(): void;
  /**
   * Triggered when the user clicks the "Reject non-essential cookies" button.
   */
  onReject(): void;
  /**
   * Triggered when the user clicks the "Cookie settings" button.
   */
  onOpenSettings(): void;
  /**
   * The banner is intended to span the full width of the viewport.
   * this prop will set the maximum width of the inner content so that
   * it can line up with the rest of the content on the page.
   **/
  innerMaxWidth?: ResponsiveValues<OakAllSpacingToken>;
  /**
   * The current state of the cookie banner.
   *
   * - `initial` - The user has not made any choices.
   * - `accepted` - The user has accepted all cookies.
   * - `rejected` - The user has rejected non-essential cookies.
   */
  state: "accepted" | "rejected" | "initial";
  /**
   * Whether the banner should be fixed to the bottom of the viewport.
   *
   * @default false
   */
  isFixed?: boolean;
};

/**
 * A banner presenting the user with options to accept or reject cookies.
 */
export const OakCookieBanner = ({
  state,
  innerMaxWidth,
  onOpenSettings,
  onHide,
  onAccept,
  onReject,
  isFixed = false,
}: OakCookieBannerProps) => {
  return (
    <OakBox
      $background="bg-neutral"
      $bt="border-solid-s"
      $borderColor="border-neutral"
      $position={isFixed ? "fixed" : undefined}
      $bottom={isFixed ? "all-spacing-0" : undefined}
      $right={isFixed ? "all-spacing-0" : undefined}
      $left={isFixed ? "all-spacing-0" : undefined}
      $zIndex={isFixed ? "always-on-top" : undefined}
      $color="text-primary"
      data-testid="cookie-banner"
    >
      <OakBox $maxWidth={innerMaxWidth} $mh="auto">
        <OakFlex
          $alignItems={["flex-start", "flex-start", "center"]}
          $flexDirection={["column", "column", "row"]}
          $mh={["space-between-s", "space-between-m", "space-between-xl"]}
          $pv="inner-padding-xl"
          $gap={["space-between-m", "space-between-m", "space-between-m2"]}
        >
          {(() => {
            switch (state) {
              case "accepted":
              case "rejected":
                return (
                  <>
                    <OakBox $font={["body-3", "body-2", "heading-light-7"]}>
                      You've{" "}
                      <OakSpan
                        as="strong"
                        $font={["body-3-bold", "body-2-bold", "heading-7"]}
                      >
                        {state}
                      </OakSpan>{" "}
                      additional cookies. You can{" "}
                      <OakSecondaryLink
                        element="button"
                        onClick={onOpenSettings}
                      >
                        change your cookie settings
                      </OakSecondaryLink>{" "}
                      at any time.
                    </OakBox>
                    <OakFlex $justifyContent="flex-end" $flexGrow={1}>
                      <OakSecondaryButton onClick={onHide}>
                        Hide this message
                      </OakSecondaryButton>
                    </OakFlex>
                  </>
                );
              default:
                return (
                  <>
                    <OakBox $font={["body-3", "body-2"]}>
                      <OakSpan
                        as="strong"
                        $font={["body-3-bold", "body-2-bold"]}
                      >
                        This site uses cookies to store information on your
                        computer.
                      </OakSpan>{" "}
                      Some of these cookies are essential, while others help us
                      to improve your experience by providing insights into how
                      the site is being used.
                    </OakBox>
                    <OakFlex
                      $gap={["space-between-xs", "space-between-m2"]}
                      $justifyContent="flex-end"
                      $flexDirection={["column", "row"]}
                      $flexWrap={["wrap", "wrap", "nowrap"]}
                      $flexGrow={1}
                    >
                      <OakFlex
                        $font="heading-7"
                        $whiteSpace="nowrap"
                        $alignItems="center"
                      >
                        <OakSecondaryLink
                          element="button"
                          type="button"
                          onClick={onReject}
                          data-testid="cookie-banner-reject"
                        >
                          Reject non-essential cookies
                        </OakSecondaryLink>
                      </OakFlex>
                      <OakSecondaryButton onClick={onOpenSettings}>
                        Cookie settings
                      </OakSecondaryButton>
                      <OakPrimaryButton
                        onClick={onAccept}
                        data-testid="cookie-banner-accept"
                      >
                        Accept all cookies
                      </OakPrimaryButton>
                    </OakFlex>
                  </>
                );
            }
          })()}
        </OakFlex>
      </OakBox>
    </OakBox>
  );
};
