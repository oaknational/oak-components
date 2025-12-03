import styled from "styled-components";
import React from "react";

import { OakFlex, OakP, OakBox, OakImage } from "@/components/atoms";
import { OakUiRoleToken } from "@/styles";

export type OakQuoteProps = {
  quote: string;
  color?: OakUiRoleToken;
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
    <OakFlex $width={"100%"} $maxWidth={"spacing-640"}>
      {color !== "transparent" && (
        <OakFlex
          $width={"spacing-8"}
          $background={color}
          $mr={"spacing-24"}
          $flexShrink={0}
        />
      )}
      <OakFlex $flexDirection={"column"} $gap={"spacing-16"}>
        <OakBox $font={["heading-7", "heading-6"]} $color={"text-primary"}>
          <TightLetterSpacing>"{quote}"</TightLetterSpacing>
        </OakBox>

        {authorName ? (
          <OakFlex $gap={"spacing-16"} $alignItems={"center"}>
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
