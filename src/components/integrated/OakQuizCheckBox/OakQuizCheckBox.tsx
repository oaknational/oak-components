import React, { useRef } from "react";
import styled, { css } from "styled-components";

import { OakBox, OakFlex, OakFlexProps, OakIcon } from "@/components/base";
import { InternalCheckBoxWrapper } from "@/components/base/InternalCheckBoxWrapper";
import { InternalCheckBoxLabelHoverDecor } from "@/components/base/InternalCheckBoxLabel";
import {
  BaseCheckBoxProps,
  InternalCheckBox,
} from "@/components/base/InternalCheckBox/InternalCheckBox";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseBorder } from "@/styles/helpers/parseBorder";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { OakCombinedColorToken } from "@/styles";

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

const StyledInternalCheckBoxLabelHoverDecor = styled(
  InternalCheckBoxLabelHoverDecor,
)`
  pointer-events: none; // To prevent the label from stealing the click event from the input
`;

type StyledFlexBoxProps = OakFlexProps & {
  overlayBorderColor?: OakCombinedColorToken;
  feedbackBgColor?: OakCombinedColorToken;
};

const StyledFlexBox = styled(OakFlex)<StyledFlexBoxProps>`
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
      box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")};
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
      outline: ${parseBorder("border-solid-xl")};
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
      outline: ${parseBorder("border-solid-xl")};
      border-radius: ${parseBorderRadius("border-radius-m2")};
      outline-color: ${(props) => css`
        ${parseColor(props.overlayBorderColor ?? "text-disabled")}
      `};
  }

  &:has(input:disabled:not(:checked)) {
     ${(props) =>
       props.feedbackBgColor
         ? css`
             background-color: ${props.feedbackBgColor};
           `
         : undefined}
  }

  &:has(input:disabled:checked) {
    ${(props) => css`
      background-color: ${parseColor(props.feedbackBgColor)};
    `};
 }
`;

export type OakQuizCheckBoxProps = BaseCheckBoxProps & {
  feedback?: "correct" | "incorrect" | null;
  image?: React.JSX.Element;
  innerRef?: React.RefObject<HTMLInputElement>;
  displayValue?: string;
};

const StyledOverlay = styled(OakBox)`
  pointer-events: none;
`;

export const OakQuizCheckBox = (props: OakQuizCheckBoxProps) => {
  const {
    id,
    value,
    feedback,
    image,
    disabled,
    innerRef,
    displayValue,
    defaultChecked,
    ...rest
  } = props;

  const isFeedback = !!feedback;

  const defaultRef = useRef<HTMLInputElement>(null);
  const inputRef = innerRef ?? defaultRef;
  const showTick =
    (feedback === "correct" && (inputRef.current?.checked || defaultChecked)) ||
    (feedback === "incorrect" && !inputRef.current?.checked && !defaultChecked);
  const showCross =
    feedback === "incorrect" && (inputRef.current?.checked || defaultChecked);

  const handleContainerClick = (
    e:
      | React.MouseEvent<HTMLDivElement>
      | React.MouseEvent<HTMLInputElement>
      | React.MouseEvent<HTMLLabelElement>,
  ) => {
    const inputId = (e.target as HTMLInputElement).id;

    if (inputId !== id) {
      inputRef.current?.click();
    }
  };

  const imageContainer = (
    <OakFlex
      $flexDirection="column"
      $minWidth={"all-spacing-20"}
      $gap={"space-between-s"}
    >
      <OakBox>{image}</OakBox>
      {displayValue}
    </OakFlex>
  );

  const backgroundColor: OakCombinedColorToken =
    disabled && !isFeedback ? "bg-neutral-stronger" : "bg-primary";

  const feedbackBgColor: OakCombinedColorToken = showTick
    ? "bg-correct"
    : "bg-incorrect";

  const feedbackBorderColor = showTick ? "border-success" : "border-error";

  const inputCheckbox = (
    <StyledFlexBox
      $pa="inner-padding-l"
      $borderRadius={"border-radius-m2"}
      $borderColor={"border-primary"}
      $background={backgroundColor}
      $flexGrow={1}
      onClick={handleContainerClick}
      overlayBorderColor={isFeedback ? feedbackBorderColor : undefined}
      feedbackBgColor={isFeedback ? feedbackBgColor : undefined}
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

      <StyledInternalCheckBoxLabelHoverDecor
        htmlFor={id}
        labelGap={"space-between-s"}
        labelAlignItems={"center"}
        $color={disabled && !isFeedback ? "text-disabled" : "text-primary"}
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
              $background={
                disabled || isFeedback ? "text-disabled" : "text-primary"
              }
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
              disabled={disabled || isFeedback}
              {...rest}
              defaultChecked={defaultChecked}
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
        {image ? imageContainer : displayValue}
      </StyledInternalCheckBoxLabelHoverDecor>
      {isFeedback && (showTick || showCross) && (
        <OakFlex
          className="feedbackIconWrapper"
          $flexGrow={1}
          $justifyContent={"flex-end"}
          $alignItems={"flex-end"}
          $height={"100%"}
        >
          {showTick && (
            <OakIcon
              iconName={"tick"}
              $colorFilter={"icon-success"}
              alt={
                feedback === "correct" ? "Correct" : "Unselected correct choice"
              }
            />
          )}
          {showCross && (
            <OakIcon
              iconName={"cross"}
              $colorFilter={"icon-error"}
              alt={"Incorrect"}
            />
          )}
        </OakFlex>
      )}
    </StyledFlexBox>
  );

  return (
    <OakFlex $width={"100%"} $position={"relative"}>
      {inputCheckbox}
    </OakFlex>
  );
};
