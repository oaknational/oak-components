import React from "react";
// import styled, { css } from "styled-components";

import { OakBox, OakFlex, OakHeading, OakImage, OakP } from "@/components/atoms";
import { OakTagFunctional } from "@/components/molecules/OakTagFunctional";
import { OakLink } from "@/components/molecules/OakLink";

// to do: investigate importing molecules from index error


export type OakCardProps = {
  heading: string;
  cardOrientation?: "row" | "column";
  imageSrc?: string;
  aspectRatio?: "1/1" | "4/3";
  subCopy?: string;
  tagName?: string;
  linkText?: string;
  linkIconName?: string; //use defined strings?
  href?: string;
};

// const OakCardCss = css<OakCardProps>``;

// to do: styling
// to do: add comments
// to do: allow text decoration of heading?
// to do: how to handle oak box styling - props pass?
export const OakCard = ({
  heading,
  cardOrientation = "column",
  imageSrc = "",
  aspectRatio = "1/1",
  subCopy = "",
  tagName = "",
  linkText = "",
  linkIconName = "",
  href = "",
  }: OakCardProps) => {
  return (
    <OakFlex $flexDirection={cardOrientation ?? "column"}>
      <OakBox $background={"bg-primary"}>
        {imageSrc && <OakImage
          src={imageSrc || ""}
          alt={heading}
          $width={"spacing-160"}
          $height={"spacing-160"}
          $objectFit={aspectRatio === "1/1" ? "cover" : "contain"}
        />}
        <OakFlex $flexDirection="column" $gap="spacing-16">
          <OakHeading $font={"heading-6"} tag="h3">{heading}</OakHeading>
          {subCopy && <OakP>{subCopy}</OakP>}
          <OakFlex $flexDirection="row">
            {tagName && <OakTagFunctional label={tagName} $background={"bg-decorative3-very-subdued"}/>}
            {href && <OakLink
              href={href}
              iconName={linkIconName}
              isTrailingIcon={true}
              // iconWidth=""
              // iconHeight=""
            >{linkText}</OakLink>}
          </OakFlex>
        </OakFlex>
      </OakBox>
    </OakFlex>
  );
};
