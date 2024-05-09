import React, { ReactElement, ReactNode } from "react";
import styled, { css } from "styled-components";

import {
  OakFlex,
  OakP,
  OakCloudinaryImage,
  OakHeading,
  OakBox,
  OakImage,
  OakMaxWidth,
} from "@/components/atoms";

export type OakHeaderProps = {
  headingTitle: string;
  heroImageSrc: string;
  authorImageSrc: string;
  authorName: string;
  authorTitle: string;
  subHeadingText: string;
  breadcrumbs?: ReactElement;
  children?: ReactNode;
};

// By adding the style css utils to this components css your component will be able to accept corresponding props and prop values.
// you can also add custom styles to the component by adding the styles to the css template literal below

const StyledOakImage = styled(OakImage)`
  width: 50px;
  height: 50px;
  margin-right: 12px;
  img {
    border-radius: 69px;
  }
`;

const OakHeaderCss = css<OakHeaderProps>``;

const UnstyledComponent = (props: OakHeaderProps) => {
  const {
    headingTitle,
    breadcrumbs,
    authorName,
    authorTitle,
    subHeadingText,
    heroImageSrc,
    authorImageSrc,
  } = props;
  return (
    <OakMaxWidth $background={"lavender"} $zIndex={"behind"}>
      <OakFlex
        $minWidth={"100%"}
        $flexDirection={["column-reverse", "column-reverse", "row"]}
        $justifyContent={"space-around"}
        $alignItems={["center", null]}
        $minHeight={"all-spacing-20"}
        data-testid="test"
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
              <StyledOakImage
                alt={`${authorName} profile image`}
                src={authorImageSrc}
                $zIndex={"in-front"}
              />
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
    </OakMaxWidth>
  );
};

/**
 *
 * Oak Heading component with hero image, can be used for blog posts, articles, and other content pages.
 *
 * This Oak component can be passed the OWA breadcrumbs component as a prop. Currently this component does not exist in the component library.
 */
export const OakHeader = styled(UnstyledComponent)`
  ${OakHeaderCss}
`;
