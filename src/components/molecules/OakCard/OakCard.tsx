import React from "react";
// import styled, { css } from "styled-components";

import { OakFlex, OakHeading, OakImage, OakP } from "@/components/atoms";
import { OakTagFunctional } from "@/components/molecules/OakTagFunctional";
import { OakLink } from "@/components/molecules/OakLink";

// to do: investigate importing molecules from index error


export type OakCardProps = {
  orientation?: "row" | "column";
  imageSrc?: string;
  aspectRatio?: "1/1" | "4/3";
  heading: string;
  subCopy?: string;
  tagName?: string;
  linkText?: string;
  linkIconName?: string; //use defined strings?
  href?: string;
};

// const OakCardCss = css<OakCardProps>``;

// to do: pull out props names
// to do: conditionals
// to do: look up proper prop passing
// to do: styling
// to do : add comments
// to do: use functional tag as span?
// to do: allow text decoration of heading?
// to do: add aspect ratio to oak image
export const OakCard = (props: OakCardProps) => {
  return (
    <div>
      {props.imageSrc && <OakImage
        src={props.imageSrc || ""}
        alt={props.heading}
        $width={"spacing-160"}
        $height={"spacing-160"}
      />}
      <OakHeading tag="h6">{props.heading}</OakHeading>
      {props.subCopy && <OakP>{props.subCopy}</OakP>}
      {props.tagName && <OakTagFunctional label={props.tagName} />}
      {props.href && <OakLink
        href={props.href}
        iconName={props.linkIconName}
        isTrailingIcon={true}
        // iconWidth=""
        // iconHeight=""
      >{props.linkText}</OakLink>}
    </div>
  );
};
