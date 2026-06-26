import React from "react";
import styled from "styled-components";

import {
  OakFlex,
  OakFlexProps,
} from "@/components/layout-and-structure/OakFlex";
import { OakFocusIndicator } from "@/components/messaging-and-feedback/OakFocusIndicator";
import { OakHeading, OakHeadingTag } from "@/components/typography/OakHeading";
import { OakImage } from "@/components/images-and-icons/OakImage";
import { OakP } from "@/components/typography/OakP";
import { OakIconName, OakIcon } from "@/components/images-and-icons/OakIcon";
import { OakSpan } from "@/components/typography/OakSpan";
import { OakTagFunctional } from "@/components/messaging-and-feedback/OakTagFunctional";
import {
  OakCombinedSpacingToken,
  OakAllSpacingToken,
  OakUiRoleToken,
} from "@/styles";
import { sizeStyle, SizeStyleProps } from "@/styles/utils/sizeStyle";
import { flexStyle } from "@/styles/utils/flexStyle";
import { colorStyle, ColorStyleProps } from "@/styles/utils/colorStyle";
import { borderStyle, BorderStyleProps } from "@/styles/utils/borderStyle";

export type OakCardProps = {
  /**
   * The heading text of the card.
   */
  heading: string;
  /**
   * The heading level of the card.
   */
  headingLevel?: OakHeadingTag;
  /**
   * The URL that the card links to.
   */
  href: string;
  /**
   * The orientation of the card.
   */
  /**
   * The background colour behind the image.
   */
  imageBackgroundColor?: OakUiRoleToken;
  cardOrientation?: "row" | "column";
  /**
   * The orientation of the card on small screens.
   */
  smallScreenOrientation?: "row" | "column";
  /**
   * The width of the card.
   */
  cardWidth?: OakCombinedSpacingToken;
  /**
   * The source URL for the image to be displayed in the card.
   */
  imageSrc?: string;
  /**
   * The alternative text for the image, used for accessibility.
   */
  imageAlt?: string;
  /**
   * The aspect ratio of the image.
   */
  aspectRatio?: "1/1" | "4/3";
  /**
   * The subcopy text of the card.
   */
  subCopy?: string;
  /**
   * The color of the subcopy text.
   */
  subCopyColor?: OakUiRoleToken;
  /**
   * The name of a tag to be displayed in the card.
   */
  tagName?: string;
  /**
   * The background colour of the tag.
   */
  tagBackground?: OakUiRoleToken;
  /**
   * The text to be displayed next to the link icon in the card.
   */
  linkText?: string;
  /**
   * The name of the icon to be displayed next to the link text in the card.
   */
  linkIconName?: OakIconName;
  /**
   * The background colour of the card on hover.
   */
  hoverBackground?: OakUiRoleToken;
};

type StyledFlexProps = OakFlexProps;

const StyledOakFlex = styled(OakFlex)<StyledFlexProps>`
  ${flexStyle}

  &:hover {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    span {
      text-decoration: underline;
    }

    span {
      text-decoration-thickness: 18%;
    }
  }
`;

type StyledImageProps = SizeStyleProps & ColorStyleProps & BorderStyleProps;

const StyledOakImage = styled(OakImage)<StyledImageProps>`
  ${sizeStyle}
  ${colorStyle}
  ${borderStyle}

  img {
    border-radius: inherit;
    object-fit: cover;
  }
`;

/**
 * A highly customisable card component that displays a heading and takes a href at minimum.
 *
 * It can also display an image, subcopy, a tag, and a link with an icon.
 *
 * The card can be oriented in a row or column layout and its width can be adjusted using spacing tokens.
 * The image aspect ratio can be set to either 1:1 or 4:3.
 */
export const OakCard = ({
  heading,
  headingLevel = "h3",
  href,
  cardOrientation = "column",
  smallScreenOrientation,
  cardWidth,
  imageSrc,
  imageAlt,
  aspectRatio = "1/1",
  subCopy,
  subCopyColor = "text-primary",
  tagName,
  tagBackground = "bg-decorative3-very-subdued",
  linkText,
  linkIconName = "arrow-right",
  hoverBackground = "bg-btn-secondary-hover",
  imageBackgroundColor = "bg-neutral",
}: OakCardProps) => {
  const flexDirection = smallScreenOrientation
    ? [smallScreenOrientation, cardOrientation]
    : cardOrientation;

  const getImageHeight = (
    orientation: "row" | "column",
  ): OakCombinedSpacingToken => {
    if (orientation === "row") {
      return "spacing-240";
    } else {
      return "auto";
    }
  };

  const ImageHeight = smallScreenOrientation
    ? [getImageHeight(smallScreenOrientation), getImageHeight(cardOrientation)]
    : getImageHeight(cardOrientation);

  const getOakFlexHeight = (
    orientation: "row" | "column",
  ): OakCombinedSpacingToken => {
    if (orientation === "row") {
      return "auto";
    } else {
      return "100%";
    }
  };

  const OakFlexHeight = smallScreenOrientation
    ? [
        getOakFlexHeight(smallScreenOrientation),
        getOakFlexHeight(cardOrientation),
      ]
    : getOakFlexHeight(cardOrientation);

  const getOakFlexPadding = (
    orientation: "row" | "column",
  ): OakAllSpacingToken => {
    if (orientation === "row") {
      return "spacing-24";
    } else {
      return "spacing-0";
    }
  };

  const OakFlexPadding = smallScreenOrientation
    ? [
        getOakFlexPadding(smallScreenOrientation),
        getOakFlexPadding(cardOrientation),
      ]
    : getOakFlexPadding(cardOrientation);

  return (
    <OakFocusIndicator
      $background={"bg-primary"}
      hoverBackground={hoverBackground}
      $height={"100%"}
      $width={cardWidth}
      $borderRadius={"border-radius-m2"}
    >
      <StyledOakFlex
        as="a"
        href={href}
        $flexDirection={flexDirection}
        $height={"100%"}
        $pa={"spacing-16"}
        $gap={"spacing-16"}
        $color={"text-primary"}
      >
        {imageSrc && (
          <StyledOakImage
            src={imageSrc || ""}
            alt={imageAlt || ""}
            $height={ImageHeight}
            $width={"auto"}
            $aspectRatio={aspectRatio}
            $background={imageBackgroundColor}
            $borderRadius={"border-radius-m2"}
          />
        )}
        <OakFlex
          $flexDirection="column"
          $justifyContent={"space-between"}
          $height={OakFlexHeight}
          $pt={OakFlexPadding}
          $pb={OakFlexPadding}
          $gap="spacing-16"
        >
          <OakFlex $flexDirection="column" $gap="spacing-16">
            <OakHeading tag={headingLevel} $font={"heading-6"}>
              {heading}
            </OakHeading>
            {subCopy && <OakP $color={subCopyColor}>{subCopy}</OakP>}
          </OakFlex>
          <OakFlex
            $flexDirection="row"
            $justifyContent={tagName ? "space-between" : "flex-end"}
            $gap="spacing-16"
          >
            {tagName && (
              <OakTagFunctional label={tagName} $background={tagBackground} />
            )}
            {linkText && (
              <OakFlex $alignItems={"center"}>
                <OakSpan $font={"heading-light-7"}>{linkText}</OakSpan>
                <OakIcon
                  iconName={linkIconName}
                  alt=""
                  $width="spacing-24"
                  $height="spacing-24"
                />
              </OakFlex>
            )}
          </OakFlex>
        </OakFlex>
      </StyledOakFlex>
    </OakFocusIndicator>
  );
};
