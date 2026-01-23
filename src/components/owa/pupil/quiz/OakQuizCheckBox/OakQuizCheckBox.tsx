import React, { useRef } from "react";
import styled, { css } from "styled-components";

import { OakBox } from "@/components/layout-and-structure/OakBox";
import {
  OakFlex,
  OakFlexProps,
} from "@/components/layout-and-structure/OakFlex";
import { OakIcon } from "@/components/images-and-icons/OakIcon";
import { InternalCheckBoxWrapper } from "@/components/internal-components/InternalCheckBoxWrapper";
import { InternalCheckBoxLabelHoverDecor } from "@/components/internal-components/InternalCheckBoxLabel";
import {
  BaseCheckBoxProps,
  InternalCheckBox,
} from "@/components/internal-components/InternalCheckBox/InternalCheckBox";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseBorder } from "@/styles/helpers/parseBorder";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { OakUiRoleToken } from "@/styles";

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

type StyledFlexBoxProps = OakFlexProps & {
  $overlayBorderColor: OakUiRoleToken;
  $feedbackBgColor?: OakUiRoleToken;
  $outlineColor: OakUiRoleToken;
};

const StyledFlexBox = styled(OakFlex)<StyledFlexBoxProps>`
  &:not(:focus-within) {
    ${(props) =>
      !!props.$outlineColor &&
      css`
        outline: ${parseBorder("border-solid-xl")}
          ${parseColor(props.$outlineColor)};
      `}
  }

  &:has(input:not(:disabled)) {
    cursor: pointer;
  }

  &:has(input:disabled) {
    pointer-events: none;
    cursor: none;
  }

  &:focus-within {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }

  @media (hover: hover) {
    &:hover:has(input:not(:disabled)) {
      background-color: ${parseColor("bg-decorative1-subdued")};
    }

    &:hover input:not(:disabled) {
      background: ${parseColor("bg-primary")};
    }

    &:hover:has(input:not(:disabled)) ${InternalCheckBoxLabelHoverDecor} {
      text-decoration: underline;
    }

    &:hover:has(
        ${InternalCheckBoxLabelHoverDecor}
          input:not(:focus-visible):not(:checked):not(:disabled)
      )::after {
      content: "";
      inset: 0;
      pointer-events: none;
      position: absolute;
      border-bottom: ${parseBorder("border-solid-xl")};
      border-radius: ${parseBorderRadius("border-radius-m2")};
    }

    &:focus-within {
      box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
        ${parseDropShadow("drop-shadow-centered-grey")};
    }

    &:has(input:checked:not(:disabled)) {
      outline: ${parseBorder("border-solid-xl")};
    }

    &:has(input:checked:disabled) {
      outline-color: ${(props) => css`
        ${parseColor(props.$overlayBorderColor)}
      `};
    }

    &:has(input:disabled:not(:checked)) {
      ${(props) =>
        props.$feedbackBgColor
          ? css`
              background-color: ${props.$feedbackBgColor};
            `
          : undefined}
    }

    &:has(input:disabled:checked) {
      ${(props) => css`
        background-color: ${parseColor(props.$feedbackBgColor)};
      `};
    }
  }
`;

export type OakQuizCheckBoxProps = Omit<BaseCheckBoxProps, "defaultChecked"> & {
  feedback?: "correct" | "incorrect" | null;
  image?: React.JSX.Element;
  innerRef?: React.RefObject<HTMLInputElement>;
  displayValue?: string | React.JSX.Element;
  /**
   * Give the field a highlight to draw attention to it
   */
  isHighlighted?: boolean;
};

/**
 * A checkbox representing the options in a multiple choice question.
 */
export const OakQuizCheckBox = (props: OakQuizCheckBoxProps) => {
  const {
    id,
    value,
    feedback,
    image,
    disabled,
    innerRef,
    displayValue,
    isHighlighted,
    ...rest
  } = props;

  const isFeedback = !!feedback;

  const defaultRef = useRef<HTMLInputElement>(null);
  const inputRef = innerRef ?? defaultRef;
  const showTick =
    (feedback === "correct" && inputRef.current?.checked) ||
    (feedback === "incorrect" && !inputRef.current?.checked);
  const showCross = feedback === "incorrect" && inputRef.current?.checked;

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
      $minWidth={"spacing-360"}
      $gap={"spacing-16"}
    >
      <OakBox>{image}</OakBox>
      {displayValue}
    </OakFlex>
  );

  const feedbackBgColor = showTick ? "bg-correct" : "bg-incorrect";
  const feedbackBorderColor = showTick ? "border-success" : "border-error";

  const inputCheckbox = (
    <StyledFlexBox
      $pa="spacing-20"
      $borderRadius={"border-radius-m2"}
      $borderColor={
        isHighlighted ? "border-decorative5-stronger" : "border-primary"
      }
      $background={
        disabled && !isFeedback ? "bg-neutral-stronger" : "bg-primary"
      }
      $flexGrow={1}
      onClick={handleContainerClick}
      $overlayBorderColor={isFeedback ? feedbackBorderColor : "text-disabled"}
      $feedbackBgColor={isFeedback ? feedbackBgColor : undefined}
      $outlineColor={
        isHighlighted ? "border-decorative5-stronger" : "transparent"
      }
    >
      <InternalCheckBoxLabelHoverDecor
        pointerEvents="none"
        htmlFor={id}
        labelGap={"spacing-16"}
        labelAlignItems={"center"}
        $color={disabled && !isFeedback ? "text-disabled" : "text-primary"}
        $font={"body-1"}
        disabled={disabled}
      >
        <InternalCheckBoxWrapper
          size={"spacing-32"}
          iconPadding="spacing-4"
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
                $borderColor={"icon-inverted"}
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
              $width={"spacing-32"}
              $height={"spacing-32"}
              $ba={"border-solid-m"}
              $borderColor="border-neutral"
              $borderRadius={"border-radius-s"}
              $background={isHighlighted ? "bg-decorative5-main" : "bg-primary"}
              $checkedBackground={null}
              ref={inputRef}
            />
          }
        />
        {image ? imageContainer : displayValue}
      </InternalCheckBoxLabelHoverDecor>
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
