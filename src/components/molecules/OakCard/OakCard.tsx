import React from "react";
import styled from "styled-components";

import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { OakFlex, OakHeading, OakImage, OakP, OakIconName } from "@/components/atoms";
import { OakTagFunctional } from "@/components/molecules/OakTagFunctional";
import { OakLink } from "@/components/molecules/OakLink";
import { OakCombinedSpacingToken } from "@/styles";

export type OakCardProps = {
  heading: string;
  cardOrientation?: "row" | "column";
  cardWidth?: OakCombinedSpacingToken;
  imageSrc?: string;
  imageAlt?: string;
  aspectRatio?: "1/1" | "4/3";
  subCopy?: string;
  tagName?: string;
  linkText?: string;
  linkIconName?: OakIconName;
  href?: string;
};

type StyledProps = {
  $height: OakCombinedSpacingToken;
  $width: OakCombinedSpacingToken;
  $aspectRatio: "1/1" | "4/3";
};

const StyledOakImage = styled(OakImage)<StyledProps>`
  height: ${({ $height }) => parseSpacing($height)};
  width: ${({ $width }) => $width};
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};

  img {
    border-radius: ${parseBorderRadius("border-radius-m2")};
    object-fit: cover;
  }
`;

// to do: add comments
// to do: make whole card clickable if href provided
// to do: allow text decoration of heading?
// to do: order styles
// to do: fix height/width auto errors
// to do: storybook controls
// to do: storybook documentation
// to do: tests
// to do: focus and hover state behaviours
export const OakCard = ({
  heading,
  cardOrientation = "column",
  cardWidth,
  imageSrc,
  imageAlt,
  aspectRatio = "1/1",
  subCopy,
  tagName,
  linkText,
  linkIconName,
  href,
  }: OakCardProps) => {
  return (
    <OakFlex
      $flexDirection={cardOrientation}
      $width={cardWidth}
      $pa={"spacing-16"}
      $gap={"spacing-16"}
      $background={"bg-neutral"}
      $borderRadius={"border-radius-m2"}
    >
      {imageSrc && <StyledOakImage
        src={imageSrc || ""}
        alt={imageAlt || ""}
        $height={cardOrientation === "row" ? "spacing-240" : "auto"}
        $width={"auto"}
        $aspectRatio={aspectRatio}
      />}
      <OakFlex
        $flexDirection="column"
        $justifyContent={"space-between"}
        $pt={cardOrientation === "row" ? "spacing-24" : "spacing-0"}
        $pb={cardOrientation === "row" ? "spacing-24" : "spacing-0"}
        $gap="spacing-16"
      >
        <OakFlex
          $flexDirection="column"
          $gap="spacing-16"
        >
          <OakHeading
            tag="h3"
            $font={"heading-6"}
          >
            {heading}
          </OakHeading>
          {subCopy && <OakP>{subCopy}</OakP>}
        </OakFlex>
        <OakFlex
          $flexDirection="row"
          $justifyContent={"space-between"}
          $gap="spacing-16"
        >
          {tagName && <OakTagFunctional
            label={tagName}
            $background={"bg-decorative3-very-subdued"}
          />}
          {href && <OakLink
            href={href}
            isTrailingIcon={true}
            iconName={linkIconName}
            color={"bg-btn-primary"}
          >{linkText}</OakLink>}
        </OakFlex>
      </OakFlex>
    </OakFlex>
  );
};
