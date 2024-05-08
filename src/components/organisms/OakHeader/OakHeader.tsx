import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

import {
  OakFlex,
  OakP,
  OakCloudinaryImage,
  OakHeading,
  OakBox,
  OakImage,
} from "@/components/atoms";
import { OakColorToken } from "@/styles";
import { colorStyle, ColorStyleProps } from "@/styles/utils/colorStyle";

export type OakHeaderProps = {
  headingTitle: string;
  backgroundColour: OakColorToken;
  heroImageSrc: string;
  authorImageSrc: string;
  authorName: string;
  authorTitle: string;
  subHeadingText: string;
  breadcrumbs: ReactNode;
} & ColorStyleProps;

// By adding the style css utils to this components css your component will be able to accept corresponding props and prop values.
// you can also add custom styles to the component by adding the styles to the css template literal below

const OakHeaderCss = css<OakHeaderProps>`
  ${colorStyle}
`;

/**
 *
 * add default and custom styles to the component by adding the styles to the css template literal below
 *
 * ${typographyStyle}
 * ${colorStyle}
 * ${spacingStyle}
 * ${displayStyle}
 * ${borderStyle}
 * ${dropShadowStyle}
 * ${colorFilterStyle}
 *
 */

const UnstyledComponent = (props: OakHeaderProps) => {
  const {
    headingTitle,
    breadcrumbs,
    backgroundColour,
    authorName,
    authorTitle,
    subHeadingText,
    heroImageSrc,
    authorImageSrc,
  } = props;
  return (
    <OakFlex
      $width={"100%"}
      $flexDirection={["column-reverse", "column-reverse", "row"]}
      $background={backgroundColour}
      $justifyContent={"space-around"}
      $alignItems={["center", null]}
      $minHeight={"all-spacing-20"}
      $zIndex={"behind"}
    >
      <OakFlex
        $alignSelf={"flex-start"}
        $ph={"inner-padding-m"}
        $height={"100%"}
        $flexDirection={"column"}
      >
        <OakBox $display={["none", "none", "block"]} $pv={"inner-padding-xl"}>
          {breadcrumbs}
        </OakBox>
        <OakFlex
          $flexDirection={"column"}
          $maxWidth={"all-spacing-22"}
          $minHeight={"all-spacing-20"}
          $justifyContent={"center"}
        >
          <OakHeading
            tag="h2"
            $color={"grey80"}
            $font={["heading-4", "heading-3"]}
            $mb={"space-between-m"}
          >
            {headingTitle}
          </OakHeading>
          <OakFlex
            $mb={"space-between-m"}
            $flexDirection={"row"}
            $alignItems={"center"}
          >
            <OakImage
              $borderRadius={"border-radius-circle"}
              $mr={"space-between-xs"}
              $background={"white"}
              $height={"all-spacing-12"}
              $width={"all-spacing-12"}
              alt={`${authorName} profile image`}
              src={authorImageSrc}
            ></OakImage>
            <OakBox>
              <OakHeading tag="h3" $font={"heading-7"}>
                {authorName}
              </OakHeading>
              <OakP>{authorTitle}</OakP>
            </OakBox>
          </OakFlex>
          <OakP $mb={["space-between-l", "space-between-none"]}>
            {subHeadingText}
          </OakP>
        </OakFlex>
      </OakFlex>

      <OakFlex
        $minWidth={["all-spacing-18", "all-spacing-21"]}
        $minHeight={["all-spacing-18", "all-spacing-21"]}
        $position={"relative"}
        $alignItems={"center"}
        $justifyContent={"center"}
      >
        <OakImage
          $transform={"rotate(-2.025deg)"}
          src={heroImageSrc}
          $minHeight={["all-spacing-16", "all-spacing-21", "all-spacing-20"]}
          $minWidth={["all-spacing-16", "all-spacing-21", "all-spacing-21"]}
          alt={`${headingTitle} hero image`}
          $zIndex={"in-front"}
        />
        <OakFlex
          $position={"absolute"}
          $top={"all-spacing-0"}
          $bottom={"all-spacing-0"}
          $width={["all-spacing-21", "all-spacing-23"]}
        >
          <OakCloudinaryImage
            cloudinaryId="https://res.cloudinary.com/oak-web-application/image/upload/v1699887218/ui-graphics/loopdown.svg"
            alt="loopdown ui-graphic"
            $position={"absolute"}
            $height={"100%"}
          />
        </OakFlex>
      </OakFlex>
      <OakFlex
        $alignSelf={"flex-start"}
        $ml={"space-between-m"}
        $pv={"inner-padding-xl"}
        $display={["block", "block", "none"]}
      >
        {breadcrumbs}
      </OakFlex>
    </OakFlex>
  );
};

/**
 *
 * Oak Heading component with hero image, can be used for blog posts, articles, and other content pages.
 *
 * This Oak component can be passed the OWA breadcrumbs component as a prop.
 */
export const OakHeader = styled(UnstyledComponent)`
  ${OakHeaderCss}
`;
