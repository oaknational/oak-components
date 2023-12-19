import React, { useRef } from "react";
import styled from "styled-components";

import { OakBox, OakFlex, OakIcon } from "@/components/base";
import { InternalCheckBoxWrapper } from "@/components/base/InternalCheckBoxWrapper";
import { InternalCheckBoxLabelHoverDecor } from "@/components/base/InternalCheckBoxLabel";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseBorder } from "@/styles/helpers/parseBorder";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import {
  BaseCheckBoxProps,
  InternalCheckBox,
} from "@/components/base/InternalCheckBox/InternalCheckBox";

const StyledInternalCheckBox = styled(InternalCheckBox)`
  &:checked:not(:disabled) {
    border: ${parseBorder("border-solid-l")};
    border-color: ${parseColor("border-primary")};
  }

  &:checked:disabled {
    border: ${parseBorder("border-solid-l")};
    border-color: ${parseColor("text-disabled")};
  }

  @media (hover: hover) {
    &:hover:not(:disabled) {
      background: ${parseColor("bg-primary")};
    }
  }
`;

const StyledFlexBox = styled(OakFlex)`
  &:has(input:not(:disabled)) {
    cursor: pointer;
  }

  &:has(input:disabled) {
    pointer-events: none;
    cursor: none;
  }

  @media (hover: hover) {
    &:hover:has(input:not(:disabled)){
      background-color: ${parseColor("bg-decorative1-subdued")};
    }

    &:hover input:not(:disabled) {
      background: ${parseColor("bg-primary")};
    }

    &:hover:has(input:not(:disabled)) ${InternalCheckBoxLabelHoverDecor} {
      text-decoration: underline;
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

export type OakQuizCheckBoxProps = BaseCheckBoxProps & {
  isFeedback?: boolean;
  isCorrect?: boolean;
  image?: React.JSX.Element;
};

const StyledOverlay = styled(OakBox)`
  pointer-events: none;
`;

export const OakQuizCheckBox = (props: OakQuizCheckBoxProps) => {
  const { id, value, isFeedback, isCorrect, image, disabled, ...rest } = props;

  const inputRef = useRef<HTMLInputElement>(null);

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

  const handleContainerClick = () => {
    inputRef.current?.click();
  };

  const inputCheckbox = (
    <StyledFlexBox
      $pa="inner-padding-l"
      $borderRadius={"border-radius-m2"}
      $borderColor={"border-primary"}
      $background={disabled ? "bg-neutral-stronger" : "bg-primary"}
      $flexGrow={1}
      onClick={handleContainerClick}
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
        <InternalCheckBoxWrapper
          size={"all-spacing-7"}
          iconPadding="inner-padding-ssx"
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
          internalCheckbox={
            <StyledInternalCheckBox
              id={id}
              value={value}
              disabled={disabled}
              {...rest}
              $width={"all-spacing-7"}
              $height={"all-spacing-7"}
              $ba={"border-solid-m"}
              $borderColor="border-neutral"
              $borderRadius={"border-radius-s"}
              $checkedBackground={null}
              ref={inputRef}
            />
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
      />
      <OakIcon
        iconName={isCorrect ? "tick" : "cross"}
        $colorFilter={isCorrect ? "icon-success" : "icon-error"}
        alt={isCorrect ? "Correct" : "Incorrect"}
      />
      {image ? imageContainer : value}
    </OakFlex>
  );

  return (
    <OakFlex $width={"100%"} $position={"relative"}>
      {isFeedback ? feedbackCheckbox : inputCheckbox}
    </OakFlex>
  );
};
