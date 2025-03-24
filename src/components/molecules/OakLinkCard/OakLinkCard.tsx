import React, { ReactNode } from "react";
import styled from "styled-components";

import { OakHandDrawnCardWithIcon } from "../OakHandDrawnCardWithIcon";
import { OakPromoTag } from "../OakPromoTag";

import { OakFlex, OakBox, OakIconName, OakIconProps } from "@/components/atoms";
import { InternalStyledSvgProps } from "@/components/atoms/InternalStyledSvg";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";

const StyledOakFlexAsLink = styled(OakFlex)`
  cursor: pointer;
  outline: none;
  &:focus-visible {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }
`;

export type OakLinkCardProps = {
  /**
   * The main content section including header, body, and link.
   */
  mainSection: ReactNode;
  /**
   * The name of the icon to be displayed in the card.
   */
  iconName: OakIconName;
  /**
   * The alternative text for the icon, used for accessibility.
   */
  iconAlt: string;
  /**
   * The color filter applied to the icon.
   */
  iconColor?: OakIconProps["$colorFilter"];
  /**
   * The fill color applied inside the icon.
   */
  iconFill?: InternalStyledSvgProps["$fill"];
  /**
   * The URL that the entire card navigates to when clicked.
   */
  href: string;
  /**
   * Whether to display the "New" promo tag in the top-left corner.
   */
  showNew?: boolean;
  /**
   * Whether to display the card in a narrow layout.
   */
  narrow?: boolean;
};

/**
 * A card component that displays an icon, text content, and an external link.
 *
 * ## Props
 *
 * - **mainSection** - Main content (ReactNode) - Can include OakHeading, OakP, OakLink, etc.
 * - **iconName** - Name of the icon to be displayed
 * - **iconAlt** - Alternative text for the icon (for accessibility)
 * - **iconColor** - Optional color filter for the icon
 * - **iconFill** - Optional fill color for the icon
 * - **href** - Destination URL when the card is clicked
 * - **showNew** - Whether to display the "New" promo tag
 * - **narrow** - Whether to display the card in a narrow layout
 */
export const OakLinkCard = ({
  mainSection,
  iconName = "books",
  iconAlt = "",
  iconColor = "black",
  iconFill = "bg-decorative1-main",
  href,
  showNew = false,
  narrow = false,
}: OakLinkCardProps) => {
  return (
    <StyledOakFlexAsLink
      as="a"
      href={href}
      $flexDirection={narrow ? "column-reverse" : ["column-reverse", "row"]}
      $alignItems={narrow ? "flex-start" : ["flex-start", "center"]}
      $justifyContent="space-between"
      $gap={"space-between-m2"}
      $background="bg-primary"
      $pa="inner-padding-xl"
      $borderRadius="border-radius-m2"
      $width="100%"
      $dropShadow={"drop-shadow-centred-standard"}
    >
      <OakBox $width={"100%"}>{mainSection}</OakBox>

      <OakBox $position="relative">
        <OakHandDrawnCardWithIcon
          iconName={iconName}
          alt={iconAlt}
          iconWidth={
            narrow ? ["all-spacing-11"] : ["all-spacing-11", "all-spacing-15"]
          }
          iconHeight={
            narrow ? ["all-spacing-11"] : ["all-spacing-11", "all-spacing-15"]
          }
          $width={
            narrow ? ["all-spacing-13"] : ["all-spacing-13", "all-spacing-17"]
          }
          $height={
            narrow ? ["all-spacing-13"] : ["all-spacing-13", "all-spacing-17"]
          }
          fill={iconFill}
          iconColor={iconColor}
        />
        {showNew && (
          <OakBox
            $position={"absolute"}
            $top={
              narrow ? ["all-spacing-0"] : ["all-spacing-0", "all-spacing-2"]
            }
            $left={
              narrow ? ["all-spacing-0"] : ["all-spacing-0", "all-spacing-2"]
            }
            data-testid="oak-new-promo-tag"
            $zIndex="in-front"
            aria-hidden="true"
          >
            <OakPromoTag />
          </OakBox>
        )}
      </OakBox>
    </StyledOakFlexAsLink>
  );
};
