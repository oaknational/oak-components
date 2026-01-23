import React from "react";
import styled from "styled-components";

import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import {
  OakFlex,
  OakFocusIndicator,
  OakHeading,
  OakImage,
  OakP,
  OakIconName,
  OakLabel,
  OakIcon,
} from "@/components/atoms";
import { OakTagFunctional } from "@/components/molecules/OakTagFunctional";
import { OakCombinedSpacingToken, OakAllSpacingToken, OakInnerPaddingToken, OakUiRoleToken } from "@/styles";

export type OakCardProps = {
  /**
   * The heading text of the card.
   */
  heading: string;
  /**
   * The URL that the card links to.
   */
  href: string;
  /**
   * The orientation of the card.
   */
  cardOrientation?: "row" | "column";
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
};

type StyledFlexProps = {
  $flexDirection: "row" | "column";
  $pa: OakInnerPaddingToken;
  $gap: OakAllSpacingToken;
};

const StyledOakFlex = styled(OakFlex)<StyledFlexProps>`
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  pa: ${({ $pa }) => parseSpacing($pa)};
  gap: ${({ $gap }) => parseSpacing($gap)};

  &:hover {
    h3 {
      text-decoration: underline;
    }
  }
`;

type StyledImageProps = {
  $height: OakCombinedSpacingToken;
  $width: OakCombinedSpacingToken;
  $aspectRatio: "1/1" | "4/3";
};

const StyledOakImage = styled(OakImage)<StyledImageProps>`
  height: ${({ $height }) => parseSpacing($height)};
  width: ${({ $width }) => $width};
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};

  img {
    border-radius: ${parseBorderRadius("border-radius-m2")};
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
  href,
  cardOrientation = "column",
  cardWidth,
  imageSrc,
  imageAlt,
  aspectRatio = "1/1",
  subCopy,
  tagName,
  tagBackground = "bg-decorative3-very-subdued",
  linkText,
  linkIconName = "arrow-right",
}: OakCardProps) => {
  return (
    <OakFocusIndicator
      hoverBackground={"bg-btn-secondary-hover"}
      $width={cardWidth}
      $borderRadius={"border-radius-m2"}
      $overflow={"hidden"}
    >
      <StyledOakFlex
        as="a"
        href={href}
        $flexDirection={cardOrientation}
        $pa={"spacing-16"}
        $gap={"spacing-16"}
        $color={"black"}
      >
        {imageSrc && (
          <StyledOakImage
            src={imageSrc || ""}
            alt={imageAlt || ""}
            $height={cardOrientation === "row" ? "spacing-240" : "auto"}
            $width={"auto"}
            $aspectRatio={aspectRatio}
          />
        )}
        <OakFlex
          $flexDirection="column"
          $justifyContent={"space-between"}
          $pt={cardOrientation === "row" ? "spacing-24" : "spacing-0"}
          $pb={cardOrientation === "row" ? "spacing-24" : "spacing-0"}
          $gap="spacing-16"
        >
          <OakFlex $flexDirection="column" $gap="spacing-16">
            <OakHeading tag="h3" $font={"heading-6"}>
              {heading}
            </OakHeading>
            {subCopy && <OakP>{subCopy}</OakP>}
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
                <OakLabel>{linkText}</OakLabel>
                <OakIcon
                  iconName={linkIconName}
                  alt={linkIconName}
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
