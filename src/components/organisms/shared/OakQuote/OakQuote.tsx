import styled from "styled-components";
import React from "react";

import { OakFlex, OakP, OakBox, OakImage } from "@/components/atoms";
import { OakCombinedColorToken } from "@/styles";

export type OakQuoteProps = {
  quote: string;
  color?: OakCombinedColorToken;
  authorName?: string;
  authorTitle?: string;
  authorImageSrc?: string;
};

const StyledAuthorImage = styled(OakImage)`
  width: 54px;
  height: 54px;
  flex-shrink: 0;
  img {
    border-radius: 50%;
  }
`;

const TightLetterSpacing = styled(OakBox)`
  letter-spacing: -0.01em;
  @media (min-width: 750px) {
    letter-spacing: -0.02em;
  }
`;

export const OakQuote = (props: OakQuoteProps) => {
  const {
    quote,
    color = "bg-decorative1-main",
    authorName,
    authorTitle,
    authorImageSrc,
  } = props;

  return (
    <OakFlex $width={"100%"} $maxWidth={"all-spacing-22"}>
      <OakFlex
        $width={"all-spacing-2"}
        $background={color}
        $mr={"space-between-m"}
        $flexShrink={0}
      />
      <OakFlex $flexDirection={"column"} $gap={"space-between-s"}>
        <OakP $font={["heading-7", "heading-6"]} $color={"text-primary"}>
          <TightLetterSpacing>“{quote}”</TightLetterSpacing>
        </OakP>

        {authorName ? (
          <OakFlex $gap={"space-between-s"} $alignItems={"center"}>
            {authorImageSrc ? (
              <StyledAuthorImage
                alt={""}
                role={"presentation"}
                src={authorImageSrc}
              />
            ) : null}
            <OakFlex $flexDirection={"column"}>
              <OakP $font={"body-2-bold"} $color={"text-primary"}>
                {authorName}
              </OakP>
              {authorTitle ? (
                <OakP $font={"body-2"} $color={"text-primary"}>
                  {authorTitle}
                </OakP>
              ) : null}
            </OakFlex>
          </OakFlex>
        ) : null}
      </OakFlex>
    </OakFlex>
  );
};
