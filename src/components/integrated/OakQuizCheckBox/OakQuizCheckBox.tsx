import React from "react";
import styled from "styled-components";

import { OakBox, OakFlex, OakIcon } from "@/components/base";
import { InternalCheckBox } from "@/components/ui/InternalCheckBox";
import { InternalCheckBoxLabelHoverDecor } from "@/components/ui/InternalCheckBoxLabel";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseBorder } from "@/styles/helpers/parseBorder";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { SubBaseCheckBoxProps } from "@/components/ui/InternalCheckBox/SubStyledCheckBox";

const StyledFlexBox = styled(OakFlex)`
  @media (hover: hover) {
    &:hover:has(input:not(:disabled)){
      background-color: ${parseColor("bg-decorative1-subdued")};
    }

    &:hover:has(
        ${InternalCheckBoxLabelHoverDecor} input:not(:focus-visible):not(:checked):not(:disabled)
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

    & input:checked:not(:disabled) {
      border: ${parseBorder("border-solid-l")};
      border-color: ${parseColor("border-primary")};
    }

    & input:checked:disabled {
      border: ${parseBorder("border-solid-l")};
      border-color: ${parseColor("text-disabled")};
    }

    &:has(input:checked:not(:disabled))::after {
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      position: absolute;
      border: ${parseBorder("border-solid-l")};
      border-radius: ${parseBorderRadius("border-radius-m2")};
   }

   &:has(input:checked:disabled)::after {
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      position: absolute;
      border: ${parseBorder("border-solid-l")};
      border-radius: ${parseBorderRadius("border-radius-m2")};
      border-color: ${parseColor("text-disabled")};
  }


`;

export type OakQuizCheckBoxProps = SubBaseCheckBoxProps & {
  isFeedback?: boolean;
  isCorrect?: boolean;
  image?: React.JSX.Element;
};

const StyledOverlay = styled(OakBox)`
  pointer-events: none;
`;

export const OakQuizCheckBox = (props: OakQuizCheckBoxProps) => {
  const { id, value, isFeedback, isCorrect, image, disabled, ...rest } = props;

  const imageContainer = (
    <OakFlex
      $flexDirection="column"
      $minWidth={"all-spacing-20"}
      $gap={"space-between-s"}
    >
      <OakBox>{image}</OakBox>
      {value}
    </OakFlex>
  );

  const inputCheckbox = (
    <StyledFlexBox
      $pa="inner-padding-l"
      $borderRadius={"border-radius-m2"}
      $borderColor={"border-primary"}
      $background={disabled ? "bg-neutral-stronger" : "bg-primary"}
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
        $color={disabled ? "text-disabled" : "text-primary"}
        $font={"body-1"}
        disabled={disabled}
      >
        <InternalCheckBox
          id={id}
          value={value}
          disabled={disabled}
          {...rest}
          border={"border-solid-m"}
          borderColor="border-neutral"
          iconPadding="inner-padding-ssx"
          borderRadius={"border-radius-s"}
          size={"all-spacing-7"}
          checkedBackground={null}
          checkedIcon={
            <OakBox
              $width="100%"
              $height="100%"
              $background={disabled ? "text-disabled" : "text-primary"}
            >
              <OakBox
                $ba={"border-solid-m"}
                $borderColor={"white"}
                $width={"100%"}
                $height={"100%"}
              />
            </OakBox>
          }
        />
        {image ? imageContainer : value}
      </InternalCheckBoxLabelHoverDecor>
    </StyledFlexBox>
  );

  const feedbackCheckbox = (
    <OakFlex
      $pa="inner-padding-l"
      $background={"bg-primary"}
      $flexGrow={1}
      $gap={"space-between-s"}
      $borderRadius={"border-radius-m2"}
      $alignItems={"center"}
      $font={"body-1"}
    >
      <OakBox
        $position="absolute"
        $top="all-spacing-0"
        $left="all-spacing-0"
        $width="100%"
        $height="100%"
        $ba="border-solid-l"
        $borderRadius={"border-radius-m2"}
        $borderColor={isCorrect ? "border-success" : "border-error"}
      ></OakBox>
      <OakIcon
        iconName={isCorrect ? "tick" : "cross"}
        $colorFilter={isCorrect ? "icon-success" : "icon-error"}
      ></OakIcon>
      {image ? imageContainer : value}
    </OakFlex>
  );

  return (
    <OakFlex $width={"100%"} $position={"relative"}>
      {isFeedback ? feedbackCheckbox : inputCheckbox}
    </OakFlex>
  );
};
