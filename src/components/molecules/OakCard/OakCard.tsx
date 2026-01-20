import React from "react";
import styled, { css } from "styled-components";

import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import { parseSpacing } from "@/styles/helpers/parseSpacing";

import { OakBox, OakFlex, OakHeading, OakImage, OakP } from "@/components/atoms";
import { OakTagFunctional } from "@/components/molecules/OakTagFunctional";
import { OakLink } from "@/components/molecules/OakLink";

// to do: investigate importing molecules from index error


export type OakCardProps = {
  heading: string;
  cardOrientation?: "row" | "column";
  cardWidth?: string;
  imageSrc?: string;
  aspectRatio?: "1/1" | "4/3";
  subCopy?: string;
  tagName?: string;
  linkText?: string;
  linkIconName?: string; //use defined strings?
  href?: string;
};

// const OakCardCss = css<OakCardProps>``;

type StyledProps = {
  $height: string;
  $width: string;
  $aspectRatio: string;
  $objectFit: string;
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

// to do: styling
// to do: add comments
// to do: allow text decoration of heading?
// to do: how to handle oak box styling - props pass?
// to do: order styles
// to do: border radius on image
export const OakCard = ({
  heading,
  cardOrientation = "column",
  cardWidth = "fit-content",
  imageSrc = "",
  aspectRatio = "1/1",
  subCopy = "",
  tagName = "",
  linkText = "",
  linkIconName = "",
  href = "",
  }: OakCardProps) => {
  return (
    <OakFlex
      $flexDirection={cardOrientation}
      $borderRadius={"border-radius-m2"}
      $background={"bg-neutral"}
      $width={cardWidth}
      $gap={"spacing-16"}
      $pa={"spacing-16"}
    >
      {imageSrc && <StyledOakImage
        src={imageSrc || ""}
        alt={heading}
        $height={cardOrientation === "row" ? "spacing-240" : undefined}
        $width={"auto"}
        $aspectRatio={aspectRatio}
        $objectFit={"cover"}
      />}
      <OakFlex
        $flexDirection="column"
        $gap="spacing-16"
        $pt={cardOrientation === "row" ? "spacing-24" : 0}
        $pb={cardOrientation === "row" ? "spacing-24" : 0}
        $justifyContent={"space-between"}
      >
        <OakFlex
          $flexDirection="column"
          $gap="spacing-16"
        >
          <OakHeading $font={"heading-6"} tag="h3">{heading}</OakHeading>
          {subCopy && <OakP>{subCopy}</OakP>}
        </OakFlex>
        <OakFlex
          $flexDirection="row"
          $justifyContent={"space-between"}
          $gap="spacing-16"
        >
          {tagName && <OakTagFunctional label={tagName} $background={"bg-decorative3-very-subdued"}/>}
          {href && <OakLink
            href={href}
            iconName={linkIconName}
            isTrailingIcon={true}
            // iconWidth=""
            // iconHeight=""
            $color={"bg-btn-primary"}
            $textDecoration={"none"}
          >{linkText}</OakLink>}
        </OakFlex>
      </OakFlex>
    </OakFlex>
  );
};
