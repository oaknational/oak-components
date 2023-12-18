import React from "react";
import styled from "styled-components";

import { OakBox, OakFlex, OakFlexProps } from "@/components/base";
import { InternalCheckBox } from "@/components/ui/InternalCheckBox";
import { InternalCheckBoxLabelHoverDecor } from "@/components/ui/InternalCheckBoxLabel";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseBorder } from "@/styles/helpers/parseBorder";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";

const StyledFlexBox = styled(OakFlex)<OakFlexProps & { checkBoxId: string }>`
  @media (hover: hover) {
    &:hover {
      background-color: ${parseColor("bg-decorative1-subdued")};
    }

    &:hover:has(
        ${InternalCheckBoxLabelHoverDecor} input:not(:focus-visible)
      )::after {
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      position: absolute;
      border-bottom: ${parseBorder("border-solid-xl")};
      border-radius: ${parseBorderRadius("border-radius-m2")};
    }

    &:hover ${InternalCheckBoxLabelHoverDecor} {
      text-decoration: underline;
    }

    &
      .yellow-shadow:has(
        + ${InternalCheckBoxLabelHoverDecor} input:focus-visible
      ) {
      box-shadow: ${parseDropShadow("drop-shadow-centered-yellow")};
    }

    &
      .grey-shadow:has(
        ~ ${InternalCheckBoxLabelHoverDecor} input:focus-visible
      ) {
      box-shadow: ${parseDropShadow("drop-shadow-centered-grey")};
    }
  }
`;

export type OakQuizCheckBoxProps = {
  id: string;
  value: string;
  isFeedback?: boolean;
  isCorrect?: boolean;
};

const StyledOverlay = styled(OakBox)`
  pointer-events: none;
`;

export const OakQuizCheckBox = (props: OakQuizCheckBoxProps) => {
  const { id, value } = props;

  return (
    <OakFlex $width={"100%"} $position={"relative"}>
      <StyledFlexBox
        checkBoxId={id}
        $pa="inner-padding-l"
        $borderRadius={"border-radius-m2"}
        $borderColor={"border-primary"}
        $background={"bg-primary"}
        $flexGrow={1}
      >
        <StyledOverlay
          className="grey-shadow"
          $position={"absolute"}
          $left={"space-between-none"}
          $top={"space-between-none"}
          $borderRadius={"border-radius-m2"}
          $width={"100%"}
          $height={"100%"}
        />

        <StyledOverlay
          className="yellow-shadow"
          $position={"absolute"}
          $borderRadius={"border-radius-m2"}
          $left={"space-between-none"}
          $top={"space-between-none"}
          $width={"100%"}
          $height={"100%"}
        />
        <InternalCheckBoxLabelHoverDecor
          htmlFor={id}
          labelGap={"space-between-s"}
          labelAlignItems={"center"}
          $color={"text-primary"}
          $font={"body-1"}
        >
          <InternalCheckBox
            id={id}
            value={value}
            borderColor="border-neutral"
            borderRadius={"border-radius-s"}
            size={"all-spacing-7"}
          />
          {value}
        </InternalCheckBoxLabelHoverDecor>
      </StyledFlexBox>
    </OakFlex>
  );
};
