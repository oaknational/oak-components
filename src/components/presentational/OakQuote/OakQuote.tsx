import styled from "styled-components";
import React from "react";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakP } from "@/components/typography/OakP";
import { OakBox } from "@/components/layout-and-structure/OakBox";
import { OakUiRoleToken } from "@/styles";
import { OakBio } from "@/components/presentational/OakBio";

export type OakQuoteProps = {
  quote: string | string[];
  color?: OakUiRoleToken;
  authorName?: string;
  authorTitle?: string;
  authorImageSrc?: string;
  hasLeftBorder?: boolean;
};

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
        {authorName && (
          <OakBio
            name={authorName}
            title={authorTitle}
            imageSrc={authorImageSrc}
          />
        )}
      </OakFlex>
    </OakFlex>
  );
};
