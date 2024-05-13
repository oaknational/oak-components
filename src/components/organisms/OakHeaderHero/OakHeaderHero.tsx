import React, { ReactElement, ReactNode } from "react";
import styled, { css } from "styled-components";

import {
  OakFlex,
  OakP,
  OakHeading,
  OakBox,
  OakImage,
  OakMaxWidth,
  OakIcon,
} from "@/components/atoms";

export type OakHeaderHeroProps = {
  headingTitle: string;
  heroImageSrc: string;
  authorImageSrc: string;
  authorName: string;
  authorTitle: string;
  subHeadingText: string;
  breadcrumbs: ReactElement;
  children?: ReactNode;
};

const StyledAutorImage = styled(OakImage)`
  width: 50px;
  height: 50px;
  margin-right: 12px;
  img {
    border-radius: 50%;
  }
`;

const OakHeaderHeroCss = css<OakHeaderHeroProps>``;

const UnstyledComponent = (props: OakHeaderHeroProps) => {
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
    <OakBox $width={"100%"} $background={"bg-decorative3-main"}>
      <OakMaxWidth>
        <OakFlex
          $minWidth={"100%"}
          $flexDirection={["column-reverse", "column-reverse", "row"]}
          $alignItems={["center", null]}
          $minHeight={"all-spacing-20"}
          $background={"bg-decorative3-main"}
          $zIndex={"neutral"}
          $justifyContent={["space-between"]}
          data-testid="oak-header-component"
        >
          <OakFlex
            $alignSelf={"flex-start"}
            $ph={"inner-padding-m"}
            $height={"100%"}
            $flexDirection={"column"}
          >
            <OakBox
              $display={["none", "none", "block"]}
              $pv={"inner-padding-xl"}
            >
              {breadcrumbs}
            </OakBox>
            <OakFlex
              $flexDirection={"column"}
              $maxWidth={"all-spacing-22"}
              $minHeight={["all-spacing-0", "all-spacing-0", "all-spacing-20"]}
              $mb={[
                "space-between-none",
                "space-between-l",
                "space-between-none",
              ]}
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
                <StyledAutorImage
                  alt={`${authorName} profile image`}
                  src={authorImageSrc}
                  $zIndex={"in-front"}
                />
                <OakBox>
                  <OakHeading tag="h3" $font={"heading-7"}>
                    {authorName}
                  </OakHeading>
                  <OakP $font={"body-1"}>{authorTitle}</OakP>
                </OakBox>
              </OakFlex>
              <OakP $mb={["space-between-l", "space-between-none"]}>
                {subHeadingText}
              </OakP>
            </OakFlex>
          </OakFlex>

          <OakFlex
            $position={"relative"}
            $minHeight={["all-spacing-18", "all-spacing-21", "all-spacing-21"]}
            $alignItems={"center"}
            $justifyContent={"center"}
            $mb={[
              "space-between-none",
              "space-between-m2",
              "space-between-none",
            ]}
          >
            <OakImage
              $transform={"rotate(-2.025deg)"}
              src={heroImageSrc}
              width={100}
              $minHeight={[
                "all-spacing-19",
                "all-spacing-20",
                "all-spacing-20",
              ]}
              $minWidth={["all-spacing-19", "all-spacing-22", "all-spacing-21"]}
              alt={`${headingTitle} hero image`}
              $zIndex={"in-front"}
            />
            <OakFlex
              $position={"absolute"}
              $top={"all-spacing-0"}
              $bottom={"all-spacing-0"}
              $width={["all-spacing-20", "all-spacing-23", "all-spacing-23"]}
            >
              <OakIcon
                iconName="loopdown"
                alt="loopdown ui-graphic"
                $position={"absolute"}
                $height={"100%"}
                $width={"100%"}
              />
            </OakFlex>
          </OakFlex>
          <OakFlex
            $alignSelf={"flex-start"}
            $ml={"space-between-m"}
            $pt={"inner-padding-xl"}
            $pb={[null, "inner-padding-xl"]}
            $display={["block", "block", "none"]}
          >
            {breadcrumbs}
          </OakFlex>
        </OakFlex>
      </OakMaxWidth>
    </OakBox>
  );
};

/**
 *
 * Oak Heading component with hero image, can be used for blog posts, articles, and other content pages.
 *
 * This Oak component can be passed the OWA breadcrumbs component as a prop. Currently this component does not exist in the component library.
 */
export const OakHeaderHero = styled(UnstyledComponent)`
  ${OakHeaderHeroCss}
`;
