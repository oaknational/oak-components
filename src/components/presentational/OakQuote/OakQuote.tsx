import styled from "styled-components";
import React from "react";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakP } from "@/components/typography/OakP";
import { OakBox } from "@/components/layout-and-structure/OakBox";
import { OakImage } from "@/components/images-and-icons/OakImage";
import { OakUiRoleToken } from "@/styles";

export type OakQuoteProps = {
  quote: string | string[];
  color?: OakUiRoleToken;
  authorName?: string;
  authorTitle?: string;
  authorImageSrc?: string;
  hasLeftBorder?: boolean;
};

const StyledAuthorImage = styled(OakImage)`
  width: 54px;
  height: 54px;
  flex-shrink: 0;
  img {
    border-radius: 50%;
  }
`;

const TightLetterSpacing = styled(OakFlex)`
  letter-spacing: -0.01em;
  @media (min-width: 750px) {
    letter-spacing: -0.02em;
  }
`;

export const OakQuote = ({
  quote,
  color = "bg-decorative1-main",
  authorName,
  authorTitle,
  authorImageSrc,
  hasLeftBorder = true,
}: OakQuoteProps) => {
  const quoteLines = Array.isArray(quote) ? quote : [quote];

  return (
    <OakFlex $width={"100%"} $maxWidth={"spacing-640"}>
      {hasLeftBorder && (
        <OakFlex
          $width={"spacing-8"}
          $background={color}
          $mr={"spacing-24"}
          $flexShrink={0}
        />
      )}
      <OakFlex $flexDirection={"column"} $gap={"spacing-16"}>
        <OakBox $font={["heading-7", "heading-6"]} $color={"text-primary"}>
          <TightLetterSpacing $flexDirection={"column"} $gap={"spacing-12"}>
            {quoteLines.map((quoteLine, quoteLineIndex) => {
              const isFirst = quoteLineIndex === 0;
              const isLast = quoteLineIndex === quoteLines.length - 1;
              return (
                <OakP key={quoteLine}>
                  {isFirst && "\u201C"}
                  {quoteLine}
                  {isLast && "\u201D"}
                </OakP>
              );
            })}
          </TightLetterSpacing>
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
