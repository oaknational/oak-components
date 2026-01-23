import React, { ReactNode } from "react";
import styled from "styled-components";

import { OakHandDrawnCardWithIcon } from "@/components/owa/OakHandDrawnCardWithIcon";
import { OakPromoTag } from "@/components/owa/OakPromoTag";
import {
  OakFlex,
  OakFlexProps,
} from "@/components/layout-and-structure/OakFlex";
import {
  OakIconName,
  OakIconProps,
} from "@/components/images-and-icons/OakIcon";
import { OakBox } from "@/components/layout-and-structure/OakBox";
import { InternalStyledSvgProps } from "@/components/internal-components/InternalStyledSvg";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";

type OakFlexPropsWithAnimation = OakFlexProps & {
  hasAnimation?: boolean;
};
const StyledOakFlexAsLink = styled(OakFlex)<OakFlexPropsWithAnimation>`
  animation: ${({ hasAnimation }) =>
    hasAnimation ? "background-fade 2s ease-in-out" : "none"};
  animation-delay: 0.5s;
  cursor: pointer;
  outline: none;
  &:focus-visible {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }

  @keyframes background-fade {
    from {
      background-color: ${parseColor("bg-decorative1-main")};
    }
    to {
      transform: ${parseColor("bg-primary")};
    }
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
  /**
   * Whether to apply a background animation effect.
   */
  hasAnimation?: boolean;
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
  iconColor = "icon-primary",
  iconFill = "bg-decorative1-main",
  href,
  showNew = false,
  hasAnimation = false,
  narrow = false,
}: OakLinkCardProps) => {
  return (
    <StyledOakFlexAsLink
      hasAnimation={hasAnimation}
      as="a"
      href={href}
      $flexDirection={narrow ? "column-reverse" : ["column-reverse", "row"]}
      $alignItems={narrow ? "flex-start" : ["flex-start", "center"]}
      $justifyContent="space-between"
      $gap={"spacing-32"}
      $background={"bg-primary"}
      $pa="spacing-24"
      $borderRadius="border-radius-m2"
      $width="100%"
      $dropShadow={"drop-shadow-centred-standard"}
    >
      <OakBox $width={"100%"}>{mainSection}</OakBox>
      <OakBox $position="relative">
        <OakHandDrawnCardWithIcon
          iconName={iconName}
          alt={iconAlt}
          iconWidth={narrow ? ["spacing-64"] : ["spacing-64", "spacing-100"]}
          iconHeight={narrow ? ["spacing-64"] : ["spacing-64", "spacing-100"]}
          $width={narrow ? ["spacing-80"] : ["spacing-80", "spacing-160"]}
          $height={narrow ? ["spacing-80"] : ["spacing-80", "spacing-160"]}
          fill={iconFill}
          iconColor={iconColor}
        />
        {showNew && (
          <OakBox
            $position={"absolute"}
            $top={narrow ? ["spacing-0"] : ["spacing-0", "spacing-8"]}
            $left={narrow ? ["spacing-0"] : ["spacing-0", "spacing-8"]}
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
